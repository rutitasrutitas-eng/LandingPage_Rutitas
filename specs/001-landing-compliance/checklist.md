# Checklist de aceptación — LANDING-001

- [x] Se conserva la portada existente, su paleta, logos, mockup y modales; capturas locales revisadas.
- [x] `/privacidad` y `/eliminar-cuenta` cargan directamente y al recargar en pruebas locales.
- [x] Footer muestra enlaces de privacidad y eliminación.
- [x] Aviso de privacidad incluye todos los rubros pedidos y está marcado como borrador no ratificado.
- [x] Los hechos desconocidos se indican como pendientes; no se inventan datos ni medidas.
- [x] Página de eliminación describe el bloqueo real; no tiene formulario ni endpoint simulado.
- [x] GA4 queda desactivado sin Measurement ID válido y consentimiento explícito; integración real pendiente de configuración/verificación.
- [x] Pageview manual sin duplicado automático; no se incluyen PII ni query strings.
- [x] Google Play no muestra enlace ni QR funcional sin URL oficial válida.
- [x] `.env.example` contiene nombres de variables opcionales sin valores reales.
- [x] Rutas legales se probaron en móvil; modal probado con teclado. Movimiento reducido conserva reglas existentes de la landing.
- [x] Scripts de calidad y pruebas ejecutados; resultados en `docs/pruebas.md`.
- [x] Workflow de Pull Request definido con permisos mínimos y artefactos; falta su ejecución en GitHub y exigir el check en protección de rama.
- [x] Auditoría npm ejecutada; el escaneo Gitleaks local no se pudo ejecutar y está configurado en CI.
- [x] Constitución permanece `PENDIENTE_RATIFICACION`.
- [x] No se hicieron commits, push, cambios remotos de Vercel ni despliegue productivo.

## LANDING-005 — presentación (verificado localmente)

- [x] El copy presenta una propuesta universitaria y un piloto previsto, no un servicio operativo confirmado.
- [x] Los modales explican los tres pasos, el proyecto y límites actuales de seguridad/funciones.
- [x] Diez preguntas frecuentes usan `details/summary` y se verificaron con teclado en Chromium desktop/móvil.
- [x] Metadatos OG/description no prometen QR ni descarga no disponibles; Playwright confirma el favicon y las siete resoluciones.
- [x] `npm ci`, lint, typecheck, Vitest 17/17, Playwright 16 pass/2 skip, build, SDD, audit y diff whitespace: exit 0. Detalle en `docs/REPORTE_LANDING_005.md`.
- [ ] Autorización del piloto UTTT, disponibilidad pública de la app y cualquier promesa de seguridad siguen sujetas a decisión humana.

- [x] LANDING-006: integrar diseño de privacidad recibido sin alterar Home ni la función de eliminación informativa.
- [x] LANDING-006: distinguir el sitio, DEMO local y capacidades previstas; cotejar ramas/SHA Android/Backend sin afirmar tratamiento productivo.
- [x] LANDING-006: pruebas de secciones/anclas, navegación por teclado, enlaces y siete viewports; consentimiento Analytics probado aparte con ID sintético.
- [x] LANDING-006: actualizar Memoria, matriz, pruebas y documentación de validación legal; aprobación legal sigue pendiente.
- [x] LANDING-006: cotejar Backend `main` y Android feature branch con SHA; separar código observado, DEMO local y operación no confirmada.
- [x] LANDING-006: explicar categorías y capacidades con distinción local/remota y dependencia de integración Android–Backend.
- [x] LANDING-006: diferenciar baja DEMO local de eliminación remota, conservar ruta informativa y no agregar formulario.
- [x] LANDING-006: suite E2E Playwright sintética completa 18/18; solicitudes a Google interceptadas en la prueba dedicada.
- [ ] LANDING-006: aprobación legal, canal de privacidad, datos/plazos/proveedores reales y borrado remoto siguen pendientes.
- [x] LANDING-007: carga directa y reload del hero esperan `complete`, `naturalWidth > 0`, `decode()` y dimensión visible; se revisó la nueva captura desktop.
- [x] LANDING-007: se cotejaron PR Android #9/#10 abiertos y Backend PR #6 fusionado; se separaron tests simulados de las pruebas reales contra servidor, que siguen pendientes.
- [x] LANDING-007 histórico: el audit registró 11 hallazgos high mientras `GHSA-fc5q-39xc-vjpf` estaba activo; GitHub retiró el advisory el 2026-11-18 porque no era un problema de seguridad. No se hizo downgrade.
- [x] LANDING-008 preparación: ejecutados `npm audit --json`, `npm audit --omit=dev --audit-level=high`, `npm ls picomatch --all` y búsqueda del bundle de producción.
- [x] LANDING-008 preparación: GHSA y npm registry vigentes revisados; latest sigue en 4.0.7, advisory sin versión patched; no se modificaron dependencias ni se ocultó el resultado.
- [x] LANDING-008 pendiente histórico supersedido: ya no se requiere fix/aceptación por el advisory retirado; mantener auditoría de CI para avisos distintos.

