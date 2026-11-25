import AnalyticsConsent from './AnalyticsConsent'
import { trackAnalyticsEvent } from './analytics'
import { gaMeasurementId } from './config'

const socialLinks = [
  { name: 'Facebook', network: 'facebook', href: 'https://www.facebook.com/profile.php?id=61596370576231', icon: 'facebook.svg' },
  { name: 'Instagram', network: 'instagram', href: 'https://www.instagram.com/rutitasuniversitarias/', icon: 'instagram.svg' },
  { name: 'YouTube', network: 'youtube', href: 'https://www.youtube.com/channel/UCNam3EUfsyTzmWEb5AViW2A', icon: 'youtube.svg' },
  { name: 'X', network: 'x', href: 'https://x.com/UniRutitas', icon: 'x.svg' },
  { name: 'TikTok', network: 'tiktok', href: 'https://www.tiktok.com/@rutitas4?lang=es', icon: 'tiktok.svg' },
] as const

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <span><span className="footer-dot" /> Proyecto para la comunidad UTTT</span>
      <span className="footer-tagline">Diseñado para conectar caminos <span className="footer-star">✳</span></span>
      <div className="footer-actions">
        <nav className="social-links" aria-label="Síguenos en nuestras redes">
          {socialLinks.map(({ name, network, href, icon }) => href
            ? <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} onClick={() => trackAnalyticsEvent(gaMeasurementId, { name: 'social_click', params: { network } })}><img src={`/assets/social/${icon}`} alt="" width="20" height="20" /></a>
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
