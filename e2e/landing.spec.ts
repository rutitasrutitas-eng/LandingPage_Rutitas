import { expect, test, type Page } from '@playwright/test'
import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { writeFile } from 'node:fs/promises'

test.beforeEach(async ({ page }) => {
  if (process.env.VITE_GA_MEASUREMENT_ID) {
    // General landing flows start with an explicit opt-out. A dedicated test
    // retains a clean context for the undecided/consent prompt path.
    await page.addInitScript(() => localStorage.setItem('rutitas.analytics-consent', 'denied'))
  }
})

const screens = [
  { width: 1440, height: 900 },
  { width: 1366, height: 768 },
  { width: 768, height: 1024 },
  { width: 390, height: 844 },
  { width: 375, height: 667 },
  { width: 320, height: 568 },
  { width: 844, height: 390 },
  { width: 720, height: 450 }, // equivalent CSS viewport when a 1440×900 display is zoomed to 200%
]

async function getHomeMetrics(page: Page) {
  return page.evaluate(() => {
    const rect = (selector: string) => {
      const element = document.querySelector(selector)
      if (!element) throw new Error(`Missing required home element: ${selector}`)
      const { top, right, bottom, left, width, height } = element.getBoundingClientRect()
      return { top, right, bottom, left, width, height }
    }

    return {
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      documentWidth: document.documentElement.scrollWidth,
      documentHeight: document.documentElement.scrollHeight,
      bodyWidth: document.body.scrollWidth,
      bodyHeight: document.body.scrollHeight,
      scrollY: window.scrollY,
      header: rect('.topbar'),
      intro: rect('.hero-intro'),
      title: rect('.hero-copy h1'),
      subtitle: rect('.hero-subtitle'),
      primary: rect('.primary-cta'),
      secondary: rect('.secondary-cta'),
      trust: rect('.hero-trust'),
      footer: rect('.site-footer'),
      textSizes: Object.fromEntries(['.top-status', '.hero-intro', '.hero-subtitle', '.primary-cta', '.secondary-cta', '.hero-trust', '.site-footer', '.footer-tagline', '.footer-links a'].map(selector => [selector, Number.parseFloat(getComputedStyle(document.querySelector(selector)!).fontSize)])),
    }
  })
}

async function waitForDecodedHeroImage(page: Page) {
  const image = page.locator('.hero-image img')
  await expect(image).toBeVisible()
  await expect.poll(() => image.evaluate((element) => {
    const heroImage = element as HTMLImageElement
    return heroImage.complete && heroImage.naturalWidth > 0
  }), { message: 'hero photo should finish loading with intrinsic dimensions' }).toBe(true)
  await image.evaluate(async (element) => {
    await (element as HTMLImageElement).decode()
  })

  const state = await image.evaluate((element) => {
    const heroImage = element as HTMLImageElement
    const rect = heroImage.getBoundingClientRect()
    const style = getComputedStyle(heroImage)
    return {
      source: heroImage.currentSrc,
      naturalWidth: heroImage.naturalWidth,
      complete: heroImage.complete,
      width: rect.width,
      height: rect.height,
      display: style.display,
      visibility: style.visibility,
      opacity: Number.parseFloat(style.opacity),
    }
  })
  expect(state.complete).toBe(true)
  expect(state.naturalWidth).toBeGreaterThan(0)
  expect(state.source).toMatch(/\/assets\/rutitas-auto-hero(?:-mobile)?\.(?:webp|jpg)/)
  expect(state.width).toBeGreaterThan(0)
  expect(state.height).toBeGreaterThan(0)
  expect(state.display).not.toBe('none')
  expect(state.visibility).toBe('visible')
  expect(state.opacity).toBeGreaterThan(0)
}

