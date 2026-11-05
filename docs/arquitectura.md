# Arquitectura actual y propuesta

## Base

- SPA estática React 19 + TypeScript 5.7 + Vite 6.
- `src/main.tsx` monta `src/App.tsx`; los estilos están en `src/styles.css`.
- No había router. La portada se monta como única vista; el mockup es ilustrativo y el QR depende de URL pública opcional.
- Vercel sirve la producción actual `landing-page-rutitas.vercel.app`; este cambio no modifica la cuenta ni configuración remota.

## Implementación incremental

- Enrutamiento mínimo por `window.location.pathname` para `/`, `/privacidad` y `/eliminar-cuenta`; enlaces HTML normales y fallback SPA de hosting si requiere configuración versionada.
- Componentes actuales de portada conservados; `Footer` compartido con rutas legales.
- Módulo GA4 carga `gtag.js` dinámicamente solo tras consentimiento opt-in persistido localmente y un `VITE_GA_MEASUREMENT_ID` sintácticamente válido. `send_page_view:false` más emisión manual por ruta evita pageview automático duplicado. No se adjuntan datos personales.
- URL oficial de Google Play se configura con `VITE_GOOGLE_PLAY_URL`; si está ausente o inválida, se mantiene «Muy pronto».
- Páginas legales independientes con scroll interno/documental y estado de borrador para validación humana.

## Estado y límites verificados

- La navegación se resuelve desde `window.location.pathname`; `vercel.json` reescribe rutas a `index.html` para permitir recarga directa en el host SPA.
- Unit tests, pruebas de navegador y build local pasan. Esto no acredita una Preview desplegada ni cambios remotos en Vercel.
- La URL de Google Play y el Measurement ID de GA4 siguen vacíos; no hay ficha ni eventos reales verificados.
- Las páginas legales contienen marcadores pendientes; no son textos aprobados ni asesoría legal.

## Datos, límites y terceros

- La landing no contiene backend. No se añade persistencia de datos de cuenta ni endpoint de borrado.
- La decisión de aceptar analítica solo guarda una preferencia local del navegador; no constituye por sí sola una conclusión legal sobre consentimiento.
- Si GA4 se configura, Google será proveedor externo y deberá ser validado por el equipo en su propiedad Realtime/Tag Assistant.
- Responsable, contacto, datos, finalidades, proveedores, almacenamiento, conservación y medidas efectivas no están confirmados aquí.
