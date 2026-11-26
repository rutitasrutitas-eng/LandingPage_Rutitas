# LANDING-021 — procedimiento candidato de privacidad y derechos ARCO

**Fecha:** 25 de noviembre de 2026
**Estado:** propuesta interna; no aprobada ni habilitada como operación.
**Alcance:** Landing, Android DEMO, Backend reportado, GA4/GTM, Search Console y Google Play.

Este registro no contiene la identidad ni el domicilio entregados para la candidata pública. Esos datos aparecen únicamente en `/privacidad` y en `docs/AVISO_PRIVACIDAD_RUTITAS_BORRADOR.md`, con autorización expresa de coordinación. La autorización de publicación no equivale a ratificación legal.

## Estado factual por superficie

| Superficie | Hecho disponible | Límite de evidencia |
|---|---|---|
| Landing | Sitio informativo alojado en Vercel, sin formulario de registro; el Measurement ID productivo permanece vacío. | No se confirma recolección de Analytics desde la Landing. GTM no está habilitado. |
| Android | Build/código revisado con `DEMO_MODE=true`; datos de ejemplo y archivos se mantienen localmente según el cotejo técnico previo. | No demuestra transferencia al Backend ni tratamiento de cuentas reales. |
| Backend | Infraestructura reportó siete endpoints técnicos desplegados en Azure con MongoDB Atlas: autenticación, perfil y consulta de rutas. | El despliegue no prueba disponibilidad pública, tráfico de usuarios ni datos personales efectivamente recibidos/almacenados. |
| Producto | Reservas y viajes multiusuario siguen sin estar operativos. | No describirlos como funciones disponibles. |
| Eliminación | Android DEMO puede borrar datos locales; eliminación remota sigue pendiente de Mark y Ame. | `/eliminar-cuenta` es informativa; correo, botón o clic no inician plazo ni confirman borrado. Los 7 días previstos comienzan solo al confirmar Backend una solicitud validada. |
| Google | Propiedad/flujo GA4 configurados y GSC creada; ver estado detallado en `LANDING_020_ANALYTICS_SEO.md`. | No se activó GA4/GTM; retención y ajustes publicitarios de la propiedad no se pudieron revisar en esta tarea. GSC aún requiere la verificación publicada. |

## Propuesta de atención ARCO

Contacto confirmado por coordinación: `rutitas.rutitas@gmail.com`. Los mensajes serán atendidos conjuntamente por el Equipo de Rutitas; se recomienda nombrar a una persona responsable por cada solicitud. La dirección es un contacto de privacidad, pero el procedimiento todavía no está operativo.

1. Recibir una solicitud con asunto **«Solicitud de privacidad — Rutitas»**, registrar fecha de recepción y emitir un folio de seguimiento sin incluir datos personales en canales públicos.
2. Identificar qué derecho se solicita (acceso, rectificación, cancelación u oposición) y pedir solo la información necesaria para localizar los datos. Para rectificación, precisar el cambio solicitado.
3. Asignar a una persona responsable del seguimiento y registrar las acciones y fechas en un medio interno con acceso limitado.
4. Acordar con la persona una verificación de identidad proporcional por un canal seguro aprobado. El email por sí solo no acredita identidad. No solicitar contraseñas, tokens, códigos de acceso ni documentos innecesarios por correo.
5. Evaluar la solicitud con el responsable legal y los equipos del sistema donde estén los datos. Comunicar determinación y, si procede, ejecutar y confirmar la respuesta por un canal seguro.
6. Cerrar el folio, limitar el acceso al registro de atención y definir su conservación conforme a una política que apruebe el responsable.

Como referencia normativa —no como dictamen de aplicabilidad— la LFPDPPP federal consultada establece elementos de la solicitud y designación de quien la atiende (arts. 28–29); para ARCO prevé un máximo de 20 días para comunicar determinación y, si procede, 15 días siguientes para hacerla efectiva, con posible ampliación una vez por igual periodo si las circunstancias lo justifican (art. 31). Fuente oficial: [Cámara de Diputados, LFPDPPP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf). La versión vigente, régimen aplicable y cómputo deben confirmarse por asesoría/persona responsable antes de publicar compromisos.

### No operativo todavía

Aunque el buzón de contacto está atendido conjuntamente, falta que coordinación apruebe la verificación, recepción/folio, asignación formal, registro y canal de respuesta; falta también implementar y probar la eliminación remota en Android/Backend. No publicar un formulario ficticio. Enviar correo no acredita identidad, no confirma eliminación y no inicia los siete días.

## Retención y proveedores

- La conservación general propuesta de hasta dos meses requiere validación por categoría, punto inicial, excepciones y tratamiento de respaldos. No es un control técnico verificado.
- El plazo de recuperación de siete días para una baja solicitada es separado; solo empezaría tras confirmación del Backend de una solicitud validada.
- Vercel aloja la Landing; Azure/MongoDB Atlas son infraestructura de Backend reportada por coordinación. GA4/GSC tienen configuración descrita en documentos previos, pero el sitio no carga Analytics; Maps/Play deben describirse según uso efectivo cuando se confirme. No se infieren regiones, contratos, transferencias o tratamientos.
- La política económica de Rutitas autoriza costo adicional `$0 MXN`; no es una promesa de gratuidad de proveedores.

## Pendientes que bloquean ratificación

- Ratificar identidad, carácter y domicilio del responsable para el marco aplicable.
- Confirmar datos tratados, finalidades y base jurídica por superficie; comprobar si el Backend recibió datos reales.
- Confirmar proveedores efectivos, ubicaciones, transferencias, condiciones y salvaguardas.
- Ratificar retención, excepciones y eliminación de respaldos.
- Designar formalmente responsable/departamento ARCO, aprobar verificación segura y poner proceso en operación.
- Mark y Ame: implementar y validar la eliminación remota; conservar Android DEMO distinguido del servicio real.
- Revisión legal final y aprobación humana antes de quitar «BORRADOR NO RATIFICADO».
- Inspeccionar GA4 en consola: retención de eventos y reset de actividad, Signals, personalización publicitaria, datos de usuarios y recopilación. No activar la medición hasta resolver estas verificaciones y aprobación legal.