## LANDING-008 — preparación local para revisión GitHub

- [x] Borrador de PR preparado con base `main` y head `feature/landing-integracion-final-local`; no publicado.
- [x] Historial LANDING-004/005/006 preservado y el diff de revisión compara contra `main`.
- [x] Reporte de seguridad y resultado fallido de `npm audit` incluidos íntegros; el riesgo residual requiere aceptación humana antes de cualquier release.
- [x] Checklist Vercel identifica verificaciones administrativas y el posible efecto del primer push; ninguna configuración remota fue modificada.
- [x] ZIP incluye reporte, capturas, diff, borrador PR, checklist, resultados, SHA y bloqueos.
- [x] CI, push, PR, merge, Preview y despliegue permanecen sin ejecutar por instrucción.
- [x] Reconciliación documental de LANDING-017: GHSA-fc5q-39xc-vjpf retirado; `npm audit --json` actual reporta 0. Ver `LANDING_017_PUBLICACION_OFICIAL.md`.
- [x] Auditoría de costo cero Vercel documenta observaciones, precios públicos y límites de evidencia; no hizo llamadas, instalaciones, cambios, despliegues ni commits.
- [x] Diagnóstico del conector oficial registra `list_teams=[]`, errores 403 de equipo/proyecto y 404 al solicitar consentimiento; no se intentó una vía alternativa.
- [ ] Completar las secciones de cuenta no verificadas con capturas manuales de Billing, Usage, AI Gateway budgets/credits y Project Git/Protection sin datos sensibles.

## Actualización de privacidad por coordinación — 2026-11-17

- [x] `/privacidad` mantiene la etiqueta de borrador no ratificado e incorpora Equipo de Rutitas como responsable operativo y `rutitas.rutitas@gmail.com` como contacto proporcionado.
- [x] El objetivo de conservación de hasta 2 meses se presenta como previsto, sujeto a revisión técnica/legal y sin afirmar implementación.
- [x] Se separa Vercel (hosting observado) del código/servicios cuya operación no fue confirmada y de los proveedores contemplados; política de costo adicional autorizado: $0 MXN, sin afirmar que los servicios sean gratuitos.
- [x] `/eliminar-cuenta` explica el plan futuro Android + Backend y la dependencia de implementación y validación por Mark y Ame; no hay formulario ni eliminación remota operativa.
- [x] Lint, typecheck, unitarias 17/17, Playwright 19 passed/1 skip, build y SDD ejecutados localmente; detalle en `docs/pruebas.md`.
- [ ] Confirmar identidad legal completa/domicilio, tratamientos y proveedores efectivos, atención/procedimiento del correo, validar retención con revisión técnica/legal y completar revisión legal final.
- [ ] Mark y Ame implementan y validan la eliminación remota antes de ofrecerla como funcional.

