# Reporte de implementación — LANDING-003

**Estado:** implementación publicada en Draft PR; validación local y CI remoto aprobados; inspección del contenido de Preview pendiente por denegación actual de acceso Vercel.
**Fecha:** 2026-11-12
**Rama:** `feature/landing-003-hero-fotografico`
**Base confirmada:** `main` en `46522503f38c99b136948e7da1adf491207128f7`.
**Constitución SDD:** permanece `PENDIENTE_RATIFICACION`.

## Alcance implementado

- Header blanco con el logo Rutitas original, navegación solicitada y estado «Próximamente».
- Hero usa la foto limpia del kit en WebP desktop/móvil y JPEG de respaldo; composición con gradiente navy, textos blancos y acciones amarillas.
- Eslogan «La uni se vive en el camino.» y subtítulo «Compartir el trayecto también es parte de la experiencia.» conservados literalmente.
- Los botones «Descubre Rutitas» y «Conoce el proyecto» abren los modales existentes.
- Mockup DEMO y QR quedaron en una sección secundaria. Google Play no se muestra como disponible: sin URL oficial el QR está desactivado y el estado es «Muy pronto».
- Footer UTTT, páginas legales, consentimiento GA4, configuración condicional de Play y `vercel.json` se conservaron. No se agregaron funcionalidades, proveedores ni dependencias.
- No se añadió teléfono al tablero; la variante descartada no forma parte de los recursos implementados.

## Integridad de recursos

| Archivo | SHA-256 | Resultado |
|---|---|---|
| `public/assets/rutitas-logo.png` | `6D2468E8D51E42BAB39435D8AF584D9F2AF7DF480299A35022882A0F57114CEC` | Igual al hash previo a los cambios; no modificado |
| `public/assets/rutitas-auto-hero.webp` | `6B58B2657A08DEEA52AA6608D1A84334B9333647C43EDF0670449A9577642EA9` | Coincide con manifiesto del kit |
| `public/assets/rutitas-auto-hero-mobile.webp` | `F10C66D21926B6A1345F95C3DC8782209EF965F35D34015FC60FE66554C886F7` | Coincide con manifiesto del kit |
| `public/assets/rutitas-auto-hero.jpg` | `959CD286F3507A8D35619DFF8BC7B04E989F0722775EDDB3A7C7055A54E1552B` | Coincide con manifiesto del kit |

El boceto se usó solo como referencia y no se copió como fondo del sitio. Los PNG de marca quedaron intactos. No se modificaron valores de Analytics, Play, Vercel ni credenciales.

## Pruebas locales

Ejecutadas el 2026-11-12 en el árbol de trabajo:

| Comprobación | Resultado |
|---|---|
| `npm ci` | Aprobada; 244 paquetes auditados, 0 vulnerabilidades |
| `npm run lint` | Aprobada, cero warnings |
| `npm run typecheck` | Aprobada |
| `npm run test` | Aprobada: 14/14 pruebas |
| `npm run test:e2e` | Aprobada: 10/10 pruebas; Chromium y mobile-chromium |
| Viewports | 1440×900, 1366×768, 768×1024, 390×844 y 320×568 sin desbordamiento horizontal |
| Rutas legales | Navegación, recarga directa de `/privacidad` y `/eliminar-cuenta` aprobadas localmente |
| `npm run build` | Aprobada |
| `npm run sdd:verify` | Aprobada: 22 documentos, requisitos 001 (10), 002 (14) y 003 (8) trazados |
| `npm audit` | Aprobada: 0 vulnerabilidades |
| Gitleaks/GitHub Actions | Pendiente de ejecución remota tras push; no se declara aprobado antes de ver el run |

## Capturas

Guardadas fuera del repositorio:

- Escritorio 1440×900, página completa: `C:\Users\rafle\OneDrive\Desktop\anterior\_LANDING_003_Evidencia_2026-11-12\LANDING_003_desktop.png`
- Móvil 390×844, página completa: `C:\Users\rafle\OneDrive\Desktop\anterior\_LANDING_003_Evidencia_2026-11-12\LANDING_003_mobile.png`

Se inspeccionaron visualmente. En ambas aparece el encabezado, el hero fotográfico, las llamadas a la acción, la sección DEMO/QR secundaria y los enlaces legales del pie. Playwright comprobó también las tres resoluciones intermedias o extremas solicitadas.

## Publicación, CI y Preview

- Commit de implementación: `a930de11b32c3397468c24773ed290055a7364eb`.
- Rama publicada: `feature/landing-003-hero-fotografico`.
- Draft PR #9 hacia `main`: [LANDING-003: hero fotográfico y rediseño responsive](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/pull/9). Permanece abierto, Draft y sin conflictos; no se fusionó ni se publicó a producción.
- GitHub Actions run #11 para el SHA de implementación: [ejecución 43248682077](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/43248682077) — `success`. Pasaron Gitleaks, npm ci, SDD, lint, typecheck, build, pruebas unitarias, instalación Chromium, Playwright, audit y publicación de artefactos.
- Preview indicada por el comentario de Vercel en PR #9, estado de deployment `Ready`: [landing-page-rutitas-git-feature-lan-6c6573-rutitasrutitas-8977.vercel.app](https://landing-page-rutitas-git-feature-lan-6c6573-rutitasrutitas-8977.vercel.app/). La lectura autenticada del deployment y de `/`, `/privacidad` y `/eliminar-cuenta` sigue bloqueada: Vercel responde 403 por falta de autorización del equipo `team_y4UzDPbxO9438fV2gd6GolFA` (`dxrxxgsos-projects`). Se generó un enlace oficial de autorización, y el usuario indicó que lo abriría/aprobaría; hasta que el conector refleje el acceso no se afirma que las páginas de Preview se hayan validado.
- Producción: intacta; no se hizo deployment ni promoción.

## Pendientes fuera del alcance de automatización

- Aprobación humana de los borradores legales y ratificación de la Constitución SDD.
- Mecanismo real de eliminación de cuentas.
- Measurement ID y verificación Realtime de GA4.
- URL oficial de Google Play; hasta entonces no debe mostrarse disponibilidad.
- Inspección autenticada de Preview una vez propagado el acceso autorizado. Aprobación legal, ratificación SDD, eliminación real, GA4 real y Play oficial siguen pendientes.

## Estado final de alcance

Implementación web responsive y validación local completas. Se conserva la independencia del flujo académico y no se selecciona stack nuevo. El PR permanece sin fusionar, la producción no se modificó y las decisiones legales/constitucionales continúan pendientes de aprobación humana.
