# Checklist de aceptación — LANDING-004

## Interfaz y accesibilidad

- [x] Home, footer, menú, modales y estado Próximamente mantienen texto de al menos 12 CSS px.
- [x] Imagen, lema, CTAs, modales, footer y páginas legales conservan contenido.
- [x] Escape cierra el menú móvil y devuelve el foco al botón.
- [x] Portada y Analytics quedan dentro del fondo inerte; foco externo no entra, Tab/Shift+Tab permanecen en diálogo y Escape devuelve foco al control que abrió el diálogo.
- [x] Siete viewports de aceptación y 720×450 de zoom representado pasan sin recorte.
- [x] Con ID GA sintético se verifica que Analytics queda debajo del diálogo, bloqueado mientras está abierto y recupera interacción después de cerrarlo; no se envían eventos.
- [x] El indicador `:focus-visible` por teclado conserva contraste >=3:1 en superficies claras y oscuras.
- [x] El test duplica tamaño computado de texto: Home permite scroll si lo necesita y CTA, diálogo y enlace legal siguen alcanzables sin overflow horizontal.
- [ ] Zoom real del navegador: no ejecutado; se usó viewport reducido y estrés de ampliación tipográfica por automatización.
- [x] `prefers-reduced-motion` sigue suprimiendo animaciones y desplazamiento suave; CSS existente conservado.

## Funciones y calidad

- [x] Rutas Inicio, Privacidad y Eliminación funcionan con navegación y recarga.
- [x] Los diálogos Cómo funciona, Seguridad y El proyecto siguen disponibles.
- [x] Consentimiento de Analytics permanece opt-in; prueba local con ID sintético, sin transmisión.
- [x] npm ci, lint, typecheck, Vitest, Playwright, build, SDD y audit registrados en `docs/pruebas.md`.
- [x] No se hizo push, PR, CI remoto ni despliegue, según la instrucción de cierre de LANDING-004.
- [x] No se ejecutó deploy de Vercel ni se alteraron configuración o producción.

## Entrega

- [x] Matriz y Memoria actualizadas; decisiones legales/de plataforma no se inventan.
- [x] Commit correctivo local creado; SHA final se comunica en la entrega.
- [ ] CI remoto: no ejecutado porque esta revisión prohíbe push y apertura de PR.