test('LANDING-003/004: home keeps approved content visible across acceptance and zoom-sized viewports', async ({ page }, testInfo) => {
  const measurements: Array<Record<string, unknown>> = []
  for (const screen of screens) {
    await page.setViewportSize(screen)
    await page.goto('/')
    await page.evaluate(() => document.fonts.ready)

    await expect(page.getByRole('heading', { name: /la uni se vive en el camino/i })).toBeVisible()
    await expect(page.getByText('Compartir el trayecto también es parte de la experiencia.')).toBeVisible()
    await expect(page.locator('.demo-section, .phone, .qr-card')).toHaveCount(0)
    await expect(page.getByRole('heading', { name: 'Una vista de demostración' })).toHaveCount(0)
    await expect(page.getByRole('button', { name: /descubre rutitas/i })).toBeVisible()
    await expect(page.getByRole('button', { name: /conoce el proyecto/i })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Privacidad' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Eliminar cuenta' })).toBeVisible()
    await expect(page.getByText('Próximamente')).toBeVisible()

    const metrics = await getHomeMetrics(page)
    const id = `${screen.width}x${screen.height}`
    measurements.push({ requestedViewport: id, ...metrics })
    expect(metrics.documentHeight, `document vertical scroll at ${id}`).toBeLessThanOrEqual(metrics.viewportHeight + 2)
    expect(metrics.bodyHeight, `body vertical scroll at ${id}`).toBeLessThanOrEqual(metrics.viewportHeight + 2)
    expect(metrics.documentWidth, `document horizontal scroll at ${id}`).toBeLessThanOrEqual(metrics.viewportWidth + 2)
    expect(metrics.bodyWidth, `body horizontal scroll at ${id}`).toBeLessThanOrEqual(metrics.viewportWidth + 2)
    for (const [selector, fontSize] of Object.entries(metrics.textSizes)) {
      expect(fontSize, `${selector} text is too small at ${id}`).toBeGreaterThanOrEqual(12)
    }

    for (const field of ['header', 'intro', 'title', 'subtitle', 'primary', 'secondary', 'trust', 'footer'] as const) {
      const box = metrics[field]
      expect(box.top, `${field} clipped above viewport at ${id}`).toBeGreaterThanOrEqual(-2)
      expect(box.bottom, `${field} clipped below viewport at ${id}`).toBeLessThanOrEqual(metrics.viewportHeight + 2)
      expect(box.left, `${field} clipped left of viewport at ${id}`).toBeGreaterThanOrEqual(-2)
      expect(box.right, `${field} clipped right of viewport at ${id}`).toBeLessThanOrEqual(metrics.viewportWidth + 2)
      expect(box.height, `${field} has no visible height at ${id}`).toBeGreaterThan(0)
    }

    if (testInfo.project.name === 'chromium' && screen.width === 1440) {
      await page.screenshot({ path: testInfo.outputPath('landing-no-scroll-desktop-1440x900.png') })
    }
    if (testInfo.project.name === 'chromium' && screen.width === 390) {
      await page.screenshot({ path: testInfo.outputPath('landing-no-scroll-mobile-390x844.png') })
    }

    await page.mouse.wheel(0, 900)
    await expect.poll(() => page.evaluate(() => window.scrollY), { message: `mouse wheel must not scroll home at ${id}` }).toBe(0)
    await page.evaluate(() => {
      window.scrollTo(0, 900)
      document.documentElement.scrollTop = 900
      document.body.scrollTop = 900
    })
    await expect.poll(() => page.evaluate(() => window.scrollY), { message: `programmatic scroll must not move home at ${id}` }).toBe(0)

    if (testInfo.project.name === 'mobile-chromium') {
      const session = await page.context().newCDPSession(page)
      await session.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: screen.width / 2, y: screen.height * .75 }] })
      await session.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: screen.width / 2, y: screen.height * .2 }] })
      await session.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] })
      await expect.poll(() => page.evaluate(() => window.scrollY), { message: `touch swipe must not scroll home at ${id}` }).toBe(0)
      await session.detach()
    }
  }
  await testInfo.attach('landing-no-scroll-metrics.json', {
    body: JSON.stringify(measurements, null, 2),
    contentType: 'application/json',
  })
  await writeFile(testInfo.outputPath('landing-no-scroll-metrics.json'), JSON.stringify(measurements, null, 2))
})

