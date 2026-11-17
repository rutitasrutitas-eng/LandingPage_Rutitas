# Reporte LANDING-006 — aviso de privacidad

**Fecha de revisión:** 2026-11-17
**Rama:** `feature/landing-006-aviso-privacidad`
**Base:** LANDING-004 `d96103cb4a3c477c4e3e2cffd2ccec0a8b75b5e6`
**Estado:** diseño integrado y pruebas locales aprobadas; borrador legal sin ratificar. Sin push, PR, merge remoto ni despliegue.

## Implementación y revisión

- Se conserva el componente de privacidad de la entrega recibida en `src/PrivacyRutitas.tsx`/`src/privacy-rutitas.css`; `/privacidad` mantiene índice, skip-link, retorno al inicio y diseño responsive azul/blanco/amarillo.
- La página especifica que el sitio no tiene formulario de registro ni Analytics real verificado. Se aclara que Android revisado usa `DEMO_MODE=true`, sus datos de perfil/viaje/fotos permanecen localmente, los permisos declarados no prueban transmisión, y que Backend solo es código sin despliegue verificado.
- Cotejo solo lectura: Backend `main` SHA `a95e62e2f0f9fbde46af0144c9fb89c858670c94`; Android `feature/integracion-android-ci-cd` SHA `4b2ea8d10f4dbc94830db515a65dd3d00c6a66ad`. El detalle y limitaciones están en `docs/VALIDACIONES_PRIVACIDAD.md`.
- La página `/eliminar-cuenta` conserva su propósito informativo y dice que la baja Android DEMO solo actúa en Room/archivos locales. No se encontró DELETE de cuenta en los siete endpoints Backend revisados. No hay formulario.
- `docs/PENDIENTES_LEGALES_RUTITAS.md` registra responsable, contacto, régimen, finalidades, proveedores, retención, controles, borrado, edad y aprobaciones que faltan. La Constitución sigue pendiente de ratificación.
- La corrección de Analytics mueve el control de preferencias al footer para que no cubra enlaces legales en vistas móviles cortas. Cuando hay diálogo, el footer está bajo el shell `inert`. En pruebas con ID sintético, los flujos generales preparan rechazo explícito; la prueba dedicada usa estado virgen y bloquea cualquier solicitud GTM.

## Evidencia de pruebas

| Comando | Resultado |
|---|---|
| `npm ci` | Exit 0; 243 paquetes; cero vulnerabilidades. Advertencia de esbuild install script informativa, sin aprobación manual. |
| `npm run lint` | Exit 0 |
| `npm run typecheck` | Exit 0 |
| `npm run test` | 16/16 pasaron |
| `npm run test:e2e` sin ID | 16 pasaron y 2 omitidas intencionalmente (Analytics dedicado, una por proyecto). |
| `npm run test:e2e` con `G-SYNTHETIC123` | 18/18 pasaron; flujo completo en Chromium y mobile-chromium. Las peticiones GTM fueron interceptadas por la prueba dedicada. |
| `npm run build` | Exit 0; Vite 6.4.5; JS 252.68 kB (78.36 kB gzip), CSS 20.35 kB (5.24 kB gzip). |
| `npm run sdd:verify` | Exit 0; 30 documentos, 14 requisitos 001, 14 requisitos 002, 8 requisitos 003, 9 requisitos 004. |
| `npm audit --audit-level=high` | Exit 0; 0 vulnerabilidades reportadas. |
| `git diff --check` | Exit 0; avisos de conversión LF/CRLF de Windows sin whitespace erróneo. |

Los tests E2E validan siete viewports, navegación directa/recarga, índice/anclas, foco, retorno al inicio, la página de baja y ausencia de overflow horizontal. Vista 720×450 y tipografía CSS duplicada aproximan zoom; zoom nativo y dispositivo físico no se probaron. No se validó CI, Preview, Vercel, GA4 real, Google Play, operación de API o aprobación legal.

## Pendientes

- Validación y aprobación humana/legal del aviso; completar datos oficiales sin placeholders.
- Confirmar proveedores y configuración operativa; definir procedimiento remoto de eliminación, verificación de identidad y retención.
- Reconfirmar SHAs de Android/Backend antes de basar una política legal en sus datos.
- CI/Preview/producción están fuera de esta revisión local.
