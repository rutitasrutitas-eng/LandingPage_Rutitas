# Memoria de Rutitas Landing

**Estado actual (2026-11-19):** LANDING-003 / PR #9 fue fusionado a `main` el **2026-11-12**; merge commit `0481387180eab973b7c0416b073099638a3f7328`. LANDING-004/005/006 están integrados en `feature/landing-integracion-final-local`; `main` no se modificó. Android PR #9 (`75eb7ca…`) y PR #10 (`3642255…`) permanecen como dependencias previas; Backend PR #6 está fusionado en `main` (`a95e62e…`). El aviso legal continúa como borrador. Vercel Hobby, sin método de pago/facturas visibles, AI Gateway `$0.00`/Auto-reload Off y sin proyectos Priority asignados fue confirmado. El primer push autorizado quedó en `c11fcf1e549576b16675a0da54d093d2e335fa25`, pero Vercel mostró una Preview inesperada para la rama; se detuvo el proceso antes del PR y no se alteró ni canceló esa Preview. Requiere decisión humana para continuar. Merge y producción siguen bloqueados por aprobación legal.
**Última actualización:** 2026-11-19.

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
- Cotejo que acompañó la rama individual LANDING-005 (snapshot previo): Backend `main` `a95e62e2f0f9fbde46af0144c9fb89c858670c94`, Android `feature/integracion-android-ci-cd` `4b2ea8d10f4dbc94830db515a65dd3d00c6a66ad`. Para estados vigentes de los PR Android, consultar `docs/VALIDACIONES_PRIVACIDAD.md`.
- Verificación local LANDING-005: `npm ci`, lint, typecheck, build, SDD, audit y diff whitespace exit 0; Vitest 17/17 y Playwright 16 pasadas con 2 omisiones intencionales sin ID sintético. El test Playwright cubre siete viewports y FAQ por teclado. Zoom nativo, CI, Preview, publicación, Play, Analytics real y aprobación del piloto no se ejecutaron.
- La revisión legal sigue pendiente; no se incorporan responsables ni contactos inventados. Constitución `PENDIENTE_RATIFICACION` y producción intactas.

## LANDING-006 — aviso de privacidad y Analytics — 2026-11-17

- El diseño de `/privacidad` conserva el paquete integrado. El borrador distingue el sitio estático, datos del Android DEMO en Room y código Backend no desplegado confirmado. `/eliminar-cuenta` distingue baja local en Android de eliminación remota no acreditada; no hay formulario.
- El cotejo inicial LANDING-006 de Android (`4b2ea8d10f4dbc94830db515a65dd3d00c6a66ad`) es histórico y ha sido actualizado con los PR vigentes #9/#10 en `docs/VALIDACIONES_PRIVACIDAD.md`; no se debe tratar la preparación de esos PR como integración operativa.
- La prueba exploratoria encontró que el control fijo de preferencias Analytics tapaba enlaces legales en viewport 320×568. Se movió el control al footer. Prueba E2E completa con ID sintético `G-SYNTHETIC123`: 18/18 pasadas; el test Analytics bloquea solicitudes externas. Sin ID: 16 pasadas/2 omisiones intencionales. Vitest 16/16; lint/tipos/build/SDD/audit y diff check aprobados.
- Pendientes: aprobación legal y Constitución `PENDIENTE_RATIFICACION`, responsables/contactos/finalidades/proveedores/retención reales, procedimiento remoto de baja, ficha Play, configuración remota GA4/Vercel y CI/Preview. No se modificó Android/Backend, Vercel remoto ni producción.

## Integración local final LANDING-004/005/006 — 2026-11-17

