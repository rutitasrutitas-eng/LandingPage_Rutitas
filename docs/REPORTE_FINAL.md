# Reporte final — LANDING-001

**Fecha:** 2026-11-05
**Proyecto:** Rutitas Landing — React 19, TypeScript 5.7, Vite 6.
**Repositorio local:** `C:\Users\rafle\OneDrive\Desktop\anterior\Rutitas_Landing\Rutitas_Landing_React`
**Constitución:** `PENDIENTE_RATIFICACION`.

## 1. Diagnóstico inicial

La landing existente era una SPA de una vista, con identidad visual propia, modales informativos, mockup, QR desactivado y estilos responsive. No tenía páginas legales, un flujo de eliminación de cuenta, GA4, ficha Play configurada, lockfile, pruebas automatizadas ni workflow de CI. No se encontró backend/formulario en este repositorio. La producción existente estaba en Vercel; esta tarea no cambió la cuenta ni el despliegue.

## 2. Resultado y comparación antes/después

| Área | Antes | Después |
|---|---|---|
| Landing | Portada y modales existentes | Se conservan; se agrega navegación legal y ajuste de foco/teclado al modal. Capturas desktop y Pixel 7 revisadas localmente. |
| Privacidad | Sin ruta ni aviso | `/privacidad` con apartados requeridos, marcadores para hechos desconocidos y advertencia visible de borrador. |
| Eliminación | Sin información ni flujo | `/eliminar-cuenta` explica las dependencias pendientes, sin formulario ni endpoint simulado. |
| Analytics | No configurado | Integración opcional GA4 por `VITE_GA_MEASUREMENT_ID`, opt-in, desactivada sin ID válido/consentimiento; no se afirma verificación real. |
| Google Play | Variable vacía; estado “Muy pronto” | URL opcional validada como ficha HTTPS oficial; link y QR funcionales solo si se configura una URL válida. Sigue sin URL. |
| Calidad | Sin lockfile, pruebas ni CI | `package-lock.json`, Vitest, Testing Library, Playwright, ESLint, typecheck, workflow de PR y Dependabot. |
| Documentación | Sin SDD local | Constitución pendiente, especificación, plan, tareas, checklist, auditoría, arquitectura, trazabilidad, pruebas, AGENTS y memoria. |

## 3. Archivos modificados

- `.env.example`, `.gitignore`, `README.md`, `package.json`.
- `src/App.tsx`, `src/styles.css`, `src/vite-env.d.ts`.

## 4. Archivos creados

- `.github/workflows/quality.yml`, `.github/dependabot.yml`.
- `.specify/memory/constitution.md`, `AGENTS.md`, `Memoria.md`.
- `specs/001-landing-compliance/{spec.md,plan.md,tasks.md,checklist.md}`.
- `docs/{auditoria-inicial.md,arquitectura.md,requisitos-profesor.md,matriz-trazabilidad.md,pruebas.md,REPORTE_FINAL.md}`.
- `src/{AnalyticsConsent.tsx,LegalPages.tsx,SiteFooter.tsx,analytics.ts,config.ts,App.test.tsx,setupTests.ts}`.
- `e2e/landing.spec.ts`, `playwright.config.ts`, `vitest.config.ts`, `eslint.config.js`, `scripts/verify-sdd.mjs`, `vercel.json`, `package-lock.json`.

## 5. Pruebas y validación

Ejecución local en Windows con Node.js 24.20.0:

- `npm ci`: aprobado.
- `npm run lint`: aprobado, cero warnings.
- `npm run typecheck`: aprobado.
- `npm run test`: 11/11 aprobadas.
- `npm run test:e2e`: 9 aprobadas; 1 omitida por ser una comprobación de móvil que no aplica al proyecto de escritorio.
- `npm run build`: aprobado con Vite 6.4.5.
- `npm run sdd:verify`: aprobado, 12 documentos y 10 requisitos trazados.
- `package.json`, `vercel.json`, workflow y Dependabot: JSON/YAML parseados correctamente.
- `git diff --check`: aprobado.
- `npm audit --audit-level=high`: termina con código 0 para vulnerabilidades de nivel alto, pero reporta 10 avisos moderados del advisory `GHSA-g3hv-75wg-m249` en `minimatch`. La corrección sugerida por npm requiere `--force` e instala ESLint 9 en vez de 10; no se aplicó.

Capturas de escritorio, Pixel 7 y privacidad móvil se generaron y revisaron en `test-results/`, carpeta temporal ignorada por Git. No sustituyen revisión en dispositivos físicos ni comparación con Preview.

### Controles no ejecutados

- Gitleaks local: no se pudo ejecutar; Docker no está instalado y el intento de usar el binario local fue bloqueado por la política de ejecución. El job de CI incluye el escaneo con imagen fijada por digest, pero falta ejecutarlo en GitHub.
- Workflow de GitHub y regla de protección de `main`: no ejecutados/configurados remotamente.
- Preview de Vercel: no creada ni probada; la regla SPA está versionada en `vercel.json`, pero el comportamiento alojado requiere confirmación en Preview.
- Analytics Realtime/Tag Assistant: no verificables sin propiedad e ID confirmados.
- Google Play: no verificable sin ficha pública oficial.
- Auditoría legal: no realizada; corresponde al equipo responsable.

## 6. Variables y pasos de configuración

`.env.example` deja los valores vacíos. Si el equipo confirma una ficha oficial, configurar `VITE_GOOGLE_PLAY_URL` con esa URL real. Si autoriza GA4, configurar `VITE_GA_MEASUREMENT_ID` con el Measurement ID de la propiedad; la landing solicita consentimiento antes de cargar la etiqueta. Después, el administrador debe validar eventos en Tag Assistant y GA4 Realtime. Los pasos están detallados en `README.md`; no se modificaron variables de Vercel.

## 7. Datos que debe proporcionar el equipo

- Responsable legal, identificación y contacto de privacidad atendido.
- Datos realmente recolectados, finalidades, base legal revisada y uso de ubicación/documentos.
- Proveedores, sistemas, localización de almacenamiento, medidas efectivamente implantadas y plazos de conservación.
- Procedimiento real y seguro para validar titularidad y eliminar cuentas, incluyendo retenciones justificadas.
- Decisión de consentimiento, propiedad GA4 autorizada y URL de Google Play pública.
- Aprobación humana de los textos legales y autorización específica para publicar producción.

## 8. Checklist académico

- **Implementado y probado localmente:** portada preservada, rutas legales, footer, borradores identificados, GA4 opt-in configurable, Play condicional, responsive, teclado, tests, build, SDD y CI definido.
- **Pendiente humano/externo:** ratificar Constitución, completar y aprobar privacidad, definir borrado real, suministrar ID GA4 y ficha Play, revisar alertas moderadas, ejecutar CI en GitHub, exigir su check y probar Preview.
- **Vercel:** no se cambiaron dominios, variables, configuraciones, facturación ni producción.
- **Git:** no se hizo commit ni push. Rama observada: `main`; todos los cambios permanecen locales para revisión.

## 9. Comandos locales

```bash
npm ci
npm run dev
npm run lin
npm run typecheck
npm run tes
npm run test:e2e
npm run sdd:verify
npm run build
npm audit --audit-level=high
```
