# Pendientes legales y operativos de Rutitas

**Estado:** decisiones pendientes de validación humana. Este documento no constituye asesoría legal ni aprobación del aviso.

## Para aprobar el aviso

- La coordinación identificó al Equipo de Rutitas como responsable operativo. Sigue pendiente identificar al responsable legal completo (persona o entidad), su domicilio y régimen aplicable. La referencia a la UTTT no acredita que la Universidad sea responsable, patrocinadora u operadora.
- La coordinación indicó `rutitas.rutitas@gmail.com` como contacto. Sigue pendiente confirmar que el buzón está atendido, quién recibirá/contestará solicitudes, los requisitos aplicables y el procedimiento aprobado.
- Revisar inventario real por sistema: campos de registro y perfil, credenciales, identificadores, ubicación, viajes, fotos y documentos. Separar campos obligatorios/opcionales y datos locales de dispositivos de cualquier tratamiento remoto.
- Definir finalidades, bases/consentimientos y avisos para cada etapa. Confirmar el flujo de alta/login y la vinculación con la comunidad universitaria.
- Confirmar por sistema los proveedores reales, funciones, ubicación de datos, transferencias, encargados y subencargados. Vercel aloja la Landing; la integración opcional de Analytics no acredita medición activa. Azure, MongoDB Atlas, Google Maps Platform, Google Analytics real y Google Play son contemplados o pendientes de confirmación; el código MongoDB no demuestra conexión Atlas. No inferir contratos ni activación.
- La coordinación propuso conservar datos personales hasta 2 meses, sujeto a revisión técnica y legal. Sigue pendiente definir punto inicial, categorías, respaldos y excepciones; todavía no es una política implementada/verificada.
- La política aprobada limita el costo adicional autorizado a $0 MXN. Esto no establece que los proveedores sean gratuitos; se debe verificar cualquier efecto de costo antes de habilitar servicios.
- Verificar medidas técnicas y organizativas desplegadas, controles de acceso, HTTPS, respaldos, registros y respuesta ante incidentes. No atribuir certificaciones o protección no auditada.
- Revisar restricciones por edad, consentimiento de tutores cuando aplique, y concordancia con futuros avisos dentro de la app y declaraciones de Google Play.
- Aprobar versión, fecha de entrada en vigor y proceso para informar cambios. Conservar la advertencia “borrador” hasta la aprobación del responsable.

## Eliminar cuentas y datos

- La página `/eliminar-cuenta` no recibe solicitudes. No publicar un email, formulario o plazo hasta que exista un canal atendido y autorizado.
- Android `main` y los heads de PR #9/#10 consultados el 2026-11-17 mantienen `DEMO_MODE=true`; PR #9 y #10 siguen abiertos. El código y las pruebas simuladas disponibles en esas ramas no demuestran que se eliminen cuentas del servidor. Referencias vigentes y SHAs: `docs/VALIDACIONES_PRIVACIDAD.md`.
- Backend `main` (SHA `a95e62e2f0f9fbde46af0144c9fb89c858670c94`, PR #6 fusionado) documenta el contrato de siete rutas de auth/perfil/catálogo. No se encontró `DELETE` de cuenta entre los controladores revisados. No se confirmaron pruebas Android contra un servidor autorizado ni servicio remoto operativo.
- La eliminación en Android/Backend está prevista: Mark y Ame deben implementar el botón y el mecanismo seguro y validarlos antes de ofrecerlos. No es funcional aún. Antes de ofrecerla: definir endpoint/servicio, autenticación reforzada, verificación de titularidad, idempotencia, impacto en viajes de otras personas, datos/documentos, supresión/anonimización, copias, registros, retenciones legales y comprobante sin exponer secretos.
- Implementar pruebas de borrado local y remoto en entornos de prueba; validar revocación de tokens/sesiones, fallos parciales y comunicación del estado. No afirmar que una solicitud quedó completada si el Backend no confirma el resultado.

## Aprobaciones humanas requeridas

1. Responsable del proyecto: alcance, piloto UTTT y servicios que se consideran disponibles.
2. Responsable legal: identidad completa, domicilio, régimen aplicable, aviso, derechos, retención y procedimiento de eliminación.
3. Responsables de Android y Backend (Mark y Ame para la eliminación prevista): inventario de datos, permisos, integración, proveedores, desarrollo y validación del servicio de borrado.
4. Equipo de publicación: canal/contacto, Google Play, consentimiento/Analytics y autorización de producción.

Ninguna aprobación se presume por la existencia de este documento o de pruebas automatizadas.