- Rama local `feature/landing-integracion-final-local`, basada en LANDING-004 `d96103cb4a3c477c4e3e2cffd2ccec0a8b75b5e6`; conserva los commits de LANDING-005 y LANDING-006 con merges. Merge más reciente `5ef79c6a17b551dbf6edb7af933a8a313b2276ba`.
- Corrida inicial de integración (anterior a la actualización del advisory npm): lint, typecheck, build, SDD y audit exit 0; Vitest 17/17; Playwright 22 pasaron y 2 omitidas sin ID, 24/24 con `G-SYNTHETIC123`. La revalidación correctiva LANDING-007 agregó una prueba desktop y reporta el estado actual del audit. Reporte: `docs/REPORTE_INTEGRACION_FINAL.md`.
- Se revisaron visualmente capturas de Home y privacidad en escritorio/móvil. La evidencia automatizada cubre siete viewports, modales, FAQ, foco/teclado y Analytics aislado. Zoom nativo, lector de pantalla y dispositivos físicos no se probaron; detalle: `docs/REPORTE_ACCESIBILIDAD_INTEGRACION.md`.
- `main` permanece en `0481387180eab973b7c0416b073099638a3f7328`; no se hizo push, PR, despliegue ni cambio remoto de Vercel. El primer push puede disparar Preview; la configuración de exclusión no ha sido verificada en remoto. Ver `docs/PLAN_REVISION_PUBLICACION.md`.
- La matriz y el checklist de condiciones de release están en `docs/MATRIZ_PENDIENTES_RELEASE.md` y `docs/CHECKLIST_RELEASE_FUTURO.md`; son preparación documental y no autorización de publicación.
- La revalidación de LANDING-007 confirmó que la captura de escritorio previa era prematura: `decoding="async"` no se esperaba antes de capturar. La nueva E2E espera `complete`, `naturalWidth > 0` y `decode()` tanto tras navegación directa como tras reload.
- `npm audit --audit-level=high` el 2026-11-17 terminó con exit 1: 11 avisos de severidad alta derivados de `picomatch@4.0.7` en herramientas de desarrollo. GHSA-fc5q-39xc-vjpf declara afectadas versiones `<=4.0.7` y todavía no lista versión corregida. `npm audit fix --force` propone bajar Vitest a 3.1.4 (cambio mayor); no se aplicó downgrade ni override sin una ruta corregida compatible. Ver `docs/VALIDACIONES_PRIVACIDAD.md` y `docs/MATRIZ_PENDIENTES_RELEASE.md`.
- Revisión LANDING-008: `npm audit --omit=dev --audit-level=high` exit 0, `npm ls --omit=dev picomatch --all` vacío; el build estático no contiene coincidencias `picomatch/fdir/tinyglobby`. El hallazgo queda limitado al toolchain dev/build con riesgo ReDoS condicionado a procesar patrones controlados por atacante. No se cambió ninguna dependencia; informe reproducible en `docs/REPORTE_SEGURIDAD_DEPENDENCIAS.md`.
- Aviso de privacidad, piloto y publicación pendientes de aprobación humana; sin contacto o responsable inventado. No se declara CI validado.

## LANDING-008 — preparación local para revisión — 2026-11-17

- Punto de inicio aceptado: rama `feature/landing-integracion-final-local`, SHA `8544401a6ab4713aded5e3024ee9fcdc58793472`. Se consultó GitHub en modo lectura: `origin/main` estaba en `0481387180eab973b7c0416b073099638a3f7328`; los commits de referencia LANDING-004 (`d96103c…`), LANDING-005 (`6dcb89d…`) y LANDING-006 (`fc43246…`) son ancestros. La comparación propuesta es `main...feature/landing-integracion-final-local`.
- LANDING-008 preparó documentación, diff y capturas para revisión; no repitió la investigación ya cerrada de la foto, Android/Backend o `picomatch`. El reporte de seguridad existente se conserva sin alteración.
- Validaciones locales: lint/typecheck, Vitest 17/17, Playwright 23 pass/3 skip sin ID y 25 pass/1 skip con ID sintético, build, SDD y `git diff --check`; resultados detallados en `docs/REPORTE_LANDING_008.md` y `docs/pruebas.md`. `npm audit --audit-level=high` mantiene exit 1 con 11 high dev-only; no se cambió ni suprimió.
- El borrador PR apunta a `main`; PR, push, merge, CI para este SHA, Preview y despliegue no se ejecutaron. `vercel.json` y la configuración remota de Vercel quedaron intactos. El checklist pide confirmación administrativa antes del primer push, que podría generar una Preview.
- La aceptación formal del riesgo residual es pendiente obligatoria antes de cualquier release. También siguen pendientes la ratificación de la Constitución SDD, aprobación legal y verificaciones externas detalladas en `docs/REPORTE_LANDING_008.md`.

