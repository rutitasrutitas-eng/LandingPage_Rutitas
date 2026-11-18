# Matriz de trazabilidad — LANDING-001

| Requisito | Especificación | Código/documento | Prueba/evidencia | Estado |
|---|---|---|---|---|
| LP-REQ-001 Preservación | `spec.md`, `L7-T-001` | `src/App.tsx`, `src/styles.css`, `e2e/landing.spec.ts` | UT-LP-001; E2E carga directa/reload espera `complete`, `naturalWidth > 0`, `decode()` y geometría visible; captura de escritorio revisada | Verificado localmente; no requirió cambiar diseño |
| LP-REQ-002 Rutas legales | `spec.md` | `src/App.tsx`, `vercel.json` | IT-LP-001–003; Playwright de navegación/recarga | Verificado localmente; Preview pendiente |
| LP-REQ-003 Privacidad | `spec.md`, `L6-T-001..006` | `src/PrivacyRutitas.tsx`, `src/privacy-rutitas.css`, `docs/AVISO_PRIVACIDAD_RUTITAS_BORRADOR.md` | Vitest 16/16; E2E siete viewports; ramas/SHA Android/Backend cotejados en fuente | Implementado y probado localmente; despliegue, tratamientos productivos y aprobación legal pendientes |
| LP-REQ-004 Eliminación | `spec.md` | `src/LegalPages.tsx` | UT-LP-004, SEC-LP-005/006; revisión humana | Página informativa verificada; proceso real pendiente |
| LP-REQ-005 GA4 opt-in | `spec.md` | `src/analytics.ts`, `src/AnalyticsConsent.tsx`, `.env.example` | UT-LP-006, SEC-LP-002 | Implementación local probada; ID/eventos reales no configurados |
| LP-REQ-006 Play | `spec.md` | `src/config.ts`, `src/App.tsx`, `.env.example` | UT-LP-005, IT-LP-005 | Validación local probada; URL oficial pendiente |
| LP-REQ-007 A11y/responsive | `spec.md` | `src/styles.css`, `src/App.tsx` | Playwright 7 viewports Home sin scroll; menú y CTAs probados | Verificado localmente tras corrección LANDING-003 |
| LP-REQ-008 Pruebas | `spec.md`, `L7-T-001` | `package.json`, `src/App.test.tsx`, `e2e/` | Revalidación: Vitest 17/17; Playwright sin ID 23 pass/3 skip, sintético 25 pass/1 skip; audit high falla y se registra por separado | Funcionalidad y regresión verificadas localmente; audit bloquea release |
| LP-REQ-009 CI/seguridad | `spec.md`, `L8-T-001` | `.github/workflows/quality.yml`, `.github/dependabot.yml`, `package-lock.json`, `docs/REPORTE_SEGURIDAD_DEPENDENCIAS.md` | CI histórico pasó en SHA previos; auditoría local vigente: 11 high dev-only por GHSA-fc5q-39xc-vjpf, omit-dev 0, sin parche publicado; no se ha silenciado | Hallazgo residual visible; requiere parche compatible o aceptación humana del riesgo; CI de rama puede fallar en `npm audit` |
| LP-REQ-010 Docs/evidencias | `spec.md`, `L6-T-005`, `L7-T-001/002` | `docs/`, `.specify/`, `Memoria.md` | `docs/REPORTE_INTEGRACION_FINAL.md`, `docs/REPORTE_ACCESIBILIDAD_INTEGRACION.md`, `docs/VALIDACIONES_PRIVACIDAD.md`, SDD y pruebas locales actuales | Integrado y probado localmente; CI de la rama y publicación pendientes |
| LP-REQ-011 Navegación del aviso | `spec.md` + `L6-T-002` | `src/PrivacyRutitas.tsx`, `src/privacy-rutitas.css` | Vitest UT-LP-003; E2E valida índice y destinos, skip-link por teclado, Inicio y `/eliminar-cuenta`; siete viewports sin overflow | Implementado y probado localmente; portada preservada |
| LP-REQ-012 Base técnica del borrador | `spec.md`, `L6-T-006`, `L7-T-002` | `src/PrivacyRutitas.tsx`, `docs/VALIDACIONES_PRIVACIDAD.md` | GitHub vigente: Android PR #9/#10 abiertos en sus SHA-head; Backend PR #6 integrado en `main` `a95e62e2f0f9fbde46af0144c9fb89c858670c94`; pruebas Android con interceptores/respuestas simuladas, sin servidor real confirmado | Actualizar estado técnico; borrador legal y operación remota pendientes |
| LP-REQ-013 Analytics sintético | `spec.md` + `L6-T-007` | `e2e/landing.spec.ts`, `e2e/modal-analytics-isolation.spec.ts`, `src/SiteFooter.tsx` | Suite Playwright completa con ID sintético 18/18; prueba dedicada bloquea GTM; pruebas generales optan por rechazo para evitar superposición | Verificado localmente, sin solicitudes externas |
| LP-REQ-014 Eliminación local/remota | `spec.md` + `L6-T-006/008` | `src/LegalPages.tsx`, `docs/PENDIENTES_LEGALES_RUTITAS.md` | Android `AuthRepository.deleteAccount()` borra Room/fotos DEMO localmente; no se encontró DELETE en controladores Backend; prueba de regresión | Verificado y documentado; proceso remoto pendiente |
| LP-REQ-015 Presentación precisa | `specs/001-landing-compliance/spec.md`, `L5-T-001..002` | `src/App.tsx`, `src/styles.css`, `docs/REPORTE_LANDING_005.md` | Copy contrastado con Android/Backend; Vitest y E2E comprueban que la portada conserva identidad y el piloto no se presenta como activo | Verificado localmente; piloto real pendiente |
| LP-REQ-016 Preguntas frecuentes | misma, `L5-T-003` | `src/App.tsx`, `src/styles.css`, `e2e/landing.spec.ts` | 10 preguntas verificadas en Vitest y Playwright; teclado, Tab/Shift+Tab/Escape y mobile Chromium | Verificado localmente |
| LP-REQ-017 Metadatos veraces | misma, `L5-T-004` | `index.html`, `public/favicon.svg`, `e2e/landing.spec.ts` | Description/OG no prometen QR/descarga; favicon y siete viewports comprobados | Verificado localmente; SEO remoto no validado |

