# Matriz de trazabilidad — LANDING-001

| Requisito | Especificación | Código/documento | Prueba/evidencia | Estado |
|---|---|---|---|---|
| LP-REQ-001 Preservación | `spec.md` | `src/App.tsx`, `src/styles.css` | UT-LP-001, UI-LP-004; build y revisión de capturas | Verificado localmente |
| LP-REQ-002 Rutas legales | `spec.md` | `src/App.tsx`, `vercel.json` | IT-LP-001–003; Playwright navegación/recarga | Verificado localmente; Preview pendiente |
| LP-REQ-003 Privacidad | `spec.md` | `src/LegalPages.tsx`, `docs/requisitos-profesor.md` | UT-LP-003 + revisión humana | Borrador completo; datos y aprobación pendientes |
| LP-REQ-004 Eliminación | `spec.md` | `src/LegalPages.tsx` | UT-LP-004, SEC-LP-005/006; revisión humana | Página informativa verificada; proceso real pendiente |
| LP-REQ-005 GA4 opt-in | `spec.md` | `src/analytics.ts`, `src/AnalyticsConsent.tsx`, `.env.example` | UT-LP-006, SEC-LP-002 | Implementación local probada; ID/eventos reales no configurados |
| LP-REQ-006 Play | `spec.md` | `src/config.ts`, `src/App.tsx`, `.env.example` | UT-LP-005, IT-LP-005 | Validación local probada; URL oficial pendiente |
| LP-REQ-007 A11y/responsive | `spec.md` | `src/styles.css`, `src/App.tsx` | UI-LP-001–003; Playwright teclado y móvil | Verificado localmente |
| LP-REQ-008 Pruebas | `spec.md` | `package.json`, `src/App.test.tsx`, `e2e/` | Vitest 11/11; Playwright 9 aprobadas/1 omitida por viewport | Verificado localmente |
| LP-REQ-009 CI/seguridad | `spec.md` | `.github/workflows/quality.yml`, `.github/dependabot.yml` | workflow/JSON validados; `npm audit` | CI configurado localmente; ejecución remota pendiente; 10 avisos moderados de `minimatch` |
| LP-REQ-010 Docs/evidencias | `spec.md` | `docs/`, `.specify/`, `AGENTS.md`, `Memoria.md` | checklist y `docs/REPORTE_FINAL.md` | Documentado; Constitución pendiente de ratificación |

Actualiza la columna de estado tras la revisión final y cita evidencia ejecutada. No conviertas «por verificar» en «completado» por existir código.