## LANDING-006 — primera integración (estado histórico al 2026-11-16)

La verificación técnica de repositorios que faltaba en esta primera pasada se completó el 2026-11-17; el estado actual es la sección “LANDING-006 — aviso de privacidad y Analytics” inmediatamente anterior. Las notas siguientes conservan el contexto inicial y quedan supersedidas donde hay diferencias.

- La rama `feature/landing-006-aviso-privacidad` se creó en un worktree independiente desde el commit confirmado de LANDING-004 `d96103cb4a3c477c4e3e2cffd2ccec0a8b75b5e6`. Se conservaron intactos los cambios locales y archivos `.diff` del checkout original.
- El paquete `Rutitas_aviso_privacidad_propuesta.zip` se recibió y extrajo fuera del repositorio en `../insumos`. Se integraron su componente React, estilos, borrador Markdown y checklist de validación; la portada no se modificó y `/eliminar-cuenta` continúa informativa, sin formulario ni mecanismo remoto ficticio.
- La página presenta una marca de Rutitas azul/blanco/amarillo, aviso de borrador, índice con anclas, skip-link, secciones semánticas, contacto pendiente, enlaces al inicio y eliminación. Analytics no cambió: requiere ID GA válido y consentimiento explícito.
- En aquella primera integración, los datos Android/Backend solo se describían a partir del paquete y el cotejo de repositorios quedaba pendiente. El cotejo de ramas/SHA se completó el 2026-11-17 y está documentado arriba; los hallazgos de esa revisión reemplazan esta limitación inicial.
- Validaciones LANDING-006 ejecutadas localmente y reportadas en `docs/pruebas.md` y `docs/REPORTE_LANDING_006.md`. Capturas Playwright escritorio y móvil: `test-results/landing006_privacidad_escritorio.png` y `test-results/landing006_privacidad_movil.png` (salidas ignoradas por Git).
- Aprobación legal humana pendiente: responsable/domicilio/régimen, contacto atendido, inventario real de datos, finalidades, proveedores/transferencias, retención, controles operativos, eliminación completa y fecha efectiva. También falta ratificar la Constitución SDD. CI remoto y Preview no ejecutados; no hubo push, PR ni despliegue.

## Actualización coordinada del borrador de privacidad — 2026-11-17

- Se actualizaron `/privacidad` y `/eliminar-cuenta` según las decisiones comunicadas por coordinación: Equipo de Rutitas como responsable operativo, correo proporcionado, conservación prevista de hasta dos meses y costo adicional autorizado de $0 MXN.
- Vercel se identifica solo como hosting observado de la Landing. El uso efectivo de Microsoft Azure, MongoDB Atlas, Google Maps Platform, Google Analytics y Google Play no se presume; el código existente de Analytics/Backend no demuestra activación ni tratamiento remoto.
- La eliminación remota sigue pendiente: Android y Backend requieren implementación y validación de Mark y Ame. El aviso permanece como borrador, con identidad legal/domicilio, tratamientos/proveedores efectivos, procedimiento del contacto, validación técnica/legal del plazo y revisión legal final pendientes.
- Evidencia local: unitarias 17/17; Playwright 19 pasadas y 1 omitida intencionalmente para la comprobación de imagen en proyecto móvil; lint, typecheck, build y SDD aprobados. `git diff --check` se repitió tras retirar líneas en blanco finales y aprobó. No se ejecutaron audit de nuevo, CI, servidor real, push, PR ni despliegues; el hallazgo npm previamente reportado permanece pendiente de aceptación humana antes de release.
- Se conservaron los cambios locales preexistentes; no se creó commit y no se alteró `main`, Vercel remoto, Android ni Backend.

