# Especificación 003 — Hero fotográfico Rutitas

**Estado:** BORRADOR PARA REVISIÓN
**Constitución local:** `.specify/memory/constitution.md` — `PENDIENTE_RATIFICACION`
**Origen:** solicitud LANDING-003, boceto aprobado y foto limpia aportados por el usuario en el kit de implementación.

## Alcance y límites

Rediseñar incrementalmente la portada de React/Vite con la identidad existente. El boceto es referencia de composición; no se usa como recurso web. Se conservan el logo original del repositorio, las páginas legales, el footer, Analytics con consentimiento, la configuración condicional de Google Play, los modales y el mockup DEMO. No se publica a producción ni se afirman funciones que no existen.

## Requisitos

| ID | Requisito | Criterio de aceptación |
|---|---|---|
| L003-REQ-001 | Identidad oficial | El header usa `public/assets/rutitas-logo.png` original sin editar; conserva favicon, paleta y pie UTTT. |
| L003-REQ-002 | Hero con foto | La portada usa los derivados WebP de `AUTO_ESTUDIANTES_ORIGINAL.jpg`, con JPEG de respaldo; el boceto no se incluye como fondo y la fotografía no agrega un teléfono al tablero. |
| L003-REQ-003 | Texto y acciones | Se muestran el lema y subtítulo aprobados, más botones accesibles que abren los modales existentes Cómo funciona y El proyecto. |
| L003-REQ-004 | Navegación | Header blanco con Cómo funciona, Seguridad, El proyecto y estado Próximamente; navegación compacta utilizable por teclado en móvil. |
| L003-REQ-005 | DEMO y Google Play | Mockup y tarjeta QR permanecen en una sección secundaria, identificados como demostrativos. Sin URL oficial válida no existe link, QR activo ni afirmación de disponibilidad en Google Play. |
| L003-REQ-006 | Responsive y accesibilidad | No hay desborde horizontal en 1440×900, 1366×768, 768×1024, 390×844 ni 320×568; foco, teclado, Escape, movimiento reducido y textos permanecen utilizables. |
| L003-REQ-007 | Conservación funcional | Footer y rutas /privacidad y /eliminar-cuenta, consentimiento opt-in de GA4, páginas legales y rewrite Vercel siguen intactos. |
| L003-REQ-008 | Evidencia y SDD | Pruebas, CI, matriz, especificación, plan, checklist, reporte y Memoria.md registran los resultados reales por SHA sin declarar Preview o producción no verificadas. |

## Evidencia

- Unitarias: `src/App.test.tsx`; navegador: `e2e/landing.spec.ts`.
- Checks automatizados: `npm run lint`, `npm run typecheck`, `npm run test`, `npm run test:e2e`, `npm run build`, `npm run sdd:verify`, `npm audit --audit-level=high`; CI añade Gitleaks.
- Capturas desktop y móvil se guardan fuera del repositorio bajo la carpeta de evidencia fechada y se vinculan en `docs/REPORTE_LANDING_003.md`.

## Restricciones

No añadir dependencias sin necesidad, no modificar los PNG oficiales, no añadir teléfono/soporte sobre el tablero, no inventar URL Play ni Measurement ID, no aprobar los borradores legales, no alterar Vercel, no fusionar el PR ni desplegar producción.