## LANDING-010 — consolidación local

- [x] Se inspeccionaron rama, HEAD, diffs y archivos sin seguimiento; solo se incluyeron cambios LANDING-008/009 identificados.
- [x] Validaciones locales, auditoría de dependencias y SDD registran resultados reales; no se instalaron paquetes.
- [x] Búsqueda local de patrones de secretos sin exponer valores; Gitleaks no está disponible y no se instaló.
- [x] Commits locales dentro del alcance de autorización, sin push ni otra acción remota.
- [x] Reporte `LANDING_010_RELEASE_READINESS.md` contiene hashes de commits, riesgos, bloqueos y estado de Vercel.
- [x] La política `$0 MXN` se conserva: sin AI Gateway, créditos, cambios de Vercel ni despliegues.

## LANDING-011 — seguridad y control de publicación — 2026-11-18

- [x] Verificados `npm audit --json` (11 High, exit 1), audit omit-dev (0, exit 0), `npm ls picomatch --all` y bundle reconstruido sin cadenas del paquete.
- [x] Verificado en Edge: proyecto Git conectado, production branch `main`, Ignored Build Step `Automatic`, opción PR-only disponible/no aplicada, Require Log In activo/Standard Protection y sin excepciones visibles.
- [x] Documentados escenarios push/PR y límites económicos; recomendación de mantener push detenido bajo política $0 MXN. Sin llamadas AI, instalaciones o cambios remotos.
- [x] El riesgo histórico de GHSA-fc5q-39xc-vjpf dejó de ser un hallazgo activo al retirarse el advisory el 2026-11-18; la auditoría LANDING-017 reporta 0. Otros hallazgos siguen sujetos al audit de CI.
- [ ] Confirmación administrativa del estado habilitado de Preview Branch Tracking y de un control efectivo de costo antes de publicación.
- [x] `npm run sdd:verify` (30 documentos, 22/14/8/9 requisitos trazados) y `git diff --check` exit 0 tras esta edición documental.
- [x] No hubo push, PR, merge, Preview, despliegue, cambio remoto ni commit para LANDING-011.

## LANDING-012 — configuración controlada de Vercel — 2026-11-18

- [x] En Edge se confirmó el proyecto/equipo, el repositorio conectado y la rama de producción `main`.
- [x] Único ajuste: `Ignored Build Step` `Automatic → Only build production`; guardado y persistido al recargar.
- [x] `Require Log In` y `Standard Protection` siguen activos; no hubo configuración de otra sección.
- [x] `.github/workflows/quality.yml` local no tiene `push`; conserva PR a `main`/`feature/landing-001-compliance`, `workflow_dispatch` y `npm audit`.
- [x] No se inició deployment ni se hizo push, PR, merge, commit, instalación o consumo de créditos.
- [ ] No se hizo prueba de push; el efecto esperado no está demostrado experimentalmente.
- [ ] Revisar riesgo de cuotas: deployments cancelados por Ignored Build Step pueden contar para cuotas; el ajuste no garantiza costo adicional cero.
- [ ] Ratificación SDD y revisión legal del aviso siguen pendientes antes de release. La actualización de `picomatch` se registra en LANDING-017 y no figura como bloqueo vigente.

## LANDING-013 — eliminación programada de cuentas — 2026-11-18