## LANDING-010 — consolidación y preparación local — 2026-11-18

- Punto de entrada confirmado en la rama local `feature/landing-integracion-final-local`, SHA `8544401a6ab4713aded5e3024ee9fcdc58793472`. El árbol previo contenía solo documentación/evidencia LANDING-008 y privacidad/pruebas LANDING-009 reconocibles; no había cambios staged. Se conservaron todos.
- Los documentos LANDING-008 y la privacidad LANDING-009 se revisaron como cambios complementarios; su trazabilidad compartida se registra en `LANDING_010_RELEASE_READINESS.md` y `docs/matriz-trazabilidad.md`.
- Revalidación al 2026-11-18: Vitest 17/17; Playwright 23 passed/3 skip; lint, typecheck, build, SDD y diff check exit 0. El audit vuelve a fallar con 11 high de `picomatch`; no se aplicó el downgrade mayor. Gitleaks no está instalado; revisión local por formatos de secretos sin coincidencias no equivale a Gitleaks. Detalle en `docs/pruebas.md`.
- Riesgos/bloqueos conservados: aceptación humana del riesgo npm previo a release; aviso legal borrador y no ratificado; identidad/domicilio, tratamientos, proveedores, retención, contacto atendido y revisión legal pendientes; eliminación remota requiere implementación/validación de Mark y Ame.
- Vercel: no se tocaron ajustes. Con la configuración conocida por el equipo, Preview admite ramas no asignadas y `Only build previews for pull requests` no está activado; un push podría generar Preview. No se puede garantizar costo estrictamente cero y no se hizo push ni deployment.
- Los commits locales de esta tarea están autorizados por LANDING-010. No se hizo push, PR, merge, cambio remoto de GitHub/Vercel ni despliegue. La aceptación de la Constitución SDD sigue `PENDIENTE_RATIFICACION`.

## LANDING-011 — seguridad y control de publicación — 2026-11-18

- Punto de entrada verificado en `feature/landing-integracion-final-local`, HEAD `ced61fff15c31001af03621bbd276c7e7e82cdb7`; working tree limpio antes de editar. Los historiales de LANDING-004/005/006 siguen dentro de la integración. `main`/`origin/main` locales apuntan a `0481387`; no se hizo fetch ni se presume actualidad remota.
- `npm audit --json`: exit 1, 11 entradas High del mismo advisory de `picomatch@4.0.7`; `npm audit --omit=dev --audit-level=high --json`: exit 0, cero; `npm ls picomatch --all`: exit 0. El advisory no ofrece versión corregida a la fecha consultada. No hubo cambios de dependencias.
- Build local exit 0 con Vite 6.4.5, 36 módulos; el bundle recién generado no tiene cadenas picomatch/fdir/tinyglobby. La búsqueda en fuentes/config no encontró procesamiento explícito de globs controlados por visitantes. El riesgo de toolchain sigue High y exige resolución o aceptación humana previa a release.
- Edge (solo lectura) confirmó plan Hobby visible, repo Rutitas conectado, producción en `main`, Ignored Build Step `Automatic`, opción PR-only disponible pero no activada, Require Log In activo y Standard Protection seleccionado, y sin excepciones de dominios visibles. Preview muestra `All unassigned branches`; estado efectivo del checkbox Branch Tracking no quedó demostrado.
- El primer push de feature con `Automatic` puede iniciar Preview; abrir PR después también puede desencadenar/actualizar Preview. PR-only no elimina Preview al abrir PR ni asegura costo total cero. La protección de acceso no detiene builds. Recomendación bajo $0 MXN: mantener push detenido hasta confirmar una política y controles efectivos.
- Reporte `LANDING_011_SEGURIDAD_Y_RELEASE.md`, `docs/pruebas.md`, matriz, checklist y spec/plan/tareas registran la evidencia. No hubo instalación, llamadas AI, cambios Vercel, push, PR, merge, despliegue ni commit. Constitución `PENDIENTE_RATIFICACION`; riesgo npm y revisión legal siguen pendientes.

