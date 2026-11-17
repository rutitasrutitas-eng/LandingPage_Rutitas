# Memoria de Rutitas Landing

**Estado actual (2026-11-16):** LANDING-003 / PR #9 fue fusionado a `main` el **2026-11-12** (18:03:18 UTC); merge commit `0481387180eab973b7c0416b073099638a3f7328`. LANDING-004 está en `fix/landing-004-estabilidad-accesibilidad`; su último commit confirmado es `d96103cb4a3c477c4e3e2cffd2ccec0a8b75b5e6`. LANDING-006 se desarrolla en `feature/landing-006-aviso-privacidad` basada en ese SHA; la página de privacidad y su documentación se actualizaron y probaron localmente, mientras la aprobación legal y el cotejo Android/Backend siguen pendientes. No se ha hecho push, abierto PR ni desplegado LANDING-006. La regla de Vercel para suprimir Preview aún no está confirmada ni configurada.
**Última actualización:** 2026-11-16.

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

**Actualización:** 2026-11-12. HEAD revisado antes del cambio: `5728d395ca10ccea552a8e318c64978e0f886595`. Commit correctivo: `54e0ecb1f4e0e03165afb794bed94a70d37d74c7`. Misma rama y PR #9; no se creó rama ni PR nuevos.

- Se eliminaron de Home la sección «Una vista de demostración», teléfono DEMO, tarjeta QR, componentes y estilos asociados. Se retiró la dependencia `qrcode.react`; el validador de URL oficial se mantiene en `src/config.ts`.
- Header, hero y footer ahora ocupan exactamente el viewport mediante el flex shell; el contenido no se oculta para simular que cabe. El menú móvil se superpone al documento y no aumenta su altura.
- Pruebas locales aprobadas después de `npm ci`: lint, typecheck, Vitest 14/14, Playwright 8/8 por cada uno de Chromium y mobile-chromium, build, SDD 22 documentos y `npm audit --audit-level=high` con 0 vulnerabilidades.
- Playwright registra siete viewports (1440×900, 1366×768, 768×1024, 390×844, 375×667, 320×568, 844×390). En todos `document` y `body` igualan viewport en ambos ejes, `scrollY` queda en 0, y header, intro, lema, subtítulo, dos CTAs, bloque de confianza y footer están dentro de la pantalla. Rueda, gesto táctil y scroll programático no desplazan Home; las páginas legales conservan scroll natural.
- Evidencia viewport (no `fullPage`) y JSON de mediciones, hashes y rutas en `docs/REPORTE_LANDING_003.md`. Carpeta externa `C:\Users\rafle\OneDrive\Desktop\anterior\_LANDING_003_Sin_Scroll_Evidencia_2026-11-12`.
- GitHub Actions run #16 (`43259000683`) para el commit correctivo terminó aprobado: Gitleaks, SDD, lint, typecheck, build, pruebas unitarias/integración, Playwright, auditoría de dependencias y publicación de evidencia, todos `success`. [Run #16](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/43259000683).
- La actualización documental se publicó en `b4392f1ea36ee1439f8ab1cbab84c961b24430cf`; GitHub Actions run #17 también terminó con todos los pasos `success`, incluido Gitleaks. [Run #17](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/43259639450).
- GitHub Actions run #18 (`43260267266`) verificó el SHA funcional actual `9a5bb2b599df696d5e34a87afcecef0557760c74`; el job completo terminó `success`, incluidos Gitleaks, SDD, lint, typecheck, build, pruebas unitarias/integración, Playwright y auditoría de dependencias. [Run #18](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/43260267266).
- Preview de Vercel: check del PR `success`; el bot reportó `Ready` para el deployment `GFjgK5jtrs5QG8Pdrz67ttshdVjE`, pero no se confirmó SHA ni inspeccionó contenido. La URL devuelve HTTP 302 a SSO y la API de despliegues devuelve HTTP 403 para el equipo; CLI no instalada, `.vercel/project.json` ausente. No se generaron enlaces temporales SSO.
- Estado al cierre de la actualización del 2026-11-12: se mantenían Google Play sin URL inventada, rutas legales, GA4 con consentimiento, logo original, botones/modales y PR #9 en Draft. Más tarde ese día el PR se fusionó a `main` (18:03:18 UTC, `0481387180eab973b7c0416b073099638a3f7328`). Constitución y textos legales siguen sin ratificar/aprobar.

