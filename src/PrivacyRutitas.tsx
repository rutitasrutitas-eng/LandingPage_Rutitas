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
 * No retirar la advertencia de borrador hasta validar responsable,
 * inventario de datos, proveedores, contacto, retenciones y flujo de borrado.
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
              <p><strong>Borrador de revisión interna.</strong> Este aviso aún no es definitivo. Los datos del responsable, el contacto oficial, los plazos y las prácticas reales de Android y Backend deben confirmarse antes de publicarlo como política vigente.</p>
            </div>
            <p className="pr-version">Versión de trabajo: 16 de noviembre de 2026 · Entrada en vigor: pendiente de aprobación</p>
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
              <div className="pr-pending"><strong>Información obligatoria por completar:</strong> nombre o razón social, domicilio oficial y canal de privacidad atendido: [PENDIENTE DE VALIDACIÓN DEL EQUIPO]. La relación jurídica del proyecto con la UTTT también requiere confirmación.</div>
            </section>

            <section id="datos" aria-labelledby="h-datos" className="pr-section">
              <span className="pr-section-num">02 / DATOS PERSONALES</span>
              <h2 id="h-datos">Qué información tratamos</h2>
              <p>La Landing Page actual no tiene formulario de registro. El material técnico entregado para esta revisión describe campos de cuenta previstos en el Backend —correo, nombre visible, contraseña protegida mediante hash, teléfono opcional, identificador, rol, estado y fechas de actividad—, pero su despliegue y tratamiento productivo no están confirmados.</p>
              <p>Ese material describe para el modo DEMO de Android datos locales de perfil, preferencias de zona y horario, viajes, fotografías y documentos de conductores, además de permisos de cámara y ubicación. Esta descripción debe cotejarse con la versión de Android que se apruebe. <strong>No demuestra que esos datos se envíen o almacenen remotamente.</strong></p>
              <div className="pr-pending"><strong>Antes del lanzamiento:</strong> inventario definitivo y fuente/versiones verificadas de los datos tratados, documentos, fotografías, identificadores técnicos, viajes, solicitudes y posibles datos sensibles: [PENDIENTE DE VALIDACIÓN DEL EQUIPO]. Distinguir datos obligatorios y opcionales; no declarar biometría, pagos ni seguimiento continuo sin evidencia.</div>
            </section>

            <section id="finalidades" aria-labelledby="h-finalidades" className="pr-section">
              <span className="pr-section-num">03 / FINALIDADES</span>
              <h2 id="h-finalidades">Para qué usamos tu información</h2>
              <p>El material técnico de Backend recibido contempla crear cuentas, validar credenciales, gestionar sesiones, consultar y actualizar perfiles, y consultar un catálogo de rutas. Su integración con Android y operación para usuarios finales deben confirmarse.</p>
              <p>Rutitas busca facilitar que estudiantes de una misma comunidad conozcan recorridos compartidos y, en etapas posteriores, puedan coordinar viajes y solicitudes. Esas funciones futuras no deben anunciarse como tratamientos activos hasta que se implementen y aprueben.</p>
              <div className="pr-pending"><strong>Pendiente:</strong> distinguir finalidades necesarias y opcionales; documentar consentimientos y mecanismos para limitar finalidades secundarias si se introducen.</div>
            </section>

            <section id="permisos" aria-labelledby="h-permisos" className="pr-section">
              <span className="pr-section-num">04 / PERMISOS</span>
              <h2 id="h-permisos">Ubicación, cámara y documentos</h2>
              <p>El material entregado describe permisos Android de ubicación aproximada y precisa, además de cámara. Para el modo DEMO indica uso local de cámara o galería en relación con documentos de identificación y vehículo. La versión exacta, momento de solicitud, propósito y posibilidad de continuar sin cada permiso requieren validación del equipo.</p>
              <p>Que un permiso figure en la aplicación no prueba que la información se recopile continuamente ni que se transmita a un servidor. El equipo debe documentar cuándo se solicita, qué se guarda y si es posible continuar sin concederlo.</p>
            </section>

            <section id="compartir" aria-labelledby="h-compartir" className="pr-section">
              <span className="pr-section-num">05 / TERCEROS</span>
              <h2 id="h-compartir">Con quién podría compartirse</h2>
              <p>Para coordinar viajes compartidos, Rutitas podría necesitar mostrar a otros participantes ciertos datos del recorrido o del perfil, pero la información exacta y sus controles de visibilidad requieren aprobación antes de activarse.</p>
              <p>El material de trabajo menciona MongoDB para el Backend, almacenamiento local Android y Vercel para la web; también menciona integración opcional de Google Analytics en la Landing y configuración de Google Maps en Android. Estas referencias no confirman contratación, activación, transmisión, ubicación de datos ni transferencias para un entorno productivo.</p>
              <div className="pr-pending"><strong>Proveedores y destinatarios efectivos:</strong> [PENDIENTE DE VALIDACIÓN DEL EQUIPO], incluida su función, ubicación, acceso y las transferencias que correspondan.</div>
            </section>

            <section id="seguridad" aria-labelledby="h-seguridad" className="pr-section">
              <span className="pr-section-num">06 / PROTECCIÓN</span>
              <h2 id="h-seguridad">Almacenamiento y seguridad</h2>
              <p>El material técnico entregado describe hash de contraseñas y autenticación con tokens en el Backend, así como almacenamiento privado local para algunos archivos Android. Estas características deben revisarse contra las versiones aprobadas y no equivalen a una auditoría de seguridad ni prueban operación de producción.</p>
              <div className="pr-pending"><strong>Por verificar:</strong> alojamiento definitivo, HTTPS, cifrado, gestión de accesos, copias de seguridad, registros, retención y respuesta ante incidentes. No se asegura una certificación o cifrado integral que aún no se haya comprobado.</div>
            </section>

            <section id="retencion" aria-labelledby="h-retencion" className="pr-section">
              <span className="pr-section-num">07 / CONTROL</span>
              <h2 id="h-retencion">Conservación y eliminación</h2>
              <p>Los datos deben conservarse solo durante el tiempo necesario para las finalidades autorizadas y, cuando proceda, las obligaciones legales aplicables. El equipo debe definir plazos concretos para cuentas, registros de viajes, fotografías, solicitudes y respaldos.</p>
              <p>En Android existe una función de eliminación de datos locales en modo demostración, pero <strong>no equivale todavía a la eliminación de la cuenta y los datos del servidor</strong>. El mecanismo definitivo y el canal externo siguen pendientes.</p>
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
              <p>Canal oficial atendido por la persona responsable para consultas o solicitudes sobre datos personales: <strong>[PENDIENTE DE VALIDACIÓN DEL EQUIPO]</strong>.</p>
              <p>Esta Landing no recibe solicitudes de privacidad ni documentos. No compartas contraseñas, tokens ni datos personales mediante canales no confirmados.</p>
            </section>

            <section id="analitica" aria-labelledby="h-analitica" className="pr-section">
              <span className="pr-section-num">10 / SITIO WEB</span>
              <h2 id="h-analitica">Analítica y almacenamiento del navegador</h2>
              <p>La Landing guarda localmente la decisión de consentimiento de analítica. El código solo carga Google Analytics cuando existe un identificador GA4 válido y la persona visitante acepta expresamente su uso. Sin configuración o consentimiento, no debe iniciarse esa medición.</p>
              <p>Antes de habilitar GA4 en producción será necesario confirmar su configuración, proveedores y eventos reales, y reflejarlos de manera consistente en este aviso.</p>
            </section>

            <section id="cambios" aria-labelledby="h-cambios" className="pr-section">
              <span className="pr-section-num">11 / ACTUALIZACIONES</span>
              <h2 id="h-cambios">Cambios al aviso</h2>
              <p>Las actualizaciones al aviso deberán comunicarse mediante esta misma dirección y, cuando el cambio lo requiera, por los medios adicionales definidos por el responsable. La fecha de entrada en vigor y la versión aprobada aparecerán en la parte superior.</p>
              <div className="pr-pending"><strong>Pendiente:</strong> aprobación del responsable del tratamiento y revisión legal de los textos antes de retirar la etiqueta de borrador.</div>
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
