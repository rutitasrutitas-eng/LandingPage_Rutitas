# Plan — LANDING-003

**Estado actual:** LANDING-003 completado y PR #9 fusionado a `main` el 2026-11-12 (merge commit `0481387180eab973b7c0416b073099638a3f7328`). Las fases y observaciones siguientes describen el proceso en su momento; consulta `Memoria.md` para el estado actual.

| Fase | Trabajo | Evidencia / salida |
|---|---|---|
| 1. Auditar y respaldar | Verificar main, PRs, árbol limpio, instrucciones y activos originales; respaldar refs e outputs ignorados existentes. | SHA de main, bundle verificable, hashes de assets y respaldos locales. |
| 2. Especificar | Trazar L003-REQ-001..008 con archivos y pruebas; registrar el criterio de una sola pantalla. | Esta especificación, tareas, checklist y matriz actualizados. |
| 3. Implementar corrección | Eliminar sección DEMO/teléfono/QR, quitar su dependencia visual, mantener la configuración Play y ajustar header, hero y footer al alto disponible. | React/CSS sin contenido secundario, misma foto y logo; Home ocupa el viewport con contenido íntegro. |
| 4. Validar local | Ejecutar instalación limpia, lint, tipos, Vitest, Playwright, build, SDD y auditoría npm; revisar siete tamaños, entradas de scroll y capturas viewport. | Resultados y métricas por tamaño documentados en reporte; screenshots no `fullPage`. |
| 5. Publicar rama | Commit y push normal a `feature/landing-003-hero-fotografico`; abrir Draft PR a main. | Completado históricamente; PR #9 fue fusionado el 2026-11-12 con merge commit `0481387180eab973b7c0416b073099638a3f7328`. |
| 6. Revisar Preview | Revisar la Preview desde una sesión autorizada; no generar enlaces SSO temporales. | Completado el 2026-11-12: deployment `dpl_FdcYSUnk7iH7djoQZvGjsaxH9kCk`, SHA `9a5bb2b599df696d5e34a87afcecef0557760c74`; rutas inspeccionadas. |
| 7. Cerrar documentación | Actualizar Memoria.md, matriz, checklist y reporte después de los resultados locales/remotos. | Completado; el reporte refleja esa revisión de 2026-11-12. |

Límite de la solicitud LANDING-003 en ese momento: no se autorizaban cambios de settings Vercel/GitHub, variables, dominios, publicación, aprobación legal ni merge. El merge humano ocurrió después, el 2026-11-12.
