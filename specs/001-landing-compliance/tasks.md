# Tareas — LANDING-001

| ID | Estado inicial | Resultado objetivo | Verificación |
|---|---|---|---|
| T-001 | completado | Publicar auditoría inicial y documentar la base. | `docs/auditoria-inicial.md`; árbol limpio al inicio y evidencia de inventario. |
| T-002 | completado | Crear Constitución propuesta y guías SDD sin ratificar. | `.specify/memory/constitution.md` está `PENDIENTE_RATIFICACION`. |
| T-003 | completado | Crear estructura de especificación/plan/checklist/matriz. | `specs/001-landing-compliance/` y `docs/matriz-trazabilidad.md`. |
| T-004 | completado | Implementar navegación a rutas legales y rutas directas. | Vitest y Playwright; `vercel.json` SPA rewrite. |
| T-005 | completado | Crear privacidad con todos los apartados y marcadores no confirmados. | UT-LP-003; revisión del borrador en `src/LegalPages.tsx`; requiere aprobación humana. |
| T-006 | completado | Crear eliminación informativa sin formulario ni endpoint simulado. | UT-LP-004; SEC-LP-005/006; Playwright de carga directa. |
| T-007 | completado | Preparar Google Play con URL configurable validada. | UT-LP-005 y pruebas de configuración; URL oficial sigue pendiente. |
| T-008 | completado | Preparar GA4 opt-in, sin ID ficticio ni PII. | UT-LP-006; integración no verificada en propiedad real. |
| T-009 | completado | Mejorar foco/modal y hacer páginas legales responsive. | Playwright teclado, rutas y anchos 320 px y móvil. |
| T-010 | completado | Añadir lockfile y scripts de calidad mínimos. | `npm ci`, lint, typecheck, build, Vitest, Playwright y auditoría de dependencias. |
| T-011 | completado | Añadir workflow GitHub Actions de PR, seguridad y evidencias. | YAML/JSON revisados; ejecución remota pendiente de GitHub. |
| T-012 | completado | Cerrar memoria, trazabilidad, checklist y reporte final. | Revisión documental y del árbol Git sin commit/push. |

Estados permitidos: `no_iniciado`, `en_progreso`, `bloqueado`, `completado`, `no_ejecutado`. El estado final de cada tarea se actualizará solo con evidencia.