## Trazabilidad de aviso de privacidad — LANDING-006

| Requisito | Especificación/tarea | Código/documento | Evidencia | Estado |
|---|---|---|---|---|
| LP-REQ-003 Aviso en borrador y responsive | `specs/001-landing-compliance/spec.md`, `L6-T-001..006` | `src/PrivacyRutitas.tsx`, `src/privacy-rutitas.css`, `docs/AVISO_PRIVACIDAD_RUTITAS_BORRADOR.md`, `docs/VALIDACIONES_PRIVACIDAD.md` | Vitest final 17/17; E2E final siete viewports en Chromium y mobile-Chromium; fuentes Android/Backend cotejadas en SHA indicado | Implementado y probado localmente; servicio productivo y aprobación legal pendientes |
| LP-REQ-004 Eliminación no operativa | misma, `L6-T-002` | `src/LegalPages.tsx`, footer, enlace desde privacidad | E2E final navega y recarga; conserva página informativa y no añade formulario | Verificado localmente; mecanismo y canal reales pendientes |
| LP-REQ-007 Accesibilidad/responsive | misma, `L6-T-002,004` | componente, CSS y E2E | Teclado, skip-link/foco, siete viewports, índice/anclas y Analytics sintético en ambos proyectos | Verificado localmente; zoom nativo no ejecutado |
| LP-REQ-008 Calidad automatizada | misma, `L6-T-004` | `package.json`, pruebas Vitest/Playwright | Corrida final combinada: Vitest 17/17, E2E 22 pass/2 skip sin ID, 24/24 con ID sintético; detalle en `docs/REPORTE_INTEGRACION_FINAL.md` | Validado localmente; CI remoto no ejecutado |
| LP-REQ-010 Trazabilidad/evidencia | misma, `L6-T-005` | `Memoria.md`, `docs/pruebas.md`, checklist, reporte y matriz | Evidencia final LANDING-006 registrada en esta rama | Documentado localmente; no publicado |

