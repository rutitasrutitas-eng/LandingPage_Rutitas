# Especificación 004 — Estabilidad y accesibilidad de Landing

**Estado:** BORRADOR PARA REVISIÓN
**Constitución:** `.specify/memory/constitution.md` (`PENDIENTE_RATIFICACION`)
**Origen:** solicitud LANDING-004; mediciones reproducibles de la rama `main` `0481387180eab973b7c0416b073099638a3f7328`.

## Alcance

Corregir defectos de lectura y teclado en la portada y sus diálogos sin cambiar la identidad fotográfica ni retirar funciones existentes. La portada debe conservar una pantalla en las siete resoluciones de aceptación mientras todo el contenido quepa con texto legible. Si la ampliación del texto o la ventana impide que quepa, se permite desplazamiento para mantener contenido y controles accesibles. No se cambia backend, Android, configuración de despliegue ni contenido legal.

## Requisitos

| ID | Requisito | Criterio de aceptación |
|---|---|---|
| L004-REQ-001 | Texto responsive legible | Ningún texto operativo de Home, footer, controles o modal se reduce por CSS a menos de 12 CSS px. La foto, lema, CTA y estado próximo se conservan. |
| L004-REQ-002 | Teclado del menú móvil | El botón anuncia su estado; Escape cierra el menú y devuelve el foco al botón. La navegación por Tab y los modales siguen funcionando. |
| L004-REQ-003 | Diálogo aislado | Al abrir un modal, el fondo queda inerte para interacción y foco; Escape/cierre lo restablece y devuelve el foco al disparador. El foco permanece dentro del diálogo con Tab y Shift+Tab. |
| L004-REQ-004 | Ampliación y ventana estrecha | A 200% de zoom representado con viewports CSS reducidos, no hay recorte horizontal de texto/controles. Si el contenido no cabe verticalmente, se puede desplazar para alcanzarlo. |
| L004-REQ-005 | Comportamiento y rutas preservados | Inicio, tres diálogos, rutas legales directas/recarga y consentimiento opcional conservan su comportamiento; no se agregan flujos ficticios. |
| L004-REQ-006 | Evidencia trazable | Vitest, Playwright, linters, compilación, auditoría y SDD reflejan resultados reales; la matriz y memoria enlazan requisito, código y prueba. |
| L004-REQ-007 | Aislamiento completo con Analytics configurado | El consentimiento y sus controles pertenecen al fondo inerte mientras el diálogo está abierto; el foco no puede escapar, backdrop/dialog quedan sobre los controles y Escape restaura el foco. Tras cerrar, Analytics y Home vuelven a responder. |
| L004-REQ-008 | Indicador de foco perceptible | El indicador visible conserva contraste no menor a 3:1 en superficies claras y oscuras y se verifica en navegador. |
| L004-REQ-009 | Ampliación de texto accesible | Texto aumentado no queda recortado; si deja de caber, Home permite desplazamiento para alcanzar CTAs, diálogo y enlaces legales sin overflow horizontal. |

## Límites

- Las siete resoluciones LANDING-003 siguen como criterio de una sola pantalla; en ellas se verificará que el ajuste legible mantenga contenido completo. La prioridad de accesibilidad definida arriba permite scroll si un escenario de zoom/ventana no cabe.
- Borradores legales, Analytics real, ficha Play y Preview/producción no se ratifican ni configuran con esta especificación.
- No se actualizan versiones mayores de dependencias dentro de esta iniciativa.
