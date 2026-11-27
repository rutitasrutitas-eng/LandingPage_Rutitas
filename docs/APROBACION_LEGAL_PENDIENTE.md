# Aprobación legal y de eliminación pendiente

**Estado:** PENDIENTE DE REVISIÓN DEL RESPONSABLE. Este archivo es una lista interna; no es aviso legal y no constituye aprobación.

Antes de publicar `/privacidad` como aviso definitivo, la persona responsable debe confirmar y aprobar cada rubro con base en las prácticas reales de Rutitas:

- [x] Coordinación proporcionó identidad personal y domicilio para incluirlos en la versión candidata pública; su carácter jurídico, régimen aplicable y exactitud/alcance legal aún requieren ratificación. El nombre y domicilio se conservan únicamente en el aviso candidato, no en este checklist interno.
- [x] Coordinación confirmó `rutitas.rutitas@gmail.com` como contacto oficial y que el Equipo de Rutitas atenderá conjuntamente los mensajes. Falta aprobar el procedimiento operativo de derechos, designar formalmente quién los tramita y confirmar su adecuación legal.
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
- [ ] Aprobar e implementar el procedimiento ARCO propuesto en `LANDING_021_PRIVACIDAD_ARCO.md`, designar formalmente persona/departamento responsable, identidad segura, registro/seguimiento, requisitos y respuesta. Correo no acredita identidad ni habilita eliminación de cuenta.
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

- [x] Coordinación confirmó la propiedad GA4 `565238699`, flujo `G-MKN6YXXZ8Y`, y la cuenta oficial como Administradora efectiva. El 2026-11-26 se reabrieron y verificaron retención de eventos/usuario de 2 meses, reinicio con actividad nueva desactivado, Signals y datos proporcionados por usuarios desactivados, personalización publicitaria en 0/307 regiones, recogida granular de ubicación/dispositivo desactivada, medición mejorada desactivada y ocultación de correo/17 claves URL activa. El flujo indica que la recogida no está activada y no muestra datos recibidos.
- [ ] Ratificar propósito, base legal, información técnica que pueda recibir Google, retención y texto de consentimiento antes de configurar el ID real en producción. Actualmente no hay Measurement ID en la Landing ni datos recibidos.
- [ ] Antes de cualquier activación, confirmar que estos controles técnicos cumplen la decisión legal y de producto: aunque los estados se verificaron en GA4 el 2026-11-26, la consola y código no determinan por sí mismos las finalidades, base jurídica, proveedores/transferencias ni conservación de otros sistemas. No habilitar el ID real hasta aprobación legal y autorización separada.
- [ ] Cuando exista autorización legal y activación aprobada, comprobar opt-in, revocación, ausencia de PII y eventos esperados en Tag Assistant/GA4 Realtime; no se ejecutó esta validación real.
- [x] Search Console URL-prefix `https://landing-page-rutitas.vercel.app/` creado bajo la cuenta oficial con autorización; archivo de verificación nuevo agregado localmente, aún no publicado ni verificado. La propiedad se creó, pero no se envió sitemap ni se solicitó indexación.
- [ ] Equipo entrega la URL pública de Google Play que corresponde a Rutitas; validar ficha, enlace y QR en Preview.

## Ratificaciones humanas pendientes para el aviso

- [ ] Confirmar la identidad legal completa, carácter y régimen aplicable del responsable; confirmar de forma expresa si el domicilio personal puede publicarse y cuál domicilio debe constar. El domicilio se omite de esta rama mientras no exista esa autorización. «Equipo de Rutitas» es responsable operativo, no entidad jurídica por sí misma.
- [ ] Ratificar el inventario y las finalidades por superficie: Landing, Android `DEMO_MODE=true` y Backend. Confirmar de forma independiente si existen datos de usuarios en el Backend desplegado; la existencia de siete endpoints no lo demuestra.
- [ ] Confirmar proveedores efectivos y sus funciones, condiciones, regiones y transferencias: Vercel; GA4 (propiedad configurada, sin colección desde la Landing); Azure/MongoDB Atlas (despliegue reportado, tratamiento de datos no verificado); Search Console (propiedad creada, sin verificar, aunque Google indica que la recolección de la propiedad puede iniciar antes de verificarla); Maps/Play (uso efectivo pendiente).
- [ ] Ratificar la conservación prevista de hasta 2 meses por categorías, punto inicial y excepciones; mantenerla distinta de los 7 días de recuperación que solo iniciarían tras confirmación del Backend.
- [ ] Aprobar procedimiento y plazos ARCO y designar formalmente quien los atienda. Confirmar método de verificación de identidad, seguimiento y cumplimiento de plazos. El correo oficial no inicia eliminación ni verifica identidad; la eliminación remota permanece no operativa.
- [ ] Obtener revisión legal final y autorización humana explícita antes de retirar «BORRADOR NO RATIFICADO» o publicar aviso definitivo.

**Regla de cierre:** no quitar los marcadores ni marcar ningún checkbox como aprobado hasta que la persona responsable confirme la información. No pegar secretos, credenciales, identificadores privados o datos personales en este documento.
