# Tareas — LANDING-003

| ID | Tarea | Estado | Evidencia |
|---|---|---|---|
| L3-T-001 | Revisar repo, main, PRs, instrucciones y estado local | Completada | SHA base y PRs previos registrados en el reporte |
| L3-T-002 | Respaldar refs y evidencia local anterior | Completada | Bundle verificado y copia de outputs existentes fuera del repo |
| L3-T-003 | Copiar derivados optimizados de la fotografía original | Completada | Hashes conforme al manifiesto del kit |
| L3-T-004 | Implementar header, hero fotográfico y CTAs | Completada | App.tsx y styles.css |
| L3-T-005 | Retirar teléfono DEMO, QR y sección secundaria de Home | Completada | Bloque y componentes eliminados; `qrcode.react` sin otro uso y retirado; Play URL validator conservado en `src/config.ts` |
| L3-T-006 | Actualizar pruebas unitarias/Playwright para Home sin scroll | Completada localmente | Vitest verifica ausencia de DEMO/QR; Playwright mide siete viewports, bounds de contenido, wheel, touch, programa y menú flotante |
| L3-T-007 | Actualizar SDD 003, trazabilidad y memoria para el nuevo criterio | Completada localmente | Spec, plan, tareas, checklist, matriz, reporte y `Memoria.md` registran la corrección solicitada; añadir SHA y run al completar CI |
| L3-T-008 | Ejecutar validación local solicitada | Completada localmente | `npm ci`, lint, typecheck, Vitest 14/14, Playwright 8/8 por proyecto, build, SDD y audit con 0 vulnerabilidades |
| L3-T-009 | Actualizar la rama existente y Draft PR #9 | En curso | Commit normal y push solo a `feature/landing-003-hero-fotografico`; no crear otro PR |
| L3-T-010 | Revisar Preview por sesión preautorizada | No verificada | CLI no instalada y Dashboard no accesible en sesión; no generar enlaces SSO temporales ni afirmar validación de Preview |
| L3-T-011 | Eliminar scroll de portada y probar siete viewports | Completada localmente | `document`/`body` igualan cada viewport; rectángulos completos; `scrollY=0` tras rueda/programa/touch en Playwright |
| L3-T-012 | Crear evidencia visual limitada al viewport | Completada localmente | Capturas 1440×900 y 390×844, ambas sin `fullPage`, más JSON de métricas para los siete tamaños |