**Actualización:** 2026-11-12. Trabajo en `feature/landing-003-hero-fotografico`, basado en `main` `46522503f38c99b136948e7da1adf491207128f7`.

- Rediseño responsive inicial con fotografía limpia del kit, gradiente navy, logo oficial y textos exactos; la sección DEMO/QR de esa primera versión se retiró en la corrección de no-scroll arriba.
- Logo `public/assets/rutitas-logo.png` conservado byte a byte: SHA-256 `6D2468E8D51E42BAB39435D8AF584D9F2AF7DF480299A35022882A0F57114CEC`. Derivados de foto: desktop WebP `6B58B2657A08DEEA52AA6608D1A84334B9333647C43EDF0670449A9577642EA9`, móvil WebP `F10C66D21926B6A1345F95C3DC8782209EF965F35D34015FC60FE66554C886F7`, JPEG `959CD286F3507A8D35619DFF8BC7B04E989F0722775EDDB3A7C7055A54E1552B` (coinciden con el manifiesto del kit).
- `npm ci`, lint, typecheck, Vitest 14/14, Playwright 10/10, build, SDD (22 documentos) y `npm audit` (0 vulnerabilidades) pasan localmente. Viewports E2E: 1440×900, 1366×768, 768×1024, 390×844 y 320×568. Rutas legales con navegación/recarga directa verificadas localmente.
- Capturas inspeccionadas: `C:\Users\rafle\OneDrive\Desktop\anterior\_LANDING_003_Evidencia_2026-11-12\LANDING_003_desktop.png` y `...\LANDING_003_mobile.png`.
- Informe: `docs/REPORTE_LANDING_003.md`; especificación, plan, tareas y checklist: `specs/003-landing-hero-fotografico/`.
- Estado histórico al inicio del 2026-11-12: commit de implementación `a930de11b32c3397468c24773ed290055a7364eb`; rama `feature/landing-003-hero-fotografico`; PR #9 era Draft y aún no se había fusionado. Estado actual: PR #9 fusionado a `main` el 2026-11-12 a las 18:03:18 UTC, commit de integración `0481387180eab973b7c0416b073099638a3f7328`.
- GitHub Actions run #11 (`43248682077`) pasó para el commit de implementación, incluido Gitleaks, SDD, lint, typecheck, build, Vitest, Playwright y `npm audit`: https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/43248682077.
- GitHub Actions run #12 (`43249355774`) pasó para la cabeza actual `b58c3996c800a73bcb6f48985e6662725c796b16`, incluido Gitleaks, SDD, lint, typecheck, build, Vitest, Playwright y `npm audit`: https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/43249355774.
- GitHub Actions run #13 (`43249974422`) pasó para `6b1401bd642f0fdc6271076695fb2df19ba37c8f`, incluido Gitleaks, SDD, lint, typecheck, build, Vitest, Playwright y `npm audit`: https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/43249974422.
- GitHub Actions run #14 (`43250430751`) pasó para `19ac7d1e52f9600d80327141299f14d4e5f04c6a`, incluido Gitleaks, SDD, lint, typecheck, build, Vitest, Playwright y `npm audit`: https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/43250430751.
- Vercel Bot reporta `Ready` para el deployment `HULbwSXtW1xyDmof1wDb38y7uCpZ`: https://landing-page-rutitas-git-feature-lan-6c6573-rutitasrutitas-8977.vercel.app/. No se confirmó el SHA exacto del deployment y no se pudo inspeccionar su contenido ni rutas legales: el conector devuelve 403 para `dxrxxgsos-projects` (`team_y4UzDPbxO9438fV2gd6GolFA`). El usuario señaló que el enlace nuevo de autorización aparecía expirado; no se modificaron settings de proyecto ni producción.
- Se mantiene «Próximamente», sin URL de Google Play; no se añadieron teléfonos al tablero. Analytics, rutas legales, valores de configuración y requisitos LANDING-001/002 permanecen sin cambios funcionales. Constitución continúa `PENDIENTE_RATIFICACION`; textos legales siguen sin aprobación automática.

