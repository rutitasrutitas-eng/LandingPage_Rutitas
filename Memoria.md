# Memoria de Rutitas Landing

**Estado de la iniciativa:** corrección LANDING-003 implementada localmente en la rama publicada; suite local aprobada. Pendientes push, CI/Gitleaks de esta corrección e inspección autenticada de Preview.
**Última actualización:** 2026-11-12.

## Hechos confirmados en el repo

- Landing React 19 + TypeScript 5.7 + Vite 6, con estilos CSS propios.
- La sección de presentación de la app, teléfono DEMO y tarjeta QR existieron en la versión inicial de LANDING-003; la corrección actual los eliminó por el requisito de portada de una sola pantalla.
- `VITE_APP_URL` sigue vacío. `src/config.ts` conserva la validación de una URL oficial Play, pero la portada no muestra tarjeta, QR ni promoción de tienda; conserva «Próximamente».
- En la auditoría inicial no se encontraron rutas legales, formularios, backend, endpoint de borrado, GA4 ni URL de Google Play.
- La producción existente sirve la portada en `landing-page-rutitas.vercel.app`; la comprobación pública de 2026-11-05 mostró `404 NOT_FOUND` en `/privacidad` y `/eliminar-cuenta`.

## Decisiones

- No completar datos legales ni declarar operativo un proceso ausente.
- La página de privacidad será borrador de validación; la de eliminación explicará que el mecanismo/canal está pendiente y no recogerá datos.
- GA4 no se cargará hasta disponer de Measurement ID válido y consentimiento explícito.
- No se mostrará disponibilidad de Google Play sin una URL HTTPS oficial válida; la portada actual no renderiza botón ni QR de la tienda.
- Se harán cambios incrementales, tests con lockfile y CI sin pasos de despliegue productivo.

## Resultados

- 2026-11-05: auditoría inicial completada en `docs/auditoria-inicial.md`.
- 2026-11-05: implementación de rutas legales, configuración opcional de Google Play/GA4, consentimiento, pruebas, CI y trazabilidad.
- 2026-11-05: revalidación LANDING-002, Vitest 11/11, Playwright 9 aprobadas/1 omitida, lint, typecheck, build y SDD pasan localmente.
- 2026-11-05: advisory GHSA-g3hv-75wg-m249 corregido con override `minimatch ^11.0.1`; lockfile resuelve 11.0.4; `npm audit` devuelve cero vulnerabilidades. `npm ci` limpio en carpeta temporal fuera de OneDrive pasa; el reintento directo en el repo falló por bloqueos Windows `EBUSY` al borrar `node_modules`.
- Pendiente: inspección autenticada de Preview y confirmación del SHA desplegado; aprobación del aviso, proceso real de eliminación, Measurement ID/Realtime, URL Play y ratificación de Constitución.

## LANDING-003 — hero fotográfico

**Historial de la primera versión:** la rama `feature/landing-003-hero-fotografico` se creó desde `main` `46522503f38c99b136948e7da1adf491207128f7`; implementación `a930de11b32c3397468c24773ed290055a7364eb`, Draft PR #9. La primera versión sí tenía una sección DEMO/QR y E2E anterior que solo comprobaba el overflow horizontal; los runs #11–#15 validaron esa versión, no el requisito de no-scroll descrito a continuación.

## LANDING-003 — corrección de portada sin scroll

**Actualización:** 2026-11-12. HEAD revisado antes del cambio: `5728d395ca10ccea552a8e318c64978e0f886595`. Misma rama/PR #9; no se creó una rama ni PR nuevos.

- Se eliminaron de Home la sección «Una vista de demostración», teléfono DEMO, tarjeta QR, componentes y estilos asociados. Se retiró la dependencia `qrcode.react`; el validador de URL oficial se mantiene en `src/config.ts`.
- Header, hero y footer ahora ocupan exactamente el viewport mediante el flex shell; el contenido no se oculta para simular que cabe. El menú móvil se superpone al documento y no aumenta su altura.
- Pruebas locales aprobadas después de `npm ci`: lint, typecheck, Vitest 14/14, Playwright 8/8 por cada uno de Chromium y mobile-chromium, build, SDD 22 documentos y `npm audit --audit-level=high` con 0 vulnerabilidades.
- Playwright registra siete viewports (1440×900, 1366×768, 768×1024, 390×844, 375×667, 320×568, 844×390). En todos `document` y `body` igualan viewport en ambos ejes, `scrollY` queda en 0, y header, intro, lema, subtítulo, dos CTAs, bloque de confianza y footer están dentro de la pantalla. Rueda, gesto táctil y scroll programático no desplazan Home; las páginas legales conservan scroll natural.
- Evidencia viewport (no `fullPage`) y JSON de mediciones, hashes y rutas en `docs/REPORTE_LANDING_003.md`. Carpeta externa `C:\Users\rafle\OneDrive\Desktop\anterior\_LANDING_003_Sin_Scroll_Evidencia_2026-11-12`.
- CI/Gitleaks de la nueva corrección: pendiente de publicar el commit. Preview de Vercel: no verificada; CLI no instalada, `.vercel/project.json` ausente y Dashboard no accesible desde la sesión de escritorio. No se generaron enlaces temporales SSO.
- Se mantiene Google Play sin URL inventada, rutas legales, GA4 con consentimiento, logo original, botones/modales y PR Draft #9 sin fusionar. Constitución y textos legales siguen sin ratificar/aprobar.

