# Reporte de revisión — LANDING-004

**Fecha:** 2026-11-16
**Base revisada:** `main` en `0481387180eab973b7c0416b073099638a3f7328`.
**Rama de trabajo:** `fix/landing-004-estabilidad-accesibilidad`.
**Estado:** corrección final y revalidación local completadas. Se conserva todo localmente en la rama indicada; no se hizo push, PR, CI remoto ni despliegue, conforme a la instrucción de esta revisión.

## Diagnóstico reproducible

La línea base local pasó los scripts existentes (Vitest 14/14, Playwright 8/8, cero vulnerabilidades). La inspección y medición de CSS mostró textos de 7–10 CSS px en footer, confianza, estado y CTA en resoluciones pequeñas o ventana corta. Al elevarlos a 12 px, una primera iteración hizo desbordar 320×568 el texto no ajustable del pie; se corrigió permitiendo que el tagline se envuelva. La medición final y Playwright verifican los siete tamaños de aceptación sin scroll ni recorte, además de 720×450 como viewport CSS equivalente aproximado al zoom 200% de 1440×900.

El menú compacto no respondía a Escape. El primer arreglo modal dejaba Analytics como hermano de `.site-shell`, con controles z-index 79/80 sobre un backdrop z-index 50. La corrección final coloca `AnalyticsConsent` dentro del shell que se marca `inert`, sube el backdrop/dialog a z-index 1000 y redirige foco externo al diálogo; los controles de Analytics quedan visualmente debajo y sin interacción. El shell usa `min-height` para permitir desplazamiento cuando un aumento de texto supera el viewport.

## Cambios

- `src/styles.css`: mínimo de 12 CSS px para texto de navegación, hero, CTA, footer, diálogo y controles de Analytics; contraste de pie/estado y foco más visible. Se permite wrap del texto del footer en 320 px.
- `src/App.tsx`: Analytics se anida en el shell inerte de Home; el diálogo intercepta foco externo, mantiene Tab/Shift+Tab y restaura foco en Escape; el menú móvil mantiene su Escape y retorno.
- `src/styles.css`: backdrop superior y shell con alto mínimo para que textos ampliados puedan producir scroll en vez de quedar ocultos.
- `src/App.test.tsx`, `src/AnalyticsConsent.test.tsx`, `e2e/landing.spec.ts`, `e2e/modal-analytics-isolation.spec.ts`: regresiones de rutas, consentimiento, siete viewports, ID sintético, interacción/foco, contraste de `:focus-visible` y prueba de estrés con texto al doble.
- `specs/004-landing-estabilidad-accesibilidad/`, `docs/matriz-trazabilidad.md`, `docs/pruebas.md`, `Memoria.md`, README y verificador SDD agregan trazabilidad. No se cambiaron dependencias ni lockfile.

## Funcionalidad cubierta

- Inicio fotográfico, contenido aprobado y dos CTAs: Vitest y Playwright.
- Cómo funciona, Seguridad y El proyecto: el tercer diálogo se abre desde navegación; sus rutas y diálogos no se eliminaron.
- Privacidad y Eliminación: navegación desde footer, carga y recarga directas en Playwright; el contenido legal sigue siendo borrador.
- Analytics: test de UI confirma que sin elección no carga gtag, que rechazar se guarda y no carga el script, y que preferencias permite aceptar después. No hay Measurement ID real ni se envían eventos externos en esta prueba.
- Google Play, backend, Android y publicación: no alterados.

## Dependabot — PRs abiertos observados

| PR | Cambio | Evidencia consultada | Diagnóstico |
|---|---|---|---|
| [#3](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/pull/3) | `actions/upload-artifact` 6→7 | `Verify landing page` pasó | No se probó por separado fuera del check del PR. |
| [#4](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/pull/4) | jsdom 30→31 | `Verify landing page` pasó | jsdom 31 requiere Node `^22.22.2 || ^24.15.0 || >=26`; el workflow usa Node 24 y la máquina de revisión tiene 24.20.0. No se fusionó. |
| [#5](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/pull/5) | plugin React 4→6 | `npm ci` falla con ERESOLVE | plugin React 6 requiere Vite `^8.0.0`; el repo resuelve Vite 6.4.5. No se ocultó el conflicto con flags de npm. |
| [#6](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/pull/6) | TypeScript 5→7 | `npm ci` falla con ERESOLVE | `typescript-eslint` 8.72.1 declara peer TypeScript `>=4.8.4 <6.1.0`; TypeScript 7 no satisface el rango. |
| [#7](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/pull/7) | Vite 6→8 | `npm ci` falla con ERESOLVE | plugin React 4.7.0 declara Vite `^4.2.0 || ^5 || ^6 || ^7`; no admite Vite 8. La actualización requiere coordinar también plugin React. |

Estas actualizaciones siguen separadas de LANDING-004. No se actualizaron paquetes mayores ni se fusionó ningún PR Dependabot.

## Revalidación local final

Validación final local: lint, typecheck, Vitest **16/16**, build, SDD (27 documentos; 10/14/8/9 requisitos trazados) y audit (0 vulnerabilidades reportadas) exit 0. `npm run test:e2e`: **12 pasaron, 2 omitidas** intencionalmente por falta de ID en el entorno normal. Con `VITE_GA_MEASUREMENT_ID=G-ABC1234567`, la suite dirigida de aislamiento/contraste/texto pasó **6/6** en Chromium y mobile-chromium; se bloqueó la solicitud de Analytics y no se transmitieron datos. Evidencia de los intentos fallidos del test y su corrección en `docs/pruebas.md`. Sin cambios de dependencias ni lockfile.

## Pendiente externo

- Commit correctivo local en la rama indicada; su SHA se comunica en la entrega. Push/PR/CI remoto no ejecutados por instrucción; Vercel y producción no se tocaron.
- Zoom nativo de navegador no ejecutado; viewports reducidos y aumento CSS de texto sí probados.
- Ratificación de la Constitución SDD y aprobación legal permanecen pendientes.
- La prueba de zoom usa un viewport CSS equivalente; no controla el zoom del navegador del sistema.
