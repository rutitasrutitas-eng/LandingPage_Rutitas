# Validaciones obligatorias del aviso de privacidad Rutitas

**Estado:** Borrador técnico, no ratificado. Fecha de revisión de repositorios: 17 de noviembre de 2026.

## Verificación técnica de repositorios (solo lectura)

Los clones usados para cotejo están fuera de este repositorio y no son cambios de Android/Backend. Sus ramas pueden cambiar después de esta revisión. El cotejo no prueba despliegue, acceso, telemetría o tratamiento productivo.

- Backend público, rama `main`, SHA `a95e62e2f0f9fbde46af0144c9fb89c858670c94`: controladores declaran siete rutas (register/login/logout, GET/PATCH users/me, GET routes, GET routes/{id}); entidad User incluye datos de perfil/estado y hash de contraseña. Las rutas requieren autorización JWT. El catálogo tiene estados y visibilidad; no se encontró endpoint de reservas, viajes ni DELETE de cuenta en los controladores revisados. No prueba despliegue, MongoDB remoto o tratamiento actual.
- Android, rama `feature/integracion-android-ci-cd`, SHA `4b2ea8d10f4dbc94830db515a65dd3d00c6a66ad`: `DEMO_MODE=true`, URL de ejemplo `https://example.invalid/api/`; `RouteRepository` evita el Backend en DEMO. El proyecto declara permisos INTERNET, red, cámara y ubicación aproximada/precisa. `AuthRepository` conserva la sesión DEMO en Room; `deleteAccount()` borra datos locales y archivos/fotos, y su comentario dice explícitamente que no elimina datos del servidor. Esto no acredita app publicada ni transmisión.
- Android `main` consultada en GitHub se describe como documentación de arquitectura; el código de app citado corresponde a la rama feature indicada, no a `main`.
- Landing local: no contiene formulario de registro; Analytics requiere ID válido y consentimiento afirmativo. No se verificó Measurement ID real, propiedad GA4 ni envío a servicio externo.

## Falta aprobación documentada

- [ ] Determinar responsable legal (equipo, entidad privada o institución pública), domicilio y régimen jurídico aplicable.
- [ ] Correo/canal oficial de privacidad y procedimiento ARCO realmente atendido.
- [ ] Inventario de datos exacto de Android y Backend: obligatorios, opcionales y sensibles.
- [ ] Cotejar de nuevo ramas/SHA de Android y Backend al preparar una versión legal para aprobación.
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
