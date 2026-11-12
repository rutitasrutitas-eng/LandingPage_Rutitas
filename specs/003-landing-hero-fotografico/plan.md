# Plan — LANDING-003

**Estado:** implementación y validación local completadas; CI/Preview remotos pendientes de publicación y acceso.

| Fase | Trabajo | Evidencia / salida |
|---|---|---|
| 1. Auditar y respaldar | Verificar main, PRs, árbol limpio, instrucciones y activos originales; respaldar refs e outputs ignorados existentes. | SHA de main, bundle verificable, hashes de assets y respaldos locales. |
| 2. Especificar | Trazar L003-REQ-001..008 con archivos y pruebas. | Esta especificación, tareas, checklist y matriz actualizados. |
| 3. Implementar | Crear hero fotográfico responsive; conservar identidad, interacciones, DEMO/QR secundario y rutas legales. | React/CSS y activos WebP/JPEG con logos originales sin cambios. |
| 4. Validar local | Ejecutar instalación limpia, lint, tipos, Vitest, Playwright, build, SDD y auditoría npm; revisar cinco tamaños y capturas. | `npm ci`, lint, typecheck, 14 Vitest, 10 Playwright, build, SDD (22 documentos) y `npm audit` pasan; capturas desktop/móvil. |
| 5. Publicar rama | Commit y push normal a `feature/landing-003-hero-fotografico`; abrir Draft PR a main. | Pendiente de creación de commit y publicación. |
| 6. Revisar Preview | Inspeccionar Preview del PR y probar portada/rutas si Vercel lo permite sin cambiar configuración. | Scope Vercel denegado actualmente; Preview remoto aún no verificable. |
| 7. Cerrar documentación | Actualizar Memoria.md, matriz y reporte luego de obtener resultados. | Documentación local preparada; actualizar tras publicación con SHA, PR y checks reales. |

No están autorizados cambios de settings Vercel/GitHub, variables, dominios, publicación, aprobación legal ni merge.
