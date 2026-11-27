import type { ReactNode } from 'react'
import SiteFooter from './SiteFooter'

function LegalHeader() {
  return (
    <header className="legal-header">
      <a className="brand" href="/" aria-label="Rutitas — inicio">
        <img src="/assets/rutitas-emblema.png" alt="" />
        <span>Rutitas<b>.</b></span>
      </a>
      <a className="legal-home-link" href="/">Volver a inicio</a>
    </header>
  )
}

function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="legal-shell">
      <LegalHeader />
      {children}
    </div>
  )
}

export function PrivacyPage() {
  return (
    <LegalLayout>
      <main className="legal-content">
        <div className="draft-notice" role="status">
          BORRADOR PARA VALIDACIÓN INTERNA · NO ES UN AVISO DEFINITIVO
        </div>
        <p className="legal-eyebrow">PRIVACIDAD EN RUTITAS</p>
        <h1>Aviso de privacidad</h1>
        <p className="legal-lead">Este borrador reúne los temas que el equipo debe completar y revisar con base en las prácticas reales de Rutitas antes de aprobar o publicar un aviso definitivo.</p>
        <p className="legal-updated">Versión candidata: 25 de noviembre de 2026 · entrada en vigor pendiente de aprobación</p>

        <section aria-labelledby="privacy-controller">
          <h2 id="privacy-controller">Responsable del tratamiento</h2>
          <p>Para esta versión candidata, coordinación indica a David Rafael Aguilar Solis como persona responsable. El carácter y los datos de identificación aplicables requieren ratificación legal; el domicilio queda pendiente de autorización expresa para publicación.</p>
        </section>
        <section aria-labelledby="privacy-data">
          <h2 id="privacy-data">Datos personales</h2>
          <p>La Landing es informativa y no tiene registro ni formulario. Android revisado funciona con <code>DEMO_MODE=true</code> y guarda datos de ejemplo localmente. Infraestructura reportó siete endpoints desplegados en Azure con MongoDB Atlas para autenticación, perfil y consulta de rutas; no se ha comprobado que estén disponibles al público ni que reciban o almacenen datos personales de usuarios.</p>
          <p>Las categorías posibles de registro/perfil, ubicación, trayectos o documentos requieren confirmación por sistema antes de describirlas como datos efectivamente tratados. Reservas y viajes multiusuario aún no están operativos.</p>
        </section>
        <section aria-labelledby="privacy-purposes">
          <h2 id="privacy-purposes">Finalidades</h2>
          <p>La finalidad actual confirmada de la Landing es presentar el proyecto. Android DEMO permite probar funciones con información local de ejemplo. La API reportada no demuestra por sí sola que el servicio se ofrezca a usuarios. Las finalidades reales y cualquier tratamiento futuro deben confirmarse y aprobarse antes de ofrecer funciones de cuenta, rutas o viajes.</p>
        </section>
        <section aria-labelledby="privacy-location">
          <h2 id="privacy-location">Ubicación</h2>
          <p>Android declara permisos de cámara y ubicación para funciones en desarrollo. En DEMO, los datos de prueba y archivos se mantienen localmente según la revisión disponible; no se confirmó transmisión. El propósito y comportamiento de una versión conectada siguen pendientes.</p>
        </section>
        <section aria-labelledby="privacy-driver-documents">
          <h2 id="privacy-driver-documents">Documentos de conductores</h2>
          <p>La versión Android DEMO revisada contempla fotografías y documentos de ejemplo guardados localmente. No se confirmó carga al Backend. La solicitud, acceso y retención de documentos reales no están habilitados ni definidos.</p>
        </section>
        <section aria-labelledby="privacy-storage">
          <h2 id="privacy-storage">Almacenamiento y protección</h2>
          <p>Vercel aloja la Landing. Infraestructura reportó el Backend en Microsoft Azure con MongoDB Atlas. Ese reporte no identifica datos de usuarios procesados ni verifica controles, accesos, copias, regiones o transferencias. Las medidas aplicables requieren revisión técnica y legal independiente.</p>
        </section>
        <section aria-labelledby="privacy-retention">
          <h2 id="privacy-retention">Conservación y eliminación</h2>
          <p>La conservación general está prevista hasta por 2 meses, sujeta a revisión técnica y legal por categoría. Es distinta del periodo futuro de 7 días para cancelar una solicitud de baja, que solo empezaría cuando el Backend confirme la solicitud validada. La eliminación remota no está operativa; Android DEMO solo borra datos locales. Excepciones y respaldos requieren definición.</p>
        </section>
        <section aria-labelledby="privacy-rights">
          <h2 id="privacy-rights">Derechos de las personas titulares</h2>
          <p>La propuesta es enviar una solicitud a <a href="mailto:rutitas.rutitas@gmail.com?subject=Solicitud%20de%20privacidad%20%E2%80%94%20Rutitas">rutitas.rutitas@gmail.com</a> con el asunto «Solicitud de privacidad — Rutitas», indicando el derecho ARCO y los datos mínimos para localizar el caso. El Equipo de Rutitas acusaría recibo, asignaría una persona responsable por solicitud y daría seguimiento. La identidad deberá verificarse de forma proporcional por un medio seguro que aún debe definirse; el correo no la acredita por sí solo. No deben enviarse contraseñas, tokens ni documentos innecesarios por correo. Como referencia pendiente de revisión legal, la normativa aplicable contempla comunicar la determinación en 20 días y, si procede, hacerla efectiva en los 15 días siguientes, con una posible ampliación justificada conforme a la ley. Este procedimiento aún no está aprobado ni habilitado.</p>
        </section>
        <section aria-labelledby="privacy-contact">
          <h2 id="privacy-contact">Contacto de privacidad</h2>
          <p>Contacto oficial: <a href="mailto:rutitas.rutitas@gmail.com">rutitas.rutitas@gmail.com</a>. Coordinación confirmó atención conjunta de mensajes por el Equipo de Rutitas. Esta página no recibe solicitudes ni datos personales; la eliminación por correo aún no está habilitada.</p>
        </section>
        <section aria-labelledby="privacy-third-parties">
          <h2 id="privacy-third-parties">Servicios de terceros</h2>
          <p>Vercel aloja la Landing; Azure y MongoDB Atlas son infraestructura del Backend reportada por coordinación. La propiedad/flujo GA4 están configurados, pero no se recopilan eventos desde la Landing. Search Console está creada y pendiente de verificación publicada. Maps y Google Play siguen previstos o pendientes de confirmar como proveedores efectivos. Funciones, regiones, contratos y transferencias requieren confirmación.</p>
        </section>
        <section aria-labelledby="privacy-analytics">
          <h2 id="privacy-analytics">Analítica y tecnologías similares</h2>
          <p>La propiedad y el flujo GA4 están configurados, pero la Landing no tiene el ID de medición y no envía eventos. El código preparado exige aceptación expresa y permite revocación y nueva aceptación sin recarga; el ID real sigue desactivado y GTM no está habilitado. La revisión de retención, Google Signals, personalización publicitaria, datos proporcionados por usuarios y recopilación efectiva no quedó verificada. Search Console tiene una propiedad creada que aún requiere verificación publicada.</p>
        </section>
        <div className="draft-notice draft-notice-bottom">Este texto sigue pendiente de revisión legal y validación del equipo. No lo uses como aviso definitivo.</div>
      </main>
      <SiteFooter />
    </LegalLayout>
  )
}

