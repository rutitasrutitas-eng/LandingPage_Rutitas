# Plan — LANDING-004

**Estado:** corrección final validada localmente en `fix/landing-004-estabilidad-accesibilidad`, derivada del merge de LANDING-003 a `main` `0481387180eab973b7c0416b073099638a3f7328`. No se hizo push, PR, CI remoto ni despliegue, conforme a la instrucción.

| Fase | Trabajo | Evidencia |
|---|---|---|
| 1. Línea base | Revisar instrucciones, SDD, PRs, estado Git y ejecutar los controles existentes antes de editar. | Baseline 2026-11-16 registrado en `docs/pruebas.md`. |
| 2. Especificar | Vincular accesibilidad, responsive, comportamiento y prueba por requisito. | Esta especificación, tareas, checklist y matriz. |
| 3. Corregir | Incluir Analytics en el fondo inerte, elevar el backdrop sobre sus controles, atrapar foco externo y permitir crecimiento/scroll si aumenta el texto. | Implementado en `src/App.tsx`, `src/styles.css`. |
| 4. Probar | Añadir integración E2E con Measurement ID sintético, Tab/Shift+Tab/Escape, retorno, contraste del foco y texto ampliado. | `e2e/modal-analytics-isolation.spec.ts`; 6/6 dirigidas con ID sintético. |
| 5. Verificar | Ejecutar lint, typecheck, Vitest, Playwright normal y suite dirigida con ID sintético, build, SDD y audit; guardar resultados. | Todos los comandos requeridos pasan localmente; recuentos en `docs/pruebas.md`. |
| 6. Entrega | Crear commit local descriptivo; no hacer push/PR ni desplegar. | SHA local en entrega; CI remoto no ejecutado por instrucción del usuario. |

Dependabot se revisa para documentar incompatibilidades; sus actualizaciones no se fusionan ni se mezclan en este PR.