## Información que no se debe guardar aquí

No registrar secretos, claves, correos privados, tokens, identificadores de usuarios, datos de salud, ubicaciones o datos reales de estudiantes. Las credenciales/valores remotos se configuran fuera del repo por un administrador.

## Verificación de Vercel — 2026-11-12

- La sesión CLI estaba activa como `rutitasrutitas-8977`; el equipo `rutitasrutitas-8977` (`team_DkoPaNhiPIS1xwsaaVJbkMOO`) estaba disponible en el scope.
- Se vinculó localmente el proyecto existente `landing-page-rutitas` (`prj_VPzi04e6hKw3Vgbfua2KesKGlhDz`). El ID escrito en la solicitud terminaba en `eso`, pero ese ID no corresponde al proyecto; se confirmó y utilizó el ID real del proyecto existente, sin crear uno nuevo. `.vercel/project.json` es local e ignorado por Git. `.env.local` contiene configuración de sesión local, no se leyó ni se publicó.
- Deployment Preview `dpl_FdcYSUnk7iH7djoQZvGjsaxH9kCk` está `READY`, asociado a `feature/landing-003-hero-fotografico`, PR #9 y SHA exacto `9a5bb2b599df696d5e34a87afcecef0557760c74`. URL: https://landing-page-rutitas-qxzwr4u64-rutitasrutitas-8977.vercel.app/.
- En Edge con la sesión autorizada, `/`, `/privacidad` y `/eliminar-cuenta` renderizaron contenido de Rutitas, sin pantalla de inicio de sesión. La portada mostró el logo, navegación, eslogan y subtítulo exactos, los dos botones, el footer y los enlaces legales. Las dos rutas legales permitieron su desplazamiento natural.
- En escritorio (~1050×792) y móvil emulado (390×844), el desplazamiento vertical y horizontal no movió la portada. En móvil se vieron completos lema, subtítulo, CTAs y footer. Se comprobó además el modal del CTA y el menú móvil.
- Durante una primera lectura CLI, Vercel creó automáticamente una excepción temporal de bypass. Se revocó inmediatamente; después se confirmó que no quedaban entradas de bypass y que la protección SSO global seguía activa (`all_except_custom_domains`) con protección de forks. No se volvió a usar `vercel curl`.
- Registro histórico del 2026-11-12: el deployment observado fue una Preview automática; en ese momento el PR no estaba fusionado. El PR #9 se fusionó posteriormente a `main` el 2026-11-16 (`0481387180eab973b7c0416b073099638a3f7328`).
- Capturas de esta revisión se mostraron en la sesión de trabajo, pero no se guardaron como archivos. Las capturas locales de la validación automatizada sin scroll permanecen en la ruta externa listada en `docs/REPORTE_LANDING_003.md`.
- Pendientes del proyecto: aprobación humana de textos legales, mecanismo real de eliminación de cuentas, ID/validación de GA4 y URL oficial de Google Play. Constitución y textos legales no fueron ratificados ni aprobados.
- Estado funcional verificado: la sección DEMO, el teléfono y el QR se eliminaron por completo y no se reubicaron. Playwright cubre siete viewports sin scroll; Vitest 14/14 y Playwright 8/8 en Chromium y 8/8 en mobile-chromium. `npm audit` reportó cero vulnerabilidades.

## LANDING-004 — estabilidad y accesibilidad

