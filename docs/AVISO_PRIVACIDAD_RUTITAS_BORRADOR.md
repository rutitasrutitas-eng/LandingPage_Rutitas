# Aviso de privacidad de Rutitas

**ESTADO: BORRADOR PARA REVISIÓN INTERNA. NO APROBADO PARA PUBLICACIÓN COMO AVISO DEFINITIVO.**

**Versión de trabajo:** 17 de noviembre de 2026.
**Entrada en vigor:** Pendiente de aprobación.

Este documento de trabajo acompaña el diseño de `/privacidad`. Coteja las ramas/SHA de Android y Backend anotadas en `docs/VALIDACIONES_PRIVACIDAD.md`, sin afirmar que sus servicios estén desplegados o traten actualmente datos de personas usuarias. No constituye asesoría legal ni aviso definitivo.

## 1. Responsable del tratamiento

Rutitas es un proyecto en desarrollo que busca facilitar la movilidad compartida dentro de comunidades universitarias, con un piloto previsto inicialmente en la Universidad Tecnológica de Tula-Tepeji (UTTT). La institución piloto no se identifica automáticamente como responsable del tratamiento de datos personales.

La coordinación identifica al **Equipo de Rutitas** como responsable operativo del proyecto. Se proporcionó como contacto de privacidad **rutitas.rutitas@gmail.com**. Estas decisiones no identifican por sí solas a la persona o entidad responsable legal.

**Pendiente indispensable:** identificación legal completa, domicilio, régimen aplicable y validación de que el canal de contacto está atendido y cuenta con un procedimiento aprobado.

## 2. Ámbito y datos personales

Este aviso está pensado para el sitio web de presentación de Rutitas y la aplicación Android. La Landing Page actual no permite crear cuentas ni dispone de un formulario de registro.

En el código Backend revisado aparecen correo, nombre visible, teléfono opcional, identificador, rol, estado y fechas de actividad, además de hash de contraseña. Este inventario describe campos en código, no tratamiento productivo ni despliegue.

La rama Android revisada usa `DEMO_MODE=true`, mantiene perfil y datos de demostración localmente con Room, y declara permisos de cámara y ubicación aproximada y precisa. Contiene funciones para guardar fotografías/documentos localmente. No demuestra que estos datos se envíen a un servidor ni que se usen con cuentas reales.

**Pendiente:** confirmar el inventario final de datos, incluyendo datos técnicos, posibles identificadores de dispositivo, registros de actividad y documentos, así como determinar si existen datos sensibles y cuáles son obligatorios u opcionales.

## 3. Finalidades de uso

El Backend revisado declara registro, inicio/cierre de sesión, lectura/edición del perfil propio y consulta de catálogo/detalle de rutas. Android revisado evita llamar al Backend mientras está en DEMO. No se confirmó despliegue ni uso para personas usuarias.

El proyecto contempla funciones futuras para coordinar viajes compartidos, gestionar conductores, solicitudes y reservas, pero esas funcionalidades aún no deben anunciarse como servicios operativos. Las finalidades adicionales o secundarias que se implementen se informarán y, cuando corresponda, se solicitará consentimiento.

## 4. Cámara, ubicación y archivos

El manifiesto Android revisado declara cámara y ubicación aproximada/precisa. El código del modo DEMO contempla uso local de fotos/documentos. La existencia de estos permisos no prueba monitoreo continuo ni transmisión al servidor.

**Pendiente:** confirmar momento de acceso, finalidad específica, necesidad, almacenamiento, acceso autorizado, conservación y opciones cuando un permiso se rechaza.

## 5. Compartición con otras personas y servicios

La coordinación de viajes podría requerir mostrar datos limitados del trayecto o del perfil a integrantes de la comunidad. El equipo debe aprobar qué se muestra, a quién y durante cuánto tiempo antes de activar estas funciones.

