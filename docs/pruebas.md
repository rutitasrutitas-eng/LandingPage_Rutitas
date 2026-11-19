# Estrategia y casos de prueba — LANDING-001

> **Conciliación de seguridad LANDING-017 (2026-11-19):** las corridas fechadas abajo que registraron 11 avisos High de `GHSA-fc5q-39xc-vjpf` son evidencia histórica del estado de la base de advisories en esas fechas. GitHub retiró el advisory el 2026-11-18; la auditoría local posterior (`npm audit --json`) terminó exit 0 con 0 vulnerabilidades. El paquete `picomatch` sigue transitivamente instalado, pero no se presenta aquel GHSA como hallazgo activo. Ejecutar y registrar de nuevo el audit de CI para este PR.

## LANDING-010 — revalidación antes de consolidación local — 2026-11-18

| Control | Comando | Resultado |
|---|---|---|
| Unitarias | `npm run test -- --reporter=dot` | Exit 0; 17/17 pasaron en 2 archivos. |
| E2E | `npm run test:e2e` | Exit 0; 23 pasaron, 3 omitidas intencionalmente en 26 casos: pruebas que requieren el ID sintético de Analytics (dos proyectos) y la comprobación desktop-only de la foto hero en móvil. No se configuró ID ni se envió telemetría. |
| Lint / tipos | `npm run lint`; `npm run typecheck` | Ambos exit 0; ESLint sin warnings y TypeScript sin errores. |
| Build | `npm run build` | Exit 0; `tsc -b`, Vite 6.4.5 y bundle completados. |
| SDD | `npm run sdd:verify` | Exit 0; 30 documentos, 21 requisitos 001, 14 requisitos 002, 8 requisitos 003 y 9 requisitos 004 con trazabilidad. |
| Dependencias | `npm audit --audit-level=high` | **Exit 1; 11 hallazgos high** de GHSA-fc5q-39xc-vjpf (`picomatch`) en rutas de herramientas de desarrollo/build. `npm audit fix --force` propone downgrade breaking a Vitest 3.1.4; no se aplicó. Aceptación humana continúa pendiente. |
| Dependencias de producción | `npm audit --omit=dev --audit-level=high` | Exit 0; 0 vulnerabilidades. |
| Diff | `git diff --check` | Exit 0; Git emitió avisos de normalización LF/CRLF en Markdown. |
| Búsqueda local de secretos | Gitleaks | No ejecutado: binario ausente. Revisión por patrones de formatos de credenciales sobre 20 archivos modificados/sin seguimiento: cero coincidencias. No sustituye Gitleaks. |

No se ejecutó `npm ci` ni se instalaron paquetes. CI, push, PR, merge, Preview, despliegue, llamadas AI Gateway, créditos y consumo de servicios externos no se ejecutaron.

## Actualización coordinada del aviso — 2026-11-17

Ejecución local para los cambios de copy de `/privacidad`, `/eliminar-cuenta`, pruebas y trazabilidad. No se instalaron paquetes ni se ejecutaron llamadas externas, CI o despliegues.

| Control | Comando | Resultado |
|---|---|---|
| Unitarias | `npm run test -- --reporter=dot` | Exit 0; 17/17 pruebas en 2 archivos. UT-LP-003/004 verifican contacto, responsable operativo, proveedores/estado, retención prevista, costo autorizado y baja remota no operativa. |
| E2E Chromium desktop/móvil | `npm run test:e2e -- e2e/landing.spec.ts` | Exit 0; 19 pasaron, 1 omitida por ser la comprobación de foto hero exclusiva de escritorio en mobile-chromium. Incluye lectura responsive de `/privacidad`, navegación legal, recarga, FAQ, Analytics y fotografías en las rutas correspondientes. |
| Lint | `npm run lint` | Exit 0; ESLint sin warnings. |
| Tipos | `npm run typecheck` | Exit 0. |
| Build | `npm run build` | Exit 0; `tsc -b` y Vite 6.4.5 completaron. |
| SDD | `npm run sdd:verify` | Exit 0; 30 documentos, 20 requisitos 001, 14 requisitos 002, 8 requisitos 003 y 9 requisitos 004 con trazabilidad. |
| Espacios en diff | `git diff --check` | Exit 0 tras retirar líneas en blanco finales en dos documentos editados. |
| Auditoría npm | No ejecutada en esta tarea | No se modificaron dependencias; el hallazgo LANDING-008 permanece sin alteración y su aceptación formal sigue pendiente antes de release. |

La primera reejecución unitaria después de añadir el contacto a `/eliminar-cuenta` detectó que el correo aparecía en dos enlaces accesibles (explicación y sección de contacto), por lo que `getByRole` era ambiguo. La aserción se ajustó para comprobar ambos enlaces `mailto:`; la ejecución final se reporta abajo.

CI, lectura de servidor real, activación de GA, publicación legal y eliminación remota no se probaron. El test E2E usa la configuración local de pruebas; no transmite datos a un proveedor.

Las secciones de corridas individuales LANDING-005/006 y la primera integración preservan resultados históricos de su ejecución. Para la rama integrada, la verificación más reciente LANDING-007 que aparece a continuación prevalece, especialmente para el resultado vigente de `npm audit`.

## LANDING-008 — revalidación para paquete local — 2026-11-17

