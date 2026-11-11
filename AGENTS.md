# AGENTS — Rutitas Landing

## Autoridad

- Sigue `.specify/memory/constitution.md`; permanece `PENDIENTE_RATIFICACION` hasta revisión humana.
- La especificación activa es `specs/001-landing-compliance/spec.md`. Antes de cada cambio, enlaza su requisito y tarea en `tasks.md`/`docs/matriz-trazabilidad.md`.
- Conserva React/Vite, identidad visual, portada y comportamiento válidos. No reemplaces el proyecto ni elimines contenido por simplificación.

## Alcance

- El repo contiene una landing estática; no asumir backend, app operativa, endpoint de eliminación, canal legal, GA4 o ficha Google Play.
- No inventes responsable, contacto, datos tratados, finalidades, proveedores, medidas de seguridad, retención, app ID, propiedad GA4 ni estado operativo.
- Marca datos desconocidos como `[PENDIENTE DE VALIDACIÓN DEL EQUIPO]` y páginas legales como borrador no ratificado.
- No recolectes datos de visitantes mediante formularios sin proceso real autorizado.

## Seguridad y ejecución

- No añadas secretos, cookies de sesión o datos personales a Git, pruebas, logs, memoria o artefactos.
- No habilites Analytics sin ID válido y consentimiento afirmativo; no envíes PII.
- Mantén Google Play inactivo hasta tener URL HTTPS real de Play.
- No agregues/actualices dependencias sin justificación en plan, lockfile y auditoría.
- Ejecuta solo tareas y pruebas del plan; no inicies ni implementes backend o app móvil.

## Finalización

- Una tarea documental/código termina cuando satisface el criterio de aceptación y guarda prueba reproducible, o registra el bloqueo y la evidencia faltante.
- Actualiza `Memoria.md`, `docs/matriz-trazabilidad.md`, checklist y pruebas con resultados reales.
- Esta guía no autoriza commits, push, cambios en dashboard/configuración de Vercel ni despliegue de producción. Preview puede usarse solo si ya está disponible sin cambiar configuración y la revisión lo requiere.
