# LANDING-014 — Analytics, redes, SEO y Search Console

- **Fecha:** 2026-11-19
- **Repositorio local:** `rutitasrutitas-eng/LandingPage_Rutitas`
- **Rama:** `feature/landing-integracion-final-local`
**HEAD base de LANDING-011–014:** `ced61fff15c31001af03621bbd276c7e7e82cdb7`
**Estado:** implementación integrada en commits locales, lista para revisión. No publicada.

## Resumen

- El footer muestra cinco logotipos SVG locales en blanco sobre navy y cinco enlaces HTTPS confirmados: Facebook, Instagram, YouTube, X y TikTok.
- `index.html` incluye metadatos estáticos de la portada; las rutas SPA actualizan título, descripción, canonical, Open Graph, X y robots al renderizar. Además, `vercel.json` declara `X-Robots-Tag: noindex, follow` para privacidad/eliminación con y sin slash final. La declaración se probó localmente como configuración, no contra respuestas HTTP de Vercel.
- `robots.txt` referencia un sitemap que contiene únicamente la portada indexable. Las páginas legales permanecen fuera del sitemap.
- El archivo de verificación de Search Console se copió desde Descargas sin cambiar sus bytes, se incluyó en `dist` y se sirvió localmente.
- La analítica conserva su consentimiento opt-in y revocación. El ID real `G-MKN6YXXZ8Y` quedó deliberadamente sin configurar; la prueba utiliza solo `G-SYNTHETIC123` y bloquea la solicitud antes de salir del navegador. No se instaló GTM.

## Archivos de LANDING-014

**Código y recursos:** `index.html`, `src/App.tsx`, `src/seo.ts`, `src/SiteFooter.tsx`, `src/styles.css`, `playwright.config.ts`, `src/App.test.tsx`, `e2e/landing.spec.ts`, `e2e/analytics-synthetic.spec.ts`, `public/robots.txt`, `public/sitemap.xml`, `public/googlee72a4fcd7bd338a1.html` y `public/assets/social/{facebook,instagram,youtube,x,tiktok}.svg`.

**Trazabilidad/evidencia:** `specs/001-landing-compliance/{checklist.md,tasks.md}`, `docs/matriz-trazabilidad.md`, `docs/pruebas.md`, `Memoria.md`, `LANDING_014_ANALYTICS_REDES_SEO.md` y `evidence/landing-014/`.

El árbol acumuló la documentación de LANDING-011/012/013, preservada en commits previos. LANDING-014 modifica `vercel.json` únicamente para las cuatro reglas `X-Robots-Tag`, conservando el rewrite SPA. No se modificaron dependencias, lockfile, `.env.local`, variables remotas ni código Android/Backend.

## Resultados reproducibles

| Verificación | Resultado |
|---|---|
| `npm run lint` | Exit 0, sin warnings. |
| `npm run typecheck` | Exit 0. |
| `npm run test -- --reporter=dot` | 19/19 aprobadas en 2 archivos. |
| `npm run test:e2e` | 27 aprobadas, 5 omitidas intencionalmente, 0 fallidas; 32 casos entre Chromium y mobile-Chromium. Dos omisiones por la prueba GA sintética separada, dos por aislamiento de Analytics que requiere ID sintético, y una por la regresión de foto desktop-only. |
| Prueba GA aislada: `$env:LANDING_E2E_GA_SYNTHETIC='1'; npx playwright test e2e/analytics-synthetic.spec.ts --project=chromium` | 1/1 aprobada. `G-SYNTHETIC123`; el request de Google se interceptó y recibió un mock local. Se comprobó consentimiento, revocación, exactamente un `page_view`, señales publicitarias desactivadas y ausencia de GTM. |
| `npm run build` | Exit 0; Vite 6.4.5, 37 módulos, JS 263.67 kB, CSS 21.48 kB. |
| `npm run sdd:verify` | Exit 0; 30 documentos, 25 requisitos 001 y trazabilidad de 14/8/9 requisitos 002/003/004. |
| `npm run test:vercel-headers` | Exit 0; verifica JSON, los cuatro patrones exactos, el valor de header, ausencia de `noindex` en Home y conservación del rewrite. No ejecuta solicitudes contra Vercel. |
| `npm audit --audit-level=high` | Exit 0; el audit local reportó 0 vulnerabilidades el 2026-11-19. No se cambiaron dependencias. El estado formal del riesgo heredado de `GHSA-fc5q-39xc-vjpf` no se da por aceptado/cerrado sin conciliación humana con LANDING-011. |
| `git diff --check` | Exit 0, sin errores de whitespace. |

