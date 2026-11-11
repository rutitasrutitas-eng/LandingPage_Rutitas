# Auditoría inicial de Rutitas Landing

**Fecha:** 2026-11-05
**Alcance:** auditoría estática del repositorio antes de cambios para LANDING-001.
**Estado del repositorio:** rama `main`, sincronizada con `origin/main`, árbol de trabajo limpio al iniciar.
**Commit de partida:** `1b00d15` (`fix: include Vite environment types`).

## Resumen

La landing es una aplicación pequeña de una sola página construida con React, TypeScript y Vite. Conserva una identidad visual propia, una composición responsive, modales informativos y una tarjeta para la URL/QR de la aplicación que permanece en «Muy pronto» cuando no hay configuración. El proyecto no contiene rutas legales, aviso de privacidad, mecanismo de eliminación de cuentas, Google Analytics, pruebas automatizadas, lockfile ni CI.

No se encontraron formularios ni código que recopile datos personales. La auditoría de dependencias y la validación visual automatizada aún no se habían ejecutado en esta fase. El resultado no constituye una revisión legal ni una prueba de seguridad dinámica.

## Requisitos auditados

| # | Requisito | Estado | Evidencia y observación |
|---|---|---|---|
| 1 | Framework y versión | IMPLEMENTADO | `package.json`: React/React DOM `^19.0.0`, TypeScript `~5.7.0`, Vite `^6.0.0`; Vite usa `@vitejs/plugin-react`. |
| 2 | Carpetas y componentes | IMPLEMENTADO | `src/App.tsx`, `src/main.tsx`, `src/styles.css`, `public/assets/`, `vistas-previas/`; aplicación principal, mockup, tarjeta QR, iconos y modal de información. |
| 3 | Sistema de estilos | IMPLEMENTADO | CSS propio, identidad azul/amarillo/verde, media queries para móvil/tablet/escritorio, foco visible y `prefers-reduced-motion`. La pantalla principal limita el scroll; las futuras páginas legales necesitan un contenedor desplazable propio. |
| 4 | Rutas y navegación | PARCIAL | Solo existe la vista raíz y enlaces internos `#inicio`; los modales son locales. No hay router ni rutas `/privacidad` o `/eliminar-cuenta`. |
| 5 | Dependencias | PARCIAL | Dependencias de ejecución limitadas a React y `qrcode.react`; herramientas de desarrollo Vite/TypeScript. Hay rangos semver, pero no `package-lock.json`, por lo que la instalación no es reproducible. `node_modules` no existía al inicio. |
| 6 | Configuración Vercel | PARCIAL | El repo está enlazado a `landing-page-rutitas` y la producción estaba en estado Ready en `https://landing-page-rutitas.vercel.app/`. No hay `vercel.json` en el repositorio; no se hicieron cambios de plataforma en esta auditoría. |
| 7 | Google Analytics | PENDIENTE | No hay etiqueta, variable `VITE_GA_MEASUREMENT_ID`, consentimiento ni medición configurada. No se encontró propiedad/ID confirmado. |
| 8 | Aviso de privacidad | PENDIENTE | No hay documento ni ruta. Responsable, datos realmente tratados, proveedores, conservación y contacto no están confirmados en el repositorio. |
| 9 | Enlace a Google Play | PENDIENTE | No se encontró URL/ID de ficha. `.env.example` define `VITE_APP_URL` vacío; la interfaz muestra estado «Muy pronto» y evita generar QR ficticio. |
| 10 | Pruebas y CI/CD | PENDIENTE | `package.json` solo incluye `dev`, `build`, `preview` y `typecheck`. No hay framework de pruebas, `package-lock.json` ni workflows de GitHub Actions. |
| 11 | Seguridad y privacidad | PARCIAL | No hay formularios, almacenamiento de datos de usuarios ni credenciales configuradas en los archivos inspeccionados. No se ejecutó escaneo de secretos ni auditoría de dependencias en esta fase. `VITE_APP_URL` ya limita el enlace a HTTPS, pero no se verifica que sea una ficha oficial de Google Play. |
| 12 | Accesibilidad y responsive | PARCIAL | Hay textos alternativos, etiquetas de navegación/secciones, diálogo semántico, foco visible, cierre con Escape y reducción de movimiento. No se observó trampa de foco ni retorno al disparador en los diálogos; responsive aún no se verificó en navegador durante esta auditoría. |

## Inventario técnico inicial

| Área | Hallazgo |
|---|---|
| Entrypoint | `src/main.tsx` monta `<App />` dentro de `React.StrictMode`. |
| Vistas | `src/App.tsx` contiene la landing y modales en un componente principal; no hay separación por rutas. |
| Navegación | Botones abren modales; enlace de marca apunta a `#inicio`. No existen enlaces legales ni navegación de páginas. |
| Analítica / terceros | No hay llamadas de analítica ni scripts de analítica en `index.html`; el dominio externo aparece únicamente como ejemplo en documentación/env. |
| Configuración pública | `.env.example` contiene `VITE_APP_URL=` vacío. No hay secretos ni valores de entorno locales auditados. |
| Builds / pruebas | `npm run build` ejecuta `tsc -b && vite build`; `npm run typecheck` ejecuta `tsc --noEmit`. No hay scripts de test/lint. |
| Vistas previas | Se incluyen capturas de escritorio y móvil bajo `vistas-previas/`; no se usaron como criterio de aprobación visual automatizado. |

## Riesgos y decisiones pendientes

1. Los textos legales no pueden quedar completos ni definitivos hasta recibir datos verificados del equipo responsable; la implementación debe usar marcadores explícitos de revisión.
2. No existe contrato de backend ni evidencia de un mecanismo de eliminación de cuentas. La página puede informar el bloqueo, pero no debe aceptar datos ni simular una solicitud.
3. No existe ID de medición GA4 ni señal de consentimiento. La implementación debe quedar desactivada por defecto y enviar eventos solo después de consentimiento explícito.
4. No existe URL pública de Google Play; botón, enlace y QR deben seguir inactivos hasta configurar una URL real y válida.
5. Antes de publicar, las páginas legales, el tratamiento de analítica, y el comportamiento de rutas directas requieren revisión humana y verificación en Preview.

## Límites de la auditoría

- Inspección de código y configuración versionada; no se inspeccionaron cuentas externas, datos de usuarios, backend independiente, consola GA4 ni Google Play Console.
- No se determinó el cumplimiento legal ni la disponibilidad de los servicios de Rutitas.
- La auditoría de vulnerabilidades, las pruebas automatizadas y la verificación real de resoluciones se ejecutarán después de crear el plan.