Actualiza la columna de estado tras la revisión final y cita evidencia ejecutada. No conviertas «por verificar» en «completado» por existir código.

## Trazabilidad de presentación — LANDING-005

| Requisito | Especificación | Código/documento | Prueba/evidencia | Estado |
|---|---|---|---|---|
| LP-REQ-015 Presentación precisa | `specs/001-landing-compliance/spec.md`, `L5-T-001..002` | `src/App.tsx`, `src/styles.css`, `docs/REPORTE_LANDING_005.md` | Backend `main` `a95e62e…`; PR Android #9/#10 vigentes y sus límites documentados en `docs/VALIDACIONES_PRIVACIDAD.md`; Vitest/E2E | Implementado y probado localmente; pilotaje/servicio real pendiente |
| LP-REQ-016 Preguntas frecuentes | misma, `L5-T-003` | `src/App.tsx`, `src/styles.css`, `e2e/landing.spec.ts` | 10 preguntas verificadas en Vitest y Playwright; teclado, Tab/Shift+Tab/Escape y mobile Chromium | Verificado localmente |
| LP-REQ-017 Metadatos veraces | misma, `L5-T-004` | `index.html`, `public/favicon.svg`, `e2e/landing.spec.ts` | Playwright comprueba descripción sin promesa de QR/app, favicon disponible, 7 viewports sin overflow | Verificado localmente; SEO remoto no validado |

## Trazabilidad de validación y liberación — LANDING-002

| Requisito | Estado | Código/documento | Prueba y evidencia actual | Dependencia externa | Acción restante |
|---|---|---|---|---|---|
| L002-REQ-001 Verificar LANDING-001 | PARCIAL | `docs/REPORTE_LANDING_002.md`, `docs/pruebas.md` | Nueva ejecución local: lint, tipos, 11 unitarias, 9 E2E, build y SDD; producción legal devuelve 404 | Preview/Vercel scope | Revisar rutas en Preview después del merge de PR 001 |
| L002-REQ-002 Corregir minimatch | IMPLEMENTADO LOCALMENTE | `package.json`, `package-lock.json` | `npm ls`: 11.0.4 en ESLint/TypeScript-ESLint; `npm audit`: 0 vulnerabilidades; suite posterior pasa | Ninguna para validación local | Mantener auditoría estricta en CI |
| L002-REQ-003 CI seguro | PARCIAL | `.github/workflows/quality.yml` | YAML revisado; checkout completo, acciones por SHA, Gitleaks redactado, auditoría estricta y Playwright; aún no ejecutado | GitHub Actions remoto | Push autorizado y registrar run URL, SHA y resultado |
| L002-REQ-004 Preparación GitHub | PARCIAL | `docs/REPORTE_LANDING_002.md` | Repo público confirmado; rama `main`, HEAD alineado con `origin/main`, sin PRs abiertos; workflow ausente del remoto | Permiso para push/PR | Separar LANDING-001 y LANDING-002 en dos PRs consecutivos |
| L002-REQ-005 Preview Vercel y rutas | NO VERIFICADO | `vercel.json`, `e2e/landing.spec.ts` | Producción actual `/privacidad` y `/eliminar-cuenta` devuelve Vercel 404; pruebas locales pasan | Acceso al equipo Vercel y push de rama | Autorizar acceso/PR, generar Preview, probar rutas, recarga, recursos y consola |
| L002-REQ-006 GA4 real | PARCIAL | `src/analytics.ts`, `src/AnalyticsConsent.tsx`, `README.md` | Integración local condicional; no hay ID ni banner Analytics en el sitio público actual | Propiedad GA4, ID y acceso Realtime | Administrador configura ID, acepta consentimiento y comprueba Realtime |
| L002-REQ-007 Ficha Google Play | PENDIENTE | `src/config.ts`, `.env.example` | Estado local y público «Muy pronto» sin URL inventada | URL oficial pública de Play | Equipo entrega URL; verificar botón y QR en Preview |
| L002-REQ-008 Aprobación legal | PENDIENTE | `src/LegalPages.tsx`, `docs/APROBACION_LEGAL_PENDIENTE.md` | Borradores y lista de datos faltantes; nada ratificado | Responsable legal/equipo Rutitas | Completar datos reales y autorizar textos |
| L002-REQ-009 Ratificación SDD | PENDIENTE | `.specify/memory/constitution.md` | `PENDIENTE_RATIFICACION` preservado | Aprobación humana | Revisión y ratificación expresa |
| L002-REQ-010 Matriz docente | PARCIAL | `docs/matriz-trazabilidad.md` | Estados y evidencias locales; Play/GA/legal/CI/Preview permanecen pendientes | Administrador y equipo del proyecto | Cerrar filas según evidencia, no por existencia documental |
| L002-REQ-011 Secret scan | PARCIAL | Workflow Gitleaks; `.gitignore`; `.env.example` | No se encontró `.env` local; Gitleaks no ejecutado; remoto sin workflow | Docker/GitHub Actions | Ejecutar Gitleaks en PR y revisar resultado redactado |
| L002-REQ-012 Publicación y reversión | IMPLEMENTADO LOCALMENTE | `specs/002-landing-release/plan.md`, `docs/REPORTE_LANDING_002.md` | Runbook documentado; no se accionó producción | Aprobación del administrador Vercel | Publicar solo tras PR revisado y Preview aceptado |
| L002-REQ-013 Verificación producción | PARCIAL | `docs/REPORTE_LANDING_002.md` | Home pública abre; ambas rutas legales devuelven `404 NOT_FOUND` | Publicación aprobada | Resolver PR/Preview, después publicar y comprobar rutas |
| L002-REQ-014 Evidencias y entrega | PARCIAL | `docs/REPORTE_LANDING_002.md`, `docs/pruebas.md` | Evidencias locales documentadas; sin SHA nuevo, CI ni Preview | Push y permisos Vercel | Adjuntar SHA/check-run/URL Preview/capturas cuando existan |