Las pruebas cubren los cinco enlaces oficiales HTTPS de redes sociales, navegación de teclado, metadatos SPA, recursos robots/sitemap y el HTML GSC. Las pruebas responsive reutilizan las siete resoluciones de aceptación ya existentes; mantienen la portada dentro de una pantalla. La inspección visual encontró iconos oscuros en el footer; se corrigieron y el test final verifica recursos SVG blancos, además de producir nuevas capturas.

## Capturas

- Escritorio 1440×900: `evidence/landing-014/landing-home-desktop.png`.
- Móvil 390×844: `evidence/landing-014/landing-home-mobile.png`.
- Preguntas frecuentes: `evidence/landing-014/landing-faq-desktop.png` y `landing-faq-mobile.png`.
- Borrador de privacidad: `evidence/landing-014/landing-privacy-desktop.png` y `landing-privacy-mobile.png`.

Las imágenes fueron generadas por Playwright en la ejecución local y revisadas visualmente para escritorio y móvil. No representan una Preview pública.

## Estado de Analytics y proveedores

- **Implementado:** código de consentimiento opt-in, rechazo, preferencias/revocación, una sola vista de página por ruta completa y señales publicitarias desactivadas.
- **Probado localmente:** flujo con identificador sintético y request interceptado. No se contactó un endpoint de medición real.
- **No activado:** el ID proporcionado `G-MKN6YXXZ8Y` no está en `.env.example`, `.env.local` ni Vercel; no se modificaron variables remotas. `.env.example` mantiene el campo vacío.
- **GTM:** inactivo; `GTM-NFJDHQXM` no se instaló y no hay segundo sistema de medición.
- **Pendiente:** confirmar propiedad, configuración real, eventos y texto legal antes de habilitar GA4. Aviso de privacidad sigue **BORRADOR NO RATIFICADO**.

## SEO y Search Console: límites observados

El canonical de portada usa `https://landing-page-rutitas.vercel.app/`; Open Graph y X usan la fotografía existente. El mapa solo enumera la portada porque las páginas legales son borradores y la eliminación no es operativa. No se agregaron datos estructurados que presupongan entidad legal, organización confirmada o ficha de tienda.

El HTML estático de fallback representa la portada. Al entrar en rutas legales, JavaScript cambia sus metadatos a `noindex,follow`; un crawler sin ejecución JavaScript puede ver metadatos iniciales de Home. Por eso no se afirma que la exclusión de rutas legales sea universal. Para garantizar metadata por ruta se requeriría una decisión técnica de prerender/SSR o reglas del host, fuera de este alcance y sin modificar Vercel.

