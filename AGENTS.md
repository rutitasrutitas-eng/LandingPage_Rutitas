# AGENTS — Rutitas Landing

## Autoridad

- Sigue `.specify/memory/constitution.md`; fue ratificada por coordinación el 25-11-2026. La ratificación es técnica y no sustituye aprobaciones legales.
- La especificación activa es `specs/001-landing-compliance/spec.md`. Antes de cada cambio, enlaza su requisito y tarea en `tasks.md`/`docs/matriz-trazabilidad.md`.
- Conserva React/Vite, identidad visual, portada y comportamiento válidos. No reemplaces el proyecto ni elimines contenido por simplificación.

## Alcance

- El repo contiene una landing estática; no asumir backend, app operativa, endpoint de eliminación, canal legal, GA4 o ficha Google Play.
- No inventes responsable, contacto, datos tratados, finalidades, proveedores, medidas de seguridad, retención, app ID, propiedad GA4 ni estado operativo.
- Marca datos desconocidos como `[PENDIENTE DE VALIDACIÓN DEL EQUIPO]` y páginas legales como borrador no ratificado.
- No recolectes datos de visitantes mediante formularios sin proceso real autorizado.

## Seguridad y ejecución

- No añadas secretos, cookies de sesión o datos personales a Git, pruebas, logs, memoria o artefactos. **Excepción única LANDING-021:** coordinación autorizó expresamente publicar la identidad y domicilio confirmados en las páginas públicas candidatas `src/PrivacyRutitas.tsx` y `src/LegalPages.tsx`, y en el documento público de trabajo `docs/AVISO_PRIVACIDAD_RUTITAS_BORRADOR.md`. La excepción no cubre copias en memoria, checklist, matriz, pruebas, logs, artefactos ni otros datos personales; el aviso permanece no ratificado.
- No habilites Analytics sin ID válido y consentimiento afirmativo; no envíes PII.
- Mantén Google Play inactivo hasta tener URL HTTPS real de Play.
- No agregues/actualices dependencias sin justificación en plan, lockfile y auditoría.
- Ejecuta solo tareas y pruebas del plan; no inicies ni implementes backend o app móvil.

## Finalización

- Una tarea documental/código termina cuando satisface el criterio de aceptación y guarda prueba reproducible, o registra el bloqueo y la evidencia faltante.
- Actualiza `Memoria.md`, `docs/matriz-trazabilidad.md`, checklist y pruebas con resultados reales.
- Por regla general, esta guía no autoriza commits, push, cambios en dashboard/configuración de Vercel ni despliegues. Excepción LANDING-020, ratificada el 25-11-2026: autoriza el commit inicial, push solo de `feature/landing-020-ga4-seo`, PR a `main`, CI normal y Preview solo si Vercel la genera dentro del plan gratuito sin cambiar configuración. **Ampliación única LANDING-021, autorizada por coordinación el 25-11-2026:** permite los cambios locales trazados de privacidad candidata/ARCO y del ciclo de consentimiento, un commit adicional en la misma rama, push de esa rama y actualización del PR #15 Draft y CI normal. La publicación de identidad/domicilio queda limitada a las dos páginas públicas candidatas y al aviso de trabajo indicados arriba, y está autorizada explícitamente por coordinación. Se excluyen `evidence/`, `LANDING_013.diff` y archivos ajenos. Ninguna excepción autoriza merge, producción, cambio de Vercel, activación GA4/GTM, ni elimina aprobación legal o de riesgo pendientes. No es autorización permanente.
