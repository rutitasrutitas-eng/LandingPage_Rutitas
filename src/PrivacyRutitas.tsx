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
            <p className="pr-version">Versión de trabajo: 18 de noviembre de 2026 · Entrada en vigor: pendiente de aprobación</p>
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
              <p>La Landing Page no tiene formulario de registro. El modelo de datos revisado del Backend contempla correo, nombre visible, teléfono opcional, identificador, rol, estado, fechas de actividad y un hash de contraseña. El equipo de infraestructura reportó que la API de Rutitas, con siete endpoints técnicos de autenticación, perfil propio y consulta de rutas, está desplegada y verificada en Microsoft Azure con MongoDB Atlas. El despliegue no confirma por sí solo qué datos personales se han recibido, consultado o almacenado, ni que Android o el público estén usando esos servicios; el tratamiento efectivo requiere comprobación independiente.</p>
              <p>La versión de Android revisada mantiene <code>DEMO_MODE=true</code> y usa datos de demostración localmente. Esto no acredita que Android transmita datos a la API desplegada. Las reservas y los viajes multiusuario todavía no son funcionalidades operativas.</p>
              <p>La rama Android revisada está configurada con <code>DEMO_MODE=true</code>: mantiene perfiles y datos de demostración localmente con Room y contiene permisos de cámara y ubicación. Hay funciones que guardan fotos o documentos localmente. <strong>Esto no acredita transmisión a un servidor ni uso con cuentas reales.</strong></p>
              <div className="pr-pending"><strong>Antes del lanzamiento:</strong> inventario definitivo y fuente/versiones verificadas de los datos tratados, documentos, fotografías, identificadores técnicos, viajes, solicitudes y posibles datos sensibles: [PENDIENTE DE VALIDACIÓN DEL EQUIPO]. Distinguir datos obligatorios y opcionales; no declarar biometría, pagos ni seguimiento continuo sin evidencia.</div>
            </section>

            <section id="finalidades" aria-labelledby="h-finalidades" className="pr-section">
              <span className="pr-section-num">03 / FINALIDADES</span>
              <h2 id="h-finalidades">Para qué usamos tu información</h2>
              <p>Los siete endpoints técnicos reportados corresponden a registro, inicio/cierre de sesión, consulta y edición del perfil propio y consulta de catálogo/detalle de rutas. Su despliegue no significa que estén ofrecidos al público ni que el flujo Android revisado los consuma: Android permanece en modo DEMO y no hay evidencia suficiente de solicitudes reales o de tratamiento de datos de usuarios. Las reservas y la coordinación de viajes multiusuario siguen previstas, no operativas.</p>
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
              <p><strong>Infraestructura reportada:</strong> Vercel aloja esta Landing. El equipo de infraestructura reportó la API del Backend desplegada y verificada en Microsoft Azure con MongoDB Atlas. Esto identifica infraestructura reportada, pero no confirma por sí mismo tratamiento efectivo de datos personales, transferencias ni la integración de Android.</p>
              <p><strong>Otros servicios:</strong> el código de esta Landing permite integrar Google Analytics de forma opcional, pero no se verificó un ID GA4 real ni recolección activa; Google Tag Manager no está activado. Google Maps Platform y Google Play siguen previstos o pendientes de confirmación como servicios efectivos. El despliegue del Backend no hace operativas las reservas ni los viajes multiusuario.</p>
              <div className="pr-pending"><strong>Por confirmar antes de operar:</strong> proveedores efectivamente usados por cada sistema, función, ubicación, acceso, condiciones contractuales, subencargados y transferencias aplicables. La política de Rutitas autoriza <strong>$0 MXN de costo adicional</strong>; esto no significa que los proveedores sean gratuitos ni confirma que sus servicios estén habilitados. No se debe activar un servicio que pueda exceder esa política.</div>
            </section>

            <section id="seguridad" aria-labelledby="h-seguridad" className="pr-section">
              <span className="pr-section-num">06 / PROTECCIÓN</span>
              <h2 id="h-seguridad">Almacenamiento y seguridad</h2>
              <p>El código del Backend revisado contiene hash de contraseñas y validación JWT. Infraestructura reportó la API desplegada en Azure con MongoDB Atlas; este dato no constituye una auditoría de seguridad ni confirma qué datos personales se tratan. Android DEMO mantiene sus datos localmente y no hay evidencia suficiente de integración efectiva con la API.</p>
              <div className="pr-pending"><strong>Por verificar:</strong> alojamiento definitivo, HTTPS, cifrado, gestión de accesos, copias de seguridad, registros, retención y respuesta ante incidentes. No se asegura una certificación o cifrado integral que aún no se haya comprobado.</div>
            </section>

            <section id="retencion" aria-labelledby="h-retencion" className="pr-section">
              <span className="pr-section-num">07 / CONTROL</span>
              <h2 id="h-retencion">Conservación y eliminación</h2>
              <p>La coordinación ha indicado como objetivo una conservación general prevista de datos personales de <strong>hasta 2 meses</strong>, sujeta a revisión técnica y legal. Este periodo general no es la ventana de recuperación de una cuenta cuya eliminación se solicite. El punto inicial, las categorías, los respaldos y las excepciones de conservación siguen por validar.</p>
              <p>La política aprobada para el mecanismo futuro contempla una eliminación programada con <strong>7 días de recuperación</strong>. El plazo comenzará solo cuando el Backend confirme la solicitud después de verificarla; pulsar un botón o enviar un correo no iniciará la cuenta regresiva. Durante esos siete días se bloqueará el acceso normal a la cuenta. Se prevé permitir cancelar la solicitud mediante un mecanismo que aún debe definir y validar el equipo.</p>
              <p>Al terminar los siete días, el Backend deberá ejecutar la eliminación definitiva de la cuenta y sus datos personales asociados, según un inventario técnico validado. Los siete endpoints reportados para autenticación, perfil y catálogo de rutas no implementan por sí mismos el mecanismo de eliminación de cuenta. Los datos exactos, incluidos perfil, rutas, fotografías/documentos y registros, así como la eliminación o expiración de respaldos, todavía deben confirmarse. Podrían conservarse únicamente los datos que correspondan a una excepción legal documentada, con alcance y plazo mínimos por validar. <strong>El mecanismo remoto de eliminación aún no es operativo; su implementación y validación siguen pendientes.</strong> Android DEMO solo permite borrar datos locales y eso no acredita el borrado en un servidor.</p>
              <a className="pr-inline-link" href="/eliminar-cuenta">Consultar el estado de eliminación de cuenta <span aria-hidden="true">↗</span></a>
            </section>

            <section id="derechos" aria-labelledby="h-derechos" className="pr-section">
              <span className="pr-section-num">08 / DERECHOS</span>
              <h2 id="h-derechos">Tus derechos sobre tus datos</h2>
              <p>De acuerdo con el régimen legal que resulte aplicable, las personas titulares pueden ejercer derechos de acceso, rectificación, cancelación y oposición (ARCO), así como solicitar información sobre el uso de sus datos y revocar consentimientos cuando corresponda.</p>
              <div className="pr-pending"><strong>Falta definir:</strong> procedimiento para recibir y canalizar solicitudes, verificación de identidad, información mínima necesaria, tiempos de respuesta y vía para comunicar decisiones: [PENDIENTE DE VALIDACIÓN DEL EQUIPO]. No envíes contraseñas, tokens ni documentos a canales no confirmados.</div>
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
