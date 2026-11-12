# Checklist de aceptación — LANDING-003

## Diseño y producto

- [x] Header blanco con logo PNG original, navegación y estado Próximamente.
- [x] Foto original optimizada como fondo, degradado navy a la izquierda y ningún teléfono agregado al auto.
- [x] Eslogan/subtítulo exactos y ambos CTAs abren sus modales existentes.
- [x] No se renderizan sección DEMO, teléfono, QR ni espacio secundario en Home.
- [x] Se conserva el validador oficial de URL Play en `src/config.ts`; Home solo indica «Próximamente» y no promociona Google Play.
- [x] Footer conserva UTTT, privacidad y eliminación de cuenta.
- [x] GA4 opt-in, documentos legales y configuración Vercel se conservan.

## Responsive y calidad

- [x] 1440×900, 1366×768, 768×1024, 390×844, 375×667, 320×568 y 844×390: body/document igualan viewport, scroll vertical/horizontal cero y todo el contenido completo dentro de los límites (Playwright).
- [x] Rueda, scroll programático y gesto táctil dejan `window.scrollY === 0` en Home; navegación móvil superpuesta no aumenta scrollHeight.
- [x] Navegación por teclado, Escape, foco modal y rutas legales directas/recarga verificados; consentimiento opt-in cubierto por Vitest existente.
- [ ] lint, typecheck, Vitest, Playwright, build, SDD y npm audit aprobados para la corrección.
- [ ] Gitleaks y GitHub Actions aprobados para el nuevo SHA.

## Entrega

- [x] Capturas viewport 1440×900 y 390×844, sin `fullPage`, más métricas JSON de siete resoluciones, guardadas fuera del repo.
- [x] PR Draft #9 existente actualizado hacia `main`; no se fusiona.
- [ ] Preview desde sesión ya autorizada; si Dashboard/CLI niega acceso, registrar 403 sin declararla verificada.
- [ ] Sin merge, deploy de producción, cambios Vercel o aprobación legal automática.