- La línea base de `main` no tenía cambios locales y `origin/main` coincidía en `0481387180eab973b7c0416b073099638a3f7328`. Los textos operativos medían 7–10 CSS px en algunos breakpoints, el menú móvil no cerraba con Escape y los elementos de fondo no estaban inertes mientras el modal figuraba como abierto.
- Se elevaron esos textos a mínimo 12 CSS px, el tagline del footer puede envolver en pantallas angostas, el menú cierra con Escape y devuelve foco; modales aíslan el fondo con `inert` y permanecen como elementos hermanos.
- Revalidación `npm ci`, lint, typecheck, build, SDD y audit aprobados; Vitest 16/16 y Playwright 8/8. Playwright probó 7 resoluciones LANDING-003 y viewport adicional 720×450 como equivalencia aproximada de zoom 200%; todas caben sin scroll ni recorte. Consentimiento de Analytics probado con ID sintético, sin eventos de red. Detalle: `docs/REPORTE_LANDING_004.md` y `docs/pruebas.md`.
- Dependabot PR #5 falla `npm ci` porque plugin React 6 exige Vite 8; PR #6 por peer TS `<6.1` de typescript-eslint; PR #7 porque plugin React 4 no acepta Vite 8. PR #3 (acción de artefactos) y #4 (jsdom) muestran check de landing exitoso; no se mezclaron ni fusionaron actualizaciones.
- Validación local aprobada: `npm ci`, lint, typecheck, build, SDD y audit; Vitest 16/16; Playwright 8/8; audit 0 vulnerabilidades. No cambiaron dependencias.
- La revisión detectó que Analytics permanecía fuera del contenedor inerte y sus z-index superaban al backdrop. La corrección coloca Analytics dentro de `.site-shell`, eleva el backdrop a z-index 1000, mantiene foco dentro del diálogo y permite scroll vertical si aumenta el contenido.
- Evidencia final local: lint/typecheck/build/SDD/audit exit 0; Vitest 16/16; `npm run test:e2e` 12/12 pasadas con 2 omisiones intencionales por falta del ID sintético, más prueba dirigida con `VITE_GA_MEASUREMENT_ID=G-ABC1234567` 6/6 pasadas en Chromium y mobile-chromium. Contraste, retorno de foco, Analytics inerte y texto ampliado probados. Detalle en `docs/pruebas.md` y `docs/REPORTE_LANDING_004.md`.
- No se probó el zoom nativo del navegador; se probaron viewports reducidos y texto CSS al doble de su tamaño computado. CI remoto no ejecutado. No se hizo push ni PR según la instrucción; Vercel y producción no se alteraron.

## LANDING-005 — presentación del proyecto — 2026-11-17

- Trabajo separado en `feature/landing-005-presentacion`, basada en LANDING-004 `d96103cb4a3c477c4e3e2cffd2ccec0a8b75b5e6`; se mantuvo `main` intacta.
- La portada mantiene su fotografía, logotipo, paleta, composición y CTA. El contenido presenta una propuesta de movilidad compartida dirigida inicialmente a la comunidad UTTT. El piloto está previsto sujeto a validación; no se afirma afiliación, autorización ni operación de la Universidad.
- Se incorporaron tres etapas previstas, límites de disponibilidad/seguridad y diez FAQ accesibles dentro del diálogo existente. Metadatos corregidos para no prometer QR ni descarga.
- Cotejo de solo lectura: Backend `main` `a95e62e2f0f9fbde46af0144c9fb89c858670c94`, Android `feature/integracion-android-ci-cd` `4b2ea8d10f4dbc94830db515a65dd3d00c6a66ad`. El Android revisado tiene `DEMO_MODE=true`; no se confirmó su integración con el Backend ni disponibilidad pública. El detalle está en `docs/REPORTE_LANDING_005.md`.
- Verificación local LANDING-005: `npm ci`, lint, typecheck, build, SDD, audit y diff whitespace exit 0; Vitest 17/17 y Playwright 16 pasadas con 2 omisiones intencionales sin ID sintético. El test Playwright cubre siete viewports y FAQ por teclado. Zoom nativo, CI, Preview, publicación, Play, Analytics real y aprobación del piloto no se ejecutaron.
- La revisión legal sigue pendiente; no se incorporan responsables ni contactos inventados. Constitución `PENDIENTE_RATIFICACION` y producción intactas.

