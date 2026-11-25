# Constitución SDD de Rutitas Landing

**Estado: RATIFICADA el 25 de noviembre de 2026 por DaRa, líder y coordinación de Rutitas.** La ratificación cubre los nueve principios. No representa aprobación legal del aviso, de tratamientos de datos personales ni de riesgos legales pendientes.

## Principios

1. **Conservar el producto existente.** Los cambios serán incrementales y mantendrán identidad visual, contenido válido y componentes actuales salvo necesidad trazable.
2. **Especificar antes de cambiar.** Cada cambio se vinculará a un requisito, tarea, archivo y evidencia de validación.
3. **Privacidad y seguridad por diseño.** No recopilar datos personales sin proceso real, no incluir secretos en Git y desactivar telemetría hasta tener configuración y consentimiento.
4. **Veracidad funcional.** No presentar como activo un servicio, mecanismo de borrado, ficha de tienda, certificación o protección que no esté confirmada.
5. **Accesibilidad.** Conservar semántica, foco perceptible, operación por teclado, compatibilidad con movimiento reducido y contenido legible en móviles.
6. **Dependencias controladas.** Mantener un lockfile reproducible, revisar vulnerabilidades, justificar nuevas dependencias y actualizar de forma deliberada.
7. **Pruebas antes de integrar.** Ejecutar comprobación de tipos, build, pruebas, verificaciones SDD y controles de secretos/dependencias en CI para Pull Requests.
8. **Despliegue bajo revisión.** Usar Preview para revisión cuando esté disponible y autorizado. Producción requiere controles y aprobación humana. Como regla general, commits, push y cambios de configuración requieren autorización; solo aplican excepciones expresas, acotadas, fechadas y registradas en la gestión de cambios. Ninguna excepción autoriza producción por implicación.
9. **Trazabilidad completa.** Mantener relación verificable requisito → especificación → código → prueba → evidencia.

## Gestión de cambios y excepciones

- Ratificación formal: DaRa, líder y coordinación de Rutitas, ratificó los nueve principios el 25 de noviembre de 2026. La decisión es técnica y no ratifica el aviso legal ni tratamientos de datos.
- Los datos legales/operativos no documentados se representan como `[PENDIENTE DE VALIDACIÓN DEL EQUIPO]`.
- Toda excepción o riesgo no resuelto se registra en `Memoria.md` y `docs/matriz-trazabilidad.md`.
- Los cambios no autorizados o sin prueba suficiente permanecen abiertos y no se presentan como completos.
- Excepción LANDING-020 (25 de noviembre de 2026): se autorizan completar cambios locales trazados, crear commit, hacer push únicamente de `feature/landing-020-ga4-seo`, abrir un PR hacia `main`, ejecutar CI y usar una Preview si Vercel la genera dentro del plan gratuito sin modificar configuración. Excluye `evidence/`, `LANDING_013.diff` y archivos ajenos. No autoriza merge, despliegue productivo, cambios en Vercel ni activar GA4/GTM. Es de un solo uso y no crea permiso permanente.
