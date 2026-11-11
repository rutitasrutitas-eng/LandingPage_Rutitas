# Plan — LANDING-002

**Estado:** trabajo local verificado y preparado; entrega global PARCIAL mientras falten aprobaciones, CI remoto, Preview y datos de producto.

## Secuencia

| Fase | Trabajo | Evidencia/puerta de salida |
|---|---|---|
| 1. Auditar | Registrar HEAD/branch/remoto/estado local; volver a correr las pruebas; leer documentos y workflow; revisar GitHub, Preview, rutas públicas y vulnerabilidades. | Estado baseline fechado en `docs/REPORTE_LANDING_002.md`; no sobrescribir LANDING-001. |
| 2. Especificar | Crear spec/plan/tasks/checklist y actualizar verificador/matriz/memoria. | IDs L002 trazados a código, pruebas, evidencia, responsable y estado. |
| 3. Remediar dependencias | Forzar la versión corregida de minimatch solo a través de `overrides`, reproducir instalación y probar cada herramienta afectada. | `npm audit` limpio; pruebas y build pasan. |
| 4. Reforzar CI y secretos | Analizar historial en runner GitHub con Gitleaks redactado; hacer `npm audit` estricto; dejar permiso `contents:read`; ejecutar Playwright en Ubuntu. | Workflow parseado localmente. La ejecución real requiere push autorizado. |
| 5. Preparar GitHub | Separar dos entregas: PR 1 LANDING-001 desde `feature/landing-001-compliance`; PR 2 LANDING-002 desde `feature/landing-002-release`, posterior a merge del PR 1. No mezclar commits. | Antes del push, entregar repo, ramas, lista precisa de archivos y pruebas para aprobación. |
| 6. Validar Preview | Tras PR/push autorizado, confirmar conexión del proyecto correcto, abrir Preview, probar rutas directas/recarga, responsive, consola y recursos. | URL+SHA+capturas. No usar producción como sustituto del Preview. |
| 7. Completar decisiones humanas | Administrador/propietario entrega datos legales, proceso de borrado, GA4 ID, URL Play y ratificación SDD. | Lista de `docs/APROBACION_LEGAL_PENDIENTE.md` cerrada por responsable. |
| 8. Publicar o revertir | Solo tras aprobación de PR, Preview, contenido, administrador y despliegue explícito. Confirmar dominio/versión y observar errores. En falla, revertir al deployment de producción anterior conocido desde Vercel y confirmar rutas. | SHA/URL de producción, capturas y revisión de errores; si falla, URL/SHA de rollback. |

## Estado de GitHub y split propuesto

El remoto es `rutitasrutitas-eng/LandingPage_Rutitas`, rama origen/destino `main`, HEAD base `1b00d15fa89184a187b387d65ca81c5f8bf614b8`; hay cambios locales de LANDING-001 sin commit/push y no hay PRs abiertos. El workflow local no existe aún en el branch remoto.

Se recomienda **dos PRs consecutivos**:

1. **PR 1 — LANDING-001**: los archivos de UI/rutas legales/GA4/Play, SDD 001, pruebas, lockfile y CI base que están en el árbol local previo. Su alcance se revisa con el diff real al preparar rama.
2. **PR 2 — LANDING-002**: `overrides` de `minimatch`, actualización del lock, auditoría estricta en CI y scan Gitleaks revisado, `specs/002-landing-release/`, actualización de SDD/trazabilidad, aprobación legal pendiente y reporte 002. Debe basarse en PR 1 o abrirse hacia `main` tras su merge.

No se creó rama ni commit: el árbol de trabajo contiene ambas fases y el usuario debe aprobar las operaciones remotas. No se mezclará PR 2 con PR 1 por conveniencia.

## Variables externas y rollback

- No copiar secretos al repositorio ni al chat. La persona administradora configura `VITE_GA_MEASUREMENT_ID` y `VITE_GOOGLE_PLAY_URL` en el entorno correcto de Vercel después de validar los valores.
- La integración Vercel no está autorizada para el team scope conectado en esta sesión; la consulta de solo lectura respondió 403. Hace falta autorización del team para inspeccionar proyecto/Preview.
- Rollback: localizar en Vercel el deployment de producción READY inmediatamente anterior, verificar proyecto y dominio, solicitar al administrador aprobación, ejecutar rollback desde panel/CLI Vercel del proyecto correcto y validar home + rutas. No ejecutar pasos de rollback en esta fase.