- [x] `/privacidad` conserva el estado **BORRADOR NO RATIFICADO** y separa la conservación general prevista de hasta 2 meses de los 7 días de recuperación.
- [x] `/eliminar-cuenta` explica la ruta Android futura, la solicitud web propuesta, el inicio de los siete días solo tras confirmación del Backend, el bloqueo de acceso normal, cancelación futura, eliminación definitiva, excepciones documentadas y respaldos por validar.
- [x] Correo `rutitas.rutitas@gmail.com` no se declara como canal de eliminación operativo; correo no prueba identidad ni inicia el plazo. No se solicita información sensible ni se implementa formulario o endpoint.
- [x] UT-LP-003/004 17/17; E2E de Landing 19 passed/1 skipped intencional en mobile; lint, typecheck, build y SDD aprobados localmente.
- [ ] Mark y Ame implementan y validan el flujo Android/Backend; confirmación del Backend inicia el plazo y ejecución de borrado debe tener evidencia.
- [x] Coordinación confirma que Mark, Ame, Ulises y la coordinación atenderán conjuntamente los mensajes recibidos en el correo oficial; la responsabilidad compartida no habilita aún el proceso.
- [ ] Asignar internamente una persona responsable por solicitud y aprobar el proceso de verificación, seguimiento, cancelación y confirmación antes de habilitar el canal web.
- [ ] El sitio es solo un recurso informativo local; hasta disponer de solicitud web funcional y validada, no presentar cumplimiento operativo de Google Play ni desplegar estas instrucciones.
- [x] Estado previo de `picomatch` actualizado en LANDING-017: advisory retirado, audit 0; la auditoría de LANDING-013 no había vuelto a ejecutar npm audit y se conserva como evidencia histórica.

- [x] El texto de ambas páginas públicas usa solo «Equipo de Rutitas» y `rutitas.rutitas@gmail.com`; no publica nombres individuales. La prueba unitaria comprueba esta condición.

## LANDING-014 — Analytics, redes, SEO y Search Console — 2026-11-19

- [x] GA4 conserva consentimiento afirmativo, rechazo y revocación; una prueba Playwright con `G-SYNTHETIC123` intercepta localmente `googletagmanager.com`, comprueba un único `page_view`, señales publicitarias desactivadas y ninguna solicitud exterior efectiva.
- [x] No se configuró el Measurement ID entregado en `.env.local`, Vercel ni prueba real; no se enviaron eventos, no se añadió GTM y no hubo consumo de créditos.
- [x] Footer muestra cinco SVG locales con contraste blanco sobre navy; los cinco enlaces (Facebook, Instagram, YouTube, X y TikTok) usan HTTPS. La página pública del canal de YouTube responde 200, muestra el título «Rutitas UTTT» y el ID coincide; el avatar no se confirmó visualmente.
- [x] HTML inicial define canonical/description/Open Graph/X para portada; rutas SPA actualizan metadatos y privacidad/eliminación usan `noindex,follow` después de ejecutar JS. El sitemap solo declara la portada; robots referencia el sitemap.
- [x] Search Console HTML se copió desde Downloads sin alterar bytes; SHA-256 coincide entre origen, `public/` y `dist/`. Preview local devolvió HTTP 200 y el cuerpo exacto. No se hizo verificación remota ni publicación.
- [x] Vitest 19/19; Playwright 27 passed/5 skips intencionales y prueba GA sintética dirigida 1/1; lint, typecheck, build, SDD, `npm audit --audit-level=high` y `git diff --check` exit 0.
- [ ] CI remoto, despliegue, publicación de sitemap y Search Console requieren autorización posterior. Las metas de rutas legales dependen de JavaScript; el HTML estático de fallback contiene metadatos de portada y no garantiza `noindex` universal para crawlers sin JS.
- [x] LANDING-017 verificó la retirada de `GHSA-fc5q-39xc-vjpf` y repitió `npm audit --json` (0 vulnerabilidades); no se modificaron dependencias.
- [x] `vercel.json` declara `X-Robots-Tag: noindex, follow` para las cuatro variantes de rutas legales y conserva el rewrite SPA; `npm run test:vercel-headers` valida localmente rutas, valores, Home y rewrite. No hay prueba HTTP de Vercel: requiere autorización de publicación y verificación posterior.
- [ ] No declarar efectividad en crawlers sin JavaScript hasta que una respuesta HTTP autorizada confirme el header en las cuatro rutas sin iniciar despliegues no aprobados.
- [x] LANDING-015 se consolidó en cinco commits locales trazables; diff-check y estado final registrados en `LANDING_015_CONSOLIDACION_FINAL.md`. Push/PR/merge/deployment no ejecutados.
- [x] LANDING-014 update: YouTube es el quinto enlace HTTPS. Canal responde 200, metadatos «Rutitas UTTT» y mismo ID; no se verificó visualmente el avatar. Ver inventario para el diff completo y conciliación del audit.