## LANDING-006 — aviso de privacidad y Analytics — 2026-11-17

- El diseño de `/privacidad` conserva el paquete integrado. El borrador distingue el sitio estático, datos del Android DEMO en Room y código Backend no desplegado confirmado. `/eliminar-cuenta` distingue baja local en Android de eliminación remota no acreditada; no hay formulario.
- Se cotejaron solo en lectura Backend `main` `a95e62e2f0f9fbde46af0144c9fb89c858670c94` y Android `feature/integracion-android-ci-cd` `4b2ea8d10f4dbc94830db515a65dd3d00c6a66ad`. `docs/VALIDACIONES_PRIVACIDAD.md` contiene detalles; Android `main` es documentación y no debe confundirse con la rama de implementación.
- La prueba exploratoria encontró que el control fijo de preferencias Analytics tapaba enlaces legales en viewport 320×568. Se movió el control al footer. Prueba E2E completa con ID sintético `G-SYNTHETIC123`: 18/18 pasadas; el test Analytics bloquea solicitudes externas. Sin ID: 16 pasadas/2 omisiones intencionales. Vitest 16/16; lint/tipos/build/SDD/audit y diff check aprobados.
- Pendientes: aprobación legal y Constitución `PENDIENTE_RATIFICACION`, responsables/contactos/finalidades/proveedores/retención reales, procedimiento remoto de baja, ficha Play, configuración remota GA4/Vercel y CI/Preview. No se modificó Android/Backend, Vercel remoto ni producción.

## LANDING-006 — primera integración (estado histórico al 2026-11-16)

La verificación técnica de repositorios que faltaba en esta primera pasada se completó el 2026-11-17; el estado actual es la sección “LANDING-006 — aviso de privacidad y Analytics” inmediatamente anterior. Las notas siguientes conservan el contexto inicial y quedan supersedidas donde hay diferencias.

- La rama `feature/landing-006-aviso-privacidad` se creó en un worktree independiente desde el commit confirmado de LANDING-004 `d96103cb4a3c477c4e3e2cffd2ccec0a8b75b5e6`. Se conservaron intactos los cambios locales y archivos `.diff` del checkout original.
- El paquete `Rutitas_aviso_privacidad_propuesta.zip` se recibió y extrajo fuera del repositorio en `../insumos`. Se integraron su componente React, estilos, borrador Markdown y checklist de validación; la portada no se modificó y `/eliminar-cuenta` continúa informativa, sin formulario ni mecanismo remoto ficticio.
- La página presenta una marca de Rutitas azul/blanco/amarillo, aviso de borrador, índice con anclas, skip-link, secciones semánticas, contacto pendiente, enlaces al inicio y eliminación. Analytics no cambió: requiere ID GA válido y consentimiento explícito.
- En aquella primera integración, los datos Android/Backend solo se describían a partir del paquete y el cotejo de repositorios quedaba pendiente. El cotejo de ramas/SHA se completó el 2026-11-17 y está documentado arriba; los hallazgos de esa revisión reemplazan esta limitación inicial.
- Validaciones LANDING-006 ejecutadas localmente y reportadas en `docs/pruebas.md` y `docs/REPORTE_LANDING_006.md`. Capturas Playwright escritorio y móvil: `test-results/landing006_privacidad_escritorio.png` y `test-results/landing006_privacidad_movil.png` (salidas ignoradas por Git).
- Aprobación legal humana pendiente: responsable/domicilio/régimen, contacto atendido, inventario real de datos, finalidades, proveedores/transferencias, retención, controles operativos, eliminación completa y fecha efectiva. También falta ratificar la Constitución SDD. CI remoto y Preview no ejecutados; no hubo push, PR ni despliegue.
