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

const pending = '[PENDIENTE DE VALIDACIÓN DEL EQUIPO]'

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
        <p className="legal-updated">Fecha de actualización: {pending}</p>

        <section aria-labelledby="privacy-controller">
          <h2 id="privacy-controller">Responsable del tratamiento</h2>
          <p>Nombre o razón social, domicilio y datos de identificación del responsable: <strong>{pending}</strong></p>
        </section>
        <section aria-labelledby="privacy-data">
          <h2 id="privacy-data">Datos personales</h2>
          <p>El equipo debe confirmar qué datos trata realmente la aplicación y la landing, sus categorías, origen, obligatoriedad y consecuencias de no proporcionarlos. No hay formulario de captura en esta landing. Datos de cuenta, contacto, institución, viajes, ubicación, documentos de conductores y datos técnicos se incluyen aquí solo como temas por validar; no se afirma que Rutitas los recopile actualmente.</p>
          <p>Inventario confirmado: <strong>{pending}</strong></p>
        </section>
        <section aria-labelledby="privacy-purposes">
          <h2 id="privacy-purposes">Finalidades</h2>
          <p>Finalidades primarias/secundarias y, cuando corresponda, mecanismos para limitar las secundarias: <strong>{pending}</strong></p>
        </section>
        <section aria-labelledby="privacy-location">
          <h2 id="privacy-location">Ubicación</h2>
          <p>Uso de ubicación precisa o aproximada, momento de acceso, permisos del dispositivo, propósito y controles disponibles: <strong>{pending}</strong></p>
        </section>
        <section aria-labelledby="privacy-driver-documents">
          <h2 id="privacy-driver-documents">Documentos de conductores</h2>
          <p>Si se solicitan documentos, cuáles son, quién puede consultarlos, para qué se usan y cómo se protegen: <strong>{pending}</strong></p>
        </section>
        <section aria-labelledby="privacy-storage">
          <h2 id="privacy-storage">Almacenamiento y protección</h2>
          <p>Sistemas, ubicaciones de almacenamiento, accesos, controles y medidas técnicas/organizativas efectivamente implementados: <strong>{pending}</strong></p>
        </section>
        <section aria-labelledby="privacy-retention">
          <h2 id="privacy-retention">Conservación y eliminación</h2>
          <p>Plazos por categoría, criterios y proceso real de eliminación: <strong>{pending}</strong></p>
        </section>
        <section aria-labelledby="privacy-rights">
          <h2 id="privacy-rights">Derechos de las personas titulares</h2>
          <p>Medios, requisitos y plazos de respuesta conforme a la normativa aplicable deben ser revisados y completados por el responsable: <strong>{pending}</strong></p>
        </section>
        <section aria-labelledby="privacy-contact">
          <h2 id="privacy-contact">Contacto de privacidad</h2>
          <p>Contacto oficial: <a href="mailto:rutitas.rutitas@gmail.com">rutitas.rutitas@gmail.com</a>. Coordinación confirmó atención conjunta de mensajes por el Equipo de Rutitas. Esta página no recibe solicitudes ni datos personales; la eliminación por correo aún no está habilitada.</p>
        </section>
        <section aria-labelledby="privacy-third-parties">
          <h2 id="privacy-third-parties">Servicios de terceros</h2>
          <p>Proveedores y transferencias confirmados, sus funciones y las condiciones aplicables: <strong>{pending}</strong></p>
        </section>
        <section aria-labelledby="privacy-analytics">
          <h2 id="privacy-analytics">Analítica y tecnologías similares</h2>
          <p>La propiedad GA4 y el flujo del sitio están configurados, pero la Landing no tiene configurado el ID de medición y no envía eventos. Si se habilita más adelante, Google Analytics solo se cargará después de una aceptación expresa. Search Console tiene una propiedad creada, todavía sin verificar; el estado y las decisiones pendientes se describen en el borrador extendido de privacidad.</p>
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
          <p>Contacto de privacidad: <a href="mailto:rutitas.rutitas@gmail.com">rutitas.rutitas@gmail.com</a>. Coordinación confirmó que el Equipo de Rutitas atenderá conjuntamente los mensajes recibidos. Aun así, las solicitudes de eliminación por correo no están habilitadas hasta que se aprueben la verificación de identidad y el seguimiento. La identidad legal completa y domicilio del responsable y la revisión legal final siguen pendientes. No envíes contraseñas, tokens ni documentos innecesarios.</p>
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