**Proveedor actualmente usado:** Vercel aloja la Landing. Esto no acredita que el Backend esté desplegado allí ni que se use para almacenar perfiles o rutas.

**Código disponible, sin operación confirmada:** el Backend contiene repositorios MongoDB, pero no se confirmó una conexión a MongoDB Atlas. La Landing incluye una integración opcional de Google Analytics, pero no se verificó un ID real ni recolección activa.

**Contemplados o pendientes de confirmación:** Microsoft Azure, MongoDB Atlas, Google Maps Platform, Google Analytics como servicio de medición y Google Play como canal futuro de distribución Android. Esta lista no confirma contratos, configuración, activación, envío de datos, ubicación, transferencias ni tratamiento productivo. La configuración de servicios externos debe verificarse antes de habilitarlos.

La política del proyecto autoriza **$0 MXN de costo adicional**. No significa que los proveedores sean gratuitos ni que exista una garantía del proveedor; no se habilitarán servicios que puedan superar el límite aprobado.

**Pendiente:** identificar proveedores efectivos, funciones, ubicaciones, destinatarios, posibles transferencias y medidas contractuales de protección.

## 6. Seguridad

El código Backend revisado contiene hash de contraseñas y autenticación JWT; Android usa almacenamiento local para archivos DEMO. Estas características no son auditoría ni prueban servicio publicado.

**Pendiente:** verificar transporte seguro, infraestructura, accesos, cifrado aplicable, gestión de incidentes, copias de seguridad y controles operativos.

## 7. Conservación y eliminación

La coordinación indicó una conservación prevista de datos personales de **hasta 2 meses**, sujeta a revisión técnica y legal. Es una previsión, no una política implementada o verificada. Deben confirmarse el inicio del plazo, las categorías cubiertas, respaldos y excepciones antes de adoptarla.

Android DEMO posee una función que borra datos locales vinculados al perfil y archivos/fotos del dispositivo. No elimina datos del servidor. La coordinación prevé desarrollar un botón en Android y un mecanismo seguro en Backend. Mark y Ame deben implementarlos y validarlos antes de ofrecer eliminación remota. **Actualmente no se acredita un mecanismo remoto operativo ni el borrado de cuentas o respaldos.** La página `/eliminar-cuenta` informa esta limitación; verificación de titularidad, impacto en viajes y excepciones siguen pendientes.

## 8. Derechos de las personas titulares

De acuerdo con la legislación aplicable y con la identidad del responsable legal que se determine, las personas podrán ejercer los derechos de acceso, rectificación, cancelación y oposición (ARCO), además de otros mecanismos que correspondan conforme al marco jurídico. El ejercicio de estos derechos no debe supeditarse a una cuenta en la Landing.

El contacto proporcionado por coordinación es `rutitas.rutitas@gmail.com`; la Landing solo enlaza a ese correo y no recibe ni almacena solicitudes. **Pendiente:** confirmar que el buzón está atendido, quién dará respuesta, el procedimiento de solicitud/verificación, los plazos y el régimen legal aplicable. No se deben enviar contraseñas ni tokens por correo.

## 9. Analítica y tecnologías del navegador

La Landing Page almacena localmente la preferencia sobre analítica. Su código únicamente está preparado para cargar Google Analytics 4 cuando exista un identificador válido y la persona visitante consienta expresamente. Se debe validar cualquier tratamiento efectivo antes de habilitarlo en producción.

## 10. Actualizaciones

La versión aprobada del aviso, su fecha de entrada en vigor y los cambios relevantes se comunicarán mediante la misma dirección `/privacidad` y por otros medios que el responsable establezca cuando sea necesario.

**Pendiente de cierre:** identidad legal completa y domicilio, datos y finalidades reales, proveedores/transferencias efectivos, periodo previsto de hasta 2 meses, implementación y validación de eliminación por Mark y Ame, atención del contacto y revisión legal final. El aviso se mantiene como borrador no ratificado.
