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
              <p><strong>Borrador no ratificado.</strong> Coordinación proporcionó la identidad y el domicilio indicados abajo para esta versión candidata. Aún deben confirmarse legalmente el carácter del responsable, los tratamientos efectivos, los proveedores y la aplicación de los plazos antes de usar este texto como aviso vigente.</p>
            </div>
            <p className="pr-version">Versión de trabajo: 25 de noviembre de 2026 · Entrada en vigor: pendiente de aprobación</p>
          </div>
        </div>

        <section className="pr-summary" aria-label="Aspectos importantes de privacidad">
          <div><strong>Tu cuenta</strong><span>La Landing no permite crear cuentas; el uso público del Backend no está confirmado.</span></div>
          <div><strong>Tus recorridos</strong><span>La información de viajes pertenece a funcionalidades en desarrollo.</span></div>
          <div><strong>Tus decisiones</strong><span>Consulta la propuesta de contacto ARCO; el procedimiento aún debe aprobarse y habilitarse.</span></div>
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
              <p>Rutitas es un proyecto universitario de movilidad compartida. El <strong>Equipo de Rutitas</strong> coordina su operación.</p>
              <p>Para esta versión candidata, coordinación indica como persona responsable a <strong>David Rafael Aguilar Solis</strong>. Su carácter y los datos de identificación aplicables requieren ratificación legal; el domicilio se mantiene pendiente de autorización expresa para publicación. La comunidad universitaria piloto no se considera responsable por el solo hecho de participar.</p>
            </section>

            <section id="datos" aria-labelledby="h-datos" className="pr-section">
              <span className="pr-section-num">02 / DATOS PERSONALES</span>
              <h2 id="h-datos">Qué información tratamos</h2>
              <p>La Landing es informativa y no ofrece registro ni formularios. La versión Android disponible para pruebas usa un modo DEMO: la información de ejemplo, perfiles, imágenes y documentos se guardan en el dispositivo. Esto no demuestra que se envíen a un servidor.</p>
              <p>El equipo reportó que el Backend está desplegado en Azure con MongoDB Atlas y cuenta con siete endpoints técnicos para autenticación, perfil y consulta de rutas. No hay evidencia suficiente para confirmar que el público pueda usarlos ni que se estén recibiendo o almacenando datos personales de usuarios.</p>
              <p>Las reservas y los viajes multiusuario todavía no están operativos. Las categorías y el uso efectivo de datos de cualquier versión futura deberán confirmarse antes de ofrecer esas funciones.</p>
            </section>

            <section id="finalidades" aria-labelledby="h-finalidades" className="pr-section">
              <span className="pr-section-num">03 / FINALIDADES</span>
              <h2 id="h-finalidades">Para qué usamos tu información</h2>
              <p>Hoy la Landing presenta el proyecto. Android se mantiene en modo DEMO y sus datos de ejemplo son locales. Aunque la infraestructura reportó un Backend desplegado, el uso real por personas usuarias y el tratamiento de datos no están confirmados.</p>
              <p>La finalidad futura de Rutitas es facilitar que una comunidad universitaria conozca rutas compartidas y, después, pueda coordinar viajes. Reservas y viajes multiusuario aún no están disponibles; este aviso deberá actualizarse antes de ofrecerlos.</p>
              <p>No se han confirmado finalidades secundarias. Cualquier uso distinto de presentar el proyecto o probar localmente la DEMO debe validarse y comunicarse antes de activarse.</p>
            </section>

            <section id="permisos" aria-labelledby="h-permisos" className="pr-section">
              <span className="pr-section-num">04 / PERMISOS</span>
              <h2 id="h-permisos">Ubicación, cámara y documentos</h2>
              <p>Android puede solicitar ubicación y acceso a la cámara para funciones que están en desarrollo. En el modo DEMO revisado, las fotos y documentos de ejemplo se guardan localmente. No se confirmó transmisión de esa información al Backend.</p>
              <p>La finalidad, el momento de solicitud y la forma de uso de cada permiso deberán explicarse en la aplicación antes de habilitar la función correspondiente. No se afirma que exista seguimiento continuo.</p>
            </section>

            <section id="compartir" aria-labelledby="h-compartir" className="pr-section">
              <span className="pr-section-num">05 / TERCEROS</span>
              <h2 id="h-compartir">Con quién podría compartirse</h2>
              <p>Vercel aloja esta Landing. El equipo reportó que Azure y MongoDB Atlas alojan la infraestructura del Backend, pero no se comprobó que ese servicio esté procesando datos personales de usuarios.</p>
              <p>La cuenta de Google Analytics 4 está preparada para la Landing, pero el sitio no tiene configurado el ID de medición y no muestra datos recibidos. Google Tag Manager no tiene etiquetas publicadas. La propiedad de Google Search Console se creó para el sitio, pero no se ha verificado ni se confirmaron informes disponibles. Google indica que la recopilación para una propiedad puede empezar al añadirla, antes de verificarla.</p>
              <p>Google Maps Platform y Google Play se consideran servicios futuros o pendientes de confirmar. La disponibilidad de estos servicios no se debe inferir de su mención en este aviso.</p>
            </section>

            <section id="seguridad" aria-labelledby="h-seguridad" className="pr-section">
              <span className="pr-section-num">06 / PROTECCIÓN</span>
              <h2 id="h-seguridad">Almacenamiento y seguridad</h2>
              <p>La infraestructura del Backend fue reportada como desplegada en Azure con MongoDB Atlas. Android DEMO guarda datos de ejemplo en el dispositivo. No se ha completado una revisión independiente de todas las medidas aplicadas al tratamiento efectivo de datos personales.</p>
              <p>Las medidas técnicas y organizativas, los accesos, las copias de seguridad y la respuesta ante incidentes deben ser confirmados por el responsable antes de aprobar este aviso.</p>
            </section>

            <section id="retencion" aria-labelledby="h-retencion" className="pr-section">
              <span className="pr-section-num">07 / CONTROL</span>
              <h2 id="h-retencion">Conservación y eliminación</h2>
              <p>La conservación general de datos personales se estima en <strong>hasta 2 meses</strong>, sujeta a revisión técnica y legal. Este plazo general es distinto de la recuperación prevista cuando se solicite eliminar una cuenta.</p>
              <p>El procedimiento futuro contempla <strong>7 días de recuperación</strong> después de que el Backend confirme la solicitud. Durante ese plazo se bloquearía el acceso normal y podría cancelarse la solicitud. Tras el plazo, se eliminarían la cuenta y los datos asociados, salvo excepciones legales justificadas. <strong>La eliminación remota no está operativa.</strong> Enviar un correo o pulsar un botón no inicia el plazo ni confirma una eliminación. Android DEMO solo borra datos locales.</p>
              <a className="pr-inline-link" href="/eliminar-cuenta">Consultar el estado de eliminación de cuenta <span aria-hidden="true">↗</span></a>
            </section>

            <section id="derechos" aria-labelledby="h-derechos" className="pr-section">
              <span className="pr-section-num">08 / DERECHOS</span>
              <h2 id="h-derechos">Tus derechos sobre tus datos</h2>
              <p>Las personas pueden solicitar acceso, rectificación, cancelación u oposición (ARCO), y revocar consentimientos cuando corresponda. La propuesta es escribir a <a href="mailto:rutitas.rutitas@gmail.com?subject=Solicitud%20de%20privacidad%20%E2%80%94%20Rutitas">rutitas.rutitas@gmail.com</a> con el asunto «Solicitud de privacidad — Rutitas», indicar el derecho solicitado y describir los datos necesarios para localizar el caso. El equipo acusaría recibo, asignaría una persona responsable y daría seguimiento.</p>
              <p>Para proteger la cuenta, el equipo propondría una verificación proporcional de identidad por un medio seguro acordado con la persona solicitante; el correo por sí solo no acredita identidad. No se deben enviar contraseñas, tokens ni documentos innecesarios por correo. Como referencia sujeta a revisión legal, la legislación aplicable prevé comunicar la determinación dentro de 20 días y, si procede, hacerla efectiva dentro de los 15 días siguientes; puede existir una ampliación justificada conforme a la ley.</p>
              <div className="pr-pending"><strong>Procedimiento propuesto, aún sujeto a aprobación y puesta en operación:</strong> aunque el buzón de contacto está atendido por el Equipo de Rutitas, todavía se deben aprobar la verificación segura, el registro/folio, la asignación y seguimiento, la persona o área responsable formal y el proceso de respuesta. Esta propuesta no habilita solicitudes de eliminación de cuentas por correo.</div>
            </section>

            <section id="contacto" aria-labelledby="h-contacto" className="pr-section">
              <span className="pr-section-num">09 / CONTACTO</span>
              <h2 id="h-contacto">Contacto de privacidad</h2>
              <p>Contacto oficial de privacidad: <a href="mailto:rutitas.rutitas@gmail.com">rutitas.rutitas@gmail.com</a>. El Equipo de Rutitas atenderá conjuntamente los mensajes y se recomienda asignar una persona responsable por solicitud. Esta Landing no recibe ni almacena solicitudes o documentos. El correo sirve como contacto de privacidad, pero todavía no es un canal operativo para solicitar la eliminación de cuentas ni verifica identidad. No compartas contraseñas, tokens o documentos innecesarios por correo.</p>
            </section>

            <section id="analitica" aria-labelledby="h-analitica" className="pr-section">
              <span className="pr-section-num">10 / SITIO WEB</span>
              <h2 id="h-analitica">Analítica y almacenamiento del navegador</h2>
              <p>La Landing no tiene configurado el ID de medición y no envía eventos a GA4. El código preparado solo cargaría la etiqueta tras el consentimiento afirmativo; permite rechazar o revocar la preferencia y, tras una nueva aceptación, reanudar la medición sin recargar. El ID real permanece desactivado y Google Tag Manager no está habilitado.</p>
              <p>La propiedad de GA4 tiene desactivada la medición mejorada y guardada la ocultación de correo y de claves de parámetros URL. La revisión de retención de eventos, restablecimiento de actividad, Google Signals, personalización publicitaria y recopilación de datos proporcionados por usuarios no se completó en esta revisión. Si se autoriza en el futuro, los eventos preparados se limitan a vistas de página sin query y acciones generales; no incluyen texto libre ni identificadores personales. El proveedor puede recibir datos técnicos de conexión, dispositivo o navegador; las categorías, plazos y condiciones deben confirmarse antes de activar el servicio.</p>
              <p>La propiedad de Search Console se creó para esta dirección, pero aún no está verificada. Google indica que la recopilación de datos de esa propiedad puede comenzar desde su creación; no se confirmó que Rutitas ya tenga informes disponibles.</p>
            </section>

            <section id="cambios" aria-labelledby="h-cambios" className="pr-section">
              <span className="pr-section-num">11 / ACTUALIZACIONES</span>
              <h2 id="h-cambios">Cambios al aviso</h2>
              <p>Las actualizaciones al aviso deberán comunicarse mediante esta misma dirección y, cuando el cambio lo requiera, por los medios adicionales definidos por el responsable. La fecha de entrada en vigor y la versión aprobada aparecerán en la parte superior.</p>
              <div className="pr-pending"><strong>Pendiente:</strong> ratificar legalmente la identidad y el carácter del responsable; confirmar tratamientos, proveedores y plazos; aprobar el procedimiento ARCO y obtener revisión legal final. El Equipo de Rutitas aún no ha ratificado este texto como aviso definitivo.</div>
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
