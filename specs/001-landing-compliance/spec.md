# Especificación 001 — Cumplimiento y mejora incremental de la landing

**Estado:** BORRADOR PARA REVISIÓN
**Constitución local:** `.specify/memory/constitution.md` (PENDIENTE_RATIFICACION)
**Origen:** requisitos docentes contenidos en la solicitud LANDING-001 y auditoría inicial `docs/auditoria-inicial.md`.

## Contexto y límites

La landing existente debe conservar su identidad. Esta especificación habilita dos páginas informativas con datos legales pendientes, una configuración de GA4 opt-in y apagada por defecto, enlaces de Google Play solo con URL real configurada, pruebas, trazabilidad y CI. No crea backend, proceso de soporte, cuenta, endpoint, API, servicio de analítica confirmado ni publicación de producción.

## Requisitos funcionales

| ID | Requisito | Criterio de aceptación | Prioridad |
|---|---|---|---|
| LP-REQ-001 | Conservar la landing actual | La portada, logotipos, mockup, modales y paleta siguen disponibles. | MUST |
| LP-REQ-002 | Rutas legales | `/privacidad` y `/eliminar-cuenta` cargan por navegación y acceso directo/recarga; el footer enlaza a ambas. | MUST |
| LP-REQ-003 | Aviso de privacidad | La página contiene todas las secciones solicitadas y marca de forma visible estado de borrador; los hechos no confirmados son marcadores, no afirmaciones. | MUST |
| LP-REQ-004 | Eliminación de cuenta | Explica solicitud, validación, consecuencias y retención como pendientes; no afirma que exista un proceso ni permite enviar datos. | MUST |
| LP-REQ-005 | GA4 configurable | Solo se carga con un Measurement ID de formato válido y consentimiento explícito; no manda datos personales ni pageviews duplicadas. | MUST |
| LP-REQ-006 | Google Play | URL configurable, verificada sintácticamente como enlace HTTPS de Play; botón/QR no aparecen activos si falta la URL. | MUST |
| LP-REQ-007 | Accesibilidad y responsive | Páginas legales se desplazan en pantallas pequeñas; contenido, enlaces, foco y diálogos son utilizables con teclado y movimiento reducido. | MUST |
| LP-REQ-008 | Calidad automatizada | Scripts reproducibles de typecheck, build, unit/integration; pruebas de navegador para rutas si el runtime permite instalar navegadores. | MUST |
| LP-REQ-009 | CI y seguridad | Pull Requests ejecutan lockfile install, tipos, build, tests, verificador SDD, escaneo de secretos y auditoría de dependencias; evidencias publicadas como artefacto. | MUST |
| LP-REQ-010 | Evidencia y operación | Docs SDD, matriz de trazabilidad y memoria distinguen lo implementado, verificado, pendiente y no ejecutado. | MUST |

## Requisitos no funcionales

- No modificar el stack ni la identidad visual sin justificación.
- No mostrar información confidencial en memoria o ejemplos.
- No crear formulario de privacidad/eliminación sin proceso de atención real.
- No configurar Vercel, variables remotas, dominio, facturación o producción en esta tarea.
- No crear commits ni push.
- No ratificar textos legales.

## Escenarios

### Privacidad con datos pendientes

**Dado** que no existe en este repo confirmación de responsable, contacto, proveedores, datos reales o plazos
**Cuando** una persona visita `/privacidad`
**Entonces** encuentra el índice completo de temas requeridos, avisos explícitos de borrador y cada dato desconocido marcado para validación, sin una declaración legal presentada como definitiva.

### Eliminación sin backend

**Dado** que no hay contrato ni endpoint de eliminación en el repositorio
**Cuando** una persona visita `/eliminar-cuenta`
**Entonces** puede leer el estado y dependencias pendientes, pero no enviar datos ni recibir una falsa confirmación de borrado.

### Analítica sin consentimiento

**Dado** que no hay Measurement ID configurado o no hay consentimiento afirmativo
**Cuando** se renderiza cualquier ruta
**Entonces** no se inserta gtag.js ni se envían eventos.

### Google Play sin ficha oficial

**Dado** que `VITE_GOOGLE_PLAY_URL` está vacía o inválida
**Cuando** se renderiza la tarjeta de app
**Entonces** se mantiene «Muy pronto» y no aparece un link/botón/QR que simule una descarga.

## Fuera de alcance

Desarrollo de app/backend, funcionalidad de viajes, autenticación, captura de información personal, API de eliminación, definición de responsables/plazos/proveedores, alta de GA4, publicación de ficha Play, despliegue productivo y aprobación legal.
