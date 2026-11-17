# Tareas — LANDING-004

| ID | Tarea | Estado | Requisito | Evidencia |
|---|---|---|---|---|
| L4-T-001 | Inspeccionar GitHub, estado local, SDD, código y pruebas existentes | completada | L004-REQ-006 | `main` limpio en `0481387`; baseline en `docs/pruebas.md`. |
| L4-T-002 | Registrar requisitos y matriz antes del cambio de código | completada | L004-REQ-001..006 | `spec.md`, `plan.md`, esta tabla y matriz. |
| L4-T-003 | Corregir texto pequeño, Escape del menú y aislamiento del modal | completada | L004-REQ-001..004 | CSS y `src/App.tsx`; regresiones de teclado aprobadas. |
| L4-T-004 | Ampliar pruebas para teclado, modal y zoom representado | completada | L004-REQ-002..005 | Vitest y Playwright; resultados en `docs/pruebas.md`. |
| L4-T-005 | Ejecutar validación completa y auditoría Dependabot | completada localmente | L004-REQ-005..006 | Resultados de scripts y diagnóstico PR en el reporte. |
| L4-T-006 | Cerrar memoria, checklist y reporte con evidencia final | completada localmente | L004-REQ-006 | Resultados completos en `docs/pruebas.md` y `docs/REPORTE_LANDING_004.md`; CI remoto pendiente por límite de Vercel. |
| L4-T-007 | Crear commit y PR de revisión hacia `main` | commit local completado; PR no ejecutado | L004-REQ-006 | Evité push/PR: los PR existentes muestran el check automático `Vercel Preview Comments`, que puede iniciar Preview y contradice no desplegar en Vercel. |
