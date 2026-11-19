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
  it('UT-LP-001 renders the approved hero without a DEMO or QR section', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { name: /la uni se vive en el camino/i })).toBeInTheDocument()
    expect(screen.getByText('Compartir el trayecto también es parte de la experiencia.')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Rutitas' })).toHaveAttribute('src', '/assets/rutitas-logo.png')
    expect(screen.getByRole('main').querySelector('picture source')).toHaveAttribute('srcset', '/assets/rutitas-auto-hero-mobile.webp')
    expect(screen.getByRole('main').querySelector('picture img')).toHaveAttribute('src', '/assets/rutitas-auto-hero.jpg')
    expect(document.querySelector('.demo-section')).not.toBeInTheDocument()
    expect(document.querySelector('.phone')).not.toBeInTheDocument()
    expect(document.querySelector('.qr-card')).not.toBeInTheDocument()
    expect(screen.queryByText(/Una vista de demostración|EN TU CELULAR|Google Play/i)).not.toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Navegación principal' })).toBeInTheDocument()
    expect(screen.getByText('Próximamente')).toBeInTheDocument()
  })

  it('keeps both hero calls to action connected to their existing dialogs', async () => {
    const user = userEvent.setup()
    renderAt('/')
    await user.click(screen.getByRole('button', { name: /descubre rutitas/i }))
    expect(screen.getByRole('dialog')).toHaveTextContent('El camino se comparte.')
    await user.keyboard('{Escape}')
    await user.click(screen.getByRole('button', { name: /conoce el proyecto/i }))
    expect(screen.getByRole('dialog')).toHaveTextContent('Más cerca, en comunidad.')
  })

  it('does not advertise Google Play before an official listing exists', () => {
    renderAt('/')
    expect(screen.getByText('Próximamente')).toBeInTheDocument()
    expect(screen.queryByText(/Google Play|Disponible en/i)).not.toBeInTheDocument()
  })

  it('opens the compact navigation and keeps its modal actions available', async () => {
    const user = userEvent.setup()
    renderAt('/')
    const toggle = screen.getByRole('button', { name: 'Abrir navegación' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(screen.getByRole('button', { name: 'Seguridad' }))
    expect(screen.getByRole('dialog')).toHaveTextContent('Confianza desde el inicio.')
    const closedToggle = screen.getByRole('button', { name: 'Abrir navegación' })
    expect(closedToggle).toHaveAttribute('aria-expanded', 'false')
    await user.keyboard('{Escape}')
    expect(closedToggle).toHaveFocus()
  })

  it('UI-LP-005 closes the mobile navigation with Escape and returns focus to its toggle', async () => {
    const user = userEvent.setup()
    renderAt('/')
    const toggle = screen.getByRole('button', { name: 'Abrir navegación' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveFocus()
  })

  it('UT-LP-002 exposes legal pages in the shared footer', () => {
    renderAt('/')
    const footer = screen.getByRole('navigation', { name: 'Enlaces legales' })
    expect(within(footer).getByRole('link', { name: 'Privacidad' })).toHaveAttribute('href', '/privacidad')
    expect(within(footer).getByRole('link', { name: 'Eliminar cuenta' })).toHaveAttribute('href', '/eliminar-cuenta')
  })

  it('UT-LP-003 renders every privacy topic and marks the text as a draft', () => {
    renderAt('/privacidad')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Tu camino.Tu información.')
    for (const title of ['Quién protege tus datos', 'Qué información tratamos', 'Para qué usamos tu información', 'Ubicación, cámara y documentos', 'Con quién podría compartirse', 'Almacenamiento y seguridad', 'Conservación y eliminación', 'Tus derechos sobre tus datos', 'Contacto de privacidad', 'Analítica y almacenamiento del navegador', 'Cambios al aviso']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getByText(/Borrador de revisión interna/i)).toBeInTheDocument()
    expect(screen.getByText(/no tiene formulario de registro/i)).toBeInTheDocument()
    expect(screen.getAllByText(/DEMO_MODE=true/i)).toHaveLength(2)
    expect(screen.getByText(/no acredita transmisión a un servidor/i)).toBeInTheDocument()
    expect(screen.getAllByText(/PENDIENTE DE VALIDACIÓN DEL EQUIPO/i).length).toBeGreaterThan(1)
    expect(document.body.textContent).toMatch(/responsable operativo indicado por la coordinación es el Equipo de Rutitas/i)
    const privacyContacts = screen.getAllByRole('link', { name: 'rutitas.rutitas@gmail.com' })
    expect(privacyContacts).toHaveLength(1)
    privacyContacts.forEach((link) => expect(link).toHaveAttribute('href', 'mailto:rutitas.rutitas@gmail.com'))
    expect(document.body.textContent).toMatch(/conservación general prevista de datos personales de hasta 2 meses/i)
    expect(document.body.textContent).toMatch(/autoriza \$0 MXN de costo adicional/i)
    expect(document.body.textContent).toMatch(/Vercel aloja esta Landing/i)
    expect(document.body.textContent).toMatch(/Microsoft Azure, MongoDB Atlas para el Backend, Google Maps Platform, Google Analytics como servicio de medición y Google Play/i)
    expect(document.body.textContent).toMatch(/eliminación programada con 7 días de recuperación/i)
    expect(document.body.textContent).toMatch(/el plazo comenzará solo cuando el Backend confirme la solicitud/i)
    expect(document.body.textContent).toMatch(/El Equipo de Rutitas aún debe implementar y validar el flujo de Android y Backend/i)
    expect(document.body.textContent).not.toMatch(/\b(Mark|Ame|Ulises)\b/)
    expect(document.body.textContent).toMatch(/conservación general prevista de datos personales de hasta 2 meses/i)
    expect(screen.getByRole('navigation', { name: 'Secciones del aviso de privacidad' })).toBeInTheDocument()
    expect(document.querySelector('.pr-back')).toHaveAttribute('href', '/')
    expect(screen.getAllByRole('link', { name: /eliminación de cuenta/i })).toHaveLength(2)
    const toc = screen.getByRole('navigation', { name: 'Secciones del aviso de privacidad' })
    const topicLinks = within(toc).getAllByRole('link')
    expect(topicLinks).toHaveLength(11)
    for (const link of topicLinks) {
      const targetId = link.getAttribute('href')?.slice(1)
      expect(targetId).toBeTruthy()
      expect(document.getElementById(targetId ?? '')).toBeInTheDocument()
    }
  })

  it('UT-LP-004 explains that account deletion is not operational and collects no data', () => {
    renderAt('/eliminar-cuenta')
    expect(screen.getByRole('heading', { name: 'Eliminación de cuenta' })).toBeInTheDocument()
    expect(screen.getByText(/Esta página informa el estado del mecanismo/i)).toBeInTheDocument()
    expect(screen.getByText(/baja disponible en Android DEMO solo borra datos locales/i)).toBeInTheDocument()
    expect(screen.getByText(/Procedimiento web propuesto · todavía no habilitado/i)).toBeInTheDocument()
    expect(document.body.textContent).toMatch(/Equipo de Rutitas atenderá conjuntamente/i)
    expect(document.body.textContent).not.toMatch(/\b(Mark|Ame|Ulises)\b/)
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    expect(document.body.textContent).toMatch(/El correo por sí solo no acredita identidad/i)
    expect(document.body.textContent).toMatch(/solicitudes de eliminación por correo no están habilitadas/i)
    expect(document.body.textContent).toMatch(/eliminar definitivamente la cuenta y los datos personales asociados/i)
    expect(document.body.textContent).toMatch(/excepción legal aplicable y documentada/i)
    expect(document.body.textContent).toMatch(/eliminación de respaldos y cualquier constancia del proceso requieren definición y validación/i)
    expect(screen.getByRole('heading', { name: /Periodo de recuperación de 7 días/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Cómo podrá cancelarse/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Datos que se eliminarán/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Excepciones y respaldos/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Después de la eliminación definitiva/ })).toBeInTheDocument()
    expect(document.body.textContent).toMatch(/el Backend confirme que recibió y validó la solicitud/i)
    expect(document.body.textContent).toMatch(/un clic o un correo no inician la cuenta regresiva/i)
    expect(document.body.textContent).toMatch(/acceso normal a la cuenta/i)
    expect(document.body.textContent).toMatch(/solicitudes de eliminación por correo no están habilitadas/i)
    expect(document.body.textContent).toMatch(/La conservación general prevista de hasta 2 meses es distinta/i)
    expect(screen.queryByRole('form')).not.toBeInTheDocument()
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
    const deletionContacts = screen.getAllByRole('link', { name: 'rutitas.rutitas@gmail.com' })
    expect(deletionContacts).toHaveLength(2)
    deletionContacts.forEach((link) => expect(link).toHaveAttribute('href', 'mailto:rutitas.rutitas@gmail.com'))
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
    expect(screen.getByRole('button', { name: /descubre rutitas/i })).toHaveAttribute('aria-haspopup', 'dialog')
    expect(document.querySelector('.site-shell')).toHaveAttribute('inert')
    const close = within(dialog).getByRole('button', { name: 'Cerrar información' })
    const done = within(dialog).getByRole('button', { name: /entendido/i })
    screen.getByRole('link', { name: 'Rutitas — inicio' }).focus()
    fireEvent.keyDown(document, { key: 'Tab' })
    expect(close).toHaveFocus()
    close.focus()
    await user.keyboard('{Tab}')
    expect(done).toHaveFocus()
    await user.keyboard('{Shift>}{Tab}{/Shift}')
    expect(close).toHaveFocus()
    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true })
    expect(done).toHaveFocus()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
  })

  it('LP-REQ-016 presents all ten accurate questions in the project dialog', async () => {
    const user = userEvent.setup()
    renderAt('/')
    await user.click(screen.getByRole('button', { name: /conoce el proyecto/i }))
    const dialog = screen.getByRole('dialog')
    for (const question of ['¿Qué es Rutitas?', '¿Para quién está pensado?', '¿La aplicación ya está disponible?', '¿Cómo funcionará?', '¿Puedo consultar rutas?', '¿Puedo reservar un asiento?', '¿Cómo se protegerán mis datos?', '¿Dónde puedo consultar el aviso de privacidad?', '¿Cómo podré eliminar mi cuenta?', '¿Dónde podré descargar Rutitas?']) {
      expect(within(dialog).getByText(question, { exact: true })).toBeInTheDocument()
    }
    expect(within(dialog).getByText(/no existe integración operativa confirmada/i)).toBeInTheDocument()
    expect(within(dialog).getByText(/no hay evidencia de eliminación remota operativa/i)).toBeInTheDocument()
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