**Actualización:** 2026-11-12. Trabajo en `feature/landing-003-hero-fotografico`, basado en `main` `46522503f38c99b136948e7da1adf491207128f7`.

- Rediseño responsive inicial con fotografía limpia del kit, gradiente navy, logo oficial y textos exactos; la sección DEMO/QR de esa primera versión se retiró en la corrección de no-scroll arriba.
- Logo `public/assets/rutitas-logo.png` conservado byte a byte: SHA-256 `6D2468E8D51E42BAB39435D8AF584D9F2AF7DF480299A35022882A0F57114CEC`. Derivados de foto: desktop WebP `6B58B2657A08DEEA52AA6608D1A84334B9333647C43EDF0670449A9577642EA9`, móvil WebP `F10C66D21926B6A1345F95C3DC8782209EF965F35D34015FC60FE66554C886F7`, JPEG `959CD286F3507A8D35619DFF8BC7B04E989F0722775EDDB3A7C7055A54E1552B` (coinciden con el manifiesto del kit).
- `npm ci`, lint, typecheck, Vitest 14/14, Playwright 10/10, build, SDD (22 documentos) y `npm audit` (0 vulnerabilidades) pasan localmente. Viewports E2E: 1440×900, 1366×768, 768×1024, 390×844 y 320×568. Rutas legales con navegación/recarga directa verificadas localmente.
- Capturas inspeccionadas: `C:\Users\rafle\OneDrive\Desktop\anterior\_LANDING_003_Evidencia_2026-11-12\LANDING_003_desktop.png` y `...\LANDING_003_mobile.png`.
- Informe: `docs/REPORTE_LANDING_003.md`; especificación, plan, tareas y checklist: `specs/003-landing-hero-fotografico/`.
- Commit de implementación `a930de11b32c3397468c24773ed290055a7364eb`; rama `feature/landing-003-hero-fotografico`. Draft PR #9 a `main`: https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/pull/9. No fusionado.
- GitHub Actions run #11 (`43248682077`) pasó para el commit de implementación, incluido Gitleaks, SDD, lint, typecheck, build, Vitest, Playwright y `npm audit`: https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/43248682077.
- GitHub Actions run #12 (`43249355774`) pasó para la cabeza actual `b58c3996c800a73bcb6f48985e6662725c796b16`, incluido Gitleaks, SDD, lint, typecheck, build, Vitest, Playwright y `npm audit`: https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/43249355774.
- GitHub Actions run #13 (`43249974422`) pasó para `6b1401bd642f0fdc6271076695fb2df19ba37c8f`, incluido Gitleaks, SDD, lint, typecheck, build, Vitest, Playwright y `npm audit`: https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/43249974422.
- GitHub Actions run #14 (`43250430751`) pasó para `19ac7d1e52f9600d80327141299f14d4e5f04c6a`, incluido Gitleaks, SDD, lint, typecheck, build, Vitest, Playwright y `npm audit`: https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/43250430751.
- Vercel Bot reporta `Ready` para el deployment `HULbwSXtW1xyDmof1wDb38y7uCpZ`: https://landing-page-rutitas-git-feature-lan-6c6573-rutitasrutitas-8977.vercel.app/. No se confirmó el SHA exacto del deployment y no se pudo inspeccionar su contenido ni rutas legales: el conector devuelve 403 para `dxrxxgsos-projects` (`team_y4UzDPbxO9438fV2gd6GolFA`). El usuario señaló que el enlace nuevo de autorización aparecía expirado; no se modificaron settings de proyecto ni producción.
- Se mantiene «Próximamente», sin URL de Google Play; no se añadieron teléfonos al tablero. Analytics, rutas legales, valores de configuración y requisitos LANDING-001/002 permanecen sin cambios funcionales. Constitución continúa `PENDIENTE_RATIFICACION`; textos legales siguen sin aprobación automática.

## Información que no se debe guardar aquí

No registrar secretos, claves, correos privados, tokens, identificadores de usuarios, datos de salud, ubicaciones o datos reales de estudiantes. Las credenciales/valores remotos se configuran fuera del repo por un administrador.