## LANDING-012 — configuración controlada de Vercel — 2026-11-18

- En el proyecto correcto se cambió únicamente `Ignored Build Step` de `Automatic` a `Only build production`; Edge confirmó éxito y el valor permaneció tras recargar. `main` sigue como rama de producción, el repo Git esperado continúa conectado y `Require Log In` / `Standard Protection` siguen activos.
- Impacto esperado: omitir builds Preview ordinarios; no se hizo prueba de push. Vercel documenta que deployments cancelados por el ignore pueden contar para cuotas, por lo que esto no es un límite de gasto ni garantiza costo cero.
- Workflow local sin evento `push`; mantiene PR a `main` y `feature/landing-001-compliance`, `workflow_dispatch` y `npm audit`. No se obtuvo evidencia CI nueva.
- Sin cambios en código, variables, dominios o facturación; tampoco push, PR, merge, commit, Preview, deployment, instalación ni créditos. Se conservaron los cambios previos del árbol.
- Release sigue pendiente por riesgo High `picomatch` sin aceptación formal, Constitución SDD sin ratificar y revisión legal/privacidad pendiente. Reporte: `LANDING_012_CONTROL_PUBLICACION.md`.

## LANDING-013 — eliminación programada de cuentas — 2026-11-18

- Actualicé el contenido local de `/privacidad` y `/eliminar-cuenta` para reflejar la política aprobada de 7 días de recuperación. El plazo solo comienza tras confirmación del Backend, el acceso normal queda bloqueado durante la ventana y la cancelación/eliminación definitiva se describen como futuras y sujetas a implementación y validación de Mark y Ame.
- La conservación general prevista de hasta 2 meses se distingue explícitamente de los siete días. Excepciones legales, inventario de datos asociados y tratamiento de respaldos requieren revisión técnica/legal.
- La ruta web se mantiene informativa y no recibe solicitudes. Coordinación confirmó que Mark, Ame, Ulises y la coordinación atenderán conjuntamente los mensajes del correo oficial; se recomienda asignar una persona responsable por solicitud. La responsabilidad compartida no habilita operativamente la eliminación: falta aprobar verificación proporcional, seguimiento y confirmaciones. Enviar correo no verifica identidad ni inicia el plazo. No hay formulario ni endpoint.
- Evidencia local: Vitest 17/17, Playwright Landing 19 passed/1 skip intencional móvil, lint/typecheck/build/SDD/diff-check exit 0. Riesgo High `picomatch` no reaudited ni resuelto; permanece pendiente conforme a evidencia previa. Sin instalaciones, CI remoto ni operaciones remotas.
- Pendientes: Mark/Ame completan y validan Android/Backend; coordinación habilita y verifica la vía web; completar identidad legal y domicilio, inventario y respaldos, excepciones y revisión legal final. Aviso en **BORRADOR NO RATIFICADO**.
- Se conservó el árbol local LANDING-011/012. Rama `feature/landing-integracion-final-local`; no hubo commit, push, PR, merge o despliegue.

## LANDING-014 — Analytics, redes, SEO y Search Console — 2026-11-19

