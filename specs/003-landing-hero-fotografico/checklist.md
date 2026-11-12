# Checklist de aceptación — LANDING-003

## Diseño y producto

- [x] Header blanco con logo PNG original, navegación y estado Próximamente.
- [x] Foto original optimizada como fondo, degradado navy a la izquierda y ningún teléfono agregado al auto.
- [x] Eslogan/subtítulo exactos y ambos CTAs abren sus modales existentes.
- [x] Mockup DEMO y tarjeta QR se conservan en sección secundaria.
- [x] Google Play no aparece como disponible ni ofrece enlace/QR activo sin URL oficial.
- [x] Footer conserva UTTT, privacidad y eliminación de cuenta.
- [x] GA4 opt-in, documentos legales y configuración Vercel se conservan.

## Responsive y calidad

- [x] 1440×900, 1366×768, 768×1024, 390×844 y 320×568 sin overflow ni controles cortados (Playwright).
- [x] Navegación por teclado, Escape, foco modal y rutas legales directas/recarga verificados; consentimiento opt-in cubierto por Vitest existente.
- [x] lint, typecheck, Vitest 14/14, Playwright 10/10, build, SDD 22 documentos y npm audit 0 vulnerabilidades.
- [x] Gitleaks y GitHub Actions aprobados en runs #11–#14; el run #14 validó `19ac7d1e52f9600d80327141299f14d4e5f04c6a`.

## Entrega

- [x] Capturas desktop/móvil guardadas fuera del repo y registradas en el reporte.
- [x] PR Draft #9 hacia main abierto; SHA, checks y estado `Ready` del deployment `HULbwSXtW1xyDmof1wDb38y7uCpZ` informado por Vercel Bot registrados. Inspección de Preview, confirmación del SHA desplegado y rutas siguen pendientes por denegación de acceso al equipo.
- [ ] Sin merge, deploy de producción, cambios Vercel o aprobación legal automática.
