# Aviso de privacidad de Rutitas

**ESTADO: BORRADOR PARA REVISIÓN INTERNA. NO APROBADO PARA PUBLICACIÓN COMO AVISO DEFINITIVO.**

**Versión de trabajo:** 25 de noviembre de 2026.
**Entrada en vigor:** Pendiente de aprobación.

Este documento de trabajo acompaña el diseño de `/privacidad`. Conserva como evidencia histórica el cotejo de ramas/SHA de Android y Backend del 17 de noviembre en `docs/VALIDACIONES_PRIVACIDAD.md` y agrega por separado el informe posterior de infraestructura. No constituye asesoría legal ni aviso definitivo.

## 1. Responsable del tratamiento

Rutitas es un proyecto en desarrollo que busca facilitar la movilidad compartida dentro de comunidades universitarias, con un piloto previsto inicialmente en la Universidad Tecnológica de Tula-Tepeji (UTTT). La institución piloto no se identifica automáticamente como responsable del tratamiento de datos personales.

La coordinación identifica al **Equipo de Rutitas** como responsable operativo del proyecto. Se proporcionó como contacto de privacidad **rutitas.rutitas@gmail.com**. Estas decisiones no identifican por sí solas a la persona o entidad responsable legal.

**Pendiente indispensable:** identificación legal completa, domicilio, régimen aplicable y validación de que el canal de contacto está atendido y cuenta con un procedimiento aprobado.

## 2. Ámbito y datos personales

Este aviso está pensado para el sitio web de presentación de Rutitas y la aplicación Android. La Landing Page actual no permite crear cuentas ni dispone de un formulario de registro.

El modelo de datos Backend revisado contempla correo, nombre visible, teléfono opcional, identificador, rol, estado y fechas de actividad, además de hash de contraseña. El informe posterior proporcionado por infraestructura reporta la API de siete endpoints desplegada y verificada en Microsoft Azure con MongoDB Atlas. El despliegue no confirma por sí solo qué datos personales se recibieron, consultaron o almacenaron; el tratamiento efectivo requiere comprobación independiente.

La rama Android revisada usa `DEMO_MODE=true`, mantiene perfil y datos de demostración localmente con Room, y declara permisos de cámara y ubicación aproximada y precisa. Contiene funciones para guardar fotografías/documentos localmente. No demuestra que estos datos se envíen a un servidor ni que se usen con cuentas reales.

**Pendiente:** confirmar el inventario final de datos, incluyendo datos técnicos, posibles identificadores de dispositivo, registros de actividad y documentos, así como determinar si existen datos sensibles y cuáles son obligatorios u opcionales.

## 3. Finalidades de uso

Los siete endpoints técnicos reportados corresponden a registro, inicio/cierre de sesión, lectura/edición del perfil propio y consulta de catálogo/detalle de rutas. Su despliegue no demuestra que estén ofrecidos al público ni que Android los consuma. La versión Android revisada conserva `DEMO_MODE=true` y los tests de cliente revisados usan respuestas simuladas; no hay evidencia suficiente de solicitudes reales ni de tratamiento de datos de usuarios.

El proyecto contempla funciones futuras para coordinar viajes compartidos, gestionar conductores, solicitudes y reservas, pero esas funcionalidades aún no deben anunciarse como servicios operativos. Las finalidades adicionales o secundarias que se implementen se informarán y, cuando corresponda, se solicitará consentimiento.

## 4. Cámara, ubicación y archivos

El manifiesto Android revisado declara cámara y ubicación aproximada/precisa. El código del modo DEMO contempla uso local de fotos/documentos. La existencia de estos permisos no prueba monitoreo continuo ni transmisión al servidor.

**Pendiente:** confirmar momento de acceso, finalidad específica, necesidad, almacenamiento, acceso autorizado, conservación y opciones cuando un permiso se rechaza.

## 5. Compartición con otras personas y servicios

