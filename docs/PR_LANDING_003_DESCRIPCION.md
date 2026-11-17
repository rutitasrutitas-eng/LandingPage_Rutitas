# LANDING-003 — Hero fotográfico de una sola pantalla

> Descripción histórica preparada para el PR #9 antes de su fusión el 2026-11-12. No representa el estado actual del PR; merge commit: `0481387180eab973b7c0416b073099638a3f7328`.

## Implementación

- Encabezado blanco con el logo oficial de Rutitas, navegación y estado «Próximamente».
- Hero responsive con la fotografía original del automóvil, degradado azul marino y el eslogan «La uni se vive en el camino.» con su subtítulo aprobado.
- Portada de una sola pantalla: sin scroll vertical ni horizontal y con lema, subtítulo, ambos botones y footer visibles.
- Se eliminaron por completo la sección DEMO, el teléfono y la tarjeta/espacio QR; no se trasladaron a otra sección.
- Se conservan navegación móvil, botones y modales informativos, páginas legales y footer con UTTT, privacidad y eliminación de cuenta.
- Google Play sigue como «Próximamente» hasta contar con una URL oficial válida.

## Validación

- Playwright verificó siete viewports: 1440×900, 1366×768, 768×1024, 390×844, 375×667, 320×568 y 844×390; la portada no tiene scroll en ninguno.
- Vitest: 14/14 aprobadas. Playwright: 8/8 en Chromium y 8/8 en mobile-chromium.
- Lint, typecheck, build, verificación SDD y `npm audit` aprobados; auditoría de dependencias con cero vulnerabilidades.
- GitHub Actions [run #18](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/43260267266) para `9a5bb2b599df696d5e34a87afcecef0557760c74`: job completo aprobado, incluido Gitleaks.
- Preview de Vercel verificada desde Edge con sesión autorizada: [abrir Preview](https://landing-page-rutitas-qxzwr4u64-rutitasrutitas-8977.vercel.app/). Deployment `dpl_FdcYSUnk7iH7djoQZvGjsaxH9kCk`, `READY`, asociado al SHA exacto. `/`, `/privacidad` y `/eliminar-cuenta` renderizaron contenido de Rutitas. Se comprobó visualmente escritorio y móvil; las páginas legales pueden desplazarse.

## Pendientes y límites

- Revisión y aprobación humana de los textos legales y ratificación de Constitución SDD.
- Implementar y verificar el mecanismo real de eliminación de cuentas.
- Configurar y validar GA4 cuando se proporcione un Measurement ID aprobado.
- Publicar Google Play solo cuando exista URL oficial válida.
- Estado al redactar esta descripción: PR en Draft y sin fusionar. El PR #9 fue fusionado posteriormente el 2026-11-12; no se hizo despliegue manual ni se modificó producción en esta entrega.