Tras el punto de entrada aceptado `8544401a6ab4713aded5e3024ee9fcdc58793472`, se ejecutó nuevamente: lint exit 0; typecheck exit 0; Vitest 17/17; Playwright sin ID 23 pasaron/3 skip; Playwright con `G-SYNTHETIC123` 25 pasaron/1 skip; build exit 0 (Vite 6.4.5); SDD exit 0 (30 documentos; requisitos 18/14/8/9); `git diff --check` exit 0. Playwright regeneró las capturas desktop/móvil de Home, FAQ y privacidad. `npm audit --audit-level=high` **falló con exit 1 y 11 high**; se conserva deliberadamente el hallazgo documentado en `docs/REPORTE_SEGURIDAD_DEPENDENCIAS.md`. No hubo ejecución de GitHub Actions ni despliegue.

## Revisión de dependencias LANDING-008 — 2026-11-17

- `npm audit --json`: comando exit 1; 11 high, 0 critical/moderate/low. El único advisory raíz es GHSA-fc5q-39xc-vjpf sobre `picomatch@4.0.7`, propagado a los paquetes consumidores del toolchain dev/build.
- `npm audit --omit=dev --audit-level=high`: exit 0, 0 vulnerabilidades.
- `npm ls picomatch --all`: exit 0; rutas bajo Vite/Vitest. Árbol ampliado confirma ruta por `typescript-eslint`.
- `npm view picomatch version dist-tags --json`: `latest=4.0.7`. GHSA declara `<=4.0.7` afectado y ninguna versión patched; no existe fix compatible que aplicar.
- `npm run build`: exit 0. `rg -n -i "picomatch|fdir|tinyglobby" dist`: sin coincidencias. No se corrieron Vitest/E2E porque el árbol no cambió; la auditoría y build sí se ejecutaron.
- No se usó `npm audit fix --force`, no se cambió lockfile y no se añadieron excepciones de CI. Detalle de exposición, mitigación y decisión pendiente en `docs/REPORTE_SEGURIDAD_DEPENDENCIAS.md`.

## Verificación correctiva LANDING-007 — foto del hero y cotejo remoto — 2026-11-17

La captura previa de escritorio se hacía inmediatamente tras `page.goto('/')`, mientras el `<img>` del hero declara `decoding="async"`; no esperaba carga ni decodificación. Se añadió una regresión Playwright para abrir `/` directamente, exigir `complete`, `naturalWidth > 0`, `decode()` resuelto y caja visible, recargar y repetir las aserciones. Las capturas de Home ahora esperan ese estado.

El cotejo remoto actualizado de Android/Backend, incluidos estado y SHA de PR, CI publicado, uso de `DEMO_MODE=true`, pruebas con interceptores HTTP y falta de evidencia de servidor real, está en `docs/VALIDACIONES_PRIVACIDAD.md`. No se ejecutó ningún test contra servicio remoto.

Resultados de la revalidación después de LANDING-007: lint/typecheck/build y SDD exit 0; Vitest 17/17; Playwright sin ID: 23 pasaron y 3 omitidas (2 casos de Analytics sin ID, más el caso exclusivo de captura desktop omitido en mobile); Playwright con `G-SYNTHETIC123`: 25 pasaron y 1 omitida (solo el test desktop omitido en mobile). La prueba dirigida de carga/reload en Chromium desktop pasó 1/1 y produjo `landing-home-desktop-decoded.png`. `npm audit --audit-level=high` terminó exit 1: 11 hallazgos high agrupados por la transitiva `picomatch@4.0.7`; advisory sin versión corregida declarada. No se alteraron dependencias. `npm ci` no se repitió porque esta corrección no modifica manifiesto ni lockfile; la integración previa lo había completado con exit 0.

## Revalidación integrada LANDING-004/005/006 — 2026-11-17

En `feature/landing-integracion-final-local`, después de integrar los commits `6dcb89df1f4d8bb73818b6d678818956d785afc0` y `fc43246bb401a9991114376ca78665cc922a6ebb`: `npm run lint`, `npm run typecheck`, `npm run build`, `npm run sdd:verify` y `npm audit --audit-level=high` terminaron con exit 0; Vitest 17/17. `npm run test:e2e` sin ID ejecutó 24 casos (22 pasaron y 2 se omitieron intencionalmente por faltar un ID); con `VITE_GA_MEASUREMENT_ID=G-SYNTHETIC123`, 24/24 pasaron. El test dedicado intercepta Google Tag Manager; no se utilizó ID ni propiedad reales. Build Vite 6.4.5: JS 255.68 kB (79.25 kB gzip), CSS 20.88 kB (5.35 kB gzip). `npm audit` informó 0 vulnerabilidades. SDD: 30 documentos y trazabilidad de 17/14/8/9 requisitos. No hubo CI remoto, Preview, push ni despliegue. Ver `docs/REPORTE_INTEGRACION_FINAL.md` y `docs/REPORTE_ACCESIBILIDAD_INTEGRACION.md`.

## LANDING-005 — presentación y preguntas frecuentes — 2026-11-17

Ejecución independiente en `feature/landing-005-presentacion`, basada en LANDING-004. `npm ci` instaló el lockfile sin cambios (243 paquetes auditados, cero vulnerabilidades reportadas). `npm run lint`, `npm run typecheck`, `npm run build`, `npm run sdd:verify`, `npm audit --audit-level=high` y `git diff --check` terminaron con exit 0. Build Vite 6.4.5: JS 245.76 kB (76.41 kB gzip), CSS 15.28 kB (4.02 kB gzip).

