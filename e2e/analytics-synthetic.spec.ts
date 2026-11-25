import { expect, test } from '@playwright/test'

test('LANDING-014: opt-in uses a synthetic GA4 ID, sends no external request and revokes consent', async ({ page }) => {
  test.skip(process.env.LANDING_E2E_GA_SYNTHETIC !== '1', 'Run separately with the synthetic test environment.')
  const interceptedRequests: string[] = []
  await page.route('https://www.googletagmanager.com/**', async route => {
    interceptedRequests.push(route.request().url())
    await route.fulfill({ status: 200, contentType: 'application/javascript', body: '/* synthetic request intercepted locally */' })
  })

  await page.goto('/')
  const consent = page.getByRole('complementary', { name: 'Analítica opcional' })
  await expect(consent).toBeVisible()
  await consent.getByRole('button', { name: 'Aceptar analítica' }).click()
  await expect(page.locator('script#rutitas-ga-G-SYNTHETIC123')).toHaveAttribute('src', /G-SYNTHETIC123/)

  const analyticsState = await page.evaluate(() => {
    const runtime = window as Window & { dataLayer?: unknown[][] }
    return {
      entries: runtime.dataLayer ?? [],
      consentValue: localStorage.getItem('rutitas.analytics-consent'),
      scripts: [...document.scripts].map(script => script.src).filter(Boolean),
    }
  })
  const pageViews = analyticsState.entries.filter(entry => entry[0] === 'event' && entry[1] === 'page_view')
  const gaConfig = analyticsState.entries.find(entry => entry[0] === 'config')
  expect(analyticsState.consentValue).toBe('granted')
  expect(pageViews).toHaveLength(1)
  expect(JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() ?? '')).toEqual({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rutitas',
    url: 'https://landing-page-rutitas.vercel.app/',
    inLanguage: 'es-MX',
    description: 'Proyecto universitario de movilidad compartida en desarrollo, pensado inicialmente para la comunidad UTTT.',
  })
  expect(gaConfig).toEqual(['config', 'G-SYNTHETIC123', expect.objectContaining({ send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false })])
  expect(analyticsState.scripts.some(source => source.includes('GTM-'))).toBe(false)
  expect(interceptedRequests).toEqual(['https://www.googletagmanager.com/gtag/js?id=G-SYNTHETIC123'])

  await page.getByRole('button', { name: 'Preferencias de analítica' }).click()
  await page.getByRole('complementary', { name: 'Analítica opcional' }).getByRole('button', { name: 'Rechazar' }).click()
  await expect(page.getByRole('button', { name: 'Preferencias de analítica' })).toBeVisible()
  const revoked = await page.evaluate(() => {
    const runtime = window as Window & { dataLayer?: unknown[][] }
    return {
      consent: localStorage.getItem('rutitas.analytics-consent'),
      lastEntry: runtime.dataLayer?.at(-1),
      pageViews: runtime.dataLayer?.filter(entry => entry[0] === 'event' && entry[1] === 'page_view').length,
    }
  })
  expect(revoked.consent).toBe('denied')
  expect(revoked.lastEntry).toEqual(['consent', 'update', expect.objectContaining({ analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' })])
  expect(revoked.pageViews).toBe(1)
})
