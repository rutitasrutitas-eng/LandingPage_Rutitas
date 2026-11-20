import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

describe('Analytics consent controls', () => {
  it('does not load GA before a choice and supports rejection, reopening, and opt-in', async () => {
    vi.resetModules()
    vi.stubEnv('VITE_GA_MEASUREMENT_ID', 'G-ABC1234567')
    const { default: AnalyticsConsent } = await import('./AnalyticsConsent')
    const user = userEvent.setup()
    render(<AnalyticsConsent />)

    expect(screen.getByRole('complementary', { name: 'Analítica opcional' })).toBeInTheDocument()
    expect(document.querySelector('script[id^="rutitas-ga-"]')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Rechazar' }))
    expect(screen.queryByRole('complementary', { name: 'Analítica opcional' })).not.toBeInTheDocument()
    expect(window.localStorage.getItem('rutitas.analytics-consent')).toBe('denied')
    expect(document.querySelector('script[id^="rutitas-ga-"]')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Preferencias de analítica' }))
    await user.click(screen.getByRole('button', { name: 'Aceptar analítica' }))
    expect(window.localStorage.getItem('rutitas.analytics-consent')).toBe('granted')
    expect(document.querySelector('script[id="rutitas-ga-G-ABC1234567"]')).toHaveAttribute('src', expect.stringContaining('googletagmanager.com'))
  })
})
