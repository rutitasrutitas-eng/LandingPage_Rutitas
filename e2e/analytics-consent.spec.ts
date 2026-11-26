import { expect, test } from '@playwright/test'

test('LANDING-021: synthetic GA consent can be rejected, revoked and re-granted without reload', async ({ page }) => {
  test.skip(process.env.LANDING_E2E_GA_SYNTHETIC !== '1', 'requires the synthetic Measurement ID; never use the production ID')

  const googleRequests: string[] = []
  const measurementRequests: string[] = []
  page.on('request', request => {
    if (/googletagmanager\.com|google-analytics\.com/i.test(request.url())) {
      googleRequests.push(request.url())
      if (/google-analytics\.com\/(?:g\/)?collect/i.test(request.url())) measurementRequests.push(request.url())
    }
  })
  await page.route(/https:\/\/(www\.)?(googletagmanager\.com|google-analytics\.com)\//, route => route.abort())

  await page.goto('/')
  const consent = page.getByRole('complementary', { name: 'Analítica opcional' })
  await expect(consent).toBeVisible()
  expect(googleRequests).toHaveLength(0)
  await expect(page.locator('script[id^="rutitas-ga-"]')).toHaveCount(0)

  await consent.getByRole('button', { name: 'Rechazar' }).click()
  await expect.poll(() => page.evaluate(() => localStorage.getItem('rutitas.analytics-consent'))).toBe('denied')
  expect(googleRequests).toHaveLength(0)

  await page.getByRole('button', { name: 'Preferencias de analítica' }).click()
  await page.getByRole('button', { name: 'Aceptar analítica' }).click()
  await expect.poll(() => page.evaluate(() => localStorage.getItem('rutitas.analytics-consent'))).toBe('granted')
  await expect(page.locator('script[id="rutitas-ga-G-SYNTHETIC123"]')).toHaveCount(1)
  await expect.poll(() => googleRequests.length).toBe(1)

  await page.getByRole('button', { name: 'Preferencias de analítica' }).click()
  await page.getByRole('button', { name: 'Rechazar' }).click()
  await expect.poll(() => page.evaluate(() => localStorage.getItem('rutitas.analytics-consent'))).toBe('denied')
  const eventsBeforeDeniedInteraction = await page.evaluate(() => ((window as Window & { dataLayer?: unknown[][] }).dataLayer ?? []).filter(entry => entry[0] === 'event'))
  await page.getByRole('button', { name: /descubre rutitas/i }).click()
  const eventsAfterDeniedInteraction = await page.evaluate(() => ((window as Window & { dataLayer?: unknown[][] }).dataLayer ?? []).filter(entry => entry[0] === 'event'))
  expect(eventsAfterDeniedInteraction).toEqual(eventsBeforeDeniedInteraction)
  const requestsAtRevocation = [...measurementRequests]
  expect(googleRequests).toHaveLength(1)
  await page.keyboard.press('Escape')

  await page.getByRole('button', { name: 'Preferencias de analítica' }).click()
  await page.getByRole('button', { name: 'Aceptar analítica' }).click()
  await expect.poll(() => page.evaluate(() => localStorage.getItem('rutitas.analytics-consent'))).toBe('granted')
  await page.getByRole('button', { name: /descubre rutitas/i }).click()
  expect(measurementRequests).toEqual(requestsAtRevocation)

  const state = await page.evaluate(() => {
    const entries = (window as Window & { dataLayer?: unknown[][] }).dataLayer ?? []
    return {
      updates: entries.filter(entry => entry[0] === 'consent' && entry[1] === 'update').map(entry => (entry[2] as { analytics_storage?: string }).analytics_storage),
      pageViews: entries.filter(entry => entry[0] === 'event' && entry[1] === 'page_view').length,
      ctaClicks: entries.filter(entry => entry[0] === 'event' && entry[1] === 'primary_cta_click').length,
    }
  })
  expect(state.updates).toEqual(['granted', 'denied', 'granted'])
  expect(state.pageViews).toBe(1)
  expect(state.ctaClicks).toBe(1)
  expect(googleRequests).toHaveLength(1)
  expect(measurementRequests).toEqual(requestsAtRevocation)

  await page.reload()
  await expect(page.getByRole('button', { name: 'Preferencias de analítica' })).toBeVisible()
  await expect(page.getByRole('complementary', { name: 'Analítica opcional' })).toHaveCount(0)
  await expect.poll(() => page.evaluate(() => localStorage.getItem('rutitas.analytics-consent'))).toBe('granted')
  await expect(page.locator('script[id="rutitas-ga-G-SYNTHETIC123"]')).toHaveCount(1)
  await expect.poll(async () => page.evaluate(() => ((window as Window & { dataLayer?: unknown[][] }).dataLayer ?? []).filter(entry => entry[0] === 'event' && entry[1] === 'page_view').length)).toBe(1)
})
