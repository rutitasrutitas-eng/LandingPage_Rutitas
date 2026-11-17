import { expect, test } from '@playwright/test'

test('analytics controls stay inert and below the dialog until it closes', async ({ page }) => {
  test.skip(!process.env.VITE_GA_MEASUREMENT_ID, 'This integration requires a synthetic GA4 Measurement ID.')
  await page.setViewportSize({ width: 390, height: 844 })
  const analyticsRequests: string[] = []
  await page.route('https://www.googletagmanager.com/**', route => {
    analyticsRequests.push(route.request().url())
    return route.abort()
  })
  await page.goto('/')

  const consent = page.getByRole('complementary', { name: 'Analítica opcional' })
  await expect(consent).toBeVisible()
  await expect(page.locator('.analytics-consent')).toHaveCSS('z-index', '80')

  const menu = page.getByRole('button', { name: 'Abrir navegación' })
  await menu.click()
  const trigger = page.getByRole('button', { name: 'Seguridad' })
  await trigger.click()

  const dialog = page.getByRole('dialog')
  const accept = consent.getByRole('button', { name: 'Aceptar analítica' })
  const isolation = await page.evaluate(() => ({
    consentInsideInertShell: Boolean(document.querySelector('.analytics-consent')?.closest('.site-shell[inert]')),
    backdropZ: Number.parseInt(getComputedStyle(document.querySelector('.modal-backdrop')!).zIndex, 10),
    consentZ: Number.parseInt(getComputedStyle(document.querySelector('.analytics-consent')!).zIndex, 10),
    analyticsControlHitTestBlocked: (() => {
      const control = document.querySelector('.consent-accept')!
      const bounds = control.getBoundingClientRect()
      const hit = document.elementFromPoint(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2)
      return hit?.closest('.analytics-consent') === null || hit === null
    })(),
  }))
  expect(isolation.consentInsideInertShell).toBe(true)
  expect(isolation.backdropZ).toBeGreaterThan(isolation.consentZ)
  expect(isolation.analyticsControlHitTestBlocked).toBe(true)
  await expect(page.locator('.site-shell')).toHaveAttribute('inert', '')
  await expect(dialog).toContainText('Confianza desde el inicio.')

  const close = dialog.getByRole('button', { name: 'Cerrar información' })
  const done = dialog.getByRole('button', { name: /entendido/i })
  await expect(close).toBeFocused()
  await page.keyboard.press('Tab')
  await expect(done).toBeFocused()
  await page.keyboard.press('Tab')
  await expect(close).toBeFocused()
  await page.keyboard.press('Shift+Tab')
  await expect(done).toBeFocused()

  const analyticsFocusSucceeded = await accept.evaluate(element => {
    ;(element as HTMLButtonElement).focus()
    return document.activeElement === element
  })
  expect(analyticsFocusSucceeded).toBe(false)
  await expect(done).toBeFocused()
  expect(await page.evaluate(() => document.activeElement?.closest('[role="dialog"]') !== null)).toBe(true)

  await page.keyboard.press('Escape')
  await expect(dialog).toHaveCount(0)
  await expect(page.locator('.site-shell')).not.toHaveAttribute('inert', '')
  await expect(menu).toBeFocused()
  await expect(consent).toBeVisible()
  await consent.getByRole('button', { name: 'Rechazar' }).click()
  const manage = page.getByRole('button', { name: 'Preferencias de analítica' })
  await expect(manage).toBeVisible()
  await manage.click()
  await expect(page.getByRole('complementary', { name: 'Analítica opcional' })).toBeVisible()
  expect(analyticsRequests).toEqual([])
  expect(await page.locator('script[id^="rutitas-ga-"]').count()).toBe(0)
})

test('visible focus ring contrasts with light and dark surfaces', async ({ page }) => {
  await page.goto('/')
  await page.addStyleTag({ content: '*, *::before, *::after { transition: none !important; }' })
  const getKeyboardFocusStyle = async (selector: string) => {
    const target = page.locator(selector)
    await target.focus()
    await page.keyboard.press('Tab')
    await page.keyboard.press('Shift+Tab')
    return target.evaluate(element => {
      const style = getComputedStyle(element)
      return { matchesFocusVisible: element.matches(':focus-visible'), outlineColor: style.outlineColor, outlineWidth: style.outlineWidth, boxShadow: style.boxShadow }
    })
  }
  const lightSurfaceFocus = await getKeyboardFocusStyle('.brand')
  const darkSurfaceFocus = await getKeyboardFocusStyle('.secondary-cta')
  expect(lightSurfaceFocus.matchesFocusVisible).toBe(true)
  expect(lightSurfaceFocus.outlineColor).toBe('rgb(8, 38, 85)')
  expect(lightSurfaceFocus.outlineWidth).toBe('3px')
  expect(darkSurfaceFocus.matchesFocusVisible).toBe(true)
  expect(darkSurfaceFocus.outlineColor).toBe('rgb(8, 38, 85)')
  expect(darkSurfaceFocus.outlineWidth).toBe('3px')
  expect(darkSurfaceFocus.boxShadow).toContain('255, 202, 40')

  const contrast = await page.evaluate(() => {
    const luminance = (color: [number, number, number]) => {
      const channels = color.map(value => {
        const normalized = value / 255
        return normalized <= 0.04045 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4
      })
      return .2126 * channels[0] + .7152 * channels[1] + .0722 * channels[2]
    }
    const ratio = (a: [number, number, number], b: [number, number, number]) => {
      const values = [luminance(a), luminance(b)].sort((left, right) => right - left)
      return (values[0] + .05) / (values[1] + .05)
    }
    return {
      navyOnWhite: ratio([8, 38, 85], [255, 255, 255]),
      yellowOnNavy: ratio([255, 202, 40], [6, 26, 65]),
    }
  })
  expect(contrast.navyOnWhite).toBeGreaterThanOrEqual(3)
  expect(contrast.yellowOnNavy).toBeGreaterThanOrEqual(3)
})

test('home content remains reachable when text is enlarged', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 })
  await page.goto('/')
  await page.evaluate(() => {
    const elements = [...document.querySelectorAll<HTMLElement>('body *')]
      .map(element => ({ element, size: Number.parseFloat(getComputedStyle(element).fontSize) }))
    for (const { element, size } of elements) {
      element.style.setProperty('font-size', `${size * 2}px`, 'important')
    }
  })

  const metrics = await page.evaluate(() => ({
    height: document.documentElement.scrollHeight,
    viewport: window.innerHeight,
    width: document.documentElement.scrollWidth,
    viewportWidth: window.innerWidth,
  }))
  expect(metrics.height).toBeGreaterThan(metrics.viewport)
  expect(metrics.width).toBeLessThanOrEqual(metrics.viewportWidth + 2)

  const trigger = page.getByRole('button', { name: /descubre rutitas/i })
  await trigger.scrollIntoViewIfNeeded()
  await expect(trigger).toBeVisible()
  await trigger.focus()
  await page.keyboard.press('Enter')
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()
  await dialog.getByRole('button', { name: /entendido/i }).scrollIntoViewIfNeeded()
  await expect(dialog.getByRole('button', { name: /entendido/i })).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(trigger).toBeFocused()

  const privacy = page.getByRole('link', { name: 'Privacidad' })
  await privacy.scrollIntoViewIfNeeded()
  await expect(privacy).toBeVisible()
})
