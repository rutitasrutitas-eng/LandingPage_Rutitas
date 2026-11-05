import { useCallback, useEffect, useRef, useState, type MouseEvent } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import AnalyticsConsent from './AnalyticsConsent'
import { AccountDeletionPage, NotFoundPage, PrivacyPage } from './LegalPages'
import { googlePlayUrl } from './config'
import SiteFooter from './SiteFooter'

type ModalId = 'funciona' | 'proyecto' | 'seguridad' | null

type IconName = 'arrow' | 'route' | 'pin' | 'close' | 'shield' | 'car' | 'spark' | 'check' | 'external' | 'qr'

function Icon({ name, size = 20, className = '' }: { name: IconName, size?: number, className?: string }) {
  const shared = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, className, 'aria-hidden': true as const }
  switch (name) {
    case 'arrow': return <svg {...shared}><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
    case 'external': return <svg {...shared}><path d="M7 17 17 7M8 7h9v9" /></svg>
    case 'route': return <svg {...shared}><circle cx="6" cy="18" r="2" /><circle cx="18" cy="6" r="2" /><path d="M8 18h5a5 5 0 0 0 0-10H9a3 3 0 0 0 0 6h2" /></svg>
    case 'pin': return <svg {...shared}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
    case 'close': return <svg {...shared}><path d="M5 5 19 19M19 5 5 19" /></svg>
    case 'shield': return <svg {...shared}><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></svg>
    case 'car': return <svg {...shared}><path d="m5 11 2-5h10l2 5M5 17v3m14-3v3M3 11h18v6H3z" /><circle cx="7" cy="15" r="1" /><circle cx="17" cy="15" r="1" /></svg>
    case 'spark': return <svg {...shared}><path d="m12 2 2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2L12 2z" /></svg>
    case 'check': return <svg {...shared}><path d="m5 12 4 4L19 6" /></svg>
    case 'qr': return <svg {...shared}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><path d="M15 14v3m0 4h3v-3h3m-3-4h3v3" /></svg>
  }
}

function Mockup() {
  return <div className="phone" aria-label="Vista ilustrativa de la aplicación Rutitas, con rutas de ejemplo">
    <div className="phone-camera" />
    <div className="phone-content">
      <div className="phone-status"><b>9:41</b><span>●●● ▰</span></div>
      <div className="phone-brand"><span className="app-brand-glyph"><Icon name="route" size={15} /></span> rutitas <span className="mini-demo">DEMO</span></div>
      <div className="phone-greeting">¡Hola! <span>👋</span></div>
      <div className="phone-headline">Tu próxima ruta<br />comienza aquí.</div>
      <div className="phone-search"><Icon name="pin" size={16} /><span>¿A dónde vamos?</span><Icon name="arrow" size={15} /></div>
      <div className="mini-map"><span className="road road-1"/><span className="road road-2"/><span className="road road-3"/><span className="map-curve"/><span className="map-dot one"/><span className="map-dot two"/><span className="map-label">Ruta de ejemplo</span></div>
      <div className="trip-label">Rutas para ti <span>Ver todas →</span></div>
      <div className="mini-trip"><div className="trip-icon"><Icon name="car" size={17}/></div><div className="trip-meta"><b>Centro <span>→</span> Campus</b><small>07:30 · Trayecto ilustrativo</small></div><span className="trip-arrow"><Icon name="arrow" size={15}/></span></div>
      <div className="phone-bottom"><span>⌂</span><span>⌕</span><span>♡</span><span>◯</span></div>
    </div>
  </div>
}

function QrCard() {
  return <div className={`qr-card ${googlePlayUrl ? 'qr-live' : ''}`}>
    <div className="qr-visual">
      {googlePlayUrl ? <QRCodeSVG value={googlePlayUrl} size={106} marginSize={1} bgColor="#ffffff" fgColor="#071e4b" title="Código QR para abrir Rutitas en Google Play" /> : <div className="qr-unavailable" aria-hidden="true"><Icon name="qr" size={54} /><span className="qr-spark">✦</span></div>}
    </div>
    <div className="qr-details"><span className="qr-eyebrow">EN TU CELULAR</span><strong>{googlePlayUrl ? 'Escanea y vamos' : 'Muy pronto'}</strong><span>{googlePlayUrl ? 'Tu app a un escaneo.' : 'El QR estará aquí.'}</span>
      {googlePlayUrl ? <a className="qr-link" href={googlePlayUrl} target="_blank" rel="noopener noreferrer" aria-label="Descargar Rutitas en Google Play">Google Play <Icon name="external" size={13}/></a> : <span className="qr-pending"><span/> En preparación</span>}
    </div>
  </div>
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
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const openModal = (event: MouseEvent<HTMLButtonElement>, view: Exclude<ModalId, null>) => {
    triggerRef.current = event.currentTarget
    setModal(view)
  }
  const closeModal = useCallback(() => setModal(null), [])
  useEffect(() => {
    if (modal === null) triggerRef.current?.focus()
  }, [modal])
  return <div className="site-shell">
    <div className="ambient ambient-a" aria-hidden="true"/><div className="ambient ambient-b" aria-hidden="true"/>
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label="Rutitas — inicio"><img src="/assets/rutitas-emblema.png" alt=""/><span>Rutitas<b>.</b></span></a>
      <nav className="desktop-nav" aria-label="Navegación principal"><button onClick={event => openModal(event, 'funciona')}>Cómo funciona</button><button onClick={event => openModal(event, 'seguridad')}>Seguridad</button><button onClick={event => openModal(event, 'proyecto')}>El proyecto</button></nav>
      <div className="top-status"><span className="status-dot"/> Próximamente</div>
    </header>
    <main id="inicio" className="hero-layout">
      <section className="hero-copy" aria-label="Presentación de Rutitas">
        <div className="hero-intro"><span className="intro-icon"><Icon name="spark" size={15}/></span> TU COMUNIDAD. TU RUTA.</div>
        <img className="hero-logo" src="/assets/rutitas-logo.png" alt="Rutitas, logo con universidad, camino y marcador"/>
        <h1>La uni se vive<br />{' '}<em>en el camino.</em></h1>
        <p className="hero-subtitle">Compartir el trayecto también<br className="desktop-break"/> es parte de la experiencia.</p>
        <div className="hero-actions"><button className="primary-cta" onClick={event => openModal(event, 'funciona')}>Descubre Rutitas <span><Icon name="arrow" size={20}/></span></button><button className="text-cta" onClick={event => openModal(event, 'proyecto')}>Conoce el proyecto <Icon name="external" size={16}/></button></div>
        <div className="hero-trust"><span className="trust-mark"><Icon name="shield" size={16}/></span><span>PROYECTO PILOTO UNIVERSITARIO</span></div>
      </section>
      <section className="visual-stage" aria-label="Vista ilustrativa de la aplicación y acceso por QR">
        <div className="stage-grid" aria-hidden="true"/><div className="stage-sun" aria-hidden="true"/><div className="stage-orbit one" aria-hidden="true"/><div className="stage-orbit two" aria-hidden="true"/>
        <div className="floating-tag"><span className="tag-check"><Icon name="check" size={14}/></span> Conectando caminos <span className="tag-star">✦</span></div>
        <Mockup />
        <QrCard />
        <div className="stage-caption"><span className="caption-dash"/> UNA NUEVA FORMA DE MOVERSE JUNTOS</div>
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
