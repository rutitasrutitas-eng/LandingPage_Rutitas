# Aviso de privacidad de Rutitas

**ESTADO: BORRADOR PARA REVISIÓN INTERNA. NO APROBADO PARA PUBLICACIÓN COMO AVISO DEFINITIVO.**

**Versión de trabajo:** 16 de noviembre de 2026.
**Entrada en vigor:** Pendiente de aprobación.

Este documento de trabajo acompaña el diseño de `/privacidad`. El contenido recibido se adaptó para dejar claro qué no fue verificado en los repositorios Android/Backend ni en un despliegue. No constituye asesoría legal ni aviso definitivo.

## 1. Responsable del tratamiento

Rutitas es un proyecto en desarrollo que busca facilitar la movilidad compartida dentro de comunidades universitarias, con un piloto previsto inicialmente en la Universidad Tecnológica de Tula-Tepeji (UTTT). La institución piloto no se identifica automáticamente como responsable del tratamiento de datos personales.

**Pendiente indispensable:** identificación y domicilio del responsable legal del tratamiento, datos de contacto para privacidad y definición del régimen legal que resulte aplicable.

## 2. Ámbito y datos personales

Este aviso está pensado para el sitio web de presentación de Rutitas y la aplicación Android. La Landing Page actual no permite crear cuentas ni dispone de un formulario de registro.

El paquete de integración describe para el Backend campos de correo electrónico, nombre visible, teléfono opcional, identificador, rol, estado, fecha de registro y otros datos de actividad, además de hash de contraseñas. En esta tarea no se verificó el repositorio Backend ni un despliegue. Este inventario es una referencia pendiente de cotejo con la versión vigente, no una afirmación de tratamiento productivo.

El paquete de integración describe para el modo DEMO de Android datos locales de perfil, preferencias de zona y horarios, información de viajes, fotografías y documentos relacionados con la identidad y el vehículo de conductores, además de permisos de cámara y ubicación aproximada y precisa. Esta descripción no se verificó contra el repositorio Android en esta tarea. No demuestra que esos datos se envíen a un servidor.

**Pendiente:** confirmar el inventario final de datos, incluyendo datos técnicos, posibles identificadores de dispositivo, registros de actividad y documentos, así como determinar si existen datos sensibles y cuáles son obligatorios u opcionales.

## 3. Finalidades de uso

El Backend contiene funciones de registro, inicio y cierre de sesión, consulta y actualización del perfil y consulta de rutas. Estas funciones todavía están en etapa de integración con Android.

El proyecto contempla funciones futuras para coordinar viajes compartidos, gestionar conductores, solicitudes y reservas, pero esas funcionalidades aún no deben anunciarse como servicios operativos. Las finalidades adicionales o secundarias que se implementen se informarán y, cuando corresponda, se solicitará consentimiento.

## 4. Cámara, ubicación y archivos

Android contempla el uso de cámara y ubicación para funciones que deben describirse según su implementación real. En el modo DEMO, determinadas fotografías y documentos de conductor pueden almacenarse de forma local. La existencia de estos permisos no implica necesariamente monitoreo continuo ni transmisión de datos al servidor.

**Pendiente:** confirmar momento de acceso, finalidad específica, necesidad, almacenamiento, acceso autorizado, conservación y opciones cuando un permiso se rechaza.

## 5. Compartición con otras personas y servicios

La coordinación de viajes podría requerir mostrar datos limitados del trayecto o del perfil a integrantes de la comunidad. El equipo debe aprobar qué se muestra, a quién y durante cuánto tiempo antes de activar estas funciones.

La infraestructura en desarrollo contempla MongoDB, almacenamiento local de Android y alojamiento de la web en Vercel. El sitio contiene integración opcional de Google Analytics con consentimiento; Android dispone de configuración de Google Maps. Esto no equivale a confirmar contrataciones, transferencias internacionales ni tratamientos productivos de cada proveedor.

**Pendiente:** identificar proveedores efectivos, funciones, ubicaciones, destinatarios, posibles transferencias y medidas contractuales de protección.

## 6. Seguridad

El código revisado del Backend usa hash de contraseñas y autenticación con tokens. Android implementa almacenamiento privado para determinados archivos locales. Estas características no constituyen, por sí solas, certificación ni auditoría de un servicio publicado.

**Pendiente:** verificar transporte seguro, infraestructura, accesos, cifrado aplicable, gestión de incidentes, copias de seguridad y controles operativos.

## 7. Conservación y eliminación

Rutitas deberá limitar la conservación de datos a los periodos necesarios para las finalidades autorizadas y, en su caso, para las obligaciones legales aplicables. Los plazos concretos deben documentarse por categoría.

La aplicación Android posee una función de borrado de datos locales de demostración. **No se ha acreditado un mecanismo completo de eliminación de la cuenta y sus datos en el servidor.** La página `/eliminar-cuenta` informa actualmente esa limitación; cuando se habilite el trámite real, detallará los pasos, verificación de titularidad, tratamiento de datos y excepciones de conservación.

## 8. Derechos de las personas titulares

De acuerdo con la legislación aplicable y con la identidad del responsable legal que se determine, las personas podrán ejercer los derechos de acceso, rectificación, cancelación y oposición (ARCO), además de otros mecanismos que correspondan conforme al marco jurídico. El ejercicio de estos derechos no debe supeditarse a una cuenta en la Landing.

**Pendiente:** habilitar un canal oficial atendido, un procedimiento de solicitud y verificación, sus plazos y el medio de respuesta. No se deben enviar contraseñas ni tokens a contactos no confirmados.

## 9. Analítica y tecnologías del navegador

La Landing Page almacena localmente la preferencia sobre analítica. Su código únicamente está preparado para cargar Google Analytics 4 cuando exista un identificador válido y la persona visitante consienta expresamente. Se debe validar cualquier tratamiento efectivo antes de habilitarlo en producción.

## 10. Actualizaciones

La versión aprobada del aviso, su fecha de entrada en vigor y los cambios relevantes se comunicarán mediante la misma dirección `/privacidad` y por otros medios que el responsable establezca cuando sea necesario.

**Pendiente de cierre:** validar el responsable, los datos y finalidades reales, el contacto, los terceros y transferencias, los plazos, la eliminación de cuentas y la revisión legal correspondiente. Hasta entonces este texto es una propuesta técnica de contenido.
