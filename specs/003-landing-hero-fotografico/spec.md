# Especificación 003 — Hero fotográfico Rutitas

**Estado:** BORRADOR PARA REVISIÓN
**Constitución local:** `.specify/memory/constitution.md` — `PENDIENTE_RATIFICACION`
**Origen:** solicitud LANDING-003, boceto aprobado y foto limpia aportados por el usuario en el kit de implementación.

## Alcance y límites

Rediseñar incrementalmente la portada de React/Vite con la identidad existente. El boceto es referencia de composición; no se usa como recurso web. La portada contiene únicamente header, hero fotográfico, contenido aprobado y footer; no incluye una sección DEMO, teléfono ilustrativo ni QR. Se conservan el logo original del repositorio, las páginas legales, Analytics con consentimiento, la validación/configuración de Google Play, los modales y la navegación. La portada debe caber completa en un viewport sin scroll. No se publica a producción ni se afirman funciones que no existen.

## Requisitos

| ID | Requisito | Criterio de aceptación |
|---|---|---|
| L003-REQ-001 | Identidad oficial | El header usa `public/assets/rutitas-logo.png` original sin editar; conserva favicon, paleta y pie UTTT. |
| L003-REQ-002 | Hero con foto | La portada usa los derivados WebP de `AUTO_ESTUDIANTES_ORIGINAL.jpg`, con JPEG de respaldo; el boceto no se incluye como fondo y la fotografía no agrega un teléfono al tablero. |
| L003-REQ-003 | Texto y acciones | Se muestran el lema y subtítulo aprobados, más botones accesibles que abren los modales existentes Cómo funciona y El proyecto. |
| L003-REQ-004 | Navegación | Header blanco con Cómo funciona, Seguridad, El proyecto y estado Próximamente; navegación compacta utilizable por teclado en móvil. |
| L003-REQ-005 | Portada sin DEMO ni promoción de Play | Home no renderiza la sección de demostración, teléfono, QR ni espacio vacío. La validación de URL oficial en `src/config.ts` se conserva; no se anuncia disponibilidad y el estado visible permanece «Próximamente». |
| L003-REQ-006 | Una sola pantalla responsive | En 1440×900, 1366×768, 768×1024, 390×844, 375×667, 320×568 y 844×390, `document` y `body` miden como máximo viewport +2 px en ambos ejes; `scrollY` queda en 0 tras rueda, toque y scroll programático. Header, lema, intro, subtítulo, dos CTAs, confianza y footer tienen sus rectángulos completos dentro del viewport. El menú móvil se superpone sin aumentar la altura del documento. Se mantienen foco, Escape, movimiento reducido y textos legibles. |
| L003-REQ-007 | Conservación funcional | Footer y rutas /privacidad y /eliminar-cuenta, consentimiento opt-in de GA4, páginas legales y rewrite Vercel siguen intactos. |
| L003-REQ-008 | Evidencia y SDD | Pruebas, CI, matriz, especificación, plan, checklist, reporte y Memoria.md registran los resultados reales por SHA sin declarar Preview o producción no verificadas. |

## Evidencia

- Unitarias: `src/App.test.tsx`; navegador: `e2e/landing.spec.ts`.
- Checks automatizados: `npm run lint`, `npm run typecheck`, `npm run test`, `npm run test:e2e`, `npm run build`, `npm run sdd:verify`, `npm audit --audit-level=high`; CI añade Gitleaks.
- Capturas desktop y móvil limitadas al viewport, y JSON con métricas por resolución, se guardan fuera del repositorio bajo la carpeta de evidencia fechada y se vinculan en `docs/REPORTE_LANDING_003.md`.

## Restricciones

No añadir dependencias sin necesidad, no modificar los PNG oficiales, no añadir teléfono/soporte sobre el tablero, no inventar URL Play ni Measurement ID, no aprobar los borradores legales, no alterar Vercel, no fusionar el PR ni desplegar producción.
