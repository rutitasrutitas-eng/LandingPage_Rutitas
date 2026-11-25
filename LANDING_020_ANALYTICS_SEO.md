# LANDING-020 — GA4, Search Console, SEO y cierre de privacidad

**Fecha:** 2026-11-25

**Rama de trabajo:** `feature/landing-020-ga4-seo`

**Base:** `c29543ca96d6244f1401b6db24b43c03a87cb931` (`main`)
**Estado:** validación local aprobada; commit, push y PR Draft autorizados por la excepción LANDING-020; merge y publicación Production no autorizados.

## Cambios implementados

- Eventos tipados `primary_cta_click`, `faq_open` y `social_click` solo representan acciones ya existentes. Requieren consentimiento afirmativo y un Measurement ID válido; usan categorías estáticas, sin texto libre, PII ni parámetros URL.
- El ID real `G-MKN6YXXZ8Y` no se configura: `.env.example` conserva `VITE_GA_MEASUREMENT_ID=` vacío. GA4 no recibe datos desde esta Landing y GTM `GTM-NFJDHQXM` no tiene una etiqueta publicada.
- Se añadió JSON-LD `WebSite` factual y se conservaron metadatos, canonical, sitemap de Home, robots y `noindex` para páginas legales.
- El aviso candidato de `/privacidad` distingue Landing, Android DEMO, Backend reportado y Google Analytics/Search Console/Play/Maps; conserva la etiqueta **BORRADOR NO RATIFICADO**. El borrador no afirma que Backend reciba datos reales ni que las reservas, viajes multiusuario o eliminación remota estén operativos.
- La cuenta oficial figura como Administradora efectiva de GA4 y GTM. GA4: propiedad `565238699`, flujo `G-MKN6YXXZ8Y`; Medición mejorada desactivada; redacción de correo y 17 nombres de parámetros URL guardada. El flujo no muestra datos recibidos. Las funciones publicitarias no se activaron.
- Se creó con autorización la propiedad URL-prefix de Search Console `https://landing-page-rutitas.vercel.app/`. El archivo nuevo de 53 bytes se conserva junto al archivo de verificación previo. SHA-256: `6B59D173822D769D76AE611CE4BB080778288DFD7D1004D5CB14EB88F88965CA`.
- La prueba con Vite Preview local comprobó HTTP 200, `text/html`, 53 bytes y cuerpo exacto `google-site-verification: google2565d67923084a99.html`. No se probó en un deployment con este cambio: Production aún no se publicó y Search Console no está verificada.
- Lighthouse señaló que el logo PNG de 634,149 bytes era mucho mayor que el tamaño mostrado y que la foto hero no era detectable desde el HTML inicial. Se añadió logo WebP de 28,342 bytes con el PNG original como fallback, dimensiones explícitas y preload responsivo para ambas variantes de la foto hero. Ahorro del logo: 605,807 bytes (~95.5 %), sin cambiar la composición visual.

## Evidencia de consolas y estado

| Servicio | Observado | Pendiente |
|---|---|---|
| GA4 | Cuenta Rutitas Universitarias; propiedad `565238699`; Measurement ID `G-MKN6YXXZ8Y`; acceso Admin oficial; Medición mejorada apagada; redacción de email y 17 parámetros URL guardada; sin datos recibidos. | Retención de eventos, Google Signals y personalización/Ads no se pudieron revisar en la sesión actual. No activar hasta inspeccionarlos y ratificar privacidad. |
| GTM | Contenedor `GTM-NFJDHQXM`; acceso Admin de cuenta oficial; sin etiqueta publicada en la vista revisada. | Sigue desactivado; no crear etiquetas/containers. |
| Search Console | Propiedad URL-prefix creada bajo `rutitas.rutitas@gmail.com`; token nuevo íntegro y probado localmente. | La propiedad no está verificada. No se envió sitemap, no se inspeccionó la portada ni se solicitó indexación. Requiere publicación del archivo y confirmación por Google. La creación de la propiedad puede iniciar recolección de Search Console aunque no esté verificada; no hay evidencia de informes/datos disponibles. |
| Vercel | En el control previo se informó `Only build production`; `.env.example` no contiene ID real. No se modificó configuración ni se activaron servicios. | Esta tarea no modifica variables ni despliega. Cualquier Preview automática se registrará, no se creará manualmente. |

No se encontró una sesión autenticada de Edge/Google en el inventario de ventanas al reintentar la lectura: solo estaba disponible una ventana de Brave no relacionada. Por ello, retención, Signals y Ads quedan **NO VERIFICADOS en esta revisión**; no se usaron credenciales ni se cambiaron ajustes.

## Validaciones locales ejecutadas

