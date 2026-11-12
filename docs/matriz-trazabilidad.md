# Matriz de trazabilidad — LANDING-001

| Requisito | Especificación | Código/documento | Prueba/evidencia | Estado |
|---|---|---|---|---|
| LP-REQ-001 Preservación | `spec.md` | `src/App.tsx`, `src/styles.css` | UT-LP-001, UI-LP-004; build y revisión de capturas | Verificado localmente |
| LP-REQ-002 Rutas legales | `spec.md` | `src/App.tsx`, `vercel.json` | IT-LP-001–003; Playwright de navegación/recarga | Verificado localmente; Preview pendiente |
| LP-REQ-003 Privacidad | `spec.md` | `src/LegalPages.tsx`, `docs/requisitos-profesor.md` | UT-LP-003 + revisión humana | Borrador completo; datos y aprobación pendientes |
| LP-REQ-004 Eliminación | `spec.md` | `src/LegalPages.tsx` | UT-LP-004, SEC-LP-005/006; revisión humana | Página informativa verificada; proceso real pendiente |
| LP-REQ-005 GA4 opt-in | `spec.md` | `src/analytics.ts`, `src/AnalyticsConsent.tsx`, `.env.example` | UT-LP-006, SEC-LP-002 | Implementación local probada; ID/eventos reales no configurados |
| LP-REQ-006 Play | `spec.md` | `src/config.ts`, `src/App.tsx`, `.env.example` | UT-LP-005, IT-LP-005 | Validación local probada; URL oficial pendiente |
| LP-REQ-007 A11y/responsive | `spec.md` | `src/styles.css`, `src/App.tsx` | UI-LP-001–003; Playwright teclado y móvil | Verificado localmente |
| LP-REQ-008 Pruebas | `spec.md` | `package.json`, `src/App.test.tsx`, `e2e/` | Vitest 11/11; Playwright 9 aprobadas/1 omitida por viewport | Verificado localmente |
| LP-REQ-009 CI/seguridad | `spec.md` | `.github/workflows/quality.yml`, `.github/dependabot.yml` | workflow/JSON validados; `npm audit` | CI remoto de LANDING-003 aprobado; auditoría sin vulnerabilidades |
| LP-REQ-010 Docs/evidencias | `spec.md` | `docs/`, `.specify/`, `AGENTS.md`, `Memoria.md` | checklist y `docs/REPORTE_FINAL.md` | Documentado; Constitución pendiente de ratificación |

Actualiza la columna de estado tras la revisión final y cita evidencia ejecutada. No conviertas «por verificar» en «completado» por existir código.

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
| L003-REQ-005 DEMO y Play condicional | `specs/003-landing-hero-fotografico/spec.md` | `src/App.tsx`, `src/config.ts` | Vitest sin URL Play; Playwright sección DEMO/QR | Verificado localmente; URL Play pendiente |
| L003-REQ-006 Responsive y accesibilidad | `specs/003-landing-hero-fotografico/spec.md` | `src/styles.css`, `e2e/landing.spec.ts` | 10 E2E, cinco viewports, sin overflow; capturas 1440×900 y 390×844 | Verificado localmente |
| L003-REQ-007 Conservar legal, GA4 y Vercel | `specs/003-landing-hero-fotografico/spec.md` | `src/LegalPages.tsx`, `src/analytics.ts`, `vercel.json` | 10 E2E navegan y recargan ambas rutas; config legal/GA4/Vercel sin diff; Vercel 403 impide Preview | Local y CI verificados; Preview Ready reportada pero contenido no inspeccionado |
| L003-REQ-008 Evidencia y SDD | `specs/003-landing-hero-fotografico/spec.md` | `Memoria.md`, esta matriz, reporte y workflow CI | SDD 22 docs, reporte, hashes, capturas; PR #9; runs #11 y #12 success; SHA actual `b58c3996c800a73bcb6f48985e6662725c796b16` | Verificado; pendiente inspección autenticada y confirmar SHA exacto de Preview |
