import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { saveAnalyticsConsent } from './analytics'

vi.mock('./config', () => ({ gaMeasurementId: 'G-SYNTHETIC123' }))

import App from './App'

type TestAnalyticsWindow = Window & {
  dataLayer?: unknown[][]
  gtag?: (...args: unknown[]) => void
  __rutitasConfiguredAnalytics?: Set<string>
  __rutitasPageViews?: Set<string>
}

describe('LANDING-020 existing interaction events', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/')
    window.localStorage.clear()
    const runtime = window as TestAnalyticsWindow
    delete runtime.dataLayer
    delete runtime.gtag
    delete runtime.__rutitasConfiguredAnalytics
    delete runtime.__rutitasPageViews
    document.querySelectorAll('script[id^="rutitas-ga-"]').forEach(script => script.remove())
    saveAnalyticsConsent('granted')
  })

  it('tracks fixed CTA, FAQ, and social categories after consent without leaving the app', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /descubre rutitas/i }))
    await user.keyboard('{Escape}')
    await user.click(screen.getByRole('button', { name: /conoce el proyecto/i }))
    await user.click(screen.getByText('¿Qué es Rutitas?'))

    const facebook = screen.getByRole('link', { name: 'Facebook' })
    facebook.addEventListener('click', event => event.preventDefault(), { once: true })
    await user.click(facebook)

    const runtime = window as TestAnalyticsWindow
    expect(runtime.dataLayer?.filter(entry => entry[0] === 'event' && ['primary_cta_click', 'faq_open', 'social_click'].includes(String(entry[1])))).toEqual([
      ['event', 'primary_cta_click', { cta: 'discover' }],
      ['event', 'primary_cta_click', { cta: 'project' }],
      ['event', 'faq_open', { faq: 'about' }],
      ['event', 'social_click', { network: 'facebook' }],
    ])
  })
})
