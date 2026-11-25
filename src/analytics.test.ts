import { beforeEach, describe, expect, it, vi } from 'vitest'
import { saveAnalyticsConsent, trackAnalyticsEvent } from './analytics'

type TestAnalyticsWindow = Window & {
  dataLayer?: unknown[][]
  gtag?: (...args: unknown[]) => void
  __rutitasConfiguredAnalytics?: Set<string>
  __rutitasPageViews?: Set<string>
}

describe('consented Rutitas interaction events', () => {
  beforeEach(() => {
    window.localStorage.clear()
    const runtime = window as TestAnalyticsWindow
    delete runtime.dataLayer
    delete runtime.gtag
    delete runtime.__rutitasConfiguredAnalytics
    delete runtime.__rutitasPageViews
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
})
