# Memoria de Rutitas Landing

**Estado de la iniciativa:** cambios locales implementados; revisión de Preview, datos legales y ratificación humana pendientes.
**Última actualización:** 2026-11-05.

## Hechos confirmados en el repo

- Landing React 19 + TypeScript 5.7 + Vite 6, con estilos CSS propios.
- El mockup está rotulado DEMO; el proyecto informa que la app sigue en desarrollo.
- `VITE_APP_URL` estaba vacío; la tarjeta QR ya muestra «Muy pronto» sin enlace.
- En la auditoría inicial no se encontraron rutas legales, formularios, backend, endpoint de borrado, GA4 ni URL de Google Play.
- La producción existente sirve la portada en `landing-page-rutitas.vercel.app`; la comprobación pública de 2026-11-05 mostró `404 NOT_FOUND` en `/privacidad` y `/eliminar-cuenta`.

## Decisiones

- No completar datos legales ni declarar operativo un proceso ausente.
- La página de privacidad será borrador de validación; la de eliminación explicará que el mecanismo/canal está pendiente y no recogerá datos.
- GA4 no se cargará hasta disponer de Measurement ID válido y consentimiento explícito.
- El botón y QR de Play permanecerán desactivados hasta configurar una URL de tienda real.
- Se harán cambios incrementales, tests con lockfile y CI sin pasos de despliegue productivo.

## Resultados

- 2026-11-05: auditoría inicial completada en `docs/auditoria-inicial.md`.
- 2026-11-05: implementación de rutas legales, configuración opcional de Google Play/GA4, consentimiento, pruebas, CI y trazabilidad.
- 2026-11-05: revalidación LANDING-002, Vitest 11/11, Playwright 9 aprobadas/1 omitida, lint, typecheck, build y SDD pasan localmente.
- 2026-11-05: advisory GHSA-g3hv-75wg-m249 corregido con override `minimatch ^11.0.1`; lockfile resuelve 11.0.4; `npm audit` devuelve cero vulnerabilidades. `npm ci` limpio en carpeta temporal fuera de OneDrive pasa; el reintento directo en el repo falló por bloqueos Windows `EBUSY` al borrar `node_modules`.
- Pendiente: PRs separados para LANDING-001/002, ejecución remota de CI/Gitleaks, acceso de equipo Vercel y Preview, aprobación del aviso, proceso real de eliminación, Measurement ID/Realtime, URL Play y ratificación de Constitución.

## Información que no se debe guardar aquí

No registrar secretos, claves, correos privados, tokens, identificadores de usuarios, datos de salud, ubicaciones o datos reales de estudiantes. Las credenciales/valores remotos se configuran fuera del repo por un administrador.
