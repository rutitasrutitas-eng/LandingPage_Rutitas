# Reporte de revisión — LANDING-004

**Fecha:** 2026-11-16
**Base revisada:** `main` en `0481387180eab973b7c0416b073099638a3f7328`.
**Rama de trabajo:** `fix/landing-004-estabilidad-accesibilidad`.
**Estado:** cambios y revalidación local completados. El commit queda local en la rama indicada. PR, push y CI remoto no ejecutados para evitar que la integración `Vercel Preview Comments` observada en los PR existentes inicie un Preview, acción que podría incumplir la restricción de no desplegar en Vercel.

## Diagnóstico reproducible

La línea base local pasó los scripts existentes (Vitest 14/14, Playwright 8/8, cero vulnerabilidades). La inspección y medición de CSS mostró textos de 7–10 CSS px en footer, confianza, estado y CTA en resoluciones pequeñas o ventana corta. Al elevarlos a 12 px, una primera iteración hizo desbordar 320×568 el texto no ajustable del pie; se corrigió permitiendo que el tagline se envuelva. La medición final y Playwright verifican los siete tamaños de aceptación sin scroll ni recorte, además de 720×450 como viewport CSS equivalente aproximado al zoom 200% de 1440×900.

El menú compacto no respondía a Escape. Los modales mantenían un bucle de Tab, pero el contenido de fondo seguía disponible a través de foco externo. El diálogo ahora vive como hermano del fondo y usa `inert` en el contenido de página; su foco inicial, el ciclo Tab/Shift+Tab, Escape y retorno al disparador se verifican en navegador.

## Cambios

- `src/styles.css`: mínimo de 12 CSS px para texto de navegación, hero, CTA, footer, diálogo y controles de Analytics; contraste de pie/estado y foco más visible. Se permite wrap del texto del footer en 320 px.
- `src/App.tsx`: menú móvil cierra con Escape y restaura el foco; los disparadores declaran que abren diálogo; el fondo de página se vuelve inerte mientras el modal está abierto y el diálogo queda fuera de ese fondo.
- `src/App.test.tsx`, `src/AnalyticsConsent.test.tsx`, `e2e/landing.spec.ts`: regresiones para Escape, aislamiento y retorno de foco, consentimiento de Analytics, legibilidad calculada, las siete resoluciones, zoom representado, rutas directas y modal.
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

`npm ci`, `npm run lint`, `npm run typecheck`, `npm run test` (**16/16**), `npm run test:e2e` (**8/8**, 4 tests por proyecto Chromium/mobile-chromium), `npm run build`, `npm run sdd:verify` (27 documentos; 10, 14, 8 y 6 requisitos con trazabilidad) y `npm audit --audit-level=high` (**0 vulnerabilidades**) terminaron con exit 0. Detalle de línea base y final en `docs/pruebas.md`. No hubo cambios de dependencias ni lockfile.

## Pendiente externo

- PR, push y CI remoto pendientes: el PR dispararía la integración automática de Preview de Vercel, incompatible con el límite de no desplegar en esta tarea. El commit local está disponible para revisión y subida posterior si el equipo decide que la Preview es aceptable.
- Revisión humana hacia `main` después de acordar la ruta de revisión anterior.
- Preview no verificada; no se tocó Vercel.
- Ratificación de la Constitución SDD y aprobación legal permanecen pendientes.
- La prueba de zoom usa un viewport CSS equivalente; no controla el zoom del navegador del sistema.