- Vitest: 17/17 pruebas pasadas.
- Playwright sin ID de Analytics: 16 pasadas y 2 omitidas intencionalmente (un caso dedicado por proyecto porque no había Measurement ID sintético configurado).
- Playwright cubre siete resoluciones, CTA/modales, menú móvil, privacidad/eliminación y recarga. FAQ: diez preguntas, `summary` alcanzable con Tab, apertura con Enter, Tab/Shift+Tab cíclico del diálogo, Escape y foco restaurado.
- `720×450` representa aproximadamente 200% de zoom CSS en una ventana 1440×900; no se modificó el zoom nativo ni se probaron dispositivos físicos.
- Revisión de contenido: Backend `main` SHA `a95e62e2f0f9fbde46af0144c9fb89c858670c94`, Android `feature/integracion-android-ci-cd` SHA `4b2ea8d10f4dbc94830db515a65dd3d00c6a66ad`. El código revisado no acredita operación para usuarios reales ni integración Android–Backend.
- Esta corrida no valida Google Play real, Analytics real, CI remoto, Vercel Preview, publicación ni aprobación legal.

## LANDING-006 — contraste técnico, privacidad y Analytics — 2026-11-17

En `feature/landing-006-aviso-privacidad`, después del ajuste de preferencia Analytics al footer: `npm ci` exit 0 (243 paquetes, 0 vulnerabilidades); lint/typecheck exit 0; Vitest 16/16; Playwright sin ID 16 pass/2 skip; Playwright con `VITE_GA_MEASUREMENT_ID=G-SYNTHETIC123` 18/18 pass; build exit 0; SDD exit 0 (30 documentos, requisitos 14/14/8/9); `npm audit --audit-level=high` exit 0 con 0 vulnerabilidades; `git diff --check` exit 0.

El test sintético tuvo un fallo reproducible antes de corregir el control flotante: tras consentir/rechazar, la preferencia fija se superponía al enlace legal en 320×568 y agotaba el click. El control ahora vive dentro del footer; el texto ampliado y los enlaces continúan alcanzables sin overflow. La suite sintética completa pasa y el test dedicado intercepta solicitudes de `googletagmanager.com`; no hubo envío externo de Analytics. No se configuró ID real.

La revisión solo lectura cotejó Android feature `4b2ea8d10f4dbc94830db515a65dd3d00c6a66ad` y Backend main `a95e62e2f0f9fbde46af0144c9fb89c858670c94`. No se ejecutaron builds de Android/Backend, pruebas contra base de datos ni llamadas a servicios remotos. La ficha Play, zoom nativo, dispositivo físico, CI, Preview y aprobación legal no fueron verificados.

## Unitarias

- UT-LP-001: render de la portada.
- UT-LP-002: footer contiene enlaces legales.
- UT-LP-003: aviso de privacidad incluye secciones y marcas pendientes.
- UT-LP-004: eliminación explica proceso pendiente y no muestra formulario.
- UT-LP-005: Google Play no ofrece enlace/QR con URL ausente o inválida.
- UT-LP-006: Analytics no carga sin Measurement ID válido y consentimiento; la ruta enviada no contiene datos personales.

## Integración

- IT-LP-001: desde Inicio se navega a Privacidad.
- IT-LP-002: desde Inicio se navega a Eliminación de cuenta.
- IT-LP-003: recarga directa de ambas rutas mediante servidor de SPA.
- IT-LP-004: app renderiza con y sin variables opcionales.
- IT-LP-005: solo URL válida configurada alimenta el link de Play/QR.

## Seguridad

- SEC-LP-001: escaneo de secretos Gitleaks en CI.
- SEC-LP-002: no enviar nombre, email, tokens, query privada ni identificador personal a Analytics.
- SEC-LP-003: enlaces externos HTTPS y sin target inseguro.
- SEC-LP-004: `npm audit --audit-level=high` en lockfile.
- SEC-LP-005: no se ofrece borrado sin autenticación/proceso.
- SEC-LP-006: no se recaban datos mediante formularios sin proceso autorizado.

## Visual/accesibilidad

- UI-LP-001: viewport móvil y navegación de rutas.
- UI-LP-002: escritorio conserva la portada.
- UI-LP-003: foco, Escape y recorrido por teclado.
- UI-LP-004: portada y todos sus modales permanecen.

## Ejecución local — 2026-11-05

Entorno: Windows, Node.js 24.20.0, npm, Chromium de Playwright; Vite 6.4.5 desde el lockfile.

| Control | Comando | Resultado |
|---|---|---|
| Instalación reproducible | `npm ci` | Aprobado. |
| Lint | `npm run lint` | Aprobado, cero warnings. |
| Tipos | `npm run typecheck` | Aprobado. |
| Unitarias/integración React | `npm run test` | 11/11 aprobadas. |
| Navegador, desktop y Pixel 7 | `npm run test:e2e` | 9 aprobadas; 1 omitida porque el ancho responsive se corre solo en móvil. |
| Build | `npm run build` | Aprobado; Vite 6.4.5. |
| SDD/trazabilidad | `npm run sdd:verify` | Aprobado: 12 documentos requeridos, 10 requisitos trazados. |
| JSON/YAML | Node JSON.parse; paquete YAML temporal para análisis sintáctico | `package.json`, `vercel.json` y los dos archivos YAML válidos. |
| Diff whitespace | `git diff --check` | Aprobado; solo avisos de normalización CRLF de Git. |
| Dependencias | `npm audit --audit-level=high` | Exit 0 para umbral alto; npm reporta 10 alertas moderadas vinculadas a `minimatch` (GHSA-g3hv-75wg-m249). `--force` propone cambio mayor de ESLint; no aplicado. |

## No ejecutado / pendiente

