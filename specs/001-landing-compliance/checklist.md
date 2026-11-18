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
- [ ] LANDING-007: `npm audit --audit-level=high` informa 11 hallazgos high por `picomatch@4.0.7`; no hay parche publicado según advisory al corte ni se aplicó downgrade major. Resolver o aprobar formalmente el riesgo antes del release.
- [x] LANDING-008 preparación: ejecutados `npm audit --json`, `npm audit --omit=dev --audit-level=high`, `npm ls picomatch --all` y búsqueda del bundle de producción.
- [x] LANDING-008 preparación: GHSA y npm registry vigentes revisados; latest sigue en 4.0.7, advisory sin versión patched; no se modificaron dependencias ni se ocultó el resultado.
- [ ] LANDING-008 pendiente: mitigar la dependencia de desarrollo cuando se publique un fix compatible o documentar aceptación humana del riesgo residual antes de release.

## LANDING-008 — preparación local para revisión GitHub

- [x] Borrador de PR preparado con base `main` y head `feature/landing-integracion-final-local`; no publicado.
- [x] Historial LANDING-004/005/006 preservado y el diff de revisión compara contra `main`.
- [x] Reporte de seguridad y resultado fallido de `npm audit` incluidos íntegros; el riesgo residual requiere aceptación humana antes de cualquier release.
- [x] Checklist Vercel identifica verificaciones administrativas y el posible efecto del primer push; ninguna configuración remota fue modificada.
- [x] ZIP incluye reporte, capturas, diff, borrador PR, checklist, resultados, SHA y bloqueos.
- [x] CI, push, PR, merge, Preview y despliegue permanecen sin ejecutar por instrucción.
- [ ] Aceptación formal del riesgo residual high y su uso previo a cualquier release.
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
