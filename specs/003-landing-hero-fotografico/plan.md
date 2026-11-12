# Plan — LANDING-003

**Estado:** rama y Draft PR publicados; validación local y CI/Gitleaks remotos aprobados; Preview reportada Ready pero inspección autenticada bloqueada hasta que el acceso de equipo surta efecto.

| Fase | Trabajo | Evidencia / salida |
|---|---|---|
| 1. Auditar y respaldar | Verificar main, PRs, árbol limpio, instrucciones y activos originales; respaldar refs e outputs ignorados existentes. | SHA de main, bundle verificable, hashes de assets y respaldos locales. |
| 2. Especificar | Trazar L003-REQ-001..008 con archivos y pruebas. | Esta especificación, tareas, checklist y matriz actualizados. |
| 3. Implementar | Crear hero fotográfico responsive; conservar identidad, interacciones, DEMO/QR secundario y rutas legales. | React/CSS y activos WebP/JPEG con logos originales sin cambios. |
| 4. Validar local | Ejecutar instalación limpia, lint, tipos, Vitest, Playwright, build, SDD y auditoría npm; revisar cinco tamaños y capturas. | `npm ci`, lint, typecheck, 14 Vitest, 10 Playwright, build, SDD (22 documentos) y `npm audit` pasan; capturas desktop/móvil. |
| 5. Publicar rama | Commit y push normal a `feature/landing-003-hero-fotografico`; abrir Draft PR a main. | SHA de implementación `a930de11b32c3397468c24773ed290055a7364eb`; PR #9 Draft. |
| 6. Revisar Preview | Inspeccionar Preview del PR y probar portada/rutas si Vercel lo permite sin cambiar configuración. | Vercel Bot informa Ready, pero llamadas al deployment y páginas responden 403 hasta autorización efectiva del scope de equipo. |
| 7. Cerrar documentación | Actualizar Memoria.md, matriz y reporte luego de obtener resultados. | Resultados locales, PR, runs #11 y #12, SHA actual y estado Ready informado por Vercel Bot documentados; inspección Preview pendiente por 403. |

No están autorizados cambios de settings Vercel/GitHub, variables, dominios, publicación, aprobación legal ni merge.