- Gitleaks local: no se ejecutó; Docker no está instalado y la ejecución local del binario no quedó disponible. El workflow de CI sí contiene el escaneo con imagen/versionado digest fijado, pendiente de una corrida remota.
- No se ejecutó el workflow en GitHub, ni se activó protección de rama.
- No se creó Preview ni se probó una URL desplegada. `vercel.json` contiene el fallback SPA; la confirmación del host requiere Preview.
- No se verificaron eventos en Tag Assistant/GA4 Realtime porque no hay Measurement ID ni propiedad confirmados.
- No se probó una ficha de Google Play porque el equipo no proporcionó URL pública.
- No es posible validar visualmente tablets físicas; se capturaron y revisaron screenshots Playwright en escritorio y Pixel 7 emulados, además del test legal a 320 px.

Una comprobación local no acredita eventos reales de GA4 ni la ficha Play, aprobación legal, controles remotos de GitHub o una publicación de Vercel.

## LANDING-006 — vista y borrador de privacidad — 2026-11-16

Entorno: Windows, Node.js v24.20.0, npm 11.19.0, Vite 6.4.5, Playwright Chromium y mobile-Chromium. Sin credenciales ni conexión a Backend/Android.

| Control | Comando | Resultado |
|---|---|---|
| Instalación reproducible | `npm ci` | Exit 0; 242 paquetes añadidos, 243 auditados, 0 vulnerabilidades. npm mostró aviso informativo de `esbuild@0.25.12` con postinstall aún no aprobado; no se aprobó ni se modificó el lockfile. |
| Lint | `npm run lint` | Exit 0, sin warnings. |
| Tipos | `npm run typecheck` | Exit 0 en ejecución final. La primera ejecución final detectó una opción `exact` no soportada por los tipos locales de Testing Library; se reemplazó por una aserción DOM y luego tipos/build pasaron. |
| Unitarias e integración React | `npm run test` | 16/16 en 2 archivos en la última ejecución. |
| Navegador | `npm run test:e2e` | 14 pasaron, 2 omitidas intencionalmente por falta de `VITE_GA_MEASUREMENT_ID` (prueba de Analytics activo se ejecutó por separado). Dos proyectos: Chromium y mobile-Chromium. |
| Analytics activo con ID sintético | `$env:VITE_GA_MEASUREMENT_ID='G-ABC1234567'; npx playwright test e2e/modal-analytics-isolation.spec.ts --project=chromium --project=mobile-chromium` | 6/6 pasaron; no se envían eventos ni solicitudes a Google Tag Manager. |
| Build | `npm run build` | Exit 0; TypeScript y Vite 6.4.5 generaron `dist/`. |
| Especificación y trazabilidad | `npm run sdd:verify` | Exit 0; 30 documentos, 11 requisitos 001, 14 requisitos 002, 8 requisitos 003 y 9 requisitos 004 con trazabilidad. |
| Dependencias | `npm audit --audit-level=high` | Exit 0; 0 vulnerabilidades. |
| Responsive del aviso | E2E `privacy page remains readable across the accepted viewport sizes` | Siete tamaños: 1440×900, 1366×768, 768×1024, 390×844, 375×667, 320×568 y 844×390; anclas y targets válidos, sin overflow horizontal, en Chromium y mobile-Chromium. |
| Teclado y foco | E2E `legal links navigate...` | Skip-link alcanzable con Tab y lleva foco al `main`; indicador visible con contorno navy y halo amarillo; enlaces del índice, Inicio y eliminación funcionan. |
| Rutas | E2E `legal links navigate...` | `/privacidad` desde footer, acceso directo/recarga y `/eliminar-cuenta` con recarga; no se agregó formulario. |
| Evidencia visual | Capturas Playwright locales | `test-results/landing006_privacidad_escritorio.png` y `test-results/landing006_privacidad_movil.png`, full page, carpetas ignoradas por Git. |

En una ejecución exploratoria de la suite E2E completa con el ID sintético, la barra de consentimiento bloqueó clics de casos que no la descartan y dos casos expiraron. No se considera esa ejecución evidencia aprobada; la suite obligatoria sin ID pasó y los casos específicos de Analytics activo pasaron con el ID sintético. No se activó GA real.

## No ejecutado / pendiente en LANDING-006

- Zoom nativo real del navegador, dispositivos físicos, Preview Vercel y CI remoto.
- Verificación independiente de los repositorios Android y Backend, sus SHA actuales y tratamientos reales. Los detalles funcionales incluidos provienen del paquete suministrado y permanecen pendientes de cotejo.
- Consentimiento/eventos de una propiedad GA4 real, contratación o transmisiones de proveedores, despliegue de Backend/Android, eliminación de cuenta remota y revisión/aprobación legal.
- No se modificaron dependencias, `vercel.json`, configuración remota ni producción. No se hizo push ni PR.

## LANDING-004 — línea base y primera revalidación (histórica) — 2026-11-16

**Base limpia:** `main` y `origin/main` en `0481387180eab973b7c0416b073099638a3f7328`; working tree limpio antes de editar. Node `v24.20.0`, npm `11.19.0`. La rama de corrección se creó desde esa base.

