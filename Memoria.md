# Memoria de Rutitas Landing

**Estado de la iniciativa:** en curso; Constitución pendiente de ratificación.
**Última actualización:** 2026-11-05.

## Hechos confirmados en el repo

- Landing React 19 + TypeScript 5.7 + Vite 6, con estilos CSS propios.
- El mockup está rotulado DEMO; el proyecto informa que la app sigue en desarrollo.
- `VITE_APP_URL` estaba vacío; la tarjeta QR ya muestra «Muy pronto» sin enlace.
- No se encontraron rutas legales, formularios, backend, endpoint de borrado, GA4 ni URL de Google Play en el repositorio auditado.
- La producción existente servía en `landing-page-rutitas.vercel.app`; esta iniciativa no autoriza modificarla.

## Decisiones

- No completar datos legales ni declarar operativo un proceso ausente.
- La página de privacidad será borrador de validación; la de eliminación explicará que el mecanismo/canal está pendiente y no recogerá datos.
- GA4 no se cargará hasta disponer de Measurement ID válido y consentimiento explícito.
- El botón y QR de Play permanecerán desactivados hasta configurar una URL de tienda real.
- Se harán cambios incrementales, tests con lockfile y CI sin pasos de despliegue productivo.

## Resultados

- 2026-11-05: auditoría inicial completada en `docs/auditoria-inicial.md`.
- 2026-11-05: implementación de rutas legales, configuración opcional de Google Play/GA4, consentimiento, pruebas, CI y trazabilidad.
- 2026-11-05: Vitest, Playwright, lint, typecheck, build y verificación SDD pasaron localmente. Auditoría npm encontró avisos moderados; no se aplicó `--force`.
- Pendiente: revisión de Preview, aprobación del aviso, definición real del mecanismo de eliminación, Measurement ID/validación Realtime, URL de Google Play, CI remoto y ratificación de Constitución.

## Información que no se debe guardar aquí

No registrar secretos, claves, correos privados, tokens, identificadores de usuarios, datos de salud, ubicaciones o datos reales de estudiantes. Las credenciales/valores remotos se configuran fuera del repo por un administrador.
