# Memoria de Rutitas Landing

**Estado de la iniciativa:** cambios locales implementados; revisión de Preview, datos legales y ratificación humana pendientes.
**Última actualización:** 2026-11-05.

## Hechos confirmados en el repo

- Landing React 19 + TypeScript 5.7 + Vite 6, con estilos CSS propios.
- El mockup está rotulado DEMO; el proyecto informa que la app sigue en desarrollo.
- `VITE_APP_URL` estaba vacío; la tarjeta QR ya muestra «Muy pronto» sin enlace.
- En la auditoría inicial no se encontraron rutas legales, formularios, backend, endpoint de borrado, GA4 ni URL de Google Play.
- La producción existente sirve la portada en `landing-page-rutitas.vercel.app`; la comprobación pública de 2026-11-05 mostró `404 NOT_FOUND` en `/privacidad` y `/eliminar-cuenta`.

## Decisiones

- No completar datos legales ni declarar operativo un proceso ausente.
- La página de privacidad será borrador de validación; la de eliminación explicará que el mecanismo/canal está pendiente y no recogerá datos.
- GA4 no se cargará hasta disponer de Measurement ID válido y consentimiento explícito.
- El botón y QR de Play permanecerán desactivados hasta configurar una URL de tienda real.
- Se harán cambios incrementales, tests con lockfile y CI sin pasos de despliegue productivo.

## Resultados

- 2026-11-05: auditoría inicial completada en `docs/auditoria-inicial.md`.
- 2026-11-05: implementación de rutas legales, configuración opcional de Google Play/GA4, consentimiento, pruebas, CI y trazabilidad.
- 2026-11-05: revalidación LANDING-002, Vitest 11/11, Playwright 9 aprobadas/1 omitida, lint, typecheck, build y SDD pasan localmente.
- 2026-11-05: advisory GHSA-g3hv-75wg-m249 corregido con override `minimatch ^11.0.1`; lockfile resuelve 11.0.4; `npm audit` devuelve cero vulnerabilidades. `npm ci` limpio en carpeta temporal fuera de OneDrive pasa; el reintento directo en el repo falló por bloqueos Windows `EBUSY` al borrar `node_modules`.
- Pendiente: PRs separados para LANDING-001/002, ejecución remota de CI/Gitleaks, acceso de equipo Vercel y Preview, aprobación del aviso, proceso real de eliminación, Measurement ID/Realtime, URL Play y ratificación de Constitución.

## LANDING-003 — hero fotográfico

**Actualización:** 2026-11-12. Trabajo en `feature/landing-003-hero-fotografico`, basado en `main` `46522503f38c99b136948e7da1adf491207128f7`.

- Rediseño responsive con la fotografía limpia del kit, gradiente navy, logo oficial, lema y subtítulo exactos; el boceto no se publica como imagen. El mockup DEMO y el QR permanecen en una sección secundaria.
- Logo `public/assets/rutitas-logo.png` conservado byte a byte: SHA-256 `6D2468E8D51E42BAB39435D8AF584D9F2AF7DF480299A35022882A0F57114CEC`. Derivados de foto: desktop WebP `6B58B2657A08DEEA52AA6608D1A84334B9333647C43EDF0670449A9577642EA9`, móvil WebP `F10C66D21926B6A1345F95C3DC8782209EF965F35D34015FC60FE66554C886F7`, JPEG `959CD286F3507A8D35619DFF8BC7B04E989F0722775EDDB3A7C7055A54E1552B` (coinciden con el manifiesto del kit).
- `npm ci`, lint, typecheck, Vitest 14/14, Playwright 10/10, build, SDD (22 documentos) y `npm audit` (0 vulnerabilidades) pasan localmente. Viewports E2E: 1440×900, 1366×768, 768×1024, 390×844 y 320×568. Rutas legales con navegación/recarga directa verificadas localmente.
- Capturas inspeccionadas: `C:\Users\rafle\OneDrive\Desktop\anterior\_LANDING_003_Evidencia_2026-11-12\LANDING_003_desktop.png` y `...\LANDING_003_mobile.png`.
- Informe: `docs/REPORTE_LANDING_003.md`; especificación, plan, tareas y checklist: `specs/003-landing-hero-fotografico/`.
- Commit de implementación `a930de11b32c3397468c24773ed290055a7364eb` publicado en `feature/landing-003-hero-fotografico`; Draft PR #9 a `main`: https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/pull/9. No fusionado.
- GitHub Actions run #11 (`43248682077`) pasó completo, incluido Gitleaks, SDD, lint, typecheck, build, Vitest, Playwright y `npm audit`: https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/43248682077.
- Comentario de Vercel reporta Preview `Ready`: https://landing-page-rutitas-git-feature-lan-6c6573-rutitasrutitas-8977.vercel.app/. No se pudo inspeccionar su contenido ni rutas legales: el conector devuelve 403 para `dxrxxgsos-projects` (`team_y4UzDPbxO9438fV2gd6GolFA`). El enlace oficial de autorización fue generado y el usuario indicó que lo abriría/aprobaría; no se modificaron settings de proyecto ni producción.
- Se mantiene «Próximamente», sin URL de Google Play; no se añadieron teléfonos al tablero. Analytics, rutas legales, valores de configuración y requisitos LANDING-001/002 permanecen sin cambios funcionales. Constitución continúa `PENDIENTE_RATIFICACION`; textos legales siguen sin aprobación automática.

## Información que no se debe guardar aquí

No registrar secretos, claves, correos privados, tokens, identificadores de usuarios, datos de salud, ubicaciones o datos reales de estudiantes. Las credenciales/valores remotos se configuran fuera del repo por un administrador.
