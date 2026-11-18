# Estrategia y casos de prueba — LANDING-001

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