| Fase | Comando | Resultado |
|---|---|---|
| Línea base | `npm ci` | Exit 0, 243 paquetes auditados, 0 vulnerabilidades. npm avisó que `esbuild` tiene un install script no aprobado; la instalación, tests y build completaron sin aprobarlo manualmente. |
| Línea base | `npm run lint`; `npm run typecheck`; `npm run build`; `npm run sdd:verify`; `npm audit --audit-level=high` | Todos exit 0. |
| Línea base | `npm run test` | 14/14 pasadas. |
| Línea base | `npm run test:e2e` | 8/8 pasadas: 4 pruebas por proyecto Chromium y mobile-chromium. |
| Revalidación tras cambios | `npm ci` | Exit 0; mismo lockfile; 0 vulnerabilidades; mismo aviso informativo de install script de esbuild. |
| Revalidación tras cambios | `npm run lint`; `npm run typecheck`; `npm run build`; `npm run sdd:verify`; `npm audit --audit-level=high` | Todos exit 0; build Vite 6.4.5; SDD 27 documentos, 10/14/8/6 requisitos 001–004; audit 0 vulnerabilidades. |
| Revalidación tras cambios | `npm run test` | 16/16 pasadas en 2 archivos. Incluye consentimiento UI de Analytics: inicialmente no inserta script, rechazar se conserva y no carga GA, permite abrir preferencias y aceptar. La prueba usa un ID sintético en entorno de test y no transmite eventos. |
| Revalidación tras cambios | `npm run test:e2e` | 8/8 pasadas (4 por Chromium y mobile-chromium). Home comprobada en 7 viewports de aceptación más 720×450 (equivalencia CSS aproximada de zoom 200% en 1440×900). Sin scroll/recorte horizontal, texto inspeccionado >=12 CSS px, teclado/menú/modal, rutas legales y recarga verificados. |

Capturas E2E desktop 1440×900 y móvil 390×844 se generan en `test-results/` (ignoradas por Git). 320×568 conserva una sola pantalla después de permitir wrap en el tagline. El zoom se representó ajustando el viewport CSS; no se controló el zoom global del navegador. No se corrieron pruebas en dispositivo físico, Preview Vercel, Play real ni eventos GA4 reales.

## LANDING-004 — corrección final de aislamiento y accesibilidad — 2026-11-16

La revisión final detectó que `AnalyticsConsent` era hermano de `.site-shell` y, por tanto, seguía fuera de `inert`; además, su z-index superaba el backdrop. Se colocó Analytics dentro del shell, se elevó el backdrop y se reforzó la restitución de foco. El shell ahora usa alto mínimo y puede desplazarse cuando el texto ampliado excede el viewport.

| Control | Ejecución | Resultado |
|---|---|---|
| Analytics con entorno sintético | `$env:VITE_GA_MEASUREMENT_ID='G-ABC1234567'; npx playwright test e2e/modal-analytics-isolation.spec.ts --project=chromium --project=mobile-chromium` | 6/6 E2E pasadas: aislamiento, foco, restauración, contraste y texto ampliado en Chromium y mobile-chromium. La prueba bloquea toda solicitud a Google Tag Manager; no envía eventos. |
| CI local sin ID GA | `npm run test:e2e` | Exit 0: 12/12 pasaron, 2 omitidas intencionalmente (una por proyecto) porque no hay `VITE_GA_MEASUREMENT_ID`; la integración se ejecuta aparte con un ID sintético. |
| Zoom / texto ampliado | E2E `home content remains reachable when text is enlarged` | Estilo de prueba duplica el tamaño computado de los textos a 320×568; permite scroll vertical y verifica CTA/modal/enlace legal alcanzables y sin overflow horizontal. Zoom real del navegador no se ejecutó. |
| Contraste foco | E2E `visible focus ring contrasts with light and dark surfaces` | `:focus-visible` se activa mediante Tab; comprueba navy de contorno, halo amarillo y razón de contraste calculada >=3:1 sobre fondo claro/oscuro. |

| Lint | `npm run lint` | Exit 0, ESLint sin warnings. |
| Tipos | `npm run typecheck` | Exit 0. |
| Unitarias | `npm run test` | Exit 0, 16/16 en 2 archivos. |
| Build | `npm run build` | Exit 0, Vite 6.4.5; TypeScript y bundle completados. |
| SDD | `npm run sdd:verify` | Exit 0; 27 documentos, 10/14/8/9 requisitos 001–004 trazados. |
| Dependencias | `npm audit --audit-level=high` | Exit 0; 0 vulnerabilidades reportadas. |

Dos ejecuciones iniciales de E2E fallaron por detalles del test de indicador de foco: foco programático en vez de modalidad teclado y transición CSS aún activa. Se cambió la prueba a Tab/Shift+Tab y se desactivó la transición solo en ese test. En la prueba de aislamiento, la expectativa de retorno se ajustó al botón del menú (el disparador de navegación desaparece al cerrar el menú móvil); la ampliación de texto activa el CTA por Enter para no depender de un click bajo el banner de consentimiento. Tras esos ajustes, la prueba dirigida y la suite normal pasan con los recuentos arriba. Estos fallos fueron de aserciones/automatización; no se detectó una regresión funcional adicional.

El zoom nativo del navegador no se ejecutó; el entorno de Playwright headless no expuso un control fiable de esa preferencia. Se verificaron viewports CSS reducidos y una prueba de estrés con el tamaño calculado de texto duplicado. No se ejecutaron CI remoto, Preview, dispositivo físico, Play real ni eventos GA4 reales.

## Revalidación de liberación — LANDING-002 — 2026-11-05

