# Pendientes legales y operativos de Rutitas

**Estado:** decisiones pendientes de validación humana. Este documento no constituye asesoría legal ni aprobación del aviso.

## Para aprobar el aviso

- Identificar al responsable legal (persona, equipo o entidad), domicilio y régimen aplicable. La referencia inicial a la comunidad UTTT no acredita que la Universidad sea responsable, patrocinadora u operadora.
- Nombrar un canal de privacidad atendido, confirmar derechos y requisitos, identificar quién recibirá/contestará solicitudes y aprobar el procedimiento.
- Revisar inventario real por sistema: campos de registro y perfil, credenciales, identificadores, ubicación, viajes, fotos y documentos. Separar campos obligatorios/opcionales y datos locales de dispositivos de cualquier tratamiento remoto.
- Definir finalidades, bases/consentimientos y avisos para cada etapa. Confirmar el flujo de alta/login y la vinculación con la comunidad universitaria.
- Nombrar proveedores reales, funciones, ubicación de datos, transferencias, encargados y subencargados. Confirmar por separado MongoDB, hosting, Analytics y mapas; código o configuración no prueba contrato ni activación.
- Definir conservación, eliminación, respaldos, registros técnicos y excepciones justificadas por categoría; no publicar plazos hasta tenerlos aprobados.
- Verificar medidas técnicas y organizativas desplegadas, controles de acceso, HTTPS, respaldos, registros y respuesta ante incidentes. No atribuir certificaciones o protección no auditada.
- Revisar restricciones por edad, consentimiento de tutores cuando aplique, y concordancia con futuros avisos dentro de la app y declaraciones de Google Play.
- Aprobar versión, fecha de entrada en vigor y proceso para informar cambios. Conservar la advertencia “borrador” hasta la aprobación del responsable.

## Eliminar cuentas y datos

- La página `/eliminar-cuenta` no recibe solicitudes. No publicar un email, formulario o plazo hasta que exista un canal atendido y autorizado.
- Android revisado en `feature/integracion-android-ci-cd` (SHA `4b2ea8d10f4dbc94830db515a65dd3d00c6a66ad`) tiene `DEMO_MODE=true`. `AuthRepository.deleteAccount()` borra registros locales asociados en Room, cancela localmente rutas creadas y elimina archivos/fotos DEMO; su comentario dice que no afecta datos del servidor.
- Backend revisado en `main` (SHA `a95e62e2f0f9fbde46af0144c9fb89c858670c94`) tiene siete rutas de auth/perfil/catálogo. No se encontró `DELETE` de cuenta entre sus controladores. La integración Android–Backend no se confirmó.
- Antes de ofrecer eliminación real: definir endpoint/servicio autorizado, autenticación reforzada, verificación de titularidad, idempotencia, impacto en viajes de otras personas, datos/documentos, supresión o anonimización, copias, registros, retenciones legales y comprobante sin exponer secretos.
- Implementar pruebas de borrado local y remoto en entornos de prueba; validar revocación de tokens/sesiones, fallos parciales y comunicación del estado. No afirmar que una solicitud quedó completada si el Backend no confirma el resultado.

## Aprobaciones humanas requeridas

1. Responsable del proyecto: alcance, piloto UTTT y servicios que se consideran disponibles.
2. Responsable legal: identidad, régimen aplicable, aviso, derechos, retención y procedimiento de eliminación.
3. Responsables de Android y Backend: inventario de datos, permisos, integración, proveedores y pruebas del servicio operativo.
4. Equipo de publicación: canal/contacto, Google Play, consentimiento/Analytics y autorización de producción.

Ninguna aprobación se presume por la existencia de este documento o de pruebas automatizadas.
