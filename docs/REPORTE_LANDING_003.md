# Reporte de corrección — LANDING-003 sin scroll

**Estado:** corrección publicada en el PR Draft #9; validaciones locales y GitHub Actions/Gitleaks aprobadas. Preview de Vercel inspeccionada desde Edge con sesión autorizada; el SHA exacto y las tres rutas solicitadas quedaron verificados.
**Fecha:** 2026-11-12
**Rama:** `feature/landing-003-hero-fotografico`
**HEAD inicial revisado:** `5728d395ca10ccea552a8e318c64978e0f886595`
**Commit correctivo funcional:** `54e0ecb1f4e0e03165afb794bed94a70d37d74c7`
**SHA funcional validado por Actions:** `9a5bb2b599df696d5e34a87afcecef0557760c74` (run #18).
**Draft PR:** [#9 hacia `main`](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/pull/9); abierto, sin fusionar al iniciar la corrección.
**Constitución SDD:** `PENDIENTE_RATIFICACION`.

## Corrección solicitada

La implementación inicial de LANDING-003 había añadido debajo del hero una sección «Una vista de demostración» con teléfono y tarjeta QR. Eso extendía la portada y contradecía el requisito docente de una sola pantalla. Se eliminó por completo la sección, ambos componentes y sus estilos. También se retiró `qrcode.react`, que ya no tenía uso. La validación de URL oficial permanece en `src/config.ts`; no se anuncia Google Play y el encabezado conserva «Próximamente».

La portada ahora usa un shell flex con altura `100dvh`, header y footer no encogibles y hero que ocupa el espacio restante. Sus tamaños se ajustan a pantallas pequeñas y en paisaje. No se usa `overflow:hidden` en la página para fingir que cabe el contenido. El menú móvil queda superpuesto y no cambia la altura del documento.

Se conservaron la fotografía, el logo oficial, el eslogan «La uni se vive en el camino.», el subtítulo, los dos botones y modales informativos, el footer legal, navegación móvil, Analytics con consentimiento y las rutas legales. Las páginas legales pueden desplazarse naturalmente.

## Historial de la primera implementación

Esta información corresponde a la revisión anterior a la corrección y no acredita el criterio nuevo:

- El commit `a930de11b32c3397468c24773ed290055a7364eb` introdujo el hero fotográfico.
- La implementación inicial conservó DEMO/QR en una sección secundaria. Su prueba E2E previa validaba principalmente el desbordamiento horizontal y hacía scroll para llegar al footer; sus capturas anteriores eran de página completa.
- Los runs #11–#15 fueron aprobados para esa versión. No cubrían la aceptación de scroll cero en los siete tamaños actuales.
- Vercel Bot había reportado deployments `Ready`, pero no se inspeccionaron autenticadamente sus páginas ni se confirmó su SHA.

## Evidencia de no-scroll de la corrección

Playwright midió `document.documentElement`, `body`, `window.scrollY` y los rectángulos del header, introducción, lema, subtítulo, dos CTAs, texto de confianza y footer. Además probó rueda, scroll programático y gestos táctiles en el proyecto mobile-chromium. En las siete resoluciones, las dimensiones de documento y body coinciden exactamente con el viewport; los límites de contenido van de 0 al borde del viewport y `scrollY` permanece en 0.

| Viewport | Documento | Body | Scroll Y | Límites de contenido verificado |
|---|---:|---:|---:|---|
| 1440×900 | 1440×900 | 1440×900 | 0 | x: 0–1440; y: 0–900 |
| 1366×768 | 1366×768 | 1366×768 | 0 | x: 0–1366; y: 0–768 |
| 768×1024 | 768×1024 | 768×1024 | 0 | x: 0–768; y: 0–1024 |
| 390×844 | 390×844 | 390×844 | 0 | x: 0–390; y: 0–844 |
| 375×667 | 375×667 | 375×667 | 0 | x: 0–375; y: 0–667 |
| 320×568 | 320×568 | 320×568 | 0 | x: 0–320; y: 0–568 |
| 844×390 | 844×390 | 844×390 | 0 | x: 0–844; y: 0–390 |

El test falla si el documento/body excede viewport +2 px, si cualquier elemento requerido rebasa los límites, si aparece DEMO/QR, o si rueda, toque o scroll programático cambia `scrollY`. Se comprueba que el footer y ambos botones estén visibles, así como la navegación móvil superpuesta y su modal.

Las rutas `/privacidad` y `/eliminar-cuenta` se comprueban con navegación/recarga directa. La de privacidad conserva scroll natural en 320×568.

## Pruebas locales

| Comprobación | Resultado |
|---|---|
| `npm ci` | Aprobada; 243 paquetes auditados, 0 vulnerabilidades. El primer intento encontró esbuild bloqueado por un Vite local previo; se detuvo solo ese servidor y el reintento limpio pasó. |
| `npm run lint` | Aprobada, sin warnings |
| `npm run typecheck` | Aprobada |
| `npm run test` | Aprobada: 14/14 pruebas |
| `npm run test:e2e` | Aprobada: 8/8 tests por proyecto; Chromium y mobile-chromium |
| Viewports de Home | Aprobados: siete tamaños, sin scroll vertical/horizontal |
| Navegación y modales | Aprobados: links legales, recarga directa, menú, Escape y CTAs |
| `npm run build` | Aprobada |
| `npm run sdd:verify` | Aprobada: 22 documentos, 10 requisitos 001, 14 requisitos 002 y 8 requisitos 003 trazados |
| `npm audit --audit-level=high` | Aprobada: 0 vulnerabilidades |
| GitHub Actions | Aprobada en el nuevo HEAD; run [#16](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/43259000683) |
| Gitleaks | Aprobado en run #16: `Scan Git history for secrets (pinned Gitleaks image)` terminó `success` |
| SDD, lint, typecheck, build, unit/integration, Playwright y audit remotos | Todos los pasos terminaron `success` en run #16; Playwright y audit no se omitieron |
| GitHub Actions para el SHA más reciente `b4392f1ea36ee1439f8ab1cbab84c961b24430cf` | Aprobada en [run #17](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/43259639450); mismo conjunto completo de jobs, todos `success`, incluido Gitleaks |
| GitHub Actions para el SHA funcional `9a5bb2b599df696d5e34a87afcecef0557760c74` | Aprobada en [run #18](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/43260267266); job completo `success`, incluido Gitleaks |

## Capturas y archivo de métricas

Capturas de tamaño viewport real (sin `fullPage`) y mediciones JSON, guardadas fuera del repositorio:

- Escritorio 1440×900: `C:\Users\rafle\OneDrive\Desktop\anterior\_LANDING_003_Sin_Scroll_Evidencia_2026-11-12\LANDING_003_no_scroll_desktop_1440x900.png` — SHA-256 `8A914BF0EA460A5D0E3F0385A95B43A30F66A24479B8A0D038CEF3C5FA759913`.
- Móvil 390×844: `C:\Users\rafle\OneDrive\Desktop\anterior\_LANDING_003_Sin_Scroll_Evidencia_2026-11-12\LANDING_003_no_scroll_mobile_390x844.png` — SHA-256 `1A96AADD7148ECE214F287001CDED00E594AF2BCDD750B81801912E2F0D0D072`.
- Métricas siete viewports: `C:\Users\rafle\OneDrive\Desktop\anterior\_LANDING_003_Sin_Scroll_Evidencia_2026-11-12\LANDING_003_no_scroll_metrics.json` — SHA-256 `8D0654D9C5B652009A3D4F0A31FA0141F648547306A054E30DCD650473E0C18B`.

## Preview de Vercel

### Verificación autorizada — 2026-11-12

- `vercel whoami` confirmó sesión activa como `rutitasrutitas-8977`. El equipo autorizado es `rutitasrutitas-8977`, ID `team_DkoPaNhiPIS1xwsaaVJbkMOO`.
- La solicitud contenía el Project ID `prj_VPzi04e6hKw3Vgbfua2KesKGlhDzeso`, que no coincide con el recurso existente. `vercel project inspect` confirmó el proyecto ya existente `landing-page-rutitas`, ID `prj_VPzi04e6hKw3Vgbfua2KesKGlhDz`, propietario del equipo esperado. Se vinculó la carpeta a ese proyecto existente; no se creó otro. `.vercel/project.json` contiene el ID de proyecto y org/team correctos y está excluido de Git.
- Deployment: `dpl_FdcYSUnk7iH7djoQZvGjsaxH9kCk`, estado `READY`, target `preview`, rama `feature/landing-003-hero-fotografico`, SHA de GitHub `9a5bb2b599df696d5e34a87afcecef0557760c74`.
- URL exacta: https://landing-page-rutitas-qxzwr4u64-rutitasrutitas-8977.vercel.app/.
- Desde Edge, con la sesión autorizada y después de retirar la excepción temporal descrita abajo, la portada, `/privacidad` y `/eliminar-cuenta` cargaron contenido de Rutitas; ninguna mostró inicio de sesión. Se navegó directamente a las dos rutas legales. La portada mostró logo, navegación, copy aprobado, ambos CTAs y footer con privacidad/eliminación.
- En escritorio (~1050×792) y emulación móvil 390×844, intentos de desplazamiento vertical y horizontal no movieron la portada. En móvil quedaron dentro del viewport el eslogan, subtítulo, ambos botones y footer. También se abrió el modal del CTA y el menú móvil. No se midieron aquí todos los siete viewports con Edge; la matriz completa de siete tamaños corresponde a las pruebas Playwright documentadas arriba.
- Las páginas legales son extensas y mantienen scroll normal.
- Nota de seguridad: `vercel curl` generó automáticamente un bypass de protección durante la primera consulta. Se revocó de inmediato; `protectionBypass` quedó sin entradas y la protección SSO siguió configurada como `all_except_custom_domains`. No se realizaron más llamadas `vercel curl` ni cambios globales de protección.
- La CLI creó configuración local ignorada (`.vercel/project.json` y `.env.local`). No se leyó ni se publicó el valor de sesión de `.env.local`; ninguno de estos archivos se agregó a Git.
- La Preview fue generada automáticamente por la integración GitHub/Vercel; no se inició despliegue. Producción y seguridad permanecieron sin cambios. PR #9 sigue abierto, Draft y sin merge.
- Capturas de esta inspección visual se presentaron en la sesión, pero no se guardaron en archivos. Las capturas automatizadas de no-scroll, con hashes y rutas, siguen disponibles fuera del repositorio según la sección «Capturas y archivo de métricas».

### Registro histórico anterior a la autorización

Este bloque conserva el estado observado antes de que el usuario autorizara la sesión de Edge. Queda supersedido por la verificación autorizada anterior: en ese momento la CLI no estaba disponible, el proyecto local no estaba vinculado y no se había confirmado el SHA ni inspeccionado el contenido. Esos hechos históricos no describen el estado actual.

## Estado de entrega

- Rama `feature/landing-003-hero-fotografico`; SHA funcional actual `9a5bb2b599df696d5e34a87afcecef0557760c74`. `main` continúa en `46522503f38c99b136948e7da1adf491207128f7`; el PR permanece abierto, Draft y sin fusionar.
- Run [GitHub Actions #16](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/43259000683): job `Verify landing page` aprobado. Gitleaks, verificación SDD, lint, typecheck, build, Vitest, Playwright, auditoría de dependencias y publicación de evidencia pasaron.
- Run [GitHub Actions #17](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/43259639450) verificó el SHA `b4392f1ea36ee1439f8ab1cbab84c961b24430cf`; todos los mismos jobs, incluido Gitleaks, terminaron `success`.
- Preview actual: el deployment, SHA y las rutas se verificaron desde Edge con sesión autorizada (ver sección «Verificación autorizada»). La nota histórica de bloqueo SSO que sigue a continuación ya no describe el estado actual.
- La actualización de la descripción del PR mediante la integración de GitHub recibió HTTP 403 (`Resource not accessible by integration`). `gh` no está instalado en el equipo, por lo que se conserva la descripción completa propuesta en `docs/PR_LANDING_003_DESCRIPCION.md` para copiarla manualmente; la descripción remota del PR podría seguir mostrando el texto anterior.
- Google Play sigue sin URL oficial y no se muestra como disponible. El validador de URL permanece en `src/config.ts`.
- No se modifican `main`, dominios, credenciales, producción ni aprobaciones legales. El PR no se fusiona.
