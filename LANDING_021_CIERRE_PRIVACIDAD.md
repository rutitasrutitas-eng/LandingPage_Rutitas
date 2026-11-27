# LANDING-021 — cierre técnico y aprobación pendiente

**Fecha de actualización:** 26 de noviembre de 2026
**Rama de recuperación:** `feature/landing-021-privacidad-consentimiento`
**PR actual:** [#16 — Draft](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/pull/16), abierto hacia `main`.
**SHA actual:** `3efa9e7155da8a65e6f67e11704b5f23c666b409`.
**Estado actual:** configuración GA4 autorizada aplicada y comprobada al reabrir sus pantallas; los cambios documentales están publicados en la rama indicada. CI para este SHA terminó correctamente (workflow `Quality and security checks`, ejecución [45915521507](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/45915521507)). El PR se mantiene Draft.

> Las secciones que registran la recuperación, el primer push y estados “pendientes” describen las observaciones históricas de sus fechas. El estado más reciente se encuentra en “Actualización de configuración GA4” y “Cierre actual — 26-11-2026”.

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

## Controles externos y límites — observación histórica del 25-11-2026

- En la inspección del 25-11-2026 no fue posible abrir la consola autenticada de GA4. Ese estado histórico de **NO VERIFICADO** fue supersedido por la inspección autenticada y los cambios confirmados el 26-11-2026, descritos al final. En ambas revisiones no se activó medición.
- `VITE_GA_MEASUREMENT_ID` sigue vacío, GTM sigue inactivo, Search Console no se verificó en remoto ni se desplegó, y no se hizo operación Vercel.
- La LFPDPPP oficial consultada (Cámara de Diputados, arts. 28–31) se usa como referencia candidata; la aplicabilidad y redacción final requieren responsable legal. Fuente: [texto vigente de la LFPDPPP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf).

## Decisiones humanas aún requeridas

1. Ratificar la identidad legal, carácter y régimen aplicable del responsable; confirmar expresamente si puede publicarse un domicilio y cuál debe indicarse. El domicilio se omite de esta rama.
2. Confirmar por sistema tratamientos reales, finalidades/bases, categorías (incluidos ubicación/documentos), proveedores efectivos, regiones/transferencias, controles y conservación por categoría.
3. Designar formalmente quién tramita ARCO y aprobar método seguro de identidad, registro/folio, seguimiento y canal de respuesta; el correo no es canal operativo de eliminación.
4. Mark y Ame deben implementar y validar borrado remoto y los siete días de recuperación antes de anunciar esa función.
5. Aprobar legalmente el texto, la versión y su fecha de vigencia; la autorización de coordinación para incluir datos en borrador no es aprobación legal.
6. Revisar los controles GA4 faltantes antes de cualquier activación; no activar el Measurement ID real ni GTM mientras tanto.

## Integración remota y evento externo — registro histórico previo al PR #16

La excepción SDD de recuperación permite esta rama nueva, un commit trazable, push y nuevo PR Draft. El commit `38f689d` se creó y publicó antes, sin force push. PR #15 ya aparece **merged/closed** desde `0a236f27de64ba42d49cc5192508231ea46a488b`, con merge commit `887486d504e3f1985d9327dde226f9e7879537b9` a las 2026-11-25 20:49:51 UTC. Ese merge fue externo; Codex no lo realizó. `origin/main` es `887486d`, y `38f689d` no es ancestro de `main`, aunque sí está en la rama remota.

Para `38f689d`, la API de GitHub devolvió cero workflow runs de Actions. El estado observado de Vercel fue `success` con descripción `Canceled by Ignored Build Step`: se omitió el build, no se observó Preview construida. La nueva rama recuperada y su Draft PR siguen pendientes. No se hizo force push, merge ni despliegue.

## Estado recuperado para nueva revisión — registro histórico previo al último commit

La rama actual parte de `887486d504e3f1985d9327dde226f9e7879537b9`. Los cambios de `38f689d` y las seis correcciones documentales se aplicaron sin conflictos mediante cherry-pick sin commit. La revisión vigente retira el domicilio personal de las superficies públicas y de toda la historia nueva; no reescribe la rama remota anterior. La búsqueda en los archivos de trabajo no encontró referencias al domicilio. Los resultados nuevos de revalidación están en `docs/pruebas.md`.

El commit de recuperación ya se publicó en la nueva rama. `evidence/` y `LANDING_013.diff` permanecen intactos y excluidos. No se cambiaron servicios ni configuración; se añadieron controles deterministas a los flujos E2E generales y se alinearon dos aserciones con el texto vigente.

## Validación de la rama recuperada

- Vitest: **24/24** aprobadas. Playwright (ID sintético): **33 aprobadas, 0 fallidas y 1 omitida** (la regresión de fotografía está configurada para Chromium desktop y pasó allí).
- Lint, typecheck, build, SDD, reglas locales de headers, `npm audit` (**0 vulnerabilidades reportadas**) y `git diff --check`/`git diff --cached --check`: aprobados. E2E intercepta solicitudes; no contactó GA4 real. El resultado del audit no equivale a riesgo cero ni a aceptación humana de riesgo.
- Search Console: el recurso publicado responde HTTP 200, `text/html; charset=utf-8`, 53 bytes, con contenido/hash igual al archivo local. No se accedió a la consola ni se verificó titularidad, se envió sitemap o solicitó indexación.
- Computer Use detuvo el acceso al no poder identificar con confianza la URL activa. Se respetó el bloqueo sin intentar eludirlo. Los controles de GA4 continúan NO VERIFICADOS; ID real vacío y GTM desactivado.
- Commit local/remoto: `bde7f10dd16483533ec26d280a8d63fa18b884a5` en `feature/landing-021-privacidad-consentimiento`, basado en `main` `887486d504e3f1985d9327dde226f9e7879537b9`; push normal completado.
- El conector GitHub devolvió HTTP 403 `Resource not accessible by integration` al crear el nuevo Draft PR; `gh auth status` no pudo ejecutarse porque la CLI no está instalada. PR #15 no se reutilizó. Crear PR manualmente: https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/compare/main...feature/landing-021-privacidad-consentimiento?expand=1.
- Para este SHA hay cero workflow runs de GitHub Actions y el status combinado solo muestra Vercel `success`. Sin PR no se dispara el workflow `pull_request`; el status no demuestra si Vercel completó u omitió el build. No se hizo merge ni despliegue productivo.
- Estos datos posteriores al push se actualizaron localmente y no se publicaron en un segundo push.

## Actualización de coordinación — 2026-11-26 (antes del último commit documental)

Coordinación confirmó que el PR **#16** existe y permanece Draft. GitHub confirma base `main`, head `feature/landing-021-privacidad-consentimiento` y SHA `bde7f10dd16483533ec26d280a8d63fa18b884a5`. La ejecución [45756697489](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/45756697489) terminó con conclusión `success` para ese SHA. Esta evidencia corresponde al commit anterior a la actualización de tres documentos; el commit documental y su CI se registrarán aparte.

En ese punto la descripción aún estaba pendiente de actualización. Posteriormente se publicó el commit documental `3efa9e7` y se actualizó la descripción del PR; el estado efectivo se registra en “Cierre actual — 26-11-2026”. El PR sigue Draft. El aviso permanece no ratificado, el domicilio personal no se publica, GA4/GTM no se activan, y no se autoriza merge ni producción.

## Actualización de configuración GA4 — 2026-11-26

La revisión autenticada de la propiedad **Rutitas** (`565238699`, flujo web `G-MKN6YXXZ8Y`) se completó en modo lectura para verificar la persistencia. La configuración anterior descrita en este informe como “NO VERIFICADA” corresponde a la inspección del 25-11-2026 y queda supersedida por esta actualización; se conserva como historial.

| Control | Antes de esta actualización | Estado guardado y reabierto |
|---|---|---|
| Retención de eventos | 2 meses | 2 meses (sin cambio) |
| Retención de datos de usuario | 14 meses | 2 meses |
| Reinicio de retención con actividad nueva | Activado | Desactivado |
| Personalización publicitaria | Permitida en 307/307 regiones | No permitida en 0/307 regiones |
| Recogida granular de ubicación/dispositivo | Activada | Desactivada |
| Google Signals | Desactivado | Desactivado (conservado) |
| Datos proporcionados por usuarios | Desactivados | Desactivados (conservado) |
| Medición mejorada | Desactivada | Desactivada (conservada) |
| Ocultación de correo y parámetros sensibles | Correo activo; 17 claves URL | Conservada; 17 claves URL |

El ajuste de las 307 regiones se aplicó con “No permitir ninguno” y “Aplicar”; al reabrir la sección mostró `0 de 307` regiones permitidas. La conservación de GA4 de dos meses es un control de la propiedad y **no ratifica** el plazo general de conservación de datos de Rutitas, que sigue pendiente de validación por sistema/categoría y aprobación legal.

El flujo web indica que la recogida no está activada y no muestra datos recibidos. En la cuenta oficial, GTM `GTM-NFJDHQXM` muestra una lista de etiquetas vacía en el espacio de trabajo y “Este contenedor no tiene ninguna versión”; por tanto, no se observó ninguna versión publicada. Las vinculaciones inspeccionadas de Google Ads, AdMob, AdSense, Ad Manager, Display & Video 360 y Floodlight muestran cero vinculaciones. No se cambiaron esas vinculaciones.

La revisión del repositorio confirma que `.env.example` mantiene `VITE_GA_MEASUREMENT_ID` vacío y el código carga GA solo con ID válido y consentimiento afirmativo. Esto verifica la configuración local de código; **no se abrió el panel de Vercel ni se verificó su entorno de producción**. No se activaron GA4/GTM, no se enviaron eventos, no se tocaron Search Console ni Vercel y no hubo despliegue.

La evidencia consiste en observación visual de las pantallas de retención, recogida, flujo web, etiquetas/versiones GTM y vinculaciones desde la sesión de la cuenta oficial el 26-11-2026. No se guardaron capturas en el repositorio ni datos de sesión.

El aviso sigue **BORRADOR NO RATIFICADO**. La propiedad puede estar configurada sin que Analytics se encuentre activado desde la Landing; la revisión de controles no sustituye la ratificación legal ni autoriza activar el Measurement ID real.

## Cierre actual — 26-11-2026

- Rama `feature/landing-021-privacidad-consentimiento`, SHA local/remoto `3efa9e7155da8a65e6f67e11704b5f23c666b409`; el árbol de trabajo quedó limpio salvo los elementos preexistentes excluidos `LANDING_013.diff` y `evidence/`.
- PR [#16](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/pull/16) conserva estado **Draft** y su descripción ahora refleja los ajustes GA4 verificados, el SHA actual, el resultado del CI y los límites de verificación.
- CI: [Quality and security checks — ejecución 45915521507](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/45915521507), conclusión **Success** para `3efa9e7155da8a65e6f67e11704b5f23c666b409`. GitHub muestra 3/3 checks exitosos en el PR.
- La verificación de GA4 fue visual en las consolas de la cuenta oficial. Se guardó el registro reproducible en `docs/LANDING_021_EVIDENCIA_GA4_2026-11-26.md`; no se guardaron capturas de pantalla en el repositorio.
- No se inspeccionó el entorno remoto de Vercel, por lo que la variable de producción sigue **NO VERIFICADA**. No se activaron GA4/GTM ni se enviaron eventos; no se hizo merge ni despliegue.
- Siguen pendientes la ratificación legal del aviso, la confirmación de los tratamientos y del canal ARCO, la implementación/validación de eliminación remota y la aceptación humana del riesgo residual de dependencias antes de release.
