# Constitución SDD de Rutitas Landing

**Estado: PENDIENTE_RATIFICACION.** Este documento es una propuesta para revisión del equipo; no constituye ratificación humana.

## Principios

1. **Conservar el producto existente.** Los cambios serán incrementales y mantendrán identidad visual, contenido válido y componentes actuales salvo necesidad trazable.
2. **Especificar antes de cambiar.** Cada cambio se vinculará a un requisito, tarea, archivo y evidencia de validación.
3. **Privacidad y seguridad por diseño.** No recopilar datos personales sin proceso real, no incluir secretos en Git y desactivar telemetría hasta tener configuración y consentimiento.
4. **Veracidad funcional.** No presentar como activo un servicio, mecanismo de borrado, ficha de tienda, certificación o protección que no esté confirmada.
5. **Accesibilidad.** Conservar semántica, foco perceptible, operación por teclado, compatibilidad con movimiento reducido y contenido legible en móviles.
6. **Dependencias controladas.** Mantener un lockfile reproducible, revisar vulnerabilidades, justificar nuevas dependencias y actualizar de forma deliberada.
7. **Pruebas antes de integrar.** Ejecutar comprobación de tipos, build, pruebas, verificaciones SDD y controles de secretos/dependencias en CI para Pull Requests.
8. **Despliegue bajo revisión.** Usar Preview para revisión cuando esté disponible. Producción requiere controles y aprobación humana; esta propuesta no autoriza producción, cambios de configuración Vercel, commits ni push.
9. **Trazabilidad completa.** Mantener relación verificable requisito → especificación → código → prueba → evidencia.

## Gestión de cambios y excepciones

- La propuesta de Constitución permanece pendiente de ratificación.
- Los datos legales/operativos no documentados se representan como `[PENDIENTE DE VALIDACIÓN DEL EQUIPO]`.
- Toda excepción o riesgo no resuelto se registra en `Memoria.md` y `docs/matriz-trazabilidad.md`.
- Los cambios no autorizados o sin prueba suficiente permanecen abiertos y no se presentan como completos.