- Preparé los metadatos estáticos de portada y la actualización de título, description, canonical, Open Graph, X y robots para rutas SPA. `/privacidad` y `/eliminar-cuenta` quedan con `noindex,follow` después de ejecutar JavaScript; el fallback HTML inicial es el de Home, por lo que no afirmo que crawlers sin JS respeten el estado de páginas legales. No se cambió el servidor ni Vercel.
- Footer integrado con cinco SVG locales de alto contraste y, tras confirmar por metadatos públicos el canal «Rutitas UTTT» (HTTP 200, ID coincidente), cinco enlaces HTTPS oficiales. El avatar del canal no se verificó visualmente.
- GA conserva consentimiento opt-in y revocación. El ID real proporcionado no se configuró localmente ni en Vercel. Solo se probó con `G-SYNTHETIC123`, interceptando localmente la solicitud externa; no se enviaron eventos, no se activó GTM ni se consumieron créditos. El aviso de privacidad permanece BORRADOR NO RATIFICADO y declara que no se confirmó propiedad/configuración/medición real.
- `robots.txt` referencia sitemap; sitemap enumera únicamente la portada indexable. El archivo HTML exacto de GSC fue copiado byte a byte a `public/` y `dist/`; ambos SHA-256 coinciden con el original. Preview local respondió 200 y devolvió el texto de verificación. Google Search Console no se verificó ni recibió el sitemap.
- Pruebas ejecutadas: Vitest 19/19; E2E 27 passed/5 skipped intencionales; E2E GA sintética dirigida 1/1; lint, typecheck, build, SDD, `npm audit --audit-level=high` (0 hallazgos en esa ejecución) y `git diff --check` exit 0. Evidencias desktop/móvil en `evidence/landing-014/`.
- **Estado al cierre de LANDING-014, previo a la conciliación:** aunque el audit local de esa corrida no notificó vulnerabilidades, quedaba pendiente revisar formalmente la discrepancia con la evidencia LANDING-011. LANDING-017 la concilió: GitHub retiró el GHSA y el audit local reportó 0; ese GHSA no es un riesgo activo según la evidencia consultada.
- Se preservaron los cambios locales LANDING-011/012/013 ya existentes. No se hizo instalación, commit, push, PR, merge, operación remota, Preview o despliegue. La Constitución SDD y el aviso legal siguen pendientes de ratificación/revisión humana.
- Addendum LANDING-014: habilité YouTube `https://www.youtube.com/channel/UCNam3EUfsyTzmWEb5AViW2A` como quinto enlace; la página pública respondió 200, `Rutitas UTTT`, ID coincidente. Pruebas unitarias y E2E comprueban los cinco URLs, HTTPS, accesibilidad por teclado y cinco SVG locales. No se confirmó el avatar. Suite reejecutada localmente; sin commit ni acciones remotas.

## LANDING-015 — consolidación final local — 2026-11-19

- Se conservaron los commits previos; se crearon cinco commits locales separados para LANDING-011/012, privacidad de LANDING-013, código de LANDING-014 y documentación/inventario consolidado. No hubo push, PR, merge, CI remoto, Preview ni despliegue.
- `vercel.json` contiene reglas locales `X-Robots-Tag: noindex, follow` para `/privacidad`, `/privacidad/`, `/eliminar-cuenta` y `/eliminar-cuenta/`; el rewrite SPA sigue intacto. `npm run test:vercel-headers` pasó y valida declaraciones estáticas. No se comprobó la respuesta HTTP de Vercel; efecto tras rewrite y en crawlers sin JavaScript continúa pendiente.
- Revalidación: Vitest 19/19; Playwright 27 aprobadas, 5 omitidas intencionalmente, 0 fallidas; prueba GA sintética dirigida previa 1/1; lint, typecheck, build, SDD, audit high y `git diff --check` con exit 0. El SDD reportó 30 documentos, 26 requisitos 001 y 14/8/9 requisitos 002/003/004.
- **Estado de seguridad al corte LANDING-015, antes de la consulta del advisory:** el audit reportó cero; la discrepancia con las 11 entradas High de LANDING-011 requería conciliación. LANDING-017 verificó después que el advisory fue retirado el 2026-11-18 y que el audit del 19-Nov reportó cero. Las entradas previas quedan como historia, no como riesgo actual; no se modificaron dependencias.
- Las capturas de `evidence/landing-014/` y `LANDING_013.diff` se preservaron localmente y no se añadieron a commits. Ver `LANDING_015_CONSOLIDACION_FINAL.md` e inventario LANDING-011–015.
- Bloqueos antes de release: aceptación/cierre humano del advisory, ratificación de Constitución SDD, revisión legal e identidad/domicilio, validación de eliminación por Mark/Ame y del canal web, consentimiento/propiedad de GA4 y comprobación HTTP autorizada de los headers. Costo adicional autorizado sigue en $0 MXN.

