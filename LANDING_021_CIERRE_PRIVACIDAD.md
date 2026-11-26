# LANDING-021 — cierre técnico y aprobación pendiente

**Fecha:** 25 de noviembre de 2026
**Rama:** `feature/landing-020-ga4-seo`
**PR:** [#15 Draft](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/pull/15)
**Estado al corte:** cambios locales implementados y validados en lo afectado; push/CI todavía pendientes en este corte.

## Cambios

- Aviso candidato y página legal coherentes con la identidad/domicilio proporcionados por coordinación y autorizados para publicarse en la candidata. Se mantienen las etiquetas **BORRADOR NO RATIFICADO** y entrada en vigor pendiente. Los datos identificables se limitan a las superficies públicas del aviso y a `docs/AVISO_PRIVACIDAD_RUTITAS_BORRADOR.md`.
- Distinguidos: Landing informativa; Android `DEMO_MODE=true` y datos de ejemplo locales; Backend de siete endpoints reportado en Azure/MongoDB Atlas sin evidencia suficiente de tratamiento efectivo; reservas/viajes multiusuario no operativos; eliminación remota pendiente de Mark y Ame.
- Contacto oficial y atención conjunta del Equipo de Rutitas actualizados. Se recomienda asignar a una persona responsable por cada caso. Se añadió la propuesta ARCO en `docs/LANDING_021_PRIVACIDAD_ARCO.md`, con verificación proporcional, folio/seguimiento, mínimos de datos y referencia normativa; no es proceso aprobado ni operativo.
- Conservación general prevista de hasta dos meses sigue sujeta a confirmación técnica/legal por categoría. Los siete días futuros de recuperación solo empezarían tras confirmación del Backend de una solicitud validada; un correo o clic no inicia el plazo.
- Consentimiento GA4 ahora reaplica `granted` al volver a aceptar después de revocación sin recargar, conserva `denied`, evita la actualización redundante al mandar eventos y deduplica `page_view`. ID real sigue vacío; GTM no se habilitó.

## Evidencia local

- Vitest dirigido: **23 aprobadas / 0 fallidas**, 3 archivos (`App`, analytics y componente de consentimiento).
- E2E sintética: **2 aprobadas / 0 fallidas**, Chromium y mobile-Chromium, ID sintético y solicitudes externas interceptadas/abortadas.
- `npm run lint`: aprobado.
- `npm run typecheck`: aprobado.
- `npm run build`: aprobado (Vite 6.4.5, 37 módulos).
- `npm run sdd:verify`: aprobado (30 documentos, 32 requisitos LP y trazabilidad de las demás especificaciones).
- `git diff --check`: aprobado, sin errores de whitespace; solo avisos de conversión LF/CRLF.
- `npm audit`: no repetido porque no cambió ninguna dependencia; el resultado de LANDING-020 no se presenta como actual. Se espera el audit normal de CI.
- No se ejecutó localmente la suite completa de Vitest/E2E ni Lighthouse; no se necesitó por el alcance de cambio y no cambia el rendimiento, diseño ni SEO.

La primera vuelta reportó tres expectativas de prueba desactualizadas y una transición `granted` duplicada, corregidas antes de los resultados finales. Ver `docs/pruebas.md`.

## Controles externos y límites

- No fue posible inspeccionar la consola autenticada de GA4: Edge estaba minimizado y la integración no ofreció una pestaña Edge. Por tanto, retención de eventos, reset de actividad, Google Signals, personalización publicitaria, user-provided data y recopilación efectiva quedan **NO VERIFICADOS**. No se modificó la cuenta ni se activó medición.
- `VITE_GA_MEASUREMENT_ID` sigue vacío, GTM sigue inactivo, Search Console no se verificó en remoto ni se desplegó, y no se hizo operación Vercel.
- La LFPDPPP oficial consultada (Cámara de Diputados, arts. 28–31) se usa como referencia candidata; la aplicabilidad y redacción final requieren responsable legal. Fuente: [texto vigente de la LFPDPPP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf).

## Decisiones humanas aún requeridas

1. Ratificar que identidad, carácter y domicilio incluidos en la candidata representan correctamente al responsable legal y definir el régimen aplicable.
2. Confirmar por sistema tratamientos reales, finalidades/bases, categorías (incluidos ubicación/documentos), proveedores efectivos, regiones/transferencias, controles y conservación por categoría.
3. Designar formalmente quién tramita ARCO y aprobar método seguro de identidad, registro/folio, seguimiento y canal de respuesta; el correo no es canal operativo de eliminación.
4. Mark y Ame deben implementar y validar borrado remoto y los siete días de recuperación antes de anunciar esa función.
5. Aprobar legalmente el texto, la versión y su fecha de vigencia; la autorización de coordinación para incluir datos en borrador no es aprobación legal.
6. Revisar los controles GA4 faltantes antes de cualquier activación; no activar el Measurement ID real ni GTM mientras tanto.

## Integración remota autorizada, pendiente

Coordinación amplió de forma única la excepción SDD: un commit LANDING-021 en `feature/landing-020-ga4-seo`, push de esa rama, actualización de PR #15 Draft y CI normal. No permite merge, despliegue productivo, cambios Vercel ni activación GA4/GTM. Excluir `evidence/`, `LANDING_013.diff`, secretos y todo archivo ajeno.