test('mobile navigation overlays the page without adding scroll and still opens its modal', async ({ page }) => {
  for (const viewport of [{ width: 768, height: 1024 }, { width: 390, height: 844 }, { width: 844, height: 390 }]) {
    await page.setViewportSize(viewport)
    await page.goto('/')
    const heightBefore = await page.evaluate(() => document.documentElement.scrollHeight)
    const toggle = page.locator('.mobile-menu-toggle')
    await expect(toggle).toHaveAccessibleName('Abrir navegación')
    await toggle.click()
    const nav = page.getByRole('navigation', { name: 'Navegación principal' })
    await expect(nav.getByRole('button', { name: 'Seguridad' })).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollHeight)).toBe(heightBefore)
    await nav.getByRole('button', { name: 'Seguridad' }).click()
    await expect(page.getByRole('dialog')).toContainText('Confianza desde el inicio.')
    await expect(page.locator('.site-shell')).toHaveAttribute('inert', '')
    const close = page.getByRole('button', { name: 'Cerrar información' })
    await page.locator('.brand').focus()
    await expect(close).toBeFocused()
    await page.keyboard.press('Escape')
    await expect(page.getByRole('dialog')).toHaveCount(0)
    await expect(page.locator('.site-shell')).not.toHaveAttribute('inert', '')
    await expect(toggle).toBeFocused()

    await toggle.click()
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await expect(toggle).toHaveAccessibleName('Cerrar navegación')
    await page.keyboard.press('Escape')
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await expect(toggle).toHaveAccessibleName('Abrir navegación')
    await expect(toggle).toBeFocused()
  }
})

test('legal links navigate and direct reload works while legal text retains natural scroll', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 })
  await page.goto('/')
  await page.getByRole('link', { name: 'Privacidad' }).click()
  await expect(page).toHaveURL(/\/privacidad$/)
  await expect(page.locator('h1')).toHaveText(/Tu camino\.Tu información\./)
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollHeight)).toBeGreaterThan(568)
  await page.reload()
  await expect(page.locator('h1')).toHaveText(/Tu camino\.Tu información\./)

  await page.setViewportSize({ width: 320, height: 568 })
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)
  expect(overflow).toBe(false)
  await page.getByRole('link', { name: /Contacto de privacidad/i }).first().click()
  await expect(page).toHaveURL(/\/privacidad#contacto$/)
  await expect(page.getByRole('heading', { name: 'Contacto de privacidad' })).toBeInViewport()
  await page.goto('/privacidad')
  await page.keyboard.press('Tab')
  const skipLink = page.getByRole('link', { name: 'Saltar al aviso' })
  await expect(skipLink).toBeFocused()
  const focusStyle = await skipLink.evaluate(element => {
    const style = getComputedStyle(element)
    return { outline: style.outlineStyle, outlineColor: style.outlineColor, shadow: style.boxShadow }
  })
  expect(focusStyle.outline).toBe('solid')
  expect(focusStyle.outlineColor).toBe('rgb(11, 36, 80)')
  expect(focusStyle.shadow).toContain('rgb(255, 202, 40)')
  await page.keyboard.press('Enter')
  await expect(page.locator('#aviso-contenido')).toBeFocused()

  await page.goto('/eliminar-cuenta')
  await expect(page.getByRole('heading', { name: 'Eliminación de cuenta' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Periodo de recuperación de 7 días' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Cómo podrá cancelarse' })).toBeVisible()
  await page.reload()
  await expect(page.getByRole('heading', { name: 'Eliminación de cuenta' })).toBeVisible()
  await expect(page.locator('section[aria-labelledby="deletion-recovery"]')).toContainText('El plazo empezará únicamente cuando el Backend confirme')
})

