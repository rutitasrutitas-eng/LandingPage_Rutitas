import { useCallback, useEffect, useRef, useState, type MouseEvent } from 'react'
import AnalyticsConsent from './AnalyticsConsent'
import { AccountDeletionPage, NotFoundPage, PrivacyPage } from './LegalPages'
import SiteFooter from './SiteFooter'

type ModalId = 'funciona' | 'proyecto' | 'seguridad' | null

type IconName = 'arrow' | 'close' | 'shield' | 'check'

function Icon({ name, size = 20, className = '' }: { name: IconName, size?: number, className?: string }) {
  const shared = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, className, 'aria-hidden': true as const }
  switch (name) {
    case 'arrow': return <svg {...shared}><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
    case 'close': return <svg {...shared}><path d="M5 5 19 19M19 5 5 19" /></svg>
    case 'shield': return <svg {...shared}><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></svg>
    case 'check': return <svg {...shared}><path d="m5 12 4 4L19 6" /></svg>
  }
}

function Modal({ view, onClose }: { view: Exclude<ModalId, null>, onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLElement>(null)
  useEffect(() => {
    closeRef.current?.focus()
    const focusableElements = () => dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])')
    const handleKeys = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab') return
      const focusable = focusableElements()
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (!dialogRef.current?.contains(document.activeElement)) {
        event.preventDefault()
        ;(event.shiftKey ? last : first).focus()
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    const keepFocusInDialog = (event: FocusEvent) => {
      if (dialogRef.current?.contains(event.target as Node)) return
      const first = focusableElements()?.[0] ?? dialogRef.current
      first?.focus()
    }
    document.addEventListener('keydown', handleKeys)
    document.addEventListener('focusin', keepFocusInDialog, true)
    return () => {
      document.removeEventListener('keydown', handleKeys)
      document.removeEventListener('focusin', keepFocusInDialog, true)
    }
  }, [onClose])
  const content = {
      funciona: {
      eyebrow: 'UNA IDEA SIMPLE', title: 'El camino se comparte.', description: 'Rutitas es una propuesta universitaria de movilidad compartida. Busca facilitar la organización de trayectos y fomentar la colaboración dentro de una comunidad educativa.',
      points: [ ['01', 'Conecta con tu comunidad', 'La propuesta está pensada para integrantes de una misma comunidad universitaria.'], ['02', 'Encuentra trayectos', 'La consulta de rutas y la búsqueda de opciones para compartir viajes están en desarrollo.'], ['03', 'Comparte el camino', 'La coordinación de viajes y las reservas reales todavía no están disponibles.'] ]
    },
    proyecto: {
      eyebrow: 'CONOCE RUTITAS', title: 'Más cerca, en comunidad.', description: 'Rutitas es un proyecto universitario que busca facilitar la organización de trayectos y la colaboración entre integrantes de una comunidad educativa. Su diseño se dirige inicialmente a la comunidad UTTT; un piloto está previsto, sujeto a validación y coordinación. La UTTT no se presenta aquí como responsable legal ni como entidad que haya autorizado u opere el servicio.',
      points: [ ['✦', 'El reto', 'Explorar una forma colaborativa de organizar desplazamientos cotidianos.'], ['✦', 'En desarrollo', 'La aplicación móvil y su integración con servicios remotos requieren pruebas.'], ['✦', 'Aún no disponible', 'No hay reservas ni viajes reales ofrecidos desde esta landing.'] ]
    },
    seguridad: {
      eyebrow: 'DISEÑADO CON CUIDADO', title: 'Confianza desde el inicio.', description: 'La autenticación y la gestión de cuentas están en el código del Backend, pero todavía no están integradas con la aplicación Android ni ofrecidas como servicio operativo. La política de datos y las medidas de seguridad requieren validación antes de cualquier uso real.',
      points: [ ['✓', 'Autenticación', 'Código de API sujeto a integración, despliegue y pruebas operativas.'], ['✓', 'Comunidad', 'La verificación institucional es una función prevista, no confirmada como activa.'], ['✓', 'Viajes', 'Verificación de conductores y medidas de seguridad para viajes siguen en desarrollo.'] ]
    }
  }[view]
  return <div className="modal-backdrop" onMouseDown={event => { if(event.target === event.currentTarget) onClose() }}>
    <section ref={dialogRef} className="info-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description" tabIndex={-1}>
      <button ref={closeRef} className="modal-close" aria-label="Cerrar información" onClick={onClose}><Icon name="close" size={20}/></button>
      <div className="modal-eyebrow">{content.eyebrow}</div><h2 id="modal-title">{content.title}</h2><p id="modal-description">{content.description}</p>
      <div className="modal-points">{content.points.map(([n, t, d]) => <div className="modal-point" key={t}><span className="point-num">{n}</span><div><strong>{t}</strong><span>{d}</span></div></div>)}</div>
      {view === 'proyecto' && <section className="faq-section" aria-labelledby="faq-title">
        <h3 id="faq-title">Preguntas frecuentes</h3>
        {[
          ['¿Qué es Rutitas?', 'Es un proyecto universitario de movilidad compartida que busca facilitar la organización de trayectos y la colaboración entre integrantes de una comunidad educativa.'],
          ['¿Para quién está pensado?', 'Inicialmente está pensado para la comunidad UTTT. Un piloto está previsto, sujeto a validación y coordinación; no se anuncia como servicio activo.'],
          ['¿La aplicación ya está disponible?', 'No. La aplicación está en desarrollo y todavía no se ofrece para uso público.'],
          ['¿Cómo funcionará?', 'La propuesta busca ayudar a consultar trayectos y, más adelante, coordinar opciones para compartir viajes. Reservas y viajes reales aún no están disponibles.'],
          ['¿Puedo consultar rutas?', 'El Backend incluye código para consultar un catálogo de rutas, y Android muestra datos locales en modo DEMO. No existe integración operativa confirmada para usuarios.'],
          ['¿Puedo reservar un asiento?', 'No desde Rutitas actualmente. La reserva real depende de integración y pruebas que todavía están pendientes.'],
          ['¿Cómo se protegerán mis datos?', 'El aviso de privacidad sigue como borrador. Las prácticas, responsables, proveedores y medidas aplicables deben confirmarse antes de operar.'],
          ['¿Dónde puedo consultar el aviso de privacidad?', 'En esta landing, mediante el enlace “Privacidad” del pie de página. El texto está pendiente de aprobación legal.'],
          ['¿Cómo podré eliminar mi cuenta?', 'La ruta “Eliminar cuenta” explica el estado actual. Android permite una baja local de datos DEMO; no hay evidencia de eliminación remota operativa.'],
          ['¿Dónde podré descargar Rutitas?', 'La descarga se anunciará cuando exista una ficha oficial de Google Play. Por ahora la landing indica “Próximamente”.'],
        ].map(([question, answer]) => <details className="faq-item" key={question}>
          <summary>{question}</summary><p>{answer}</p>
        </details>)}
      </section>}
      <button className="modal-done" onClick={onClose}>Entendido <Icon name="check" size={16}/></button>
    </section>
  </div>
}

