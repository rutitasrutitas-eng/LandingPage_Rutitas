import AnalyticsConsent from './AnalyticsConsent'

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61596370576231', icon: 'facebook.svg' },
  { name: 'Instagram', href: 'https://www.instagram.com/rutitasuniversitarias/', icon: 'instagram.svg' },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCNam3EUfsyTzmWEb5AViW2A', icon: 'youtube.svg' },
  { name: 'X', href: 'https://x.com/UniRutitas', icon: 'x.svg' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@rutitas4?lang=es', icon: 'tiktok.svg' },
]

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <span><span className="footer-dot" /> Proyecto para la comunidad UTTT</span>
      <span className="footer-tagline">Diseñado para conectar caminos <span className="footer-star">✳</span></span>
      <div className="footer-actions">
        <nav className="social-links" aria-label="Síguenos en nuestras redes">
          {socialLinks.map(({ name, href, icon }) => href
            ? <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}><img src={`/assets/social/${icon}`} alt="" width="20" height="20" /></a>
            : <span key={name} className="social-link-disabled" aria-label={`${name}, próximamente`} aria-disabled="true" title={`${name}, próximamente`}><img src={`/assets/social/${icon}`} alt="" width="20" height="20" /></span>)}
        </nav>
        <nav className="footer-links" aria-label="Enlaces legales">
          <a href="/privacidad">Privacidad</a>
          <a href="/eliminar-cuenta">Eliminar cuenta</a>
        </nav>
        <AnalyticsConsent />
      </div>
    </footer>
  )
}
