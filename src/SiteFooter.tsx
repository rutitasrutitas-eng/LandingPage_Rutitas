export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <span><span className="footer-dot" /> Piloto universitario · UTTT</span>
      <span className="footer-tagline">Diseñado para conectar caminos <span className="footer-star">✳</span></span>
      <nav className="footer-links" aria-label="Enlaces legales">
        <a href="/privacidad">Privacidad</a>
        <a href="/eliminar-cuenta">Eliminar cuenta</a>
      </nav>
    </footer>
  )
}
