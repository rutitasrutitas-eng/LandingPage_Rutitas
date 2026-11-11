# Tareas — LANDING-002

| ID | Tarea | Estado real | Evidencia o dependencia |
|---|---|---|---|
| L2-T-001 | Registrar estado Git y comprobar remoto/PRs | Completado | `docs/REPORTE_LANDING_002.md`; árbol sucio por LANDING-001. |
| L2-T-002 | Repetir instalación y controles LANDING-001 | Completado con incidencia de entorno | Suite local; instalación limpia aislada validó lock. `npm ci` dentro de OneDrive tuvo EBUSY al borrar archivos. |
| L2-T-003 | Investigar advisory `minimatch` | Completado | GHSA y `npm ls`; rama afectada es `10.2.6` de solo desarrollo; fija desde 11.0.1. |
| L2-T-004 | Aplicar override mínimo a `minimatch` | Completado localmente | `package.json` override `^11.0.1`; lock resuelve `11.0.4`; audit 0 y suite verde. |
| L2-T-005 | Hacer auditoría npm obligatoria en CI | Completado localmente | `.github/workflows/quality.yml` ejecuta `npm audit` sin umbral. |
| L2-T-006 | Ejecutar Gitleaks local/remoto | Bloqueado por dependencias externas | Docker ausente; no existe workflow en GitHub remoto; Gitleaks local no ejecutado. CI configurado, pendiente de push autorizado. |
| L2-T-007 | Crear spec, plan, tareas y checklist 002 | Completado localmente | `specs/002-landing-release/`. |
| L2-T-008 | Actualizar matriz, memoria y verificador SDD | Completado localmente | `docs/matriz-trazabilidad.md`, `Memoria.md`, `scripts/verify-sdd.mjs`. |
| L2-T-009 | Enumerar información legal faltante | Completado localmente | `docs/APROBACION_LEGAL_PENDIENTE.md`; aprobación sigue pendiente. |
| L2-T-010 | Verificar estado de GitHub sin modificarlo | Completado | Repo público, `main`, sin PRs, sin workflow remoto; sin commits/push. |
| L2-T-011 | Verificar producción y Preview | Parcial/bloqueado | Home pública carga; rutas legales muestran 404. Preview no existe; Vercel team responde 403 en integración. |
| L2-T-012 | Verificar GA4 y Google Play | Pendiente de datos del equipo | No hay ID GA4 ni URL oficial Play. |
| L2-T-013 | Preparar publicación y reversión | Completado como documentación | Plan 002; no se ejecuta publicación/rollback sin autorización explícita. |
| L2-T-014 | Revisión final y reporte local | Completado | `docs/REPORTE_LANDING_002.md`; SDD, JSON/YAML y enlaces validados. La entrega global sigue parcial por dependencias externas. |
