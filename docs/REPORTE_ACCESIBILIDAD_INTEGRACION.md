# Verificación de accesibilidad — integración LANDING-004/005/006

**Alcance:** portada, modales/FAQ, pie de página, preferencia de Analytics y páginas legales.  
**Método:** pruebas Playwright en Chromium escritorio y emulación móvil; revisión visual de capturas.

## Comprobado

- Siete tamaños de aceptación: 1440×900, 1366×768, 768×1024, 390×844, 375×667, 320×568 y 844×390; pruebas de desbordamiento horizontal y estado de la portada.
- Tab/Shift+Tab cicla dentro del diálogo; Escape lo cierra y devuelve el foco al control que lo abrió. Los `<summary>` de FAQ son alcanzables con Tab y se abren con Enter.
- El diálogo deja inerte el sitio de fondo; con ID de Analytics sintético se verifica que controles externos no reciben foco durante el diálogo. Tras cerrar vuelven a estar disponibles.
- La preferencia de Analytics y enlaces legales permanecen alcanzables en el viewport angosto que antes reproducía superposición.
- La prueba de estilo computado verifica indicador de foco visible y contraste mínimo de 3:1 sobre componentes. Las combinaciones comprobadas usan foco amarillo sobre fondos claros y oscuros.
- Texto ampliado al doble mediante CSS y viewport reducido de 720×450; el contenido modal puede desplazarse y los controles no se ocultan artificialmente.
- Rutas legales con encabezados semánticos, enlaces de retorno, índice con anclas y enlace de salto al contenido. Las capturas de escritorio/móvil permiten revisión visual del contenido completo.

## No comprobado

- No se manipuló el zoom nativo del navegador; el viewport pequeño y el texto CSS aumentado son aproximaciones automatizadas, no equivalentes a una prueba real en navegador/OS.
- No se probaron lectores de pantalla, dispositivos físicos ni todos los motores de navegador.
- La inspección visual de las capturas es evidencia complementaria, no una auditoría WCAG independiente.

Capturas transferibles están en el paquete `ENTREGA_FINAL_RUTITAS_LANDING`.