| Validación | Resultado |
|---|---|
| `npm run lint` | Exit 0. |
| `npm run typecheck` | Exit 0. |
| `npm run test` | 4 archivos, **21/21 pruebas aprobadas**. |
| `npm run test:e2e` | 32 casos, **27 aprobados, 5 omitidos intencionalmente, 0 fallidos**. |
| E2E sintética (`LANDING_E2E_GA_SYNTHETIC=1`) | **2/2 aprobadas**, Chromium y mobile-Chromium; ID sintético, requests gtag interceptadas localmente, sin petición exterior. |
| `npm run build` | Exit 0; Vite 6.4.5, 37 módulos, JS 262.31 kB / gzip 81.09 kB, CSS 21.48 kB / gzip 5.48 kB. |
| `npm run sdd:verify` | Exit 0; 30 documentos, 31 requisitos 001 y trazabilidad 14/8/9 para 002/003/004. |
| `npm run test:vercel-headers` | Exit 0; cuatro rutas legales, `noindex` y rewrite SPA preservados. Validación de configuración local, no respuesta HTTP de Vercel. |
| `npm audit --audit-level=high` | Exit 0; cero vulnerabilidades reportadas en esta ejecución. No hubo cambios de dependencias; esto no equivale a riesgo cero. |
| Lighthouse 13.6.0, build local | Desktop: Performance 100, Accessibility 100, Best Practices 100, SEO 100; LCP 0.6 s, CLS 0, TBT 0 ms. Mobile: 98, 100, 100, 100; LCP 2.4 s, CLS 0, TBT 0 ms. Los informes JSON están fuera del repositorio en `%TEMP%\rutitas-landing020-lighthouse\`. No representan Production. |
| `git diff --check` | Exit 0. Git notificó normalización LF/CRLF en algunos documentos. |

Una ejecución E2E inicial reutilizó un preview local antiguo que ocupaba el puerto 4173 y falló; se detuvo ese servidor y la ejecución completa volvió a pasar con el servidor Vite de Playwright. La ejecución sintética también pasó al usar ese servidor de pruebas, tras fallar al apuntar al preview sin variable sintética. No se ejecutó `npm ci`; `package.json` y `package-lock.json` permanecen sin cambios.

## Ratificación y límites de publicación

DaRa ratificó los nueve principios de la Constitución SDD el 2026-11-25. Se registró una excepción única que autoriza cambios LANDING-020, commit, push únicamente de `feature/landing-020-ga4-seo`, PR hacia `main`, CI normal y Preview automática si está disponible dentro del plan gratuito y sin cambiar configuración. La excepción no autoriza merge, Production, cambios Vercel, activar GA4/GTM ni operaciones futuras. `evidence/`, `LANDING_013.diff` y archivos ajenos quedan excluidos.

La ratificación es técnica, no aprobación del aviso ni de tratamientos personales. Para activar GA4 o publicar legalmente siguen pendientes: identidad legal y domicilio del responsable, finalidades/base aplicable, categorías/retención reales por sistema, proveedores/transferencias efectivos, derechos y canal/proceso de eliminación; revisión legal final. Android sigue en DEMO, los viajes y reservas multiusuario no operan y la eliminación remota continúa pendiente.

### Lista de acciones humanas antes de activar/publicar

1. Confirmar identidad legal y domicilio del responsable, y ratificar contacto, finalidades, categorías de datos, proveedores efectivos, plazos y derechos.
2. Confirmar mediante inspección de la cuenta GA4 la retención, Google Signals y configuración de personalización publicitaria; aprobar aviso/consentimiento antes de configurar el ID real.
3. Confirmar el procedimiento externo y operativo de eliminación de cuenta; el correo no inicia el plazo y Android DEMO solo borra localmente.
4. Revisar y ratificar legalmente `/privacidad` y `/eliminar-cuenta`; convertir el PR a Ready y decidir merge/publicación en una autorización independiente.

Search Console puede verificarse, enviar sitemap, inspeccionar Home y solicitar indexación solo después de que el token esté publicado correctamente y Google confirme la verificación. No se afirmará indexación sin observación de Google.

## Archivos principales de LANDING-020

Código: `src/analytics.ts`, `src/App.tsx`, `src/SiteFooter.tsx`, `src/PrivacyRutitas.tsx`, `src/LegalPages.tsx`, `src/AnalyticsConsent.tsx`, `index.html`, `public/assets/rutitas-logo.webp`, `public/google2565d67923084a99.html`.

Pruebas: `src/analytics.test.ts`, `src/AnalyticsInteractions.test.tsx`, `src/App.test.tsx`, `e2e/analytics-synthetic.spec.ts`, `e2e/landing.spec.ts`.
SDD/evidencia: Constitución, `AGENTS.md`, `Memoria.md`, `docs/matriz-trazabilidad.md`, `docs/pruebas.md`, `docs/APROBACION_LEGAL_PENDIENTE.md`, `docs/AVISO_PRIVACIDAD_RUTITAS_BORRADOR.md`, especificación/plan/tareas/checklist y este reporte.