## LANDING-017 — preflight de publicación oficial — 2026-11-19

- SHA de entrada `f1cefb4a28e3a700e234720c799949ce0615d8a3`, rama `feature/landing-integracion-final-local`; `origin/main` confirmado en `80ef7b1388aa709dbef692154c66b0c5a9966715`. `evidence/` y `LANDING_013.diff` se conservaron localmente.
- GitHub Advisory Database marca `GHSA-fc5q-39xc-vjpf` como retirado el 2026-11-18 porque no es un problema de seguridad. `npm audit --json` actual exit 0, 0 vulnerabilidades; `npm ls picomatch --all` confirma que el paquete permanece en herramientas dev/build. La evidencia de 11 High previa se conserva como histórica, no como riesgo vigente. No hubo cambios de dependencias.
- La lectura de Edge el 2026-11-19 verificó Hobby activo, ningún método de pago ni facturas, AI Gateway saldo `$0.00` y Auto-reload Off; uso en últimos 30 días: 39.15 MB transferencia, 688 solicitudes CDN, 58m CPU de build y 50.3 MB almacenamiento de deployment. Presupuesto de AI Gateway ausente/sin gasto; Spend Management y alertas de equipo requieren Pro. Por tanto, no hay límite efectivo de gasto visible que garantice $0 futuro.
- Project Settings confirmó repositorio `rutitasrutitas-eng/LandingPage_Rutitas`, `Only build production`, `Standard Protection` y `Require Log In`; Overview mostró producción Ready desde `main` en SHA `80ef7b1…`. Hay Previews históricos; no se probó el resultado de un push ni se hizo petición HTTP al dominio.
- El acceso ahora sí fue posible desde la ventana Edge autorizada y URL verificada. El conector API conserva su 403 previo; no se modificaron permisos ni se usó otro acceso. La revisión es de UI, solo lectura.
- Coordinación autorizó específicamente el push controlado de `feature/landing-integracion-final-local` y la creación de un PR Draft a `main`, con gate inmediato: Hobby, sin método de pago ni add-ons facturables activos conocidos, AI Gateway en $0/Auto-reload Off, conexión/repositorio/rama y `Only build production` sin cambios. Si alguna comprobación falla o aparece una Preview inesperada tras el push, detenerse antes de abrir el PR. La ausencia de hard cap efectivo en Hobby continúa como riesgo económico residual; no se declara garantía de costo futuro cero.
- Revalidación inmediata posterior: Billing confirmó Hobby, sin payment methods, saldo AI Gateway `$0.00` y Auto-reload Off, pero mostró `Priority projects` activado y un precio de `$200/mo per project`. No se tocó. El efecto de facturación bajo Hobby es desconocido; el gate falló y se detuvo antes del push/PR. Se requiere aclaración/decisión administrativa específica y una nueva revalidación.
- No se hizo push ni se abrió PR. La configuración da información suficiente para planificar un primer push controlado, pero queda **BLOQUEADA la autorización de publicación** hasta que coordinación acepte el riesgo residual de que Hobby no ofrece hard cap visible y se vuelvan a revisar las condiciones inmediatamente antes del push. No hay CI ni deployment nuevo para el SHA local; la producción visible es una versión anterior en `main`.
- Privacidad continúa borrador no ratificado; eliminación no operativa, con dependencias de Mark/Ame; GA4/GTM/GSC no activados; headers solo validados en configuración local; Constitución SDD pendiente. Detalle: `LANDING_017_PUBLICACION_OFICIAL.md`.

