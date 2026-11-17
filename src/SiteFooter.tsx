import AnalyticsConsent from './AnalyticsConsent'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <span><span className="footer-dot" /> Proyecto para la comunidad UTTT</span>
      <span className="footer-tagline">Diseñado para conectar caminos <span className="footer-star">✳</span></span>
      <div className="footer-actions">
        <nav className="footer-links" aria-label="Enlaces legales">
          <a href="/privacidad">Privacidad</a>
          <a href="/eliminar-cuenta">Eliminar cuenta</a>
        </nav>
        <AnalyticsConsent />
      </div>
    </footer>
  )
}
