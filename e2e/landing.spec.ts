import { expect, test, type Page } from '@playwright/test'
import { writeFile } from 'node:fs/promises'

const screens = [
  { width: 1440, height: 900 },
  { width: 1366, height: 768 },
  { width: 768, height: 1024 },
  { width: 390, height: 844 },
  { width: 375, height: 667 },
  { width: 320, height: 568 },
  { width: 844, height: 390 },
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
    }
  })
}

test('LANDING-003: home has zero scroll and all approved content fits every viewport', async ({ page }, testInfo) => {
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
    const toggle = page.getByRole('button', { name: 'Abrir navegación' })
    await toggle.click()
    const nav = page.getByRole('navigation', { name: 'Navegación principal' })
    await expect(nav.getByRole('button', { name: 'Seguridad' })).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollHeight)).toBe(heightBefore)
    await nav.getByRole('button', { name: 'Seguridad' }).click()
    await expect(page.getByRole('dialog')).toContainText('Confianza desde el inicio.')
    await page.keyboard.press('Escape')
    await expect(page.getByRole('dialog')).toHaveCount(0)
    await expect(toggle).toBeFocused()
  }
})

test('legal links navigate and direct reload works while legal text retains natural scroll', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 })
  await page.goto('/')
  await page.getByRole('link', { name: 'Privacidad' }).click()
  await expect(page).toHaveURL(/\/privacidad$/)
  await expect(page.getByRole('heading', { name: 'Aviso de privacidad' })).toBeVisible()
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollHeight)).toBeGreaterThan(568)
  await page.reload()
  await expect(page.getByRole('heading', { name: 'Aviso de privacidad' })).toBeVisible()

  await page.goto('/eliminar-cuenta')
  await expect(page.getByRole('heading', { name: 'Eliminación de cuenta' })).toBeVisible()
  await page.reload()
  await expect(page.getByRole('heading', { name: 'Eliminación de cuenta' })).toBeVisible()
})

test('both hero calls to action preserve their informational dialogs', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const discover = page.getByRole('button', { name: /descubre rutitas/i })
  await discover.click()
  await expect(page.getByRole('dialog')).toContainText('El camino se comparte.')
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(discover).toBeFocused()

  await page.getByRole('button', { name: /conoce el proyecto/i }).click()
  await expect(page.getByRole('dialog')).toContainText('Más cerca, en comunidad.')
})