| Control | Resultado real | Nota |
|---|---|---|
| Instalación | `npm ci` aprobado al inicio (antes del override); después el `npm ci` directo en OneDrive falló dos veces con `EBUSY` al eliminar archivos bloqueados de `node_modules`. `npm install` reparó el árbol y una copia temporal limpia de `package.json` + `package-lock.json` ejecutó `npm ci` con exit 0. | La limitación es de bloqueo de archivos en Windows/OneDrive; el lock actual se instaló reproduciblemente fuera de esa carpeta. |
| Dependencias | `npm ls minimatch --all` muestra `minimatch@11.0.4` compartido por ESLint 10 y typescript-eslint; `npm ls minimatch --omit=dev` no encuentra dependencia de producción. | La rama afectada anterior era `10.2.6`, solo de desarrollo. |
| Auditoría | `npm audit` | Exit 0, 0 vulnerabilidades tras override. |
| Lint / tipos / unitarias | `npm run lint`, `npm run typecheck`, `npm run test` | Aprobados; Vitest 11/11. |
| E2E / build / SDD | `npm run test:e2e`, `npm run build`, `npm run sdd:verify` | E2E 9 aprobadas y 1 omitida por variante desktop-only; build aprobado; verificador ahora incluye specs 001/002. |
| Git diff | `git diff --check` | Exit 0. |

Gitleaks no se ejecutó localmente porque Docker no está instalado; no hay workflow LANDING-001 en la rama remota, por tanto el control no se pudo lanzar en Actions sin publicar la rama. El workflow local de LANDING-002 quedó configurado para escanear el historial completo con `--redact`, antes de instalar dependencias.

## LANDING-011 — seguridad y control de publicación — 2026-11-18

No se cambió código de producto ni dependencias. No se ejecutó instalación, no se consumieron créditos y no se hicieron solicitudes a AI Gateway. La lectura de Vercel fue desde Edge en modo de solo lectura.

| Control | Comando/medio | Resultado real |
|---|---|---|
| Auditoría completa | `npm audit --json` | Exit 1; 11 High, 0 Critical/Moderate/Low; el mismo advisory aparece por distintas rutas del árbol. |
| Árbol de producción | `npm audit --omit=dev --audit-level=high --json` | Exit 0; 0 vulnerabilidades. |
| Árbol de `picomatch` | `npm ls picomatch --all` | Exit 0; `picomatch@4.0.7` transitivo bajo Vite/fdir/tinyglobby y Vitest. |
| Build/bundle | `npm run build`; `rg -n -i "picomatch|fdir|tinyglobby" dist` | Build exit 0 (Vite 6.4.5, 36 módulos; JS 257.49 kB; CSS 20.88 kB). Sin coincidencias textuales en dist recién generado. |
| Fuente y configs | `rg` en `src`, `scripts`, `vite.config.ts`, `vitest.config.ts` | Sin usos explícitos de globs de visitante; no prueba todos los caminos internos del toolchain. |
| Dashboard | Edge: Git, Production/Preview environments, Build and Deployment, Deployment Protection | Repo Git esperado, producción `main`, Ignored Build Step `Automatic`, PR-only disponible/no elegido, Require Log In activo/Standard Protection, excepciones sin dominios listados. `All unassigned branches` visible; estado del checkbox Branch Tracking Preview no concluyente. Sin cambios. |
| SDD | `npm run sdd:verify` | Exit 0; 30 documentos, 22 requisitos 001 y trazabilidad para 14/8/9 requisitos 002/003/004. |
| Formato de diff | `git diff --check` | Exit 0. Git mostró avisos CRLF próximos en dos archivos; sin errores de whitespace. |

El advisory GitHub sigue indicando versiones corregidas `None` al 2026-11-18. No se aplicó downgrade, override ni supresión. Se recomienda mantener bloqueado el release hasta corregir o aceptar formalmente el riesgo High. Con `Automatic`, el primer push puede iniciar Preview; la protección de acceso no evita creación/uso de recursos. No hay push, PR, merge, Preview, despliegue o CI remoto para esta entrega. Ver `LANDING_011_SEGURIDAD_Y_RELEASE.md`.

## LANDING-012 — configuración controlada de Vercel — 2026-11-18

| Control | Medio/comando | Resultado real |
|---|---|---|
| Vercel proyecto/equipo | Edge, modo de lectura salvo el único ajuste autorizado | Proyecto `landing-page-rutitas`, equipo `rutitasrutitas-8977`; plan Hobby visible. |
| Ignored Build Step | Settings → Build and Deployment | `Automatic` cambió a `Only build production`; confirmación de actualización y valor persistido tras recarga. No se inició deployment. |
| Git / producción | Settings → Git y Environment → Production | Repo `rutitasrutitas-eng/LandingPage_Rutitas`; rama de producción `main`. |
| Protección | Settings → Deployment Protection | `Require Log In` activo; `Standard Protection` seleccionado. |
| Workflow | Lectura local de `.github/workflows/quality.yml` | PR hacia `main`/`feature/landing-001-compliance` y `workflow_dispatch`; sin evento `push`; `npm audit` presente. Ninguna ejecución CI nueva. |
| Pruebas de producto | No repetidas | No hubo cambios de código; no son necesarias para el único cambio remoto de configuración. No se probó con push/PR/deployment por restricción. |
| SDD / diff | `npm run sdd:verify`; `git diff --check` | SDD exit 0: 30 documentos, 23 requisitos 001 y trazabilidad 14/8/9 para 002/003/004. Diff-check exit 0; solo avisos Git de conversión LF/CRLF. |

Vercel documenta que builds omitidos por Ignored Build Step quedan cancelados y que tales deployments cuentan para cuotas. No se midió consumo. La configuración no garantiza costo cero ni prueba el efecto real de un push. Persisten el riesgo High `picomatch`, la ratificación pendiente de la Constitución SDD y pendientes de revisión legal. Detalle: `LANDING_012_CONTROL_PUBLICACION.md`.

## LANDING-013 — eliminación programada de cuentas — 2026-11-18

