# Aviso de privacidad de Rutitas

**ESTADO: BORRADOR PARA REVISIÓN INTERNA. NO APROBADO PARA PUBLICACIÓN COMO AVISO DEFINITIVO.**

**Versión de trabajo:** 17 de noviembre de 2026.
**Entrada en vigor:** Pendiente de aprobación.

Este documento de trabajo acompaña el diseño de `/privacidad`. Coteja las ramas/SHA de Android y Backend anotadas en `docs/VALIDACIONES_PRIVACIDAD.md`, sin afirmar que sus servicios estén desplegados o traten actualmente datos de personas usuarias. No constituye asesoría legal ni aviso definitivo.

## 1. Responsable del tratamiento

Rutitas es un proyecto en desarrollo que busca facilitar la movilidad compartida dentro de comunidades universitarias, con un piloto previsto inicialmente en la Universidad Tecnológica de Tula-Tepeji (UTTT). La institución piloto no se identifica automáticamente como responsable del tratamiento de datos personales.

**Pendiente indispensable:** identificación y domicilio del responsable legal del tratamiento, datos de contacto para privacidad y definición del régimen legal que resulte aplicable.

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

El Backend contiene repositorios MongoDB, Android DEMO almacena datos localmente y la Landing tiene integración opcional de Google Analytics con consentimiento. Esto no confirma contratos, activación, transferencias, ubicación de datos o tratamientos productivos. Configuración remota Vercel/Analytics y Google Maps no fue verificada.

**Pendiente:** identificar proveedores efectivos, funciones, ubicaciones, destinatarios, posibles transferencias y medidas contractuales de protección.

## 6. Seguridad

El código Backend revisado contiene hash de contraseñas y autenticación JWT; Android usa almacenamiento local para archivos DEMO. Estas características no son auditoría ni prueban servicio publicado.

**Pendiente:** verificar transporte seguro, infraestructura, accesos, cifrado aplicable, gestión de incidentes, copias de seguridad y controles operativos.

## 7. Conservación y eliminación

Rutitas deberá limitar la conservación de datos a los periodos necesarios para las finalidades autorizadas y, en su caso, para las obligaciones legales aplicables. Los plazos concretos deben documentarse por categoría.

Android DEMO posee una función que borra datos locales vinculados al perfil y archivos/fotos del dispositivo. Su comentario indica que no elimina datos del servidor. Entre las siete rutas del Backend revisado no se encontró DELETE de cuenta. **No se ha acreditado un mecanismo completo de eliminación remota.** La página `/eliminar-cuenta` informa esta limitación; el trámite, verificación y excepciones de conservación siguen pendientes.

## 8. Derechos de las personas titulares

De acuerdo con la legislación aplicable y con la identidad del responsable legal que se determine, las personas podrán ejercer los derechos de acceso, rectificación, cancelación y oposición (ARCO), además de otros mecanismos que correspondan conforme al marco jurídico. El ejercicio de estos derechos no debe supeditarse a una cuenta en la Landing.

**Pendiente:** habilitar un canal oficial atendido, un procedimiento de solicitud y verificación, sus plazos y el medio de respuesta. No se deben enviar contraseñas ni tokens a contactos no confirmados.

## 9. Analítica y tecnologías del navegador

La Landing Page almacena localmente la preferencia sobre analítica. Su código únicamente está preparado para cargar Google Analytics 4 cuando exista un identificador válido y la persona visitante consienta expresamente. Se debe validar cualquier tratamiento efectivo antes de habilitarlo en producción.

## 10. Actualizaciones

La versión aprobada del aviso, su fecha de entrada en vigor y los cambios relevantes se comunicarán mediante la misma dirección `/privacidad` y por otros medios que el responsable establezca cuando sea necesario.

**Pendiente de cierre:** validar el responsable, los datos y finalidades reales, el contacto, los terceros y transferencias, los plazos, la eliminación de cuentas y la revisión legal correspondiente. Hasta entonces este texto es una propuesta técnica de contenido.
