# Checklist de aceptación — LANDING-004

## Interfaz y accesibilidad

- [x] Home, footer, menú, modales y estado Próximamente mantienen texto de al menos 12 CSS px.
- [x] Imagen, lema, CTAs, modales, footer y páginas legales conservan contenido.
- [x] Escape cierra el menú móvil y devuelve el foco al botón.
- [x] El fondo queda inerte mientras un modal está abierto; Tab/Shift+Tab, Escape y retorno del foco pasan.
- [x] Siete viewports de aceptación y 720×450 de zoom representado pasan sin recorte.
- [x] `prefers-reduced-motion` sigue suprimiendo animaciones y desplazamiento suave; CSS existente conservado.

## Funciones y calidad

- [x] Rutas Inicio, Privacidad y Eliminación funcionan con navegación y recarga.
- [x] Los diálogos Cómo funciona, Seguridad y El proyecto siguen disponibles.
- [x] Consentimiento de Analytics permanece opt-in; prueba local con ID sintético, sin transmisión.
- [x] npm ci, lint, typecheck, Vitest, Playwright, build, SDD y audit registrados en `docs/pruebas.md`.
- [ ] PR remoto hacia main: no creado, ya que puede disparar el check automático de Preview de Vercel; CI GitHub pendiente.
- [x] No se ejecutó deploy de Vercel ni se alteraron configuración o producción.

## Entrega

- [x] Matriz y Memoria actualizadas; decisiones legales/de plataforma no se inventan.
- [ ] SHA y estado CI corresponden al commit final.
