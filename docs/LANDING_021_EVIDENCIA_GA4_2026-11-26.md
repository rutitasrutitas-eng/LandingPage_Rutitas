# LANDING-021 — evidencia de controles de privacidad GA4

**Fecha de inspección:** 26 de noviembre de 2026
**Cuenta:** Rutitas Universitarias (cuenta oficial)
**Propiedad:** Rutitas (`565238699`)
**Flujo web:** Rutitas Landing Page — `https://landing-page-rutitas.vercel.app/`
**Measurement ID:** `G-MKN6YXXZ8Y`

## Evidencia observada

Se utilizaron las pantallas de administración de Analytics y Tag Manager de la sesión oficial. Los valores se comprobaron tras salir del apartado y volver a abrirlo. No se inspeccionaron cookies, tokens ni credenciales y no se guardaron capturas con datos de sesión en el repositorio.

| Pantalla | Evidencia visual/estado al reabrir |
|---|---|
| Administración → Conservación de datos | Datos de eventos `2 meses`; datos de usuarios `2 meses`; “Borrar cuando haya actividad nueva del usuario” apagado; botón Guardar deshabilitado. |
| Administración → Recogida de datos | Google Signals y datos proporcionados por usuarios muestran la acción “Activar” (deshabilitados); recogida granular ubicación/dispositivo apagada; configuración avanzada indica `0 de 307` regiones permitidas para personalización de anuncios. |
| Flujo web → detalles | Medición mejorada apagada; aviso de que la recogida de datos web no está activada; no se recibieron datos durante las últimas 48 horas / la pantalla principal indicó que aún no se habían recibido datos del sitio. |
| Flujo web → ocultación de datos | Correo activo y 17 claves de parámetros de URL. |
| Tag Manager → espacio de trabajo | Contenedor `GTM-NFJDHQXM`; listado de etiquetas vacío; la interfaz pide conectar el sitio y no muestra etiqueta configurada. |
| Tag Manager → versiones | “Este contenedor no tiene ninguna versión”; no se observó publicación. |
| GA4 → vinculaciones | Cero vinculaciones completadas para Google Ads, AdMob, AdSense, Ad Manager, Display & Video 360 y Floodlight. No se modificó ninguna. |

## Alcance y límites

- Se guardaron únicamente los cambios autorizados: retención de usuario a dos meses, reset con nueva actividad apagado, personalización de anuncios desactivada en las 307 regiones y recogida granular de ubicación/dispositivo apagada.
- Los valores preservados coincidieron con la instrucción: eventos dos meses, Signals/datos de usuario/medición mejorada apagados y correo + 17 claves ocultos.
- La observación de la consola no demuestra que nunca se hayan tratado datos ni que no haya datos históricos fuera de las métricas mostradas.
- `.env.example` mantiene vacía `VITE_GA_MEASUREMENT_ID` y el código local exige ID válido y consentimiento. El entorno de producción de Vercel no se consultó en esta tarea.
- No se enviaron eventos reales a GA4, no se activaron GA4 ni GTM, no se accedió a Search Console o Vercel y no se desplegó.
- Esta evidencia de configuración no constituye aceptación legal, aprobación del aviso ni ratificación de la retención general de Rutitas.

Referencias de trazabilidad: `LANDING_021_CIERRE_PRIVACIDAD.md`, `docs/VALIDACIONES_PRIVACIDAD.md`, `docs/pruebas.md`, `docs/matriz-trazabilidad.md` y `Memoria.md`.

## Publicación documental y CI

- El registro de esta inspección y su actualización documental está en el commit `3efa9e7155da8a65e6f67e11704b5f23c666b409`, rama `feature/landing-021-privacidad-consentimiento`.
- La ejecución de GitHub Actions [45915521507](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/45915521507) terminó **Success** para ese SHA. En el PR #16 se muestran 3/3 comprobaciones exitosas; el PR continúa Draft.
- La evidencia de consola fue observada visualmente y persistida aquí como registro de texto. No se conservaron capturas; no se copiaron datos de sesión ni credenciales.
- El CI valida el cambio documental y workflow del repositorio; no acredita recopilación real, consentimiento legal, configuración de producción en Vercel ni ausencia absoluta de riesgo.
