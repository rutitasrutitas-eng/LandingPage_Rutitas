# Rutitas — Landing page oficial (propuesta visual)

Landing **React + TypeScript + Vite**, responsive, **sin scroll de página**, usando el logo proporcionado. Presentación clara del proyecto y QR listo para abrir la aplicación cuando se publique.

## Requisitos

- Node.js 20.19+ o 22.12+
- npm

## Ejecutar

```bash
npm install
cp .env.example .env
npm run dev
```

Abre la URL local mostrada por Vite (habitualmente `http://localhost:5173`).

## Configurar QR real

En `.env`:

```env
VITE_APP_URL=https://URL-OFICIAL-REAL-DE-LA-APP
```

**Reemplaza** el valor de ejemplo por la URL oficial de Google Play o la página oficial de acceso. No pongas una dirección ficticia. Guarda y reinicia el servidor para ver el QR real y el enlace accesible. Por seguridad solo se aceptan URLs `https://`.

Si el enlace no está configurado, la tarjeta muestra **“Muy pronto / El QR estará aquí”** y un símbolo decorativo, no un código QR engañoso.

## Construir para hosting

```bash
npm run build
```

Publica el contenido de `dist/` en tu hosting estático (por ejemplo, GitHub Pages, Netlify, Vercel o Firebase Hosting). Configura la variable `VITE_APP_URL` en el entorno de compilación antes del build. El proyecto no necesita backend.

## Estructura

- `src/App.tsx`: landing de una sola pantalla, ilustración UI y modales informativos.
- `src/styles.css`: diseño responsive escritorio/tablet/móvil, sin scroll en la pantalla principal.
- `public/assets/`: logo original recortado, variante transparente y emblema, derivados del archivo facilitado.
- `preview.html`: **vista previa estática** autónoma. Ábrela sin instalar dependencias para apreciar el diseño; los componentes React viven en `src/`.
- `.env.example`: configuración de la URL oficial.

## Características

- No-scroll de página en dimensiones habituales. Los diálogos pueden desplazarse internamente por accesibilidad si el texto no cabe en pantallas muy pequeñas.
- Modal “Cómo funciona” y “El proyecto”; opciones de “Seguridad” con lenguaje prospectivo (no se presentan funciones como implementadas).
- QR real y clicable solo cuando existe URL verificada y configurada.
- Mockup claramente identificado como DEMO con datos ficticios; no se simula reserva, GPS ni disponibilidad real.
- HTML semántico, foco visible, cierre de diálogos con Escape y compatibilidad con `prefers-reduced-motion`.

## Limitaciones y revisión

- La landing no recoge datos personales ni tiene formularios/analítica/pagos.
- Debe confirmarse licencia/derecho de uso del logo facilitado y cualquier política de marca vigente.
- Falta integrar la URL real de la app y someter la página a pruebas manuales de accesibilidad y dispositivos.
- No se ejecutó build de React en este entorno de entrega: no hubo conexión a npm para instalar dependencias. Se entrega todo el código fuente.