## Trazabilidad de rediseño fotográfico — LANDING-003

| Requisito | Especificación | Código/documento | Prueba/evidencia | Estado |
|---|---|---|---|---|
| L003-REQ-001 Identidad oficial | `specs/003-landing-hero-fotografico/spec.md` | `src/App.tsx`, `public/assets/rutitas-logo.png` | Logo SHA256 sin cambio; Playwright home; hash anterior y actual coinciden | Verificado localmente y en CI #12 |
| L003-REQ-002 Hero con foto limpia | `specs/003-landing-hero-fotografico/spec.md` | `public/assets/rutitas-auto-hero*.webp`, `src/App.tsx` | Tres hashes coinciden con manifiesto; Playwright home y capturas escritorio/móvil inspeccionadas | Verificado localmente y en CI #12 |
| L003-REQ-003 Texto y acciones | `specs/003-landing-hero-fotografico/spec.md` | `src/App.tsx`, modales existentes | Vitest CTAs; Playwright CTA | Verificado localmente |
| L003-REQ-004 Navegación | `specs/003-landing-hero-fotografico/spec.md` | `src/App.tsx`, `src/styles.css` | Vitest foco; Playwright móvil/teclado y Escape | Verificado localmente |
| L003-REQ-005 Home sin DEMO y Play condicional | `specs/003-landing-hero-fotografico/spec.md` | `src/App.tsx`, `src/config.ts`, `package.json` | Demo, teléfono, QR y dependencia QR retirados; Play URL validator conservado; no se promociona Play | Verificado localmente; URL oficial Play sigue pendiente |
| L003-REQ-006 Una pantalla responsive | `specs/003-landing-hero-fotografico/spec.md` | `src/styles.css`, `e2e/landing.spec.ts` | 7 tamaños; métricas de body/document iguales al viewport, `scrollY=0`, rectángulos completos y rueda/touch/programa sin scroll; capturas viewport | Verificado localmente tras corrección |
| L003-REQ-007 Conservar legal, GA4 y Vercel | `specs/003-landing-hero-fotografico/spec.md` | `src/LegalPages.tsx`, `src/analytics.ts`, `vercel.json` | Legal directo/recarga con scroll natural; consentimiento y rewrite preservados; Preview `dpl_FdcYSUnk7iH7djoQZvGjsaxH9kCk`, SHA `9a5bb2b599df696d5e34a87afcecef0557760c74`, tres rutas inspeccionadas desde Edge autorizado | Verificado localmente y en Preview el 2026-11-12; no se alteró configuración Vercel |
| L003-REQ-008 Evidencia y SDD | `specs/003-landing-hero-fotografico/spec.md` | `Memoria.md`, esta matriz, reporte, capturas, métricas y workflow CI | Commit correctivo `54e0ecb1f4e0e03165afb794bed94a70d37d74c7`; run #16 y run #18 aprobados; PR #9 fusionado el 2026-11-12 mediante `0481387180eab973b7c0416b073099638a3f7328` | LANDING-003 integrado; ratificación de Constitución sigue pendiente |

