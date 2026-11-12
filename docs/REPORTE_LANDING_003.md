# Reporte de corrección — LANDING-003 sin scroll

**Estado:** corrección implementada y validación local completa; pendiente publicar esta actualización en la rama existente y confirmar GitHub Actions/Gitleaks.
**Fecha:** 2026-11-12
**Rama:** `feature/landing-003-hero-fotografico`
**HEAD inicial revisado:** `5728d395ca10ccea552a8e318c64978e0f886595`
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
| GitHub Actions / Gitleaks | Pendiente del push de esta corrección |

## Capturas y archivo de métricas

Capturas de tamaño viewport real (sin `fullPage`) y mediciones JSON, guardadas fuera del repositorio:

- Escritorio 1440×900: `C:\Users\rafle\OneDrive\Desktop\anterior\_LANDING_003_Sin_Scroll_Evidencia_2026-11-12\LANDING_003_no_scroll_desktop_1440x900.png` — SHA-256 `8A914BF0EA460A5D0E3F0385A95B43A30F66A24479B8A0D038CEF3C5FA759913`.
- Móvil 390×844: `C:\Users\rafle\OneDrive\Desktop\anterior\_LANDING_003_Sin_Scroll_Evidencia_2026-11-12\LANDING_003_no_scroll_mobile_390x844.png` — SHA-256 `1A96AADD7148ECE214F287001CDED00E594AF2BCDD750B81801912E2F0D0D072`.
- Métricas siete viewports: `C:\Users\rafle\OneDrive\Desktop\anterior\_LANDING_003_Sin_Scroll_Evidencia_2026-11-12\LANDING_003_no_scroll_metrics.json` — SHA-256 `8D0654D9C5B652009A3D4F0A31FA0141F648547306A054E30DCD650473E0C18B`.

## Preview de Vercel

No se generaron enlaces temporales de autorización. `vercel` CLI no está instalada y el repositorio no tiene `.vercel/project.json`. La apertura de Edge desde el control de escritorio fue bloqueada porque no pudo determinar la URL actual con confianza; no se hicieron cambios en Dashboard. La Preview no está verificada por esta corrección. Si GitHub/Vercel sigue indicando deployment Ready, eso solo acredita el estado del deployment, no la inspección de portada o rutas.

## Estado de entrega

- Rama existente y PR Draft #9 a `main`; al redactar esta sección, queda publicar el commit correctivo y comprobar sus nuevos jobs remotos.
- Google Play sigue sin URL oficial y no se muestra como disponible. El validador de URL permanece en `src/config.ts`.
- No se modifican `main`, dominios, credenciales, producción ni aprobaciones legales. El PR no se fusiona.
