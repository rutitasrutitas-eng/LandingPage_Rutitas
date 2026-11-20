const SITE_ORIGIN = 'https://landing-page-rutitas.vercel.app'

type PageMetadata = {
  title: string
  description: string
  indexable: boolean
}

const pages: Record<string, PageMetadata> = {
  '/': {
    title: 'Rutitas — Tu comunidad, tu ruta',
    description: 'Rutitas es un proyecto universitario de movilidad compartida en desarrollo, pensado inicialmente para la comunidad UTTT. Conoce su propuesta y su estado actual.',
    indexable: true,
  },
  '/privacidad': {
    title: 'Aviso de privacidad — Rutitas',
    description: 'Consulta el borrador no ratificado del aviso de privacidad de Rutitas y los temas que siguen pendientes de validación.',
    indexable: false,
  },
  '/eliminar-cuenta': {
    title: 'Eliminación de cuenta — Rutitas',
    description: 'Consulta el estado no operativo del mecanismo de eliminación de cuentas de Rutitas y los pasos que requieren validación.',
    indexable: false,
  },
}

function setMeta(selector: string, attribute: 'content' | 'href', value: string) {
  let element = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector)
  if (!element) {
    const isLink = selector.startsWith('link[')
    element = document.createElement(isLink ? 'link' : 'meta')
    if (selector.includes('property=')) element.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] ?? '')
    if (selector.includes('name=')) element.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] ?? '')
    if (selector.includes('rel=')) element.setAttribute('rel', selector.match(/rel="([^"]+)"/)?.[1] ?? '')
    document.head.append(element)
  }
  element.setAttribute(attribute, value)
}

/** Updates client-side route metadata. Static HTML metadata remains the home fallback for non-JS crawlers. */
export function updatePageMetadata(path: string): void {
  const metadata = pages[path] ?? {
    title: 'Página no encontrada — Rutitas',
    description: 'La página solicitada no se encontró en el sitio de Rutitas.',
    indexable: false,
  }
  const canonical = `${SITE_ORIGIN}${path === '/' || path === '/privacidad' || path === '/eliminar-cuenta' ? path : '/'}`
  const image = `${SITE_ORIGIN}/assets/rutitas-auto-hero.jpg`

  document.title = metadata.title
  setMeta('meta[name="description"]', 'content', metadata.description)
  setMeta('link[rel="canonical"]', 'href', canonical)
  setMeta('meta[name="robots"]', 'content', metadata.indexable ? 'index,follow' : 'noindex,follow')
  setMeta('meta[property="og:title"]', 'content', metadata.title)
  setMeta('meta[property="og:description"]', 'content', metadata.description)
  setMeta('meta[property="og:url"]', 'content', canonical)
  setMeta('meta[property="og:image"]', 'content', image)
  setMeta('meta[name="twitter:title"]', 'content', metadata.title)
  setMeta('meta[name="twitter:description"]', 'content', metadata.description)
  setMeta('meta[name="twitter:image"]', 'content', image)
}
