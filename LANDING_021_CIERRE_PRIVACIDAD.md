# LANDING-021 — cierre técnico y aprobación pendiente

**Fecha:** 25 de noviembre de 2026
**Rama de recuperación:** `feature/landing-021-privacidad-consentimiento`
**PR:** nuevo Draft pendiente de creación; PR #15 fue fusionado externamente y no se reutiliza.
**Estado actual:** cambios recuperados localmente desde `38f689d6250c7d5ecafe3124cbfd277cadb76709`, más correcciones documentales protegidas. El SHA recuperado no está en `main`; aún debe validarse, confirmarse y publicarse en la nueva rama autorizada.

## Cambios

- Aviso candidato y página legal reflejan la identidad comunicada por coordinación; el domicilio personal se omite hasta recibir autorización expresa vigente para su publicación. Se mantienen las etiquetas **BORRADOR NO RATIFICADO** y entrada en vigor pendiente.
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

1. Ratificar la identidad legal, carácter y régimen aplicable del responsable; confirmar expresamente si puede publicarse un domicilio y cuál debe indicarse. El domicilio se omite de esta rama.
2. Confirmar por sistema tratamientos reales, finalidades/bases, categorías (incluidos ubicación/documentos), proveedores efectivos, regiones/transferencias, controles y conservación por categoría.
3. Designar formalmente quién tramita ARCO y aprobar método seguro de identidad, registro/folio, seguimiento y canal de respuesta; el correo no es canal operativo de eliminación.
4. Mark y Ame deben implementar y validar borrado remoto y los siete días de recuperación antes de anunciar esa función.
5. Aprobar legalmente el texto, la versión y su fecha de vigencia; la autorización de coordinación para incluir datos en borrador no es aprobación legal.
6. Revisar los controles GA4 faltantes antes de cualquier activación; no activar el Measurement ID real ni GTM mientras tanto.

## Integración remota y evento externo

La excepción SDD de recuperación permite esta rama nueva, un commit trazable, push y nuevo PR Draft. El commit `38f689d` se creó y publicó antes, sin force push. PR #15 ya aparece **merged/closed** desde `0a236f27de64ba42d49cc5192508231ea46a488b`, con merge commit `887486d504e3f1985d9327dde226f9e7879537b9` a las 2026-11-25 20:49:51 UTC. Ese merge fue externo; Codex no lo realizó. `origin/main` es `887486d`, y `38f689d` no es ancestro de `main`, aunque sí está en la rama remota.

Para `38f689d`, la API de GitHub devolvió cero workflow runs de Actions. El estado observado de Vercel fue `success` con descripción `Canceled by Ignored Build Step`: se omitió el build, no se observó Preview construida. La nueva rama recuperada y su Draft PR siguen pendientes. No se hizo force push, merge ni despliegue.

## Estado recuperado para nueva revisión

La rama actual parte de `887486d504e3f1985d9327dde226f9e7879537b9`. Los cambios de `38f689d` y las seis correcciones documentales se aplicaron sin conflictos mediante cherry-pick sin commit. La revisión vigente retira el domicilio personal de las superficies públicas y de toda la historia nueva; no reescribe la rama remota anterior. La búsqueda en los archivos de trabajo no encontró referencias al domicilio. Los resultados nuevos de revalidación están en `docs/pruebas.md`.

Los cambios recuperados siguen locales y sin commit al momento de esta actualización. `evidence/` y `LANDING_013.diff` permanecen intactos y excluidos. No se cambiaron servicios ni configuración; se añadieron controles deterministas a los flujos E2E generales y se alinearon dos aserciones con el texto vigente.

## Validación de la rama recuperada

- Vitest: **24/24** aprobadas. Playwright (ID sintético): **33 aprobadas, 0 fallidas y 1 omitida** (la regresión de fotografía está configurada para Chromium desktop y pasó allí).
- Lint, typecheck, build, SDD, reglas locales de headers, `npm audit` (**0 vulnerabilidades reportadas**) y `git diff --check`/`git diff --cached --check`: aprobados. E2E intercepta solicitudes; no contactó GA4 real. El resultado del audit no equivale a riesgo cero ni a aceptación humana de riesgo.
- Search Console: el recurso publicado responde HTTP 200, `text/html; charset=utf-8`, 53 bytes, con contenido/hash igual al archivo local. No se accedió a la consola ni se verificó titularidad, se envió sitemap o solicitó indexación.
- Computer Use detuvo el acceso al no poder identificar con confianza la URL activa. Se respetó el bloqueo sin intentar eludirlo. Los controles de GA4 continúan NO VERIFICADOS; ID real vacío y GTM desactivado.
- El nuevo SHA aún no existe: falta commit local, push autorizado, nuevo PR Draft y CI. No se ha hecho merge ni despliegue productivo.
