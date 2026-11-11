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
          <p>Canal oficial atendido por el responsable: <strong>{pending}</strong>. Esta página no recibe solicitudes ni datos personales.</p>
        </section>
        <section aria-labelledby="privacy-third-parties">
          <h2 id="privacy-third-parties">Servicios de terceros</h2>
          <p>Proveedores y transferencias confirmados, sus funciones y las condiciones aplicables: <strong>{pending}</strong></p>
        </section>
        <section aria-labelledby="privacy-analytics">
          <h2 id="privacy-analytics">Analítica y tecnologías similares</h2>
          <p>El código de esta landing solo carga Google Analytics si se configura un ID válido y la persona acepta la analítica opcional. El equipo debe confirmar la propiedad, su configuración, los eventos recibidos y el consentimiento aplicable antes de declarar la medición activa. Actualmente no se afirma que haya una propiedad o eventos verificados.</p>
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
          INFORMACIÓN PRELIMINAR · EL MECANISMO AÚN NO ESTÁ CONFIRMADO
        </div>
        <p className="legal-eyebrow">CONTROL DE TU CUENTA</p>
        <h1>Eliminación de cuenta</h1>
        <p className="legal-lead">Esta página informa el estado del mecanismo. No tramita solicitudes ni elimina cuentas.</p>

        <section aria-labelledby="deletion-request">
          <h2 id="deletion-request">1. Cómo solicitar la eliminación</h2>
          <p>El repositorio no documenta un proceso operativo ni un canal oficial para recibir solicitudes. El canal y los pasos de atención están <strong>{pending.toLowerCase()}</strong>. No envíes documentos ni información de cuenta a través de esta página.</p>
        </section>
        <section aria-labelledby="deletion-verify">
          <h2 id="deletion-verify">2. Verificación de titularidad</h2>
          <p>Los pasos seguros para verificar a la persona titular deben ser definidos y aprobados por el equipo: <strong>{pending}</strong>. No se solicita contraseña, código de acceso o documento por esta landing.</p>
        </section>
        <section aria-labelledby="deletion-data">
          <h2 id="deletion-data">3. Qué ocurre con la información</h2>
          <p>El inventario real de datos, su eliminación o anonimización, y el tratamiento de respaldos no están confirmados en este repo: <strong>{pending}</strong></p>
        </section>
        <section aria-labelledby="deletion-retention">
          <h2 id="deletion-retention">4. Datos que podrían conservarse</h2>
          <p>Cualquier excepción debe contar con motivo válido, categoría de datos, fundamento y plazo documentados y revisados por el responsable. No se confirma aquí ninguna retención concreta: <strong>{pending}</strong></p>
        </section>
        <section aria-labelledby="deletion-contact">
          <h2 id="deletion-contact">5. Contacto</h2>
          <p>Responsable y canal oficial para recibir solicitudes: <strong>{pending}</strong>. Hasta que exista un proceso verificable, no hay formulario ni confirmación de eliminación en este sitio.</p>
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