**Corrección local de LANDING-015:** `vercel.json` declara `X-Robots-Tag: noindex, follow` para `/privacidad`, `/privacidad/`, `/eliminar-cuenta` y `/eliminar-cuenta/`, conservando intacto el rewrite SPA. La prueba local valida la estructura y los patrones. No hubo Preview ni despliegue; por tanto, la respuesta desplegada, la precedencia del host y la propagación del header a través del rewrite no se han comprobado. Requiere verificación HTTP en una publicación expresamente autorizada antes de afirmar que crawlers sin JavaScript reciben la directiva. Vercel documenta headers por patrón de ruta ([documentación `vercel.json`](https://vercel.com/docs/project-configuration/vercel-json)); Google reconoce `X-Robots-Tag` como directiva de indexación HTTP ([documentación de Google Search Central](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)).

El archivo `googlee72a4fcd7bd338a1.html` conserva el contenido exacto `google-site-verification: googlee72a4fcd7bd338a1.html`. SHA-256 del original, `public` y `dist`: `E2A8335CC2E0C53494BA450C479DE8176EEED44F20016A855758BFE7EEB10057`. El Preview local respondió HTTP 200 y entregó el cuerpo exacto. Google Search Console no se verificó, no se pulsó «Verificar» y no se envió sitemap.

## Pendientes y riesgos

- No hubo CI remoto, push, PR, merge, Preview ni despliegue. Los commits locales LANDING-011–014 aparecen en el inventario de consolidación; ningún resultado local se declara validado en CI.
- No activar el ID real ni probar eventos hasta una autorización independiente, confirmación de propiedad y revisión de privacidad. La política de costo adicional de Rutitas continúa en $0 MXN; esta entrega no generó cargos conocidos ni consumió créditos.
- Search Console y publicación del sitemap requieren un despliegue autorizado y la acción humana de verificación.
- El header HTTP quedó declarado localmente; falta comprobar la respuesta real de Vercel a las cuatro rutas y el comportamiento efectivo con el rewrite para cerrar el caso de crawlers sin JS.
- **Conciliación `picomatch`:** LANDING-011 registró el 2026-11-18 `npm audit --json` exit 1 con 11 entradas High del mismo advisory `GHSA-fc5q-39xc-vjpf` sobre `picomatch@4.0.7`; eran rutas múltiples de un advisory raíz y el árbol de producción estaba limpio. El audit local del 2026-11-19 reportó 0 vulnerabilidades. No cambiaron `package.json` ni `package-lock.json`, por lo que la discrepancia no demuestra que el paquete fuera corregido; puede reflejar un cambio del catálogo/advisory del audit o la fuente consultada, no una mitigación de código demostrada. No se actualizó/aceptó formalmente el riesgo ni se declaró resuelto. Antes de release el responsable de seguridad debe repetir `npm audit --json`, comparar el resultado con `npm ls picomatch --all`, revisar el advisory vigente y registrar explícitamente cierre o aceptación humana. El lockfile se conserva.
- Permanecen pendientes la revisión legal final, la ratificación de la Constitución SDD y la validación del aviso de privacidad.

## Diff y estado de integración

El inventario consolidado, plan de commits realizados y revisión de archivos/secretos está en `LANDING_011-014_INVENTARIO_REVISION.md`. El diff histórico acumulado fuera de la raíz del repo es `../LANDING_011-014_REVIEW.diff`; no contiene los commits correctivos LANDING-015 y debe tratarse como evidencia histórica, no como diff final actualizado.

**Siguiente paso permitido:** revisión humana del diff, del riesgo heredado, de los límites de indexación y del consentimiento. Cualquier publicación, verificación de propiedad o activación de GA4 queda pendiente de autorización explícita.

## Addendum de YouTube — 2026-11-19

Coordinación proporcionó el [canal público de YouTube](https://www.youtube.com/channel/UCNam3EUfsyTzmWEb5AViW2A). La consulta pública directa respondió HTTP 200; el HTML identifica `og:title` y `itemprop=name` como **Rutitas UTTT**, y el identificador publicado coincide con el de la URL. Esto confirma la correspondencia por el nombre público declarado del canal. No se pudo verificar visualmente que su avatar coincida con el logo de la Landing; no se afirma esa comprobación.

Se habilitó el logotipo local de YouTube como quinto enlace del footer. Las pruebas unitarias y E2E ahora verifican los cinco destinos exactos, HTTPS, etiquetas accesibles, recursos SVG locales y posibilidad de foco por teclado. Se mantuvieron sin cambios Analytics, GTM, GSC, SEO y Vercel. Se regeneraron las capturas finales. Validaciones afectadas: Vitest 19/19; Playwright 27 passed/5 skips intencionales; prueba GA sintética dirigida 1/1; lint, typecheck, build, SDD y diff-check exit 0. No se repitió `npm audit` porque no se tocaron dependencias; su último resultado documentado en la validación base de LANDING-014 fue exit 0, cero hallazgos. No hubo operaciones remotas de repositorio ni despliegue.
