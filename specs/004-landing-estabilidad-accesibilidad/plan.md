# Plan — LANDING-004

**Estado:** implementación y revalidación local completadas en `fix/landing-004-estabilidad-accesibilidad`, derivada de `main` `0481387180eab973b7c0416b073099638a3f7328`.

| Fase | Trabajo | Evidencia |
|---|---|---|
| 1. Línea base | Revisar instrucciones, SDD, PRs, estado Git y ejecutar los controles existentes antes de editar. | Baseline 2026-11-16 registrado en `docs/pruebas.md`. |
| 2. Especificar | Vincular accesibilidad, responsive, comportamiento y prueba por requisito. | Esta especificación, tareas, checklist y matriz. |
| 3. Corregir | Elevar mínimos tipográficos; cerrar el menú con Escape; aislar el fondo mientras el diálogo está abierto. | `src/styles.css`, `src/App.tsx`. |
| 4. Probar | Añadir regresiones para foco inerte, retorno de foco, Escape, tamaños y zoom representado. | `src/App.test.tsx`, `e2e/landing.spec.ts`. |
| 5. Verificar | Ejecutar `npm ci`, lint, typecheck, Vitest, Playwright, build, SDD y audit; guardar resultados. | Recuento real en checklist, pruebas y memoria. |
| 6. Entrega | Commit local descriptivo; no disparar Preview ni producción. | PR/push se dejan pendientes porque los PR activan la integración `Vercel Preview Comments`; no hay SHA remoto ni run CI para LANDING-004. |

Dependabot se revisa para documentar incompatibilidades; sus actualizaciones no se fusionan ni se mezclan en este PR.
