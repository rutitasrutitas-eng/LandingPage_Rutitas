import SiteFooter from './SiteFooter'
import './privacy-rutitas.css'

const topics = [
  ['responsable', 'Quién protege tus datos'],
  ['datos', 'Qué información tratamos'],
  ['finalidades', 'Para qué la usamos'],
  ['permisos', 'Ubicación y cámara'],
  ['compartir', 'Con quién se comparte'],
  ['seguridad', 'Almacenamiento y seguridad'],
  ['retencion', 'Conservación y eliminación'],
  ['derechos', 'Tus derechos'],
  ['contacto', 'Contacto de privacidad'],
  ['analitica', 'Analítica de la web'],
  ['cambios', 'Cambios al aviso'],
] as const

/**
 * Aviso de privacidad de trabajo de Rutitas.
 * No retirar la advertencia de borrador hasta validar identidad legal,
 * inventario de datos, proveedores, retenciones y flujo de borrado.
 */
export default function PrivacyRutitas() {
  return (
    <div className="pr-page">
      <a className="pr-skip" href="#aviso-contenido">Saltar al aviso</a>
      <header className="pr-header">
        <a className="pr-brand" href="/" aria-label="Rutitas, volver al inicio">
          <img src="/assets/rutitas-emblema.png" alt="" width="42" height="42" />
          <span>rutitas<span className="pr-brand-dot">.</span></span>
        </a>
        <a className="pr-back" href="/">Volver al inicio <span aria-hidden="true">↗</span></a>
      </header>

      <main id="aviso-contenido" tabIndex={-1}>
        <div className="pr-hero">
          <div className="pr-hero-inner">
            <p className="pr-eyebrow">PRIVACIDAD EN RUTITAS</p>
            <h1>Tu camino.<br /><span>Tu información.</span></h1>
            <p className="pr-lead">Queremos que sepas qué información utiliza Rutitas, para qué la necesita y cómo puedes ejercer tus derechos.</p>
            <div className="pr-notice" role="status">
              <span className="pr-notice-dot" aria-hidden="true" />
              <p><strong>Borrador de revisión interna.</strong> Este aviso aún no es definitivo. La identificación legal y domicilio del responsable, los tratamientos y proveedores efectivos, la aplicación de los plazos y las prácticas reales de Android y Backend requieren confirmación y revisión legal antes de publicarlo como aviso vigente.</p>
            </div>
            <p className="pr-version">Versión de trabajo: 17 de noviembre de 2026 · Entrada en vigor: pendiente de aprobación</p>
          </div>
        </div>

        <section className="pr-summary" aria-label="Aspectos importantes de privacidad">
          <div><strong>Tu cuenta</strong><span>Datos para identificarte y acceder a Rutitas.</span></div>
          <div><strong>Tus recorridos</strong><span>La información de viajes pertenece a funcionalidades en desarrollo.</span></div>
          <div><strong>Tus decisiones</strong><span>Puedes consultar este aviso y ejercer tus derechos mediante el canal que se habilite.</span></div>
        </section>

        <div className="pr-layout">
          <nav className="pr-toc" aria-label="Secciones del aviso de privacidad">
            <p className="pr-toc-title">EN ESTA PÁGINA</p>
            {topics.map(([id, label], i) => <a key={id} href={`#${id}`}><span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>{label}</a>)}
          </nav>

          <div className="pr-content">
            <section id="responsable" aria-labelledby="h-responsable" className="pr-section">
              <span className="pr-section-num">01 / RESPONSABLE</span>
              <h2 id="h-responsable">Quién protege tus datos</h2>
              <p>Rutitas es un proyecto de movilidad compartida orientado inicialmente a la comunidad universitaria de la Universidad Tecnológica de Tula-Tepeji (UTTT). La universidad piloto no debe confundirse automáticamente con el responsable legal del tratamiento.</p>
              <p>El responsable operativo indicado por la coordinación es el <strong>Equipo de Rutitas</strong>. Esto no define por sí solo a la persona o entidad que será responsable legal del tratamiento.</p>
              <div className="pr-pending"><strong>Pendiente de validación:</strong> identificación legal completa y domicilio del responsable, régimen aplicable y relación jurídica del proyecto con la UTTT.</div>
            </section>

            <section id="datos" aria-labelledby="h-datos" className="pr-section">
              <span className="pr-section-num">02 / DATOS PERSONALES</span>
              <h2 id="h-datos">Qué información tratamos</h2>
              <p>La Landing Page no tiene formulario de registro. En el código del Backend revisado aparecen correo, nombre visible, teléfono opcional, identificador, rol, estado y fechas de actividad, además de un hash de contraseña. Ese código no demuestra que el Backend esté desplegado o trate actualmente datos de personas usuarias.</p>
              <p>La rama Android revisada está configurada con <code>DEMO_MODE=true</code>: mantiene perfiles y datos de demostración localmente con Room y contiene permisos de cámara y ubicación. Hay funciones que guardan fotos o documentos localmente. <strong>Esto no acredita transmisión a un servidor ni uso con cuentas reales.</strong></p>
              <div className="pr-pending"><strong>Antes del lanzamiento:</strong> inventario definitivo y fuente/versiones verificadas de los datos tratados, documentos, fotografías, identificadores técnicos, viajes, solicitudes y posibles datos sensibles: [PENDIENTE DE VALIDACIÓN DEL EQUIPO]. Distinguir datos obligatorios y opcionales; no declarar biometría, pagos ni seguimiento continuo sin evidencia.</div>
            </section>

            <section id="finalidades" aria-labelledby="h-finalidades" className="pr-section">
              <span className="pr-section-num">03 / FINALIDADES</span>
              <h2 id="h-finalidades">Para qué usamos tu información</h2>
              <p>El código del Backend revisado declara registro, inicio/cierre de sesión, consulta y edición del perfil propio y consulta de un catálogo de rutas. La app Android revisada no invoca esas rutas mientras se mantiene en DEMO. No se confirmó despliegue ni uso por personas usuarias.</p>
              <p>Rutitas busca facilitar que estudiantes de una misma comunidad conozcan recorridos compartidos y, en etapas posteriores, puedan coordinar viajes y solicitudes. Esas funciones futuras no deben anunciarse como tratamientos activos hasta que se implementen y aprueben.</p>
              <div className="pr-pending"><strong>Pendiente:</strong> distinguir finalidades necesarias y opcionales; documentar consentimientos y mecanismos para limitar finalidades secundarias si se introducen.</div>
            </section>

            <section id="permisos" aria-labelledby="h-permisos" className="pr-section">
              <span className="pr-section-num">04 / PERMISOS</span>
              <h2 id="h-permisos">Ubicación, cámara y documentos</h2>
              <p>El manifiesto de la rama Android revisada declara permisos de ubicación aproximada y precisa, y cámara. El código contempla seleccionar y guardar fotos/documentos en el dispositivo para el modo DEMO. La app revisada tiene <code>DEMO_MODE=true</code> y su configuración de URL de API es de ejemplo; los motivos, pantallas y condiciones de solicitud de cada permiso requieren una revisión funcional.</p>
              <p>Que un permiso figure en la aplicación no prueba que la información se recopile continuamente ni que se transmita a un servidor. El equipo debe documentar cuándo se solicita, qué se guarda y si es posible continuar sin concederlo.</p>
            </section>

            <section id="compartir" aria-labelledby="h-compartir" className="pr-section">
              <span className="pr-section-num">05 / TERCEROS</span>
              <h2 id="h-compartir">Con quién podría compartirse</h2>
              <p>Para coordinar viajes compartidos, Rutitas podría necesitar mostrar a otros participantes ciertos datos del recorrido o del perfil, pero la información exacta y sus controles de visibilidad requieren aprobación antes de activarse.</p>
              <p><strong>Uso observado:</strong> Vercel aloja esta Landing. El código de Analytics está integrado de forma opcional, pero no se verificó un ID GA4 real ni recolección activa. El Backend revisado contiene repositorios MongoDB, pero no se confirmó una conexión operativa a MongoDB Atlas.</p>
              <p><strong>Contemplados o pendientes de confirmación:</strong> Microsoft Azure, MongoDB Atlas para el Backend, Google Maps Platform, Google Analytics como servicio de medición y Google Play para distribuir Android. La inclusión en esta lista expresa una posibilidad del proyecto; no confirma contratación, configuración, activación, envío de datos, ubicación de almacenamiento, transferencias ni uso actual. Los viajes y solicitudes aún no se ofrecen como funciones operativas.</p>
              <div className="pr-pending"><strong>Por confirmar antes de operar:</strong> proveedores efectivamente usados por cada sistema, función, ubicación, acceso, condiciones contractuales, subencargados y transferencias aplicables. La política de Rutitas autoriza <strong>$0 MXN de costo adicional</strong>; esto no significa que los proveedores sean gratuitos ni confirma que sus servicios estén habilitados. No se debe activar un servicio que pueda exceder esa política.</div>
            </section>

            <section id="seguridad" aria-labelledby="h-seguridad" className="pr-section">
              <span className="pr-section-num">06 / PROTECCIÓN</span>
              <h2 id="h-seguridad">Almacenamiento y seguridad</h2>
              <p>El código del Backend revisado contiene hash de contraseñas y validación JWT; Android mantiene archivos de DEMO en almacenamiento local privado. Estos controles se observaron en ramas de código identificadas en la documentación técnica, pero no sustituyen una auditoría ni prueban operación de producción. Android no está integrado con el Backend revisado.</p>
              <div className="pr-pending"><strong>Por verificar:</strong> alojamiento definitivo, HTTPS, cifrado, gestión de accesos, copias de seguridad, registros, retención y respuesta ante incidentes. No se asegura una certificación o cifrado integral que aún no se haya comprobado.</div>
            </section>

            <section id="retencion" aria-labelledby="h-retencion" className="pr-section">
              <span className="pr-section-num">07 / CONTROL</span>
              <h2 id="h-retencion">Conservación y eliminación</h2>
              <p>La coordinación ha indicado como objetivo una conservación prevista de datos personales de <strong>hasta 2 meses</strong>, sujeta a revisión técnica y legal. Es una previsión, no una política implementada o verificada. Deben validarse el punto inicial del plazo, las categorías, respaldos y cualquier excepción antes de adoptar el periodo.</p>
              <p>Android DEMO permite borrar datos y archivos locales; esto no elimina información en un servidor. La coordinación prevé desarrollar un botón de eliminación en Android y un mecanismo seguro en Backend. Mark y Ame deben implementarlos y validarlos antes de ofrecer la eliminación remota. <strong>Actualmente no se acredita un mecanismo remoto operativo ni el borrado de cuentas o respaldos.</strong> También deben definirse la verificación de titularidad, los efectos en viajes y los casos de retención.</p>
              <a className="pr-inline-link" href="/eliminar-cuenta">Consultar el estado de eliminación de cuenta <span aria-hidden="true">↗</span></a>
            </section>

            <section id="derechos" aria-labelledby="h-derechos" className="pr-section">
              <span className="pr-section-num">08 / DERECHOS</span>
              <h2 id="h-derechos">Tus derechos sobre tus datos</h2>
              <p>De acuerdo con el régimen legal que resulte aplicable, las personas titulares pueden ejercer derechos de acceso, rectificación, cancelación y oposición (ARCO), así como solicitar información sobre el uso de sus datos y revocar consentimientos cuando corresponda.</p>
              <div className="pr-pending"><strong>Falta habilitar:</strong> un contacto oficial supervisado, procedimiento de verificación de identidad, información necesaria para presentar solicitudes, tiempos de respuesta y vía para comunicar decisiones: [PENDIENTE DE VALIDACIÓN DEL EQUIPO]. No envíes contraseñas, tokens ni documentos a canales no confirmados.</div>
            </section>

            <section id="contacto" aria-labelledby="h-contacto" className="pr-section">
              <span className="pr-section-num">09 / CONTACTO</span>
              <h2 id="h-contacto">Contacto de privacidad</h2>
              <p>Contacto indicado por la coordinación de Rutitas: <a href="mailto:rutitas.rutitas@gmail.com">rutitas.rutitas@gmail.com</a>.</p>
              <p>La identidad legal completa y domicilio del responsable, así como la confirmación de que el buzón está atendido y el procedimiento aplicable a las solicitudes, siguen pendientes. Esta Landing no recibe ni almacena solicitudes o documentos. No compartas contraseñas ni tokens por correo.</p>
            </section>

            <section id="analitica" aria-labelledby="h-analitica" className="pr-section">
              <span className="pr-section-num">10 / SITIO WEB</span>
              <h2 id="h-analitica">Analítica y almacenamiento del navegador</h2>
              <p>La Landing guarda localmente la decisión de consentimiento de analítica. El código solo carga Google Analytics cuando existe un identificador GA4 válido y la persona visitante acepta expresamente su uso. No se verificó una propiedad real ni se configuró un ID en este trabajo; las pruebas usan un ID sintético y bloquean solicitudes externas.</p>
              <p>Antes de habilitar GA4 en producción será necesario confirmar su configuración, proveedores y eventos reales, y reflejarlos de manera consistente en este aviso.</p>
            </section>

            <section id="cambios" aria-labelledby="h-cambios" className="pr-section">
              <span className="pr-section-num">11 / ACTUALIZACIONES</span>
              <h2 id="h-cambios">Cambios al aviso</h2>
              <p>Las actualizaciones al aviso deberán comunicarse mediante esta misma dirección y, cuando el cambio lo requiera, por los medios adicionales definidos por el responsable. La fecha de entrada en vigor y la versión aprobada aparecerán en la parte superior.</p>
              <div className="pr-pending"><strong>Pendiente:</strong> confirmar tratamientos y proveedores, completar la identidad legal y domicilio del responsable y obtener la revisión legal final. El Equipo de Rutitas aún no ha ratificado este texto como aviso definitivo.</div>
            </section>
          </div>
        </div>

        <section className="pr-bottom" aria-label="Enlaces de privacidad">
          <div><p className="pr-eyebrow">CUIDAMOS LA TRANSPARENCIA</p><h2>La confianza también se construye con información clara.</h2><p>Consulta el estado de los mecanismos de eliminación o regresa a la presentación del proyecto.</p></div>
          <div className="pr-bottom-actions"><a href="/eliminar-cuenta">Eliminación de cuenta</a><a href="/">Volver a Rutitas</a></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