## LANDING-018 — lanzamiento informativo condicionado — 2026-11-19

- Copy FAQ actualizado para aclarar que no hay versión pública de Android y que una eventual versión interna aprobada solo será para testers autorizados de Google Play. Reservas, viajes multiusuario y eliminación remota permanecen no operativos; privacidad sigue como borrador no ratificado.
- Vitest 19/19; Playwright 27 pasaron/5 omitidas intencionalmente; lint, typecheck, build, headers, SDD, `npm audit --audit-level=high` y `git diff --check` exit 0. Gitleaks no está instalado; búsqueda local limitada sin coincidencias.
- Playwright volvió a generar/actualizar seis capturas en `evidence/landing-014/` con el FAQ corregido; siguen sin seguimiento y fuera de commits. `LANDING_013.diff` se conservó y permanece excluido.
- Vercel Billing API respondió 403 para la cuenta/equipo. La UI observada previamente muestra `Priority projects` activado con tarifa mensual; no hay evidencia suficiente sobre suscripción, proyecto asociado o importe de factura. Se generó un enlace de consentimiento de lectura para autorizar el conector, pendiente de aprobación humana.
- No push, PR, CI, merge ni deployment. LANDING-018 permanece bloqueada por la obligación económica no descartada y la aprobación legal pendiente. HEAD local sigue `b87f899d77bf467d24364071d7df0bbadedc63bb`; cambios locales de LANDING-018 están sin commit y `origin/main` sigue `80ef7b1388aa709dbef692154c66b0c5a9966715`.

### Revalidación económica y técnica Vercel (2026-11-19)

- Edge confirmó Hobby activo, sin método de pago ni facturas; AI Gateway `$0.00` y Auto-reload Off. En Usage (últimos 30 días) se observaron 39.56 MB de Fast Data Transfer, 694 solicitudes CDN y 29 minutos de Build Time; AI Gateway Traces 0.
- El control Priority projects se ve activo, pero su panel indica `No Priority projects`. La pantalla del proyecto dice que `Upgrade to Priority` requiere Pro. La documentación de Vercel indica que Hobby necesita actualizar a Pro para elevar un proyecto, cuyo precio es $200 USD/mes por proyecto en Pro/Enterprise. Se concluye que no hay un add-on Priority asignado ni cargo actual visible; el control no se modificó.
- El proyecto sigue conectado a `rutitasrutitas-eng/LandingPage_Rutitas`, producción `main`, `Ignored Build Step: Only build production`. El deployment existente de producción estaba Ready en `80ef7b1388aa709dbef692154c66b0c5a9966715`; la inspección no inició otro deployment.
- Gate económico satisfecho para push de rama/PR Draft en Hobby y cuotas incluidas; la conducta Preview se debe comprobar inmediatamente después del push. `quality.yml` solo usa `pull_request` hacia `main`/`feature/landing-001-compliance` y `workflow_dispatch`, sin trigger push.
- El push se completó a `c11fcf1e549576b16675a0da54d093d2e335fa25`; Vercel listó una Preview inesperada de esa rama. No se creó PR ni se inició CI; se detuvo el proceso. No se canceló ni modificó la Preview. Usage/Billing no se revisó después de ese deployment, por lo que su consumo/costo queda sin verificar. No se consumieron créditos de IA ni se cambió configuración Vercel. El aviso de privacidad sigue no ratificado; merge y producción bloqueados hasta la aprobación legal.
- La UI mostró el control global `Priority projects` azul/activado, pero `Manage projects` indicó `No Priority projects`; la opción del proyecto dice que elevarlo requiere Pro. No se infiere que el control global sea una suscripción ni se modificó. El gate de esta lectura permite el push de rama y PR Draft; Hobby no ofrece un hard cap de gasto visible, por lo que no se afirma garantía de costo futuro cero.
