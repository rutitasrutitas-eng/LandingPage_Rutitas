import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'
import { enableAnalytics, isValidMeasurementId, revokeAnalyticsConsent, saveAnalyticsConsent } from './analytics'
import { getGooglePlayUrl } from './config'

function renderAt(path: string) {
  window.history.replaceState({}, '', path)
  return render(<App />)
}

describe('Rutitas landing and legal pages', () => {
  it('UT-LP-001 renders the existing home page and project mockup', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { name: /la uni se vive en el camino/i })).toBeInTheDocument()
    expect(screen.getByText('Conectando caminos')).toBeInTheDocument()
    expect(screen.getByText(/DEMO/)).toBeInTheDocument()
  })

  it('UT-LP-002 exposes legal pages in the shared footer', () => {
    renderAt('/')
    const footer = screen.getByRole('navigation', { name: 'Enlaces legales' })
    expect(within(footer).getByRole('link', { name: 'Privacidad' })).toHaveAttribute('href', '/privacidad')
    expect(within(footer).getByRole('link', { name: 'Eliminar cuenta' })).toHaveAttribute('href', '/eliminar-cuenta')
  })

  it('UT-LP-003 renders every privacy topic and marks the text as a draft', () => {
    renderAt('/privacidad')
    expect(screen.getByRole('heading', { name: 'Aviso de privacidad' })).toBeInTheDocument()
    for (const title of ['Responsable del tratamiento', 'Datos personales', 'Finalidades', 'Ubicación', 'Documentos de conductores', 'Almacenamiento y protección', 'Conservación y eliminación', 'Derechos de las personas titulares', 'Contacto de privacidad', 'Servicios de terceros', 'Analítica y tecnologías similares']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getByText(/NO ES UN AVISO DEFINITIVO/)).toBeInTheDocument()
    expect(screen.getAllByText(/PENDIENTE DE VALIDACIÓN DEL EQUIPO/i).length).toBeGreaterThan(5)
  })

  it('UT-LP-004 explains that account deletion is not operational and collects no data', () => {
    renderAt('/eliminar-cuenta')
    expect(screen.getByRole('heading', { name: 'Eliminación de cuenta' })).toBeInTheDocument()
    expect(screen.getByText(/no tramita solicitudes ni elimina cuentas/i)).toBeInTheDocument()
    expect(screen.queryByRole('form')).not.toBeInTheDocument()
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  })

  it('UT-LP-005 enables only a valid official Google Play URL', () => {
    expect(getGooglePlayUrl('')).toBeNull()
    expect(getGooglePlayUrl('https://example.com/store/apps/details?id=com.rutitas.app')).toBeNull()
    expect(getGooglePlayUrl('http://play.google.com/store/apps/details?id=com.rutitas.app')).toBeNull()
    expect(getGooglePlayUrl('https://play.google.com/store/apps/details?id=com.rutitas.app&referrer=private')).toBe('https://play.google.com/store/apps/details?id=com.rutitas.app')
  })

  it('IT-LP-001/002 exposes links to both legal routes from home', () => {
    renderAt('/')
    expect(screen.getByRole('link', { name: 'Privacidad' })).toHaveAttribute('href', '/privacidad')
    expect(screen.getByRole('link', { name: 'Eliminar cuenta' })).toHaveAttribute('href', '/eliminar-cuenta')
  })

  it('UI-LP-003 traps focus within the existing info dialog and restores focus on Escape', async () => {
    const user = userEvent.setup()
    renderAt('/')
    const trigger = screen.getByRole('button', { name: /descubre rutitas/i })
    await user.click(trigger)
    const dialog = screen.getByRole('dialog')
    const close = within(dialog).getByRole('button', { name: 'Cerrar información' })
    const done = within(dialog).getByRole('button', { name: /entendido/i })
    close.focus()
    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true })
    expect(done).toHaveFocus()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
  })
})

describe('privacy-first GA4 setup', () => {
  it('UT-LP-006 accepts only a plausible GA4 Measurement ID', () => {
    expect(isValidMeasurementId('G-ABC1234567')).toBe(true)
    expect(isValidMeasurementId('G-')).toBe(false)
    expect(isValidMeasurementId('UA-123456')).toBe(false)
    expect(isValidMeasurementId(undefined)).toBe(false)
  })

  it('SEC-LP-002 does not load GA4 without affirmative consent', () => {
    expect(enableAnalytics('G-ABC1234567')).toBe(false)
    expect(document.querySelector('script[id^="rutitas-ga-"]')).not.toBeInTheDocument()
  })

  it('sends one page_view without query-string data after opt-in', () => {
    window.history.replaceState({}, '', '/privacidad?email=private@example.test')
    saveAnalyticsConsent('granted')
    expect(enableAnalytics('G-ABC1234567')).toBe(true)
    expect(enableAnalytics('G-ABC1234567')).toBe(true)
    const runtime = window as unknown as { dataLayer?: unknown[][] }
    const pageViews = runtime.dataLayer?.filter(args => args[0] === 'event' && args[1] === 'page_view') ?? []
    expect(pageViews).toHaveLength(1)
    expect(JSON.stringify(pageViews[0])).toContain('/privacidad')
    expect(JSON.stringify(pageViews[0])).not.toContain('email')
    expect(document.querySelector('script[id="rutitas-ga-G-ABC1234567"]')).toHaveAttribute('src', expect.stringContaining('googletagmanager.com'))
  })

  it('SEC-LP-002 can revoke analytics consent for the current page', () => {
    saveAnalyticsConsent('granted')
    enableAnalytics('G-ABC1234567')
    revokeAnalyticsConsent()
    const runtime = window as unknown as { dataLayer?: unknown[][] }
    expect(runtime.dataLayer).toContainEqual(['consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    }])
  })
})