La coordinación de viajes podría requerir mostrar datos limitados del trayecto o del perfil a integrantes de la comunidad. El equipo debe aprobar qué se muestra, a quién y durante cuánto tiempo antes de activar estas funciones.

**Proveedores de infraestructura reportados:** Vercel aloja la Landing. El informe de infraestructura recibido reporta que Microsoft Azure aloja la API del Backend y que MongoDB Atlas forma parte de esa infraestructura. Este informe no permite concluir qué datos personales han sido transmitidos o almacenados, ni confirma contratos, regiones, transferencias o subencargados.

**Integración opcional sin medición real confirmada:** la Landing incluye código opcional de Google Analytics, pero no se verificó un ID real ni recolección activa. Google Tag Manager no está activado.

**Previstos o pendientes de confirmación:** Google Maps Platform y Google Play como posible canal futuro de distribución Android. Su inclusión no confirma activación ni tratamiento. La configuración de Analytics y los proveedores efectivos de cada tratamiento deben verificarse antes de describirlos como activos.

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

Google Analytics 4 tiene una propiedad y un flujo configurados para la Landing (`G-MKN6YXXZ8Y`); la cuenta oficial aparece como Administradora. La medición mejorada quedó desactivada y se guardó la ocultación de correo y de 17 claves de parámetros URL. La Landing pública no tiene configurado el Measurement ID: la consola no muestra datos recibidos y el sitio no carga la etiqueta ni envía eventos. No se habilitó GTM.

Si una versión futura habilita GA4 después de aprobación, la carga será condicional a un identificador válido y al consentimiento afirmativo. La preferencia se guarda localmente en el navegador y podrá rechazarse o revocarse desde «Preferencias de analítica» cuando el control esté disponible. El código preparado limita los eventos manuales a vistas de página con la ruta sin query y acciones generales existentes (CTA, apertura de preguntas y clic en redes), sin texto libre ni identificadores personales. No hay medición mejorada ni señales publicitarias habilitadas por la configuración del código; la revisión exhaustiva de ajustes publicitarios históricos de la propiedad queda pendiente.

La propiedad URL-prefix de Google Search Console para `https://landing-page-rutitas.vercel.app/` fue creada bajo la cuenta oficial. Aún no está verificada: producción no sirve el archivo de verificación nuevo. No se ha enviado sitemap ni solicitado indexación. Google informa que la recopilación de datos de una propiedad puede empezar al añadirla, incluso antes de verificarla; no se confirmó que ya haya datos disponibles para Rutitas. Esto no significa que la Landing mida analítica de navegación y no permite afirmar un tratamiento concreto de datos personales de visitantes. Fuente: [Ayuda de verificación de propiedad de Search Console](https://support.google.com/webmasters/answer/9008080?hl=es).

Los datos técnicos que Google Analytics o Search Console puedan procesar, su retención, región, destinatarios y condiciones deben confirmarse con las consolas/proveedores y ser ratificados por el responsable. Vercel aloja la Landing; Microsoft Azure y MongoDB Atlas son infraestructura de Backend reportada como desplegada, pero no se ha verificado tratamiento efectivo de datos personales. Google Maps Platform y Google Play son previstos o pendientes de confirmar como proveedores efectivos.

## 10. Actualizaciones

La versión aprobada del aviso, su fecha de entrada en vigor y los cambios relevantes se comunicarán mediante la misma dirección `/privacidad` y por otros medios que el responsable establezca cuando sea necesario.

**Pendiente de cierre:** identidad legal completa y domicilio, inventario del tratamiento efectivo, finalidades y datos técnicos que los proveedores procesan, confirmación de proveedores/transferencias, ratificación del periodo previsto de hasta 2 meses, implementación y validación de eliminación por Mark y Ame, procedimiento operativo para derechos/eliminación, derechos y plazos de respuesta, y revisión legal final. El plazo de recuperación de 7 días tras confirmación del Backend es distinto de la conservación general prevista. El aviso se mantiene como borrador no ratificado.
