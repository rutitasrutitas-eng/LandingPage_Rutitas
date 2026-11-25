# Aprobación legal y de eliminación pendiente

**Estado:** PENDIENTE DE REVISIÓN DEL RESPONSABLE. Este archivo es una lista interna; no es aviso legal y no constituye aprobación.

Antes de publicar `/privacidad` como aviso definitivo, la persona responsable debe confirmar y aprobar cada rubro con base en las prácticas reales de Rutitas:

- [ ] Nombre/razón social, domicilio/datos de identificación del responsable del tratamiento.
- [ ] Confirmar que `rutitas.rutitas@gmail.com` es el canal oficial, monitoreado y adecuado; responsable operativo informado: Equipo de Rutitas. Esto no identifica al responsable legal.
- [ ] Datos personales que realmente recopila la app y la landing; origen, categorías y obligatoriedad.
- [ ] Revisar por separado los datos que procesa la Landing, los datos locales de Android DEMO y cualquier dato que realmente llegue a la API desplegada.
- [ ] Verificar de forma independiente si la API recibió/procesó datos de personas usuarias y cuáles; el reporte de despliegue de infraestructura no prueba tratamiento efectivo.
- [ ] Finalidades reales y base legal aplicable para cada tratamiento.
- [ ] Si, cuándo y cómo se utiliza ubicación precisa o aproximada; permisos y controles disponibles.
- [ ] Si se solicitan documentos de conductores; tipos de documentos, personal autorizado, finalidad y salvaguardas existentes.
- [ ] Ratificar el informe de infraestructura: siete endpoints Backend reportados en Azure con MongoDB Atlas; confirmar los proveedores efectivos, funciones, ubicaciones, contratos, encargados/subencargados y transferencias asociadas a datos reales.
- [ ] Confirmar por separado el estado de Vercel, Google Analytics/Tag Manager, Google Maps Platform y Google Play; no inferir activación por el código o por estar previstos.
- [ ] Sistemas, ubicación de almacenamiento, accesos y medidas técnicas/organizativas que estén implantadas y verificadas.
- [ ] Plazos reales de conservación por categoría, criterios de eliminación y excepciones justificadas.
- [ ] Ratificar o ajustar la conservación prevista de hasta 2 meses por categoría y punto inicial; mantenerla separada de los 7 días de recuperación previstos para una eliminación solicitada.
- [ ] Medios y procedimiento operativo para ejercer derechos de titulares, requisitos y responsable de respuesta.
- [ ] Fecha de entrada en vigor/actualización y ciclo de revisión del aviso.

Antes de publicar `/eliminar-cuenta` como canal de cumplimiento, el equipo debe confirmar:

- [ ] Existe un mecanismo real y seguro para iniciar la eliminación, disponible desde fuera de la app cuando la tienda lo requiera.
- [ ] Método para verificar la titularidad de la cuenta sin pedir credenciales ni más datos de los necesarios.
- [ ] Datos que se borrarán, plazo operativo, sistemas incluidos y confirmación que recibirá la persona titular.
- [ ] Datos que podrían conservarse por obligación o motivo legítimo, justificación, acceso y plazo de retención.
- [ ] Contacto/canal atendido, responsables, tiempos de respuesta y procedimiento de escalamiento.
- [ ] Prueba end-to-end del proceso en un entorno controlado, evidencia de auditoría y manejo seguro de fallas.
- [ ] Aprobación del texto por la persona responsable del tratamiento y el equipo académico/legal.

## Analítica y tienda

- [x] Coordinación confirmó la propiedad GA4 `565238699`, flujo `G-MKN6YXXZ8Y`, y la cuenta oficial como Administradora efectiva. La medición mejorada está apagada y la ocultación de correo/17 claves de query está guardada.
- [ ] Ratificar propósito, base legal, información técnica que pueda recibir Google, retención y texto de consentimiento antes de configurar el ID real en producción. Actualmente no hay Measurement ID en la Landing ni datos recibidos.
- [ ] Antes de cualquier activación, inspeccionar en GA4 la retención de eventos, Google Signals, personalización publicitaria y estado efectivo de recopilación. En esta sesión no se pudo consultar la consola; no se deben tratar esos controles como verificados.
- [ ] Cuando exista autorización legal y activación aprobada, comprobar opt-in, revocación, ausencia de PII y eventos esperados en Tag Assistant/GA4 Realtime; no se ejecutó esta validación real.
- [x] Search Console URL-prefix `https://landing-page-rutitas.vercel.app/` creado bajo la cuenta oficial con autorización; archivo de verificación nuevo agregado localmente, aún no publicado ni verificado. La propiedad se creó, pero no se envió sitemap ni se solicitó indexación.
- [ ] Equipo entrega la URL pública de Google Play que corresponde a Rutitas; validar ficha, enlace y QR en Preview.

## Ratificaciones humanas pendientes para el aviso

- [ ] Identidad legal completa, domicilio y régimen aplicable del responsable; confirmar si el responsable legal es persona física, persona moral o institución. «Equipo de Rutitas» es responsable operativo, no identidad legal.
- [ ] Ratificar el inventario y las finalidades por superficie: Landing, Android `DEMO_MODE=true` y Backend. Confirmar de forma independiente si existen datos de usuarios en el Backend desplegado; la existencia de siete endpoints no lo demuestra.
- [ ] Confirmar proveedores efectivos y sus funciones, condiciones, regiones y transferencias: Vercel; GA4 (propiedad configurada, sin colección desde la Landing); Azure/MongoDB Atlas (despliegue reportado, tratamiento de datos no verificado); Search Console (propiedad creada, sin verificar, aunque Google indica que la recolección de la propiedad puede iniciar antes de verificarla); Maps/Play (uso efectivo pendiente).
- [ ] Ratificar la conservación prevista de hasta 2 meses por categorías, punto inicial y excepciones; mantenerla distinta de los 7 días de recuperación que solo iniciarían tras confirmación del Backend.
- [ ] Aprobar procedimiento y plazos de derechos, el canal realmente atendido y la verificación de identidad. El correo oficial no inicia la eliminación ni verifica identidad; la eliminación remota permanece no operativa.
- [ ] Obtener revisión legal final y autorización humana explícita antes de retirar «BORRADOR NO RATIFICADO» o publicar aviso definitivo.

**Regla de cierre:** no quitar los marcadores ni marcar ningún checkbox como aprobado hasta que la persona responsable confirme la información. No pegar secretos, credenciales, identificadores privados o datos personales en este documento.