## LANDING-020 — GA4, SEO y titularidad (local)

- [x] LP-REQ-030 y tareas L20 trazadas antes del cambio funcional.
- [x] La cuenta oficial aparece como Administradora efectiva de GA4. Medición mejorada apagada; ocultación de correo y 17 claves de query guardada tras confirmación de coordinación.
- [x] GTM: la cuenta oficial ya tenía rol de administradora; contenedor muestra cero cambios/etiqueta no instalada.
- [x] Propiedad URL-prefix de Search Console creada bajo la cuenta oficial; el archivo de verificación nuevo se añadió localmente y el anterior se conserva. Sigue sin verificar porque el sitio publicado aún no sirve el nuevo archivo.
- [x] Eventos `primary_cta_click`, `faq_open` y `social_click` usan solo acciones existentes, consentimiento afirmativo y parámetros estáticos; Vitest comprueba la integración sin PII.
- [x] JSON-LD `WebSite` factual, metadatos estáticos, sitemap/robots y archivo de verificación GSC conservados; build local confirma su inclusión. Las páginas legales conservan `noindex,follow`.
- [x] Validaciones locales: lint, typecheck, Vitest 21/21, Playwright 27 aprobadas/5 omitidas intencionalmente, GA sintético E2E 1/1, build, SDD, audit 0 vulnerabilidades, headers y diff-check aprobados.
- [x] Constitución SDD ratificada por coordinación el 2026-11-25. Excepción única LANDING-020 autoriza commit, push solo a `feature/landing-020-ga4-seo`, PR a `main` y CI; no autoriza merge, Production, cambios Vercel ni activación GA4/GTM.
- [x] Lighthouse local contra build: desktop Performance 98, Accessibility 100, Best Practices 100, SEO 100; mobile 81, Accessibility 100, Best Practices 100, SEO 100. Se mejoró descubrimiento de hero y formato/tamaño de logo sin dependencias nuevas.
- [x] Archivo GSC nuevo servido en Vite Preview local con HTTP 200 y cuerpo exacto (53 bytes, SHA-256 registrado); producción aún no verificada porque no hubo despliegue de este cambio. Sitemap/indexación pendientes de verificación publicada.
- [ ] Ads, Google Signals y retención de eventos no se revisaron exhaustivamente en la consola; siguen pendientes antes de activar GA4. La revisión legal también bloquea activación y publicación productiva.

## LANDING-017 — publicación controlada — 2026-11-19

- [x] `origin/main` y HEAD coinciden con las referencias autorizadas; los cambios de trabajo anteriores y artefactos locales se preservaron.
- [x] Advisory `GHSA-fc5q-39xc-vjpf` verificado en GitHub como retirado/no es un problema de seguridad; audit actual exit 0/0; árbol de dependencia registrado sin cambiar paquetes.
- [x] Actualizadas evidencias de LANDING-011/016, documentación de seguridad, matriz, checklist y memoria sin borrar la salida High histórica.
- [ ] Vercel plan, cuotas/cargos/créditos, `Only build production`, rama y protecciones quedaron NO VERIFICADOS por 403 del conector y bloqueo de Computer Use al no poder identificar la URL de Edge.
- [ ] Push/PR/CI/deployment no ejecutados. Requieren completar el gate económico Vercel; release conserva pendientes legales, SDD y operativos.