## Trazabilidad de estabilidad y accesibilidad — LANDING-004

| Requisito | Especificación | Código/documento | Prueba/evidencia | Estado |
|---|---|---|---|---|
| L004-REQ-001 Texto responsive | `specs/004-landing-estabilidad-accesibilidad/spec.md` | `src/styles.css` | Playwright verifica >=12 CSS px y siete viewports más zoom representado | Verificado localmente; 320×568 sin scroll |
| L004-REQ-002 Escape en menú | misma | `src/App.tsx`, `src/App.test.tsx`, `e2e/landing.spec.ts` | Vitest y Playwright validan Escape, aria-expanded y foco de toggle | Verificado localmente |
| L004-REQ-003 Fondo del diálogo inerte | misma | `src/App.tsx`, `e2e/modal-analytics-isolation.spec.ts` | E2E con GA sintético: Analytics está dentro de `.site-shell[inert]`; foco externo no pasa, Tab/Shift+Tab cíclicos y Escape restaura al toggle móvil | Verificado localmente en Chromium y mobile-chromium |
| L004-REQ-004 Zoom/viewport corto | misma | `src/styles.css`, `e2e/landing.spec.ts`, `e2e/modal-analytics-isolation.spec.ts` | Viewport 720×450 y stress E2E de texto CSS duplicado; enlaces/CTA/modal alcanzables con scroll | Viewport y texto ampliado verificados; zoom real del navegador no ejecutado |
| L004-REQ-005 Rutas y consentimiento preservados | misma | `src/LegalPages.tsx`, `src/AnalyticsConsent.tsx`, pruebas | Playwright navega/recarga; Vitest consentimiento UI opt-in | Verificado localmente; sin eventos GA4 externos |
| L004-REQ-006 Validación trazable | misma | checklist, `docs/pruebas.md`, `Memoria.md`, reporte | Resultados finales registrados tras la corrección; CI remoto no se solicita | Validado localmente; sin push/PR/CI por instrucción del usuario |
| L004-REQ-007 Aislamiento de Analytics | misma | `src/App.tsx`, `e2e/modal-analytics-isolation.spec.ts` | ID sintético; controles Analytics inertes y visualmente debajo del backdrop; tras Escape banner y preferencias vuelven a responder; sin solicitud externa | Verificado localmente en ambos proyectos |
| L004-REQ-008 Indicador de foco | misma | `src/styles.css`, `e2e/modal-analytics-isolation.spec.ts` | `:focus-visible` real por teclado; contorno navy sobre claro y halo amarillo sobre navy, contraste calculado >=3:1 | Verificado localmente en ambos proyectos |
| L004-REQ-009 Texto ampliado | misma | `src/styles.css`, `e2e/modal-analytics-isolation.spec.ts` | Texto CSS duplicado en viewport 320×568; se permite scroll vertical y CTA, modal y enlace legal permanecen alcanzables sin overflow horizontal | Verificado localmente; el test no modifica el zoom real del navegador |
