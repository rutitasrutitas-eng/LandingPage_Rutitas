import { beforeEach, describe, expect, it, vi } from 'vitest'
import { readAnalyticsConsent, revokeAnalyticsConsent, saveAnalyticsConsent, trackAnalyticsEvent } from './analytics'

type TestAnalyticsWindow = Window & {
  dataLayer?: unknown[][]
  gtag?: (...args: unknown[]) => void
  __rutitasConfiguredAnalytics?: Set<string>
  __rutitasPageViews?: Set<string>
  __rutitasConsentGranted?: boolean
}

describe('consented Rutitas interaction events', () => {
  beforeEach(() => {
    window.localStorage.clear()
    const runtime = window as TestAnalyticsWindow
    delete runtime.dataLayer
    delete runtime.gtag
    delete runtime.__rutitasConfiguredAnalytics
    delete runtime.__rutitasPageViews
    delete runtime.__rutitasConsentGranted
    document.querySelectorAll('script[id^="rutitas-ga-"]').forEach(script => script.remove())
    vi.stubEnv('VITE_GA_MEASUREMENT_ID', '')
  })

  it('sends only the fixed event and parameters after opt-in', () => {
    const runtime = window as TestAnalyticsWindow
    const event = { name: 'social_click', params: { network: 'youtube' } } as const

    expect(trackAnalyticsEvent('G-SYNTHETIC123', event)).toBe(false)
    expect(runtime.dataLayer).toBeUndefined()

    saveAnalyticsConsent('granted')
    expect(trackAnalyticsEvent('G-SYNTHETIC123', event)).toBe(true)
    expect(runtime.dataLayer?.filter(entry => entry[0] === 'event' && entry[1] === 'social_click')).toEqual([
      ['event', 'social_click', { network: 'youtube' }],
    ])
    expect(runtime.dataLayer?.some(entry => JSON.stringify(entry).includes('email'))).toBe(false)
  })

  it('re-applies granted consent after revocation without duplicating page_view', () => {
    const runtime = window as TestAnalyticsWindow
    const event = { name: 'social_click', params: { network: 'youtube' } } as const

    saveAnalyticsConsent('granted')
    expect(trackAnalyticsEvent('G-SYNTHETIC123', event)).toBe(true)
    revokeAnalyticsConsent()
    expect(readAnalyticsConsent()).toBe('denied')
    expect(trackAnalyticsEvent('G-SYNTHETIC123', event)).toBe(false)

    saveAnalyticsConsent('granted')
    expect(trackAnalyticsEvent('G-SYNTHETIC123', event)).toBe(true)

    const entries = runtime.dataLayer ?? []
    const updates = entries.filter(entry => entry[0] === 'consent' && entry[1] === 'update')
    const pageViews = entries.filter(entry => entry[0] === 'event' && entry[1] === 'page_view')
    const interactionEvents = entries.filter(entry => entry[0] === 'event' && entry[1] === 'social_click')

    expect(updates.map(entry => (entry[2] as { analytics_storage: string }).analytics_storage)).toEqual(['granted', 'denied', 'granted'])
    expect(pageViews).toHaveLength(1)
    expect(interactionEvents).toHaveLength(2)
    expect(readAnalyticsConsent()).toBe('granted')
  })
})
