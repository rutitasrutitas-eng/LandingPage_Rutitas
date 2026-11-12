# Plan — LANDING-003

**Estado:** corrección LANDING-003 en curso sobre la rama y Draft PR #9 existentes. La Preview no se considera validada sin acceso autenticado.

| Fase | Trabajo | Evidencia / salida |
|---|---|---|
| 1. Auditar y respaldar | Verificar main, PRs, árbol limpio, instrucciones y activos originales; respaldar refs e outputs ignorados existentes. | SHA de main, bundle verificable, hashes de assets y respaldos locales. |
| 2. Especificar | Trazar L003-REQ-001..008 con archivos y pruebas; registrar el criterio de una sola pantalla. | Esta especificación, tareas, checklist y matriz actualizados. |
| 3. Implementar corrección | Eliminar sección DEMO/teléfono/QR, quitar su dependencia visual, mantener la configuración Play y ajustar header, hero y footer al alto disponible. | React/CSS sin contenido secundario, misma foto y logo; Home ocupa el viewport con contenido íntegro. |
| 4. Validar local | Ejecutar instalación limpia, lint, tipos, Vitest, Playwright, build, SDD y auditoría npm; revisar siete tamaños, entradas de scroll y capturas viewport. | Resultados y métricas por tamaño documentados en reporte; screenshots no `fullPage`. |
| 5. Publicar rama | Commit y push normal a `feature/landing-003-hero-fotografico`; abrir Draft PR a main. | SHA de implementación `a930de11b32c3397468c24773ed290055a7364eb`; PR #9 Draft. |
| 6. Revisar Preview | Usar solo sesión autorizada ya disponible en Dashboard/CLI; no generar enlaces SSO temporales. | Si persiste 403, registrar Preview no verificada y continuar con evidencia local/CI. |
| 7. Cerrar documentación | Actualizar Memoria.md, matriz, checklist y reporte después de los resultados locales/remotos. | SHA, resultados reales, métricas viewport, capturas y estado de Preview documentados. |

No están autorizados cambios de settings Vercel/GitHub, variables, dominios, publicación, aprobación legal ni merge.
