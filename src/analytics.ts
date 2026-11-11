const CONSENT_KEY = 'rutitas.analytics-consent'

type Consent = 'granted' | 'denied' | null
type Gtag = (...args: unknown[]) => void

type AnalyticsWindow = Window & {
  dataLayer?: unknown[]
  gtag?: Gtag
  __rutitasConfiguredAnalytics?: Set<string>
  __rutitasPageViews?: Set<string>
}

export function isValidMeasurementId(value: unknown): value is string {
  return typeof value === 'string' && /^G-[A-Z0-9]{6,}$/i.test(value.trim())
}

export function readAnalyticsConsent(): Consent {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY)
    return value === 'granted' || value === 'denied' ? value : null
  } catch {
    return null
  }
}

export function saveAnalyticsConsent(consent: Exclude<Consent, null>): boolean {
  try {
    window.localStorage.setItem(CONSENT_KEY, consent)
    return true
  } catch {
    return false
  }
}

export function revokeAnalyticsConsent(): void {
  const runtime = window as AnalyticsWindow
  runtime.gtag?.('consent', 'update', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
}

/** Loads GA4 only after opt-in, and sends one page_view for each full-page route. */
export function enableAnalytics(measurementId: unknown): boolean {
  if (!isValidMeasurementId(measurementId) || readAnalyticsConsent() !== 'granted') return false

  const runtime = window as AnalyticsWindow
  runtime.dataLayer ??= []
  runtime.gtag ??= (...args: unknown[]) => runtime.dataLayer?.push(args)
  runtime.__rutitasConfiguredAnalytics ??= new Set()
  runtime.__rutitasPageViews ??= new Set()

  if (!runtime.__rutitasConfiguredAnalytics.has(measurementId)) {
    runtime.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    })
    runtime.gtag('consent', 'update', { analytics_storage: 'granted' })
    runtime.gtag('js', new Date())
    runtime.gtag('config', measurementId, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    })
    runtime.__rutitasConfiguredAnalytics.add(measurementId)
  }

  const scriptId = `rutitas-ga-${measurementId}`
  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script')
    script.id = scriptId
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
    document.head.append(script)
  }

  const pagePath = window.location.pathname
  if (!runtime.__rutitasPageViews.has(pagePath)) {
    runtime.__rutitasPageViews.add(pagePath)
    runtime.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: `${window.location.origin}${pagePath}`,
    })
  }

  return true
}
