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
            <p className="pr-version">Versión de trabajo: 25 de noviembre de 2026 · Entrada en vigor: pendiente de aprobación</p>
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
              <p>Rutitas es un proyecto universitario de movilidad compartida. El <strong>Equipo de Rutitas</strong> coordina su operación.</p>
              <p>La persona o entidad que asumirá legalmente la responsabilidad del tratamiento y su domicilio están pendientes de confirmación. La comunidad universitaria piloto no se considera responsable legal por este solo hecho.</p>
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
              <p>De acuerdo con el régimen legal que resulte aplicable, las personas titulares pueden ejercer derechos de acceso, rectificación, cancelación y oposición (ARCO), así como solicitar información sobre el uso de sus datos y revocar consentimientos cuando corresponda.</p>
              <div className="pr-pending"><strong>Pendiente de aprobación:</strong> procedimiento y plazos para recibir, verificar y responder solicitudes. No envíes contraseñas, tokens ni documentos personales innecesarios.</div>
            </section>

            <section id="contacto" aria-labelledby="h-contacto" className="pr-section">
              <span className="pr-section-num">09 / CONTACTO</span>
              <h2 id="h-contacto">Contacto de privacidad</h2>
              <p>Contacto oficial de privacidad: <a href="mailto:rutitas.rutitas@gmail.com">rutitas.rutitas@gmail.com</a>. La coordinación confirmó que el Equipo de Rutitas atenderá conjuntamente los mensajes recibidos.</p>
              <p>Esta confirmación no habilita solicitudes de eliminación por correo: el procedimiento de verificación de identidad y seguimiento sigue pendiente. La identidad legal completa y domicilio del responsable también requieren validación. Esta Landing no recibe ni almacena solicitudes o documentos. No compartas contraseñas ni tokens por correo.</p>
            </section>

            <section id="analitica" aria-labelledby="h-analitica" className="pr-section">
              <span className="pr-section-num">10 / SITIO WEB</span>
              <h2 id="h-analitica">Analítica y almacenamiento del navegador</h2>
              <p>Actualmente la Landing no envía analítica a GA4. Si se autoriza habilitarla en el futuro, GA4 solo se cargará después de aceptar la opción de analítica. La preferencia podrá cambiarse desde «Preferencias de analítica» cuando esté disponible. No se habilitó Google Tag Manager ni la medición mejorada de GA4.</p>
              <p>La medición prevista se limita a visitas y acciones generales del sitio; no incluye el texto escrito por las personas ni parámetros de URL en los eventos preparados. La cuenta de GA4 tiene activada la ocultación de correos y parámetros sensibles. Google podría procesar datos técnicos de conexión, dispositivo o navegador; las categorías, plazos y condiciones aplicables deben confirmarse antes de activar la medición.</p>
              <p>La propiedad de Search Console se creó para esta dirección, pero aún no está verificada. Google indica que la recopilación de datos de esa propiedad puede comenzar desde su creación; no se confirmó que Rutitas ya tenga informes disponibles.</p>
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