test('privacy page remains readable across the accepted viewport sizes', async ({ page }) => {
  for (const viewport of [
    { width: 1440, height: 900 },
    { width: 1366, height: 768 },
    { width: 768, height: 1024 },
    { width: 390, height: 844 },
    { width: 375, height: 667 },
    { width: 320, height: 568 },
    { width: 844, height: 390 },
  ]) {
    await page.setViewportSize(viewport)
    await page.goto('/privacidad')
    await expect(page.locator('h1')).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
    const toc = page.getByRole('navigation', { name: 'Secciones del aviso de privacidad' })
    await expect(toc.getByRole('link')).toHaveCount(11)
    await toc.getByRole('link', { name: /Contacto de privacidad/ }).click()
    await expect(page).toHaveURL(/\/privacidad#contacto$/)
    await expect(page.locator('#contacto')).toBeInViewport()
  }
})

test('privacy and account deletion distinguish local DEMO code from remote service', async ({ page }) => {
  await page.goto('/privacidad')
  await expect(page.locator('#datos')).toContainText('DEMO_MODE=true')
  await expect(page.locator('#datos')).toContainText('no acredita transmisión a un servidor')
  await expect(page.locator('#finalidades')).toContainText('No se confirmó despliegue ni uso por personas usuarias')
  await page.goto('/eliminar-cuenta')
  const deletionDetails = page.locator('section[aria-labelledby="deletion-request"]')
  await expect(deletionDetails).toContainText('baja disponible en Android DEMO solo borra datos locales')
  await expect(deletionDetails).toContainText('Esta página prepara una guía pública del estado y del procedimiento propuesto')
  await expect(deletionDetails).toContainText('Procedimiento web propuesto · todavía no habilitado')
  await expect(deletionDetails.getByRole('listitem')).toHaveCount(3)
  await expect(deletionDetails).toContainText('El correo por sí solo no acredita identidad')
  await expect(page.locator('section[aria-labelledby="deletion-recovery"]')).toContainText('7 días')
  await expect(page.locator('section[aria-labelledby="deletion-recovery"]')).toContainText('Backend confirme')
  await expect(page.locator('section[aria-labelledby="deletion-cancel"]')).toContainText('no hay una opción operativa')
  await expect(page.locator('section[aria-labelledby="deletion-exceptions"]')).toContainText('excepción legal aplicable y documentada')
  await expect(page.locator('section[aria-labelledby="deletion-exceptions"]')).toContainText('hasta 2 meses es distinta de los siete días')
  await expect(page.getByRole('form')).toHaveCount(0)
  await expect(page.getByRole('textbox')).toHaveCount(0)
})

test('both hero calls to action preserve their informational dialogs', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const discover = page.getByRole('button', { name: /descubre rutitas/i })
  await discover.click()
  await expect(page.getByRole('dialog')).toContainText('El camino se comparte.')
  await expect(page.locator('.site-shell')).toHaveAttribute('inert', '')
  const close = page.getByRole('button', { name: 'Cerrar información' })
  await page.locator('.brand').focus()
  await expect(close).toBeFocused()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(discover).toBeFocused()

  await page.getByRole('button', { name: /conoce el proyecto/i }).click()
  await expect(page.getByRole('dialog')).toContainText('Más cerca, en comunidad.')
})

test('LANDING-005: project information and FAQ stay accurate and keyboard accessible', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const trigger = page.getByRole('button', { name: /conoce el proyecto/i })
  await trigger.click()
  const dialog = page.getByRole('dialog')
  await expect(dialog).toContainText('piloto está previsto')
  await expect(dialog).toContainText('reservas ni viajes reales')

  const questions = [
    '¿Qué es Rutitas?', '¿Para quién está pensado?', '¿La aplicación ya está disponible?', '¿Cómo funcionará?',
    '¿Puedo consultar rutas?', '¿Puedo reservar un asiento?', '¿Cómo se protegerán mis datos?',
    '¿Dónde puedo consultar el aviso de privacidad?', '¿Cómo podré eliminar mi cuenta?', '¿Dónde podré descargar Rutitas?',
  ]
  for (const question of questions) await expect(dialog.getByText(question, { exact: true })).toBeVisible()

  const close = dialog.getByRole('button', { name: 'Cerrar información' })
  const firstFaq = dialog.locator('.faq-item summary').first()
  const done = dialog.getByRole('button', { name: /entendido/i })
  await expect(close).toBeFocused()
  await page.keyboard.press('Tab')
  await expect(firstFaq).toBeFocused()
  await firstFaq.press('Enter')
  await expect(dialog.getByText(/proyecto universitario de movilidad compartida/i)).toBeVisible()
  await done.focus()
  await page.keyboard.press('Tab')
  await expect(close).toBeFocused()
  await page.keyboard.press('Shift+Tab')
  await expect(done).toBeFocused()
  await page.keyboard.press('Escape')
  await expect(dialog).toHaveCount(0)
  await expect(trigger).toBeFocused()
})

test('metadata describes the project without promising an unavailable download', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /en desarrollo/)
  await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /en desarrollo/)
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute('href', '/favicon.svg')
  const favicon = await page.request.get('/favicon.svg')
  expect(favicon.ok()).toBe(true)
  const description = await page.locator('meta[name="description"]').getAttribute('content')
  expect(description).not.toMatch(/QR|descarga|accede a la app/i)
})

