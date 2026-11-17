# Validaciones obligatorias del aviso de privacidad Rutitas

**Estado:** Borrador técnico, no ratificado. Fecha de trabajo: 16 de noviembre de 2026.

## Afirmaciones aportadas por el paquete (no verificadas en este worktree)

Las siguientes descripciones aparecen en el material de integración recibido. En LANDING-006 no se revisaron los repositorios Android ni Backend ni un despliegue operativo. Deben cotejarse con sus SHA/ramas vigentes antes de aprobar el aviso. En esta rama sí se inspecciona la Landing localmente.

- Backend (identificado por el paquete como `Rutitas_BackEnd/main`): describe Register, Login y Logout y campos de User como email, displayName, phone opcional, passwordHash, role, status, createdAt, updatedAt y lastLoginAt. No prueba el despliegue productivo ni el tratamiento actual.
- Android (identificado por el paquete como `Rutitas_App/main`): describe `DEMO_MODE=true`, almacenamiento Room local, fotos privadas de perfil y documentos de conductores en demostración, además de permisos `INTERNET`, `CAMERA`, `ACCESS_COARSE_LOCATION` y `ACCESS_FINE_LOCATION`. No se confirmó en esta tarea.
- Android: el paquete afirma que `deleteAccount()` solo borra datos locales de DEMO; no se verificó contra el repositorio Android en esta tarea. No declarar `/eliminar-cuenta` como proceso operativo sin mecanismo y canal reales.
- Landing: esta rama local no contiene formulario de registro; el código de Analytics requiere ID válido y consentimiento afirmativo. El funcionamiento de una propiedad GA4 real no se verificó.

## Falta aprobación documentada

- [ ] Determinar responsable legal (equipo, entidad privada o institución pública), domicilio y régimen jurídico aplicable.
- [ ] Correo/canal oficial de privacidad y procedimiento ARCO realmente atendido.
- [ ] Inventario de datos exacto de Android y Backend: obligatorios, opcionales y sensibles.
- [ ] Determinar uso verdadero de permisos de ubicación y cámara, fotos, documentos y datos de viajes.
- [ ] Finalidades primarias y secundarias con consentimiento aplicable.
- [ ] Nombre y ubicación de proveedores concretos, transferencias y subencargados: MongoDB, Vercel, GA4, Maps, etc.
- [ ] Plazos específicos de retención, respaldos y supresión.
- [ ] Proceso funcional de solicitud de eliminación externo e interno; protocolo de identidad y respuesta.
- [ ] Medidas de seguridad efectivamente implementadas; no declarar certificaciones inexistentes.
- [ ] Fecha de entrada en vigor, control de cambios y aprobación humana del responsable.
- [ ] Concordancia con etiquetas Data safety de Google Play y aviso resumido dentro de la app (funciones futuras; alcance Android por confirmar).
- [ ] Revisar si usuarios menores de edad pueden registrarse y, de ser así, medidas y consentimientos aplicables.

## Fuentes externas de referencia (consultadas nov 2026)

Estas referencias fueron entregadas dentro del paquete; Codex no las revisó como asesoría legal ni las usa para declarar cumplimiento. Deben verificarse por la persona responsable antes de ratificar el texto.

- https://www.ordenjuridico.gob.mx/Documentos/Federal/html/wo125102.html — LFPDPPP actual artículos 15-18 y 21-29; verificar si el responsable es particular.
- https://support.google.com/googleplay/android-developer/answer/10144311 — política de privacidad accesible y Data safety.
- https://support.google.com/googleplay/android-developer/answer/13327111 — enlace web de eliminación y mecanismo dentro de app.
- https://legal.blablacar.com/es-mx/privacy-policy/ — categorías por comunidad/viajes.
- https://privacycenter.didiglobal.com/MX/privacy-notice/e092a6655fadcc7f615083bd284e1a22/es_MX — referencia sector transporte; no copiar texto ni asumir tratamientos de DiDi.
