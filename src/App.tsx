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
    const handleKeys = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab') return
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKeys)
    return () => document.removeEventListener('keydown', handleKeys)
  }, [onClose])
  const content = {
    funciona: {
      eyebrow: 'UNA IDEA SIMPLE', title: 'El camino se comparte.', description: 'Rutitas busca conectar a personas de una misma comunidad universitaria para organizar trayectos.',
      points: [ ['01', 'Conecta', 'Forma parte de tu comunidad.'], ['02', 'Encuentra', 'Explora trayectos disponibles.'], ['03', 'Comparte', 'Organiza tu próxima salida.'] ]
    },
    proyecto: {
      eyebrow: 'CONOCE RUTITAS', title: 'Más cerca, en comunidad.', description: 'Un proyecto de movilidad compartida pensado para estudiantes, con piloto inicial en la UTTT. La aplicación todavía está en desarrollo.',
      points: [ ['✦', 'Universitario', 'Pensado para comunidades educativas.'], ['✦', 'Colaborativo', 'Para organizar trayectos compartidos.'], ['✦', 'En desarrollo', 'Las funciones aún no están disponibles al público.'] ]
    },
    seguridad: {
      eyebrow: 'DISEÑADO CON CUIDADO', title: 'Confianza desde el inicio.', description: 'La verificación de comunidad y la privacidad forman parte de los requisitos previstos para Rutitas. Aún no son servicios activos.',
      points: [ ['✓', 'Comunidad', 'Verificación institucional prevista.'], ['✓', 'Privacidad', 'Protección de información personal.'], ['✓', 'Encuentros', 'Preferencia por puntos públicos.'] ]
    }
  }[view]
  return <div className="modal-backdrop" onMouseDown={event => { if(event.target === event.currentTarget) onClose() }}>
    <section ref={dialogRef} className="info-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description">
      <button ref={closeRef} className="modal-close" aria-label="Cerrar información" onClick={onClose}><Icon name="close" size={20}/></button>
      <div className="modal-eyebrow">{content.eyebrow}</div><h2 id="modal-title">{content.title}</h2><p id="modal-description">{content.description}</p>
      <div className="modal-points">{content.points.map(([n, t, d]) => <div className="modal-point" key={t}><span className="point-num">{n}</span><div><strong>{t}</strong><span>{d}</span></div></div>)}</div>
      <button className="modal-done" onClick={onClose}>Entendido <Icon name="check" size={16}/></button>
    </section>
  </div>
}

function HomePage() {
  const [modal, setModal] = useState<ModalId>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const openModal = (event: MouseEvent<HTMLButtonElement>, view: Exclude<ModalId, null>) => {
    triggerRef.current = menuOpen ? menuToggleRef.current : event.currentTarget
    setMenuOpen(false)
    setModal(view)
  }
  const closeModal = useCallback(() => setModal(null), [])
  useEffect(() => {
    if (modal === null) triggerRef.current?.focus()
  }, [modal])
  return <div className="site-shell">
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label="Rutitas — inicio"><img src="/assets/rutitas-logo.png" alt="Rutitas"/></a>
      <nav id="primary-navigation" className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
        <button onClick={event => openModal(event, 'funciona')}>Cómo funciona</button>
        <button onClick={event => openModal(event, 'seguridad')}>Seguridad</button>
        <button onClick={event => openModal(event, 'proyecto')}>El proyecto</button>
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
          <button className="primary-cta" onClick={event => openModal(event, 'funciona')}>Descubre Rutitas <Icon name="arrow" size={19}/></button>
          <button className="secondary-cta" onClick={event => openModal(event, 'proyecto')}>Conoce el proyecto</button>
        </div>
        <div className="hero-trust"><span className="trust-mark"><Icon name="shield" size={15}/></span><span>PILOTO UNIVERSITARIO · UTTT</span></div>
      </section>
    </main>
    <SiteFooter />
    {modal && <Modal view={modal} onClose={closeModal} />}
  </div>
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

  return <>{page}<AnalyticsConsent /></>
}