| Control | Resultado real |
|---|---|
| Vitest (`npm run test -- --reporter=dot`) | Exit 0; 2 archivos de prueba, 17/17 tests. Incluye texto de privacidad y eliminación, 7 días, Backend confirma, excepciones, email no operativo y ausencia de formulario. |
| Playwright (`npm run test:e2e -- e2e/landing.spec.ts`) | Exit 0; 19 passed, 1 skipped intencionalmente en mobile-chromium para el caso desktop-only de fotografía. Las rutas legales se probaron en chromium y mobile-chromium; lectura de privacidad conserva siete viewports. |
| Lint (`npm run lint`) | Exit 0; sin warnings de ESLint. |
| Typecheck (`npm run typecheck`) | Exit 0. |
| Build (`npm run build`) | Exit 0; Vite 6.4.5, 36 módulos. JS 260.75 kB, CSS 20.88 kB. |
| SDD (`npm run sdd:verify`) | Exit 0; 30 documentos, 24 requisitos 001 y trazabilidad para 14/8/9 requisitos 002/003/004. |
| Diff (`git diff --check`) | Exit 0; Git informó avisos de conversión LF/CRLF en archivos documentales preexistentes; sin errores de whitespace. |
| Seguridad / red | No se instalaron/actualizaron dependencias, no se ejecutó AI Gateway ni se consumieron créditos; no se hizo auditoría npm nueva. El riesgo High de `picomatch` permanece abierto conforme al reporte previo. |

Sin CI remoto, push, PR, merge, commit, Preview, despliegue, cambio Vercel, backend/app ni solicitudes reales. Los tests prueban copy/rutas locales, no la implementación del Backend ni la política de Google Play en una publicación.

### LANDING-013 — addendum de responsabilidad y privacidad pública

Las pruebas unitarias UT-LP-003/004 comprueban que las páginas públicas usan solo «Equipo de Rutitas» y el correo oficial, sin nombres individuales. Coordinación confirmó la atención compartida internamente; sigue no habilitado el canal para eliminación hasta aprobar verificación y seguimiento. No se hizo prueba de correo real.

## LANDING-014 — Analytics, redes, SEO y Search Console — 2026-11-19

Entorno local Windows, Node/npm ya instalados, Vite 6.4.5, Chromium y mobile-Chromium de Playwright. No se instalaron ni actualizaron paquetes.

| Control | Comando/medio | Resultado real |
|---|---|---|
| Lint | `npm run lint` | Exit 0, sin warnings. |
| Tipos | `npm run typecheck` | Exit 0. Una primera corrida detectó una llamada incorrecta a `querySelectorAll` en la aserción de pruebas; se corrigió y typecheck pasó. |
| Unitarias | `npm run test -- --reporter=dot` | 19/19 en 2 archivos. Una primera corrida encontró la misma aserción mal usada (`within(...).querySelectorAll`); se cambió a consultar el elemento DOM y pasó. |
| Playwright | `npm run test:e2e` | 27 passed, 5 skipped intencionales, 0 failed; 32 tests en Chromium y mobile-Chromium. Omisiones: prueba sintética GA separada (2 proyectos), aislamiento de Analytics sin variable (2 proyectos) y fotografía desktop-only en mobile-Chromium. |
| GA4 sintético | `$env:LANDING_E2E_GA_SYNTHETIC='1'; npx playwright test e2e/analytics-synthetic.spec.ts --project=chromium` | 1/1 passed con `G-SYNTHETIC123`; petición a gtag interceptada y atendida localmente con respuesta mock, consentimiento otorgado/revocado, un `page_view`, señales de publicidad deshabilitadas y sin GTM. No llegó solicitud a Google. |
| Diseño responsive/fotografía | E2E `home keeps approved content...`; captura de landing | Viewports de aceptación existentes: 7 resoluciones y viewport adicional de zoom CSS. Home mantiene su criterio de una pantalla. Hero decodificado y capturas `evidence/landing-014/landing-home-{desktop,mobile}.png`; revisión visual manual detectó y corrigió SVG negros en footer por SVG blancos, verificación repetida por test y captura. |
| Rutas, sociales y SEO | E2E LANDING-014 y ajuste de canal | Cinco enlaces HTTPS exactos (Facebook, Instagram, YouTube, X, TikTok), navegables por teclado; cinco SVG locales. Página del canal YouTube respondió HTTP 200, título público «Rutitas UTTT», mismo ID que la URL; avatar no verificado visualmente. Privacidad/eliminación noindex en metadata SPA y canónicos propios. Robots/sitemap revisados; sitemap solo incluye portada. |
| Search Console local | Build y preview local | El archivo de `public/` se copió a `dist/` con SHA-256 idéntico al origen (`E2A8335CC2E0C53494BA450C479DE8176EEED44F20016A855758BFE7EEB10057`); `http://127.0.0.1:4174/googlee72a4fcd7bd338a1.html` respondió HTTP 200 con cuerpo exacto. No se consultó/verificó propiedad remota. |
| Build | `npm run build` | Exit 0; Vite 6.4.5, 37 módulos, JS 263.67 kB y CSS 21.48 kB tras habilitar YouTube. |
| SDD | `npm run sdd:verify` | Exit 0; 30 documentos, 25 requisitos 001 y trazabilidad 14/8/9 para 002/003/004. |
| Dependencias | `npm audit --audit-level=high` | Exit 0, 0 vulnerabilidades según el audit local ejecutado el 2026-11-19. No se cambiaron dependencias. El estado formal pendiente heredado de `GHSA-fc5q-39xc-vjpf` no se da por aceptado/cerrado por este resultado; requiere revisión humana del reporte actualizado. |
| Formato | `git diff --check` | Exit 0; sin errores. |

