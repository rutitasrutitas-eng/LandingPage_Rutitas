# Especificación 002 — Validación, seguridad y preparación de publicación

**Estado global:** PARCIAL. La implementación local se ha verificado; CI, Preview, aprobaciones y publicación requieren dependencias externas/humanas.
**Constitución local:** `.specify/memory/constitution.md` — `PENDIENTE_RATIFICACION`.
**Fecha objetivo académica:** 2026-12-02.
**Alcance:** validar y preparar la landing existente. No publicar ni alterar Vercel/GitHub sin autorización administrativa.

## Requisitos con aceptación y evidencia

| ID | Descripción | Criterio de aceptación | Prueba asociada | Evidencia esperada | Responsable | Estado real |
|---|---|---|---|---|---|---|
| L002-REQ-001 | Revalidar LANDING-001 | Instalar de forma reproducible; lint, tipos, tests, E2E, SDD y build pasan; las limitaciones de producción quedan diferenciadas. | `npm ci`, lint, typecheck, Vitest, Playwright, SDD, build; observación pública | Resultados fechados en `docs/REPORTE_LANDING_002.md` y `docs/pruebas.md` | Codex; administrador revisa | PARCIAL |
| L002-REQ-002 | Resolver alertas de minimatch | Usar una versión corregida mediante cambio mínimo; explicar que solo es árbol de desarrollo; cero vulnerabilidades en `npm audit` y pruebas verdes. | `npm ls minimatch --all`, `npm audit`, suite completa | Lockfile actualizado y resultados de comandos | Codex; responsable técnico aprueba | IMPLEMENTADO LOCALMENTE |
| L002-REQ-003 | Reforzar CI | PR ejecuta instalación, Gitleaks redactado, lint, tipos, unitarias, build, Playwright, verificación SDD y auditoría estricta con permisos mínimos; sin despliegue. | Parseo de YAML local y posterior GitHub Actions | Run URL, commit SHA, resumen/artifact | Codex; administrador GitHub | PARCIAL |
| L002-REQ-004 | Preparar GitHub | Confirmar remoto, branch, HEAD, árbol, PR abiertos y workflow remoto sin asumir el destino; separar entregas LANDING-001 y LANDING-002. | `git status`, `git remote`, `git log`; GitHub API de solo lectura | Nombre de repo, refs, SHA, lista PR y plan de publicación | Codex; administrador GitHub | PARCIAL |
| L002-REQ-005 | Validar Preview Vercel | Preview de rama autorizada muestra home, recursos, rutas legales, recarga, navegación, móvil y consola sin errores críticos; producción intacta. | Playwright local y revisión manual de Preview | URL Preview, SHA, fecha, capturas y consola | Administrador Vercel; Codex revisa | NO VERIFICADO |
| L002-REQ-006 | Validar GA4 | La integración solo carga con ID aprobado y opt-in; eventos no contienen PII ni duplicados; Realtime confirma la prueba. | Tests locales y prueba consentida en Tag Assistant/Realtime | Propiedad, evento de prueba y fecha, sin publicar secretos | Administrador GA4 | PENDIENTE |
| L002-REQ-007 | Validar Google Play | Solo una URL oficial real activa el botón/QR y conduce a la ficha de Rutitas. | Validación del link/QR en Preview | URL oficial y evidencia visual | Equipo Rutitas / responsable Play | PENDIENTE |
| L002-REQ-008 | Aprobar privacidad y eliminación | El equipo confirma datos, finalidades, contacto, proveedores/retención, derechos y proceso real; los textos se aprueban expresamente antes de publicar. | Checklist en `docs/APROBACION_LEGAL_PENDIENTE.md` | Aprobación del responsable y versión final autorizada | Responsable legal / equipo Rutitas | PENDIENTE |
| L002-REQ-009 | Ratificar Constitución SDD | Revisión humana de principios y ratificación explícita; nunca se autoaprueba por automatización. | Revisión del documento y registro de decisión | Aprobación humana versionada | Equipo docente / administrador | PENDIENTE |
| L002-REQ-010 | Actualizar trazabilidad docente | Cada requisito de la entrega registra estado real, código, prueba, evidencia, dependencia y siguiente acción. | `npm run sdd:verify`; revisión de matriz | `docs/matriz-trazabilidad.md` actualizado | Codex; profesor/administrador revisa | PARCIAL |
| L002-REQ-011 | Revisar secretos | Gitleaks analiza historial con salida redactada; `.env`, tokens, claves y datos personales no se suben. | Gitleaks CI; revisión local de archivos permitidos | Resultado del run, sin valores de hallazgos | Codex; administrador GitHub | PARCIAL |
| L002-REQ-012 | Documentar publicación y reversión | Runbook describe autorización, verificación de Preview, despliegue aprobado y rollback usando una versión conocida; no se ejecuta aquí. | Revisión de plan y reporte | Pasos concretos y URL/SHA de release cuando exista | Administrador Vercel | IMPLEMENTADO LOCALMENTE |
| L002-REQ-013 | Confirmar producción | La landing pública y rutas acordadas responden correctamente después de despliegue aprobado, sin errores críticos y con contenido revisado. | Comprobación navegador post-release | URLs, SHA, fecha, capturas y revisión consola | Administrador Vercel; Codex verifica | PARCIAL |
| L002-REQ-014 | Reunir evidencia final | Reporte distingue estado local, CI, Preview, producción y aprobación; no atribuye estados ficticios. | Verificación documental | `docs/REPORTE_LANDING_002.md` con fuentes y bloqueos | Codex; administrador valida | PARCIAL |

## Límites y decisiones

- La landing es un frontend estático; no se agregará un endpoint ni formulario de eliminación.
- GA4 y Google Play se mantienen apagados hasta disponer de valores aprobados.
- La Constitución sigue `PENDIENTE_RATIFICACION`; los borradores legales no son aprobaciones.
- El estado público actual observado (2026-11-05): home disponible; `/privacidad` y `/eliminar-cuenta` devuelven `404 NOT_FOUND`. Esto muestra que el trabajo local de LANDING-001 no está publicado.
- No crear ni actualizar recursos remotos hasta que el administrador autorice el resumen de cambios, destinos y archivos.
- No realizar un despliegue productivo como parte de esta especificación.
