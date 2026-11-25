import { useEffect, useState } from 'react'
import { enableAnalytics, isValidMeasurementId, readAnalyticsConsent, revokeAnalyticsConsent, saveAnalyticsConsent } from './analytics'
import { gaMeasurementId } from './config'

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState(readAnalyticsConsent)
  const [isOpen, setIsOpen] = useState(consent === null)
  const hasMeasurementId = isValidMeasurementId(gaMeasurementId)

  useEffect(() => {
    if (consent === 'granted') enableAnalytics(gaMeasurementId)
  }, [consent])

  if (!hasMeasurementId) return null

  const choose = (choice: 'granted' | 'denied') => {
    if (saveAnalyticsConsent(choice)) {
      if (choice === 'denied') revokeAnalyticsConsent()
      setConsent(choice)
      setIsOpen(false)
    }
  }

  return (
    <>
      {consent !== null && !isOpen && <button className="analytics-manage" type="button" onClick={() => setIsOpen(true)}>Preferencias de analítica</button>}
      {isOpen && <aside className="analytics-consent" aria-labelledby="analytics-consent-title">
        <div>
          <strong id="analytics-consent-title">Analítica opcional</strong>
          <p>Si aceptas, Google Analytics podrá medir visitas y algunas acciones generales del sitio. Los eventos preparados no incluyen texto libre ni parámetros de URL. Consulta el aviso de privacidad para conocer el estado y los límites de esta medición.</p>
        </div>
        <div className="analytics-consent-actions">
          {consent !== null && <button type="button" className="consent-reject" onClick={() => setIsOpen(false)}>Cerrar</button>}
          <button type="button" className="consent-reject" onClick={() => choose('denied')}>Rechazar</button>
          <button type="button" className="consent-accept" onClick={() => choose('granted')}>Aceptar analítica</button>
        </div>
      </aside>}
    </>
  )
}
