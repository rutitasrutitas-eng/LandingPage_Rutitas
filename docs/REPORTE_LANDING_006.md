# Reporte LANDING-006 — aviso de privacidad

**Fecha:** 2026-11-16

**Rama local:** `feature/landing-006-aviso-privacidad`

**Base:** LANDING-004 `d96103cb4a3c477c4e3e2cffd2ccec0a8b75b5e6`
**Estado:** implementación y pruebas locales; borrador legal no ratificado. Sin push, PR, merge ni despliegue.

## Cambios

- Se integró el diseño del paquete recibido en `src/PrivacyRutitas.tsx` y `src/privacy-rutitas.css`; solo la ruta `/privacidad` cambia de vista. La portada fotográfica, navegación y `/eliminar-cuenta` se conservan.
- El aviso incluye índice semántico y anclas, skip-link con foco al contenido, contacto explícitamente pendiente, paleta azul/blanco/amarillo, scroll natural y estilos responsive. Se reforzó el indicador de teclado con contorno navy y halo amarillo.
- El documento Markdown fuente quedó en `docs/AVISO_PRIVACIDAD_RUTITAS_BORRADOR.md`; la lista de aprobación y las limitaciones se mantienen en `docs/VALIDACIONES_PRIVACIDAD.md`.
- Los hechos de la Landing se describen a partir de este código local: no hay formulario de registro y Google Analytics requiere ID válido y consentimiento afirmativo. Las descripciones Android/Backend del paquete se etiquetan como referencias no cotejadas en esta tarea. No se afirma despliegue, transferencia de datos ni borrado remoto operativo.
- Se actualizó la especificación activa 001, tareas, checklist, verificador SDD, matriz, README y Memoria.

## Validación

Resultados finales: `npm ci`, lint, typecheck, Vitest, Playwright, build, SDD y audit se registran en `docs/pruebas.md`. Vitest: 16/16; E2E requerida: 14 pasaron y 2 omitidas intencionalmente por no tener GA ID; prueba dirigida con ID sintético para Analytics: 6/6. Build, typecheck, lint, SDD y audit pasan; npm audit encuentra 0 vulnerabilidades.

La suite E2E completa en una ejecución exploratoria con ID sintético expiró en dos casos porque el banner opt-in interceptó clics de pruebas no preparadas para responder al banner. La suite obligatoria sin ID y las pruebas dirigidas que necesitan el ID sintético se ejecutaron por separado y pasaron; el detalle está en `docs/pruebas.md`.

Las pruebas E2E incluyen los viewports 1440×900, 1366×768, 768×1024, 390×844, 375×667, 320×568 y 844×390, navegación por anclas, foco por teclado, Home y eliminación. Capturas completas (salidas locales ignoradas por Git):

- `test-results/landing006_privacidad_escritorio.png`
- `test-results/landing006_privacidad_movil.png`

## Pendientes humanos / externos

- Validar el borrador con la persona responsable y asesoría legal; completar identidad, domicilio, contacto atendido, régimen aplicable, finalidades, proveedores/transferencias, retención, medidas, versión y fecha de vigencia.
- Cotejar Android y Backend contra sus ramas/SHA vigentes; confirmar datos DEMO locales, permisos, endpoints implementados y estado real de integración. No se inspeccionaron esos repositorios como parte de LANDING-006.
- Definir un canal y un mecanismo real de eliminación de cuentas; la página `/eliminar-cuenta` no tramita solicitudes y no se agregó formulario.
- Ratificación humana de la Constitución SDD, CI remoto y Preview siguen pendientes.

No se añaden funcionalidades de negocio ni dependencias. No se modificó `vercel.json`, configuración remota, secretos, producción, Android o Backend.
