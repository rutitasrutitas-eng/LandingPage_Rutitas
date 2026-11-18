# Rutitas — Landing page

Landing estática de Rutitas, construida con React 19, TypeScript 5.7 y Vite 6. Presenta Rutitas como propuesta universitaria de movilidad compartida, dirigida inicialmente a la comunidad UTTT. El piloto está previsto, sujeto a validación y coordinación; no se anuncia como servicio activo.

## Requisitos y ejecución local

- Node.js 24 recomendado (Node 20.19+ o 22.12+ puede funcionar según las versiones resueltas).
- npm.

```bash
npm ci
cp .env.example .env
npm run dev
```

En PowerShell, copia `.env.example` a `.env` con `Copy-Item .env.example .env`. No publiques `.env`.

## Rutas

- `/`: presentación fotográfica existente y modales informativos con preguntas frecuentes accesibles; reservas y viajes reales aún están en desarrollo.
- `/privacidad`: borrador visible pendiente de información confirmada y revisión humana; no es aviso definitivo.
- `/eliminar-cuenta`: explica que el repositorio no confirma un proceso real; no recibe solicitudes ni datos.

Las páginas legales usan navegación HTML y cargan directamente en Vercel mediante el rewrite SPA versionado en `vercel.json`. La configuración está basada en la [guía oficial de Vercel para Vite y deep links](https://vercel.com/docs/frameworks/frontend/vite).

## Variables opcionales

`.env.example` contiene valores vacíos. La landing no requiere variables para cargar.

### Google Play

Configura `VITE_GOOGLE_PLAY_URL` únicamente cuando exista una ficha pública oficial de Rutitas:

```env
VITE_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=PAQUETE_REAL
```

La aplicación valida el dominio y la ruta de Google Play y conserva únicamente el parámetro `id`. `VITE_APP_URL` se acepta temporalmente como alias solo si también es una ficha de Play válida. No pongas ejemplos ficticios. Sin URL válida no se muestra enlace ni QR funcional y permanece «Muy pronto».

### Google Analytics 4

1. El administrador configura `VITE_GA_MEASUREMENT_ID` con el Measurement ID real `G-...` en el entorno local/de despliegue.
2. Sin ID válido no se carga `gtag.js` ni aparece el control de Analytics.
3. Con ID válido se solicita consentimiento opt-in. La elección queda en el almacenamiento local del navegador; se puede cambiar en «Preferencias de analítica».
4. Los pageviews se envían manualmente una vez por ruta completa con `send_page_view: false`; no se incluyen query strings, nombres, correos ni tokens.
5. En GA4, revisa la opción de medición mejorada «Cambios de página según eventos del historial del navegador» para evitar eventos duplicados si en el futuro se cambia a navegación SPA.
6. Solo el administrador con acceso a la propiedad puede verificar eventos reales en Tag Assistant y GA4 Realtime. Este repositorio no contiene una Measurement ID y no acredita eventos reales.

La configuración del ID en Vercel requiere acceso al proyecto y autorización; no se hizo como parte de esta modificación local.

## Scripts

```bash
npm run dev          # servidor de desarrollo
npm run lint         # ESLint
npm run typecheck    # TypeScript
npm run test         # pruebas unitarias/integración con Vitest
npm run test:e2e     # pruebas de navegador con Playwright
npm run sdd:verify   # estructura y trazabilidad documental
npm run build        # compilación de producción
npm run preview      # vista local de dist
npm audit --audit-level=high
```

Para pruebas Playwright, instala Chromium una sola vez con `npx playwright install chromium`.

## SDD y DevSecOps

- Constitución propuesta: `.specify/memory/constitution.md` (**PENDIENTE_RATIFICACION**).
- Especificación, plan, tareas y checklist: `specs/001-landing-compliance/`.
- Corrección de estabilidad y accesibilidad de portada: `specs/004-landing-estabilidad-accesibilidad/` y `docs/REPORTE_LANDING_004.md`.
- Presentación universitaria y FAQ LANDING-005: `docs/REPORTE_LANDING_005.md`.
- Verificación de fuentes Android/Backend y decisiones legales pendientes: `docs/VALIDACIONES_PRIVACIDAD.md` y `docs/PENDIENTES_LEGALES_RUTITAS.md`.
- Reporte integrado de LANDING-004/005/006, accesibilidad y pasos de revisión/publicación: `docs/REPORTE_INTEGRACION_FINAL.md`, `docs/REPORTE_ACCESIBILIDAD_INTEGRACION.md` y `docs/PLAN_REVISION_PUBLICACION.md`.
- Pendientes de release y checklist previo a publicar: `docs/MATRIZ_PENDIENTES_RELEASE.md` y `docs/CHECKLIST_RELEASE_FUTURO.md`.
- Auditoría vigente de la dependencia transitiva `picomatch` y riesgo residual: `docs/REPORTE_SEGURIDAD_DEPENDENCIAS.md`.
- Auditoría, arquitectura, requisitos docentes, pruebas y trazabilidad: `docs/`.
- `Memoria.md` guarda decisiones no confidenciales.
- `.github/workflows/quality.yml` ejecuta calidad y seguridad en Pull Requests; no publica a producción.
- `.github/dependabot.yml` propone actualizaciones controladas de dependencias y Actions.
- El administrador del repo debe exigir el check `Verify landing page` en protección de `main`; esa política no se cambió.
- Vercel puede generar Preview mediante la integración ya existente. No se modificaron ajustes remotos, dominios o variables.

## Revisión pendiente del equipo

Antes de usar o publicar páginas legales como definitivas, completar `docs/requisitos-profesor.md` con el responsable, contacto de privacidad, datos y finalidades reales, proveedores, almacenamiento/medidas verificadas y conservación. Confirmar también el mecanismo de eliminación con backend/soporte, la política de Analytics y la URL de Google Play. Los marcadores de revisión no son texto legal aprobado.

La vista de privacidad actualizada en LANDING-006 usa el diseño recibido, mantiene la etiqueta de borrador y distingue la Landing actual, Android DEMO local y código Backend. Ramas/SHA cotejados y límites: `docs/VALIDACIONES_PRIVACIDAD.md`; decisiones legales pendientes: `docs/PENDIENTES_LEGALES_RUTITAS.md`. El aviso no es definitivo ni está aprobado.

## Alcance de esta entrega

Se hacen cambios incrementales; no se desarrolla ni modifica el backend o app móvil, no se crea una API de eliminación, no se envían solicitudes a Analytics ni se inventan datos legales o URL de tienda. Sin push, PR, despliegue productivo o cambio remoto de Vercel.