export function AccountDeletionPage() {
  return (
    <LegalLayout>
      <main className="legal-content">
        <div className="draft-notice" role="status">
          INFORMACIÓN PRELIMINAR · EL MECANISMO REMOTO AÚN NO ESTÁ OPERATIVO
        </div>
        <p className="legal-eyebrow">CONTROL DE TU CUENTA</p>
        <h1>Eliminación de cuenta</h1>
        <p className="legal-lead">Esta página informa el estado del mecanismo. No tramita solicitudes ni elimina cuentas.</p>

        <section aria-labelledby="deletion-request">
          <h2 id="deletion-request">1. Cómo solicitar la eliminación</h2>
          <p>Desde Android se prevé solicitar la eliminación con un control dentro de la cuenta. El equipo de infraestructura reportó que la API del Backend está desplegada con siete endpoints técnicos de autenticación, perfil y consulta de rutas; esos endpoints no constituyen un mecanismo de eliminación de cuenta. El Equipo de Rutitas debe implementar y validar la solicitud en la app y el Backend. Hoy no hay un mecanismo remoto operativo; la baja disponible en Android DEMO solo borra datos locales y no elimina cuentas de un servidor.</p>
          <p>La política de Google Play contempla una vía web accesible fuera de Android para solicitar la eliminación. Esta página prepara una guía pública del estado y del procedimiento propuesto, pero por ahora es informativa y no recibe ni tramita solicitudes.</p>
          <div className="draft-notice" role="note">
            <strong>Procedimiento web propuesto · todavía no habilitado</strong>
            <ol>
              <li>Cuando coordinación habilite el proceso, la persona podrá escribir a <a href="mailto:rutitas.rutitas@gmail.com">rutitas.rutitas@gmail.com</a> e indicar solo la información mínima que el equipo defina para localizar la cuenta.</li>
              <li>Una persona designada verificará la titularidad con un método aprobado. El correo por sí solo no acredita identidad; no se pedirán contraseñas, tokens ni documentos personales innecesarios.</li>
              <li>El equipo confirmará la recepción y dará seguimiento humano. La solicitud solo comenzará el plazo de recuperación cuando el Backend la confirme después de validarla.</li>
            </ol>
            <p>La atención conjunta por el Equipo de Rutitas está confirmada, pero aún deben aprobarse el método de verificación, el seguimiento y la comunicación de cancelación. El correo todavía no es un canal operativo de eliminación.</p>
          </div>
        </section>
        <section aria-labelledby="deletion-recovery">
          <h2 id="deletion-recovery">2. Periodo de recuperación de 7 días</h2>
          <p>La política aprobada para el futuro flujo prevé siete días para recuperar o cancelar la solicitud. El plazo empezará únicamente cuando el Backend confirme que recibió y validó la solicitud; un clic o un correo no inician la cuenta regresiva. Durante ese periodo se bloqueará el acceso normal a la cuenta.</p>
        </section>
        <section aria-labelledby="deletion-cancel">
          <h2 id="deletion-cancel">3. Cómo podrá cancelarse</h2>
          <p>Se propone incluir en Android una opción para cancelar la solicitud durante los siete días, con una comprobación de titularidad adecuada. El mecanismo alternativo, la verificación y la confirmación de cancelación deben definirse y probarse por el Equipo de Rutitas. Actualmente no hay una opción operativa para cancelar solicitudes de eliminación.</p>
        </section>
        <section aria-labelledby="deletion-data">
          <h2 id="deletion-data">4. Datos que se eliminarán</h2>
          <p>Después del plazo, el mecanismo deberá eliminar definitivamente la cuenta y los datos personales asociados según un inventario aprobado. El alcance concreto —por ejemplo, perfil, rutas, fotografías, documentos y registros— requiere validación técnica del Equipo de Rutitas. Android DEMO solo borra registros locales y ciertos archivos del dispositivo; no demuestra eliminación en un servidor ni de respaldos.</p>
        </section>
        <section aria-labelledby="deletion-exceptions">
          <h2 id="deletion-exceptions">5. Excepciones y respaldos</h2>
          <p>Podrían conservarse datos solo ante una excepción legal aplicable y documentada, limitados a lo necesario y por el plazo que determine la revisión legal. Las categorías, fundamento, acceso, plazo y tratamiento de respaldos deben definirse antes de operar el mecanismo. La conservación general prevista de hasta 2 meses es distinta de los siete días de recuperación y también está sujeta a revisión técnica y legal.</p>
        </section>
        <section aria-labelledby="deletion-final">
          <h2 id="deletion-final">6. Después de la eliminación definitiva</h2>
          <p>Una vez confirmada por el Backend, la cuenta ya no debería permitir acceso y los datos incluidos en el inventario deberán eliminarse de los sistemas activos. La posibilidad de crear otra cuenta, la eliminación de respaldos y cualquier constancia del proceso requieren definición y validación; no se prometen aquí como comportamientos implementados.</p>
        </section>
        <section aria-labelledby="deletion-contact">
          <h2 id="deletion-contact">7. Contacto de privacidad</h2>
          <p>Contacto de privacidad: <a href="mailto:rutitas.rutitas@gmail.com">rutitas.rutitas@gmail.com</a>. Coordinación confirmó que el Equipo de Rutitas atenderá conjuntamente los mensajes y se recomienda asignar una persona responsable por solicitud. El correo no verifica identidad ni inicia el plazo de eliminación. El mecanismo remoto y el procedimiento de identidad/seguimiento no están operativos. No envíes contraseñas, tokens ni documentos innecesarios.</p>
        </section>
      </main>
      <SiteFooter />
    </LegalLayout>
  )
}

export function NotFoundPage() {
  return (
    <LegalLayout>
      <main className="legal-content not-found">
        <h1>No encontramos esta página</h1>
        <p>La dirección puede haber cambiado.</p>
        <a className="legal-button" href="/">Ir a Rutitas</a>
      </main>
      <SiteFooter />
    </LegalLayout>
  )
}
