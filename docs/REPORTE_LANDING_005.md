# Reporte LANDING-005 — presentación del proyecto

**Fecha:** 2026-11-17  
**Rama:** `feature/landing-005-presentacion`  
**Base:** `d96103cb4a3c477c4e3e2cffd2ccec0a8b75b5e6` (LANDING-004 confirmado)  
**Estado:** cambios locales probados; integración/publicación externas pendientes.

## Diagnóstico y cambios

- La etiqueta de portada “Piloto universitario · UTTT” podía sonar a piloto ya activo. Se sustituyó por “Propuesta universitaria · UTTT”; el pie ahora dice “Proyecto para la comunidad UTTT”. El modal explica que el piloto está previsto y depende de validación/coordinación, sin atribuir a la Universidad un rol o autorización no confirmados.
- Los tres pasos explican el propósito esperado y dicen que búsqueda de opciones, reservas y viajes reales siguen en desarrollo.
- El modal “El proyecto” explica propósito, público inicial y límites. Incorpora diez preguntas frecuentes con elementos nativos `details/summary`, accesibles con teclado y compatibles con el foco atrapado en el diálogo.
- El modal de seguridad evita asegurar una protección operativa: habla de código de autenticación en integración, borrador de privacidad y verificación/seguridad de viajes previstas.
- Se corrigieron description/Open Graph que prometían un QR/acceso a la app.

## Contraste con código de referencia

El repositorio Backend revisado estaba en `main`, SHA `a95e62e2f0f9fbde46af0144c9fb89c858670c94`. Tiene rutas de autenticación, perfil y catálogo/detalle de rutas; el catálogo requiere autorización JWT. No se encontró contrato de viaje/reserva ni DELETE de cuenta entre los controladores revisados. Esta lectura no acredita despliegue, MongoDB real ni tratamiento de personas usuarias.

Android se inspeccionó en `feature/integracion-android-ci-cd`, SHA `4b2ea8d10f4dbc94830db515a65dd3d00c6a66ad` (no es `main`). Tiene `DEMO_MODE=true`, URL API de ejemplo y `RouteRepository` evita llamar al Backend en DEMO. La baja de Android borra información DEMO local, no datos de servidor. El README Android `main` identifica esa rama como documentación; no se atribuyó a `main` el código app inspeccionado.

## Evidencia local

| Comando | Resultado |
|---|---|
| `npm ci` | Exit 0; 243 paquetes auditados, cero vulnerabilidades reportadas. Warning informativo de permiso de install script de esbuild; no se aprobó manualmente. |
| `npm run lint` | Exit 0 |
| `npm run typecheck` | Exit 0 |
| `npm run test` | 17/17 pasaron |
| `npm run test:e2e` | 16 pasaron; 2 omitidas por falta de ID sintético en esta corrida. |
| `npm run build` | Exit 0; Vite 6.4.5 |
| `npm run sdd:verify` | Exit 0; 27 documentos y requisitos 001–004 trazados. |
| `npm audit --audit-level=high` | Exit 0; cero vulnerabilidades reportadas. |
| `git diff --check` | Exit 0 |

Siete viewports fueron cubiertos por Playwright. `720×450` y el estrés de tipografía duplicada son aproximaciones; no se alteró el zoom nativo ni se probaron dispositivos físicos. CI, Preview, Play, Analytics real, autorización del piloto y aprobación legal permanecen pendientes.

## Archivos modificados

`src/App.tsx`, `src/SiteFooter.tsx`, `src/styles.css`, `src/App.test.tsx`, `e2e/landing.spec.ts`, `index.html`, `specs/001-landing-compliance/{spec,plan,tasks,checklist}.md`, `docs/matriz-trazabilidad.md`, `docs/pruebas.md`, `README.md`, y este reporte.

No se modificaron Android, Backend, configuración remota de Vercel, secretos, Google Play ni producción.