function HomePage() {
  const [modal, setModal] = useState<ModalId>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      event.preventDefault()
      setMenuOpen(false)
      menuToggleRef.current?.focus()
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])
  const openModal = (event: MouseEvent<HTMLButtonElement>, view: Exclude<ModalId, null>) => {
    triggerRef.current = menuOpen ? menuToggleRef.current : event.currentTarget
    setMenuOpen(false)
    setModal(view)
  }
  const closeModal = useCallback(() => setModal(null), [])
  useEffect(() => {
    if (modal === null) triggerRef.current?.focus()
  }, [modal])
  return <>
    <div className="site-shell" inert={modal !== null}>
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label="Rutitas — inicio"><img src="/assets/rutitas-logo.png" alt="Rutitas"/></a>
      <nav id="primary-navigation" className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
        <button aria-haspopup="dialog" onClick={event => openModal(event, 'funciona')}>Cómo funciona</button>
        <button aria-haspopup="dialog" onClick={event => openModal(event, 'seguridad')}>Seguridad</button>
        <button aria-haspopup="dialog" onClick={event => openModal(event, 'proyecto')}>El proyecto</button>
      </nav>
      <div className="top-status"><span className="status-dot"/> Próximamente</div>
      <button
        ref={menuToggleRef}
        className="mobile-menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Cerrar navegación' : 'Abrir navegación'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(open => !open)}
      >
        <span/><span/><span/>
      </button>
    </header>
    <main id="inicio" className="hero-layout" aria-labelledby="hero-title">
      <picture className="hero-image" aria-hidden="true">
        <source media="(max-width: 670px)" type="image/webp" srcSet="/assets/rutitas-auto-hero-mobile.webp"/>
        <source type="image/webp" srcSet="/assets/rutitas-auto-hero.webp"/>
        <img src="/assets/rutitas-auto-hero.jpg" alt="" fetchPriority="high" decoding="async"/>
      </picture>
      <div className="hero-overlay" aria-hidden="true"/>
      <section className="hero-copy" aria-label="Presentación de Rutitas">
        <div className="hero-intro"><span className="intro-rule" aria-hidden="true"/> TU COMUNIDAD. TU RUTA.</div>
        <h1 id="hero-title" aria-label="La uni se vive en el camino."><span>La uni se vive</span><span>en el camino<span className="hero-period">.</span></span></h1>
        <p className="hero-subtitle">Compartir el trayecto también es parte de la experiencia.</p>
        <div className="hero-actions">
          <button className="primary-cta" aria-haspopup="dialog" onClick={event => openModal(event, 'funciona')}>Descubre Rutitas <Icon name="arrow" size={19}/></button>
          <button className="secondary-cta" aria-haspopup="dialog" onClick={event => openModal(event, 'proyecto')}>Conoce el proyecto</button>
        </div>
        <div className="hero-trust"><span className="trust-mark"><Icon name="shield" size={15}/></span><span>PROPUESTA UNIVERSITARIA · UTTT</span></div>
      </section>
    </main>
    <SiteFooter />
    <AnalyticsConsent />
    </div>
    {modal && <Modal view={modal} onClose={closeModal} />}
  </>
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  useEffect(() => {
    document.title = path === '/privacidad'
      ? 'Aviso de privacidad — Rutitas'
      : path === '/eliminar-cuenta'
        ? 'Eliminación de cuenta — Rutitas'
        : path === '/'
          ? 'Rutitas — Tu comunidad, tu ruta'
          : 'Página no encontrada — Rutitas'
  }, [path])

  const page = path === '/'
    ? <HomePage />
    : path === '/privacidad'
      ? <PrivacyPage />
      : path === '/eliminar-cuenta'
        ? <AccountDeletionPage />
        : <NotFoundPage />

  return <>{page}{path !== '/' && <AnalyticsConsent />}</>
}
