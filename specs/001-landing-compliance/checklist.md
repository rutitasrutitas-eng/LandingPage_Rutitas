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
