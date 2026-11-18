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