test('LANDING-014: social links and route metadata are accessible and drafts stay out of the index', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const socialNav = page.getByRole('navigation', { name: 'Síguenos en nuestras redes' })
  const socialLinks = socialNav.getByRole('link')
  await expect(socialLinks).toHaveCount(5)
  expect(await socialLinks.evaluateAll(links => links.map(link => (link as HTMLAnchorElement).href))).toEqual([
    'https://www.facebook.com/profile.php?id=61596370576231',
    'https://www.instagram.com/rutitasuniversitarias/',
    'https://www.youtube.com/channel/UCNam3EUfsyTzmWEb5AViW2A',
    'https://x.com/UniRutitas',
    'https://www.tiktok.com/@rutitas4?lang=es',
  ])
  await expect(socialNav.locator('img')).toHaveCount(5)
  for (const icon of await socialNav.locator('img').all()) {
    const source = await icon.getAttribute('src')
    const response = await page.request.get(source!)
    expect(response.ok()).toBe(true)
    expect(await response.text()).toMatch(/(?:fill|stroke)="#ffffff"/)
  }
  for (const link of await socialLinks.all()) {
    await expect(link).toHaveAttribute('href', /^https:\/\//)
    await expect(link).toHaveAttribute('target', '_blank')
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    await link.focus()
    await expect(link).toBeFocused()
  }
  await expect(socialNav.getByRole('link', { name: 'YouTube' })).toHaveAttribute('href', 'https://www.youtube.com/channel/UCNam3EUfsyTzmWEb5AViW2A')
  await expect(socialNav.getByLabel('YouTube, próximamente')).toHaveCount(0)

  for (const [path, title] of [['/privacidad', 'Aviso de privacidad — Rutitas'], ['/eliminar-cuenta', 'Eliminación de cuenta — Rutitas']] as const) {
    await page.goto(path)
    await expect(page).toHaveTitle(title)
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://landing-page-rutitas.vercel.app${path}`)
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,follow')
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', `https://landing-page-rutitas.vercel.app${path}`)
    await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute('content', title)
  }
})

test('LANDING-014: local search files are present and sitemap lists only the public home page', async ({ request }) => {
  const robots = await request.get('/robots.txt')
  expect(robots.ok()).toBe(true)
  expect(await robots.text()).toContain('Sitemap: https://landing-page-rutitas.vercel.app/sitemap.xml')

  const sitemap = await request.get('/sitemap.xml')
  expect(sitemap.ok()).toBe(true)
  const sitemapText = await sitemap.text()
  expect(sitemapText).toContain('<loc>https://landing-page-rutitas.vercel.app/</loc>')
  expect(sitemapText).not.toContain('/privacidad')
  expect(sitemapText).not.toContain('/eliminar-cuenta')

  const verification = await request.get('/googlee72a4fcd7bd338a1.html')
  expect(verification.ok()).toBe(true)
  expect(await verification.text()).toBe('google-site-verification: googlee72a4fcd7bd338a1.html')
})

test('LANDING-007: hero photo is decoded on direct load and after reload', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium', 'desktop capture and reload regression')
  await page.setViewportSize({ width: 1440, height: 900 })

  const response = await page.goto('/')
  expect(response?.ok()).toBe(true)
  await waitForDecodedHeroImage(page)

  await page.reload()
  await waitForDecodedHeroImage(page)
  await page.screenshot({ path: testInfo.outputPath('landing-home-desktop-decoded.png') })
})

test('captures desktop and mobile views of home, FAQ and the privacy draft', async ({ page }, testInfo) => {
  const mobile = testInfo.project.name === 'mobile-chromium'
  const evidenceDirectory = resolve('evidence/landing-014')
  await mkdir(evidenceDirectory, { recursive: true })
  await page.setViewportSize(mobile ? { width: 390, height: 844 } : { width: 1440, height: 900 })
  await page.goto('/')
  await waitForDecodedHeroImage(page)
  await page.screenshot({ path: resolve(evidenceDirectory, mobile ? 'landing-home-mobile.png' : 'landing-home-desktop.png') })

  await page.getByRole('button', { name: /conoce el proyecto/i }).click()
  const dialog = page.getByRole('dialog')
  await expect(dialog.getByRole('heading', { name: 'Preguntas frecuentes' })).toBeVisible()
  await dialog.locator('.faq-section').scrollIntoViewIfNeeded()
  await page.screenshot({ path: resolve(evidenceDirectory, mobile ? 'landing-faq-mobile.png' : 'landing-faq-desktop.png') })

  await page.goto('/privacidad')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await page.screenshot({ path: resolve(evidenceDirectory, mobile ? 'landing-privacy-mobile.png' : 'landing-privacy-desktop.png'), fullPage: true })
})