Las páginas `/privacidad` y `/eliminar-cuenta` actualizan `noindex,follow` mediante JavaScript. El HTML SPA inicial contiene los metadatos estáticos de la portada; no se garantiza que crawlers sin JavaScript interpreten el `noindex` dinámico. Google no ha verificado el archivo y el sitemap no se ha publicado. No se configuró el ID real `G-MKN6YXXZ8Y`, no se activó GTM ni se cambió Vercel. No hubo CI remoto, push, PR, merge, commit o despliegue.

### Addendum de YouTube — 2026-11-19

La URL suministrada por coordinación (https://www.youtube.com/channel/UCNam3EUfsyTzmWEb5AViW2A) se consultó en modo público: HTTP 200 y metadatos de canal `Rutitas UTTT`, con el ID indicado en la ruta. Se activó como el quinto enlace HTTPS. No se hizo verificación visual independiente del avatar. Después del cambio se repitieron las validaciones: Vitest 19/19; Playwright 27 passed/5 skipped intencionales; prueba GA sintética 1/1; lint, typecheck, build, SDD y diff-check exit 0. Build: Vite 6.4.5, 37 módulos, JS 263.67 kB, CSS 21.48 kB. `npm audit` no se repitió porque no cambiaron dependencias; su último resultado de LANDING-014 base fue exit 0/0 vulnerabilidades. Sin operaciones de publicación.

## LANDING-015 — consolidación local y headers de indexación — 2026-11-19

| Control | Ejecución | Resultado real |
|---|---|---|
| Unitarias | `npm run test -- --reporter=dot` | Exit 0; 2 archivos, 19/19 pruebas aprobadas. |
| E2E | `npm run test:e2e` | Exit 0; 27 aprobadas, 5 omitidas intencionalmente, 0 fallidas (32 en Chromium y mobile-Chromium). Las omisiones corresponden a IDs GA sintéticos/aislamiento que se ejecuta en prueba separada y a la regresión de fotografía solo escritorio. |
| Prueba GA sintética dirigida | `$env:LANDING_E2E_GA_SYNTHETIC='1'; npx playwright test e2e/analytics-synthetic.spec.ts --project=chromium` | 1/1 aprobada en la validación de LANDING-014; no se envió solicitud a Google. |
| Configuración Vercel declarativa | `npm run test:vercel-headers` | Exit 0; cuatro patrones legales, valor `noindex, follow`, Home sin regla y rewrite intacto. No prueba respuesta HTTP del host. |
| Lint / Typecheck | `npm run lint`; `npm run typecheck` | Ambos exit 0. |
| Build | `npm run build` | Exit 0; Vite 6.4.5, 37 módulos; JS 263.67 kB, CSS 21.48 kB. |
| SDD | `npm run sdd:verify` | Exit 0; 30 documentos, 26 requisitos 001 y trazabilidad de 14/8/9 requisitos 002/003/004. |
| Dependencias | `npm audit --audit-level=high` | Exit 0; el audit reportó 0 vulnerabilidades el 2026-11-19. Las 11 entradas High anteriores se explican por la retirada oficial del advisory el 2026-11-18; sin cambios a dependencias. |
| Formato | `git diff --check` | Exit 0, sin errores; Git mostró avisos de normalización LF/CRLF en dos documentos preexistentes. |

No hubo CI remoto ni respuesta HTTP de Vercel. Los headers están declarados en el repositorio y la prueba solo inspecciona configuración local; comportamiento tras rewrite, respuesta desplegada y resultado en crawlers quedan sin verificar. Cinco commits locales trazables; no se hizo push, PR, merge, Preview o despliegue.

## LANDING-017 — preflight de publicación — 2026-11-19

| Control | Comando/medio | Resultado real |
|---|---|---|
| Git y `main` | `git status`, `git rev-parse`, `git fetch origin main` | Rama `feature/landing-integracion-final-local`; HEAD `f1cefb4a28e3a700e234720c799949ce0615d8a3`; `origin/main` sigue `80ef7b1388aa709dbef692154c66b0c5a9966715`. Sin cambios tracked; se conservaron sin seguimiento `evidence/` y `LANDING_013.diff`. |
| Advisory | Página oficial GitHub Advisory Database | `GHSA-fc5q-39xc-vjpf` aparece **Withdrawn**, retirado el 2026-11-18 porque no es un problema de seguridad. Se conservan los registros anteriores como históricos, no como hallazgo activo. |
| Auditoría actual | `npm audit --json` | Exit 0; 0 info/low/moderate/high/critical, 283 dependencias contabilizadas. |
| Árbol de paquete | `npm ls picomatch --all` | Exit 0; `picomatch@4.0.7` sigue como dependencia transitiva de Vite/fdir/tinyglobby/Vitest. Sin cambios al manifiesto o lockfile. |
| Vercel | Conector oficial + Microsoft Edge, solo lectura | El conector devolvió HTTP 403 por falta de autorización al scope del equipo. Computer Use se detuvo porque no pudo determinar con confianza la URL activa de Edge. No se evadió el bloqueo; plan, cargos/uso/cuotas/créditos, conexión Git, rama productiva, `Only build production`, protección y previews actuales **NO VERIFICADOS**. |
| Publicación | GitHub/Vercel | No hubo push, PR, CI, Preview, merge, deployment ni cargos conocidos. El gate económico impidió la publicación. |

La publicación está **BLOQUEADA por falta de verificación actual de Vercel/costo cero**. No está bloqueada por el advisory retirado. Aviso legal, eliminación de cuenta, ratificación SDD, Analytics/Search Console y headers HTTP siguen sujetos a sus gates separados.
