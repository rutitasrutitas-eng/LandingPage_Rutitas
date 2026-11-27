import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import AnalyticsConsent from './AnalyticsConsent'
import { readAnalyticsConsent, trackAnalyticsEvent } from './analytics'

vi.mock('./config', () => ({ gaMeasurementId: 'G-SYNTHETIC123' }))

type TestAnalyticsWindow = Window & {
  dataLayer?: unknown[][]
  gtag?: (...args: unknown[]) => void
  __rutitasConfiguredAnalytics?: Set<string>
  __rutitasPageViews?: Set<string>
  __rutitasConsentGranted?: boolean
}

describe('LANDING-021 consent lifecycle with a synthetic Measurement ID', () => {
  beforeEach(() => {
    window.localStorage.clear()
    const runtime = window as TestAnalyticsWindow
    delete runtime.dataLayer
    delete runtime.gtag
    delete runtime.__rutitasConfiguredAnalytics
    delete runtime.__rutitasPageViews
    delete runtime.__rutitasConsentGranted
    document.querySelectorAll('script[id^="rutitas-ga-"]').forEach(script => script.remove())
  })

  afterEach(() => cleanup())

  it('starts with no measurement, records an initial rejection, and keeps events blocked', async () => {
    const user = userEvent.setup()
    render(<AnalyticsConsent />)

    expect(screen.getByRole('complementary', { name: 'Analítica opcional' })).toBeInTheDocument()
    expect(document.querySelector('script[id^="rutitas-ga-"]')).not.toBeInTheDocument()
    expect((window as TestAnalyticsWindow).dataLayer).toBeUndefined()

    await user.click(screen.getByRole('button', { name: 'Rechazar' }))

    expect(readAnalyticsConsent()).toBe('denied')
    expect(trackAnalyticsEvent('G-SYNTHETIC123', { name: 'social_click', params: { network: 'youtube' } })).toBe(false)
    expect(document.querySelector('script[id^="rutitas-ga-"]')).not.toBeInTheDocument()
    expect((window as TestAnalyticsWindow).dataLayer).toBeUndefined()
  })

  it('supports acceptance, revocation and a new acceptance without reload, with no denied events or duplicate page_view', async () => {
    const user = userEvent.setup()
    render(<AnalyticsConsent />)
    const runtime = window as TestAnalyticsWindow

    await user.click(screen.getByRole('button', { name: 'Aceptar analítica' }))
    await waitFor(() => expect(readAnalyticsConsent()).toBe('granted'))
    await waitFor(() => expect(runtime.dataLayer?.filter(entry => entry[0] === 'consent' && entry[1] === 'update')).toHaveLength(1))
    expect(document.querySelector('script[id="rutitas-ga-G-SYNTHETIC123"]')).toHaveAttribute('src', expect.stringContaining('googletagmanager.com'))

    await user.click(screen.getByRole('button', { name: 'Preferencias de analítica' }))
    await user.click(screen.getByRole('button', { name: 'Rechazar' }))
    expect(readAnalyticsConsent()).toBe('denied')
    const eventsAtRevocation = runtime.dataLayer?.filter(entry => entry[0] === 'event') ?? []
    expect(trackAnalyticsEvent('G-SYNTHETIC123', { name: 'social_click', params: { network: 'youtube' } })).toBe(false)
    expect(runtime.dataLayer?.filter(entry => entry[0] === 'event')).toEqual(eventsAtRevocation)

    await user.click(screen.getByRole('button', { name: 'Preferencias de analítica' }))
    await user.click(screen.getByRole('button', { name: 'Aceptar analítica' }))
    await waitFor(() => expect(readAnalyticsConsent()).toBe('granted'))
    await waitFor(() => expect(runtime.dataLayer?.filter(entry => entry[0] === 'consent' && entry[1] === 'update' && (entry[2] as { analytics_storage: string }).analytics_storage === 'granted')).toHaveLength(2))

    expect(trackAnalyticsEvent('G-SYNTHETIC123', { name: 'social_click', params: { network: 'youtube' } })).toBe(true)
    expect(runtime.dataLayer?.filter(entry => entry[0] === 'event' && entry[1] === 'page_view')).toHaveLength(1)
    expect(runtime.dataLayer?.filter(entry => entry[0] === 'event' && entry[1] === 'social_click')).toHaveLength(1)
  })

  it('persists the last decision for the next render', async () => {
    const user = userEvent.setup()
    const firstRender = render(<AnalyticsConsent />)
    await user.click(screen.getByRole('button', { name: 'Rechazar' }))
    expect(readAnalyticsConsent()).toBe('denied')
    firstRender.unmount()

    render(<AnalyticsConsent />)
    expect(screen.queryByRole('heading', { name: 'Analítica opcional' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Preferencias de analítica' })).toBeInTheDocument()
    expect(readAnalyticsConsent()).toBe('denied')
    expect((window as TestAnalyticsWindow).dataLayer).toBeUndefined()
  })
})
