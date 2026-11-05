import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
  window.localStorage.clear()
  window.history.replaceState({}, '', '/')
  document.head.querySelectorAll('script[id^="rutitas-ga-"]').forEach(script => script.remove())
  const runtime = window as Window & {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    __rutitasConfiguredAnalytics?: Set<string>
    __rutitasPageViews?: Set<string>
  }
  delete runtime.dataLayer
  delete runtime.gtag
  delete runtime.__rutitasConfiguredAnalytics
  delete runtime.__rutitasPageViews
})
