# LANDING-008 — preparación local para revisión GitHub

> **Actualización posterior LANDING-017 (2026-11-19):** las cifras de auditoría y conclusión de este informe son evidencia histórica de la ejecución del 2026-11-17. GitHub retiró `GHSA-fc5q-39xc-vjpf` el 2026-11-18; `npm audit --json` local posterior reportó cero vulnerabilidades. No se presenta el GHSA como activo ni se modificaron dependencias. El audit de CI del PR verificará el estado actual y otros avisos.

**Corte:** 2026-11-17

**Rama:** `feature/landing-integracion-final-local`

**SHA de entrada aceptado:** `8544401a6ab4713aded5e3024ee9fcdc58793472`

**HEAD final de código:** `8544401a6ab4713aded5e3024ee9fcdc58793472` (no se creó un commit nuevo; los documentos LANDING-008 y el diff de entrega están en el árbol de trabajo local).

**Base comparativa propuesta para el PR:** `main` (`0481387180eab973b7c0416b073099638a3f7328`, verificado por `git ls-remote origin refs/heads/main`)
**Estado:** preparación documental local; no publicada.

## Integración e historial

Se comprobó que `main` es ancestro de la rama y que los commits de referencia LANDING-004 (`d96103cb4a3c477c4e3e2cffd2ccec0a8b75b5e6`), LANDING-005 (`6dcb89df1f4d8bb73818b6d678818956d785afc0`) y LANDING-006 (`fc43246bb401a9991114376ca78665cc922a6ebb`) están preservados como ancestros. Se conservan sus merges `e46daf59b1b3222715eca2b467cdb07829e71bc9` y `5ef79c6a17b551dbf6edb7af933a8a313b2276ba`. La comparación de trabajo es `main...feature/landing-integracion-final-local`, nunca contra otra rama.

La integración contiene la portada y sus modales/FAQ, accesibilidad de LANDING-004, presentación LANDING-005, privacidad en borrador y ruta `/eliminar-cuenta` informativa de LANDING-006, consentimiento Analytics opt-in y configuración condicional de Google Play. No se agregaron funciones Android/Backend ni endpoints de negocio.

## Evidencia de pruebas locales

| Control | Resultado exacto | Estado |
|---|---:|---|
| `npm run lint` | exit 0, sin warnings | Aprobado localmente |
| `npm run typecheck` | exit 0 | Aprobado localmente |
| `npm run test` | 17/17, dos archivos | Aprobado localmente |
| `npm run test:e2e` sin ID | 23 pasaron, 3 omitidas intencionalmente; exit 0 | Aprobado localmente con omisiones documentadas |
| E2E con `VITE_GA_MEASUREMENT_ID=G-SYNTHETIC123` | 25 pasaron, 1 omitida (caso de captura desktop-only en mobile Chromium); exit 0 | Aprobado localmente; no se contacta GA real |
| `npm run build` | exit 0; Vite 6.4.5; JS 255.68 kB / 79.25 kB gzip; CSS 20.88 kB / 5.35 kB gzip | Aprobado localmente |
| `npm run sdd:verify` | exit 0; 30 documentos, requisitos 18/14/8/9 para SDD 001–004 | Aprobado localmente |
| `npm audit --audit-level=high` | **exit 1; 11 hallazgos high** asociados a `GHSA-fc5q-39xc-vjpf` | Fallo real visible; no se ignora |
| `git diff --check` | Se ejecutó sobre los cambios preparados localmente, incluidos los documentos nuevos | Exit 0 |

El reporte completo `docs/REPORTE_SEGURIDAD_DEPENDENCIAS.md` queda incluido en la documentación y vinculado desde el borrador del PR. Sus resultados previos se aceptan como evidencia de evaluación: el árbol productivo no contiene hallazgos, no se halló picomatch en el bundle, no se aplicó downgrade major ni excepción global. El fallo del audit completo permanece sin resolver. **La aceptación formal del riesgo residual sigue pendiente antes de cualquier release.**

## Portada y capturas

La suite existente generó capturas nuevas de Home, FAQ y privacidad para escritorio y móvil. La prueba de regresión de LANDING-007 ya comprueba navegación directa y recarga, espera `complete`, `naturalWidth > 0`, `decode()` y visibilidad de la fotografía. La captura desktop decodificada y las capturas de la suite se incluyen en el ZIP; el diseño no se alteró. No se repitió la investigación de causa ya cerrada.

## Estado GitHub y Vercel

El `git ls-remote` de solo lectura verificó `origin/main` en `0481387180eab973b7c0416b073099638a3f7328`. Esto no prueba controles de branch protection ni una ejecución de Actions en la rama. No hay evidencia CI de este SHA porque no se publicó.

`vercel.json` local mantiene únicamente el rewrite SPA existente; no se modificó. No se inspeccionó el proyecto remoto ni se hicieron operaciones Vercel. El checklist en `docs/CHECKLIST_VERCEL_LANDING_008.md` pide al administrador verificar el repo conectado, rama de producción, previews automáticas, protección y posible efecto del primer push. Mientras la integración esté activa, el primer push puede generar Preview antes de abrir un PR; no se debe asumir que abrir un PR es el único disparador.

## Estados y pendientes

- **Implementado:** artefactos de interfaz LANDING-004/005/006 integrados en la rama local; SDD y evidencias de revisión preparados.
- **Probado localmente:** resultados de la tabla y capturas Playwright. No equivale a CI, pruebas contra Android/Backend remoto ni servicio productivo.
- **Validado en CI:** no validado para el SHA de integración; requiere publicación autorizada y workflow remoto.
- **Propuesto:** borrador de PR con base `main`; checklist Vercel para revisión administrativa.
- **Pendiente de aprobación:** aceptación formal del riesgo residual high antes de cualquier release; aprobación de los textos legales y ratificación de la Constitución SDD; confirmación de condiciones Vercel antes del primer push.
- **No ejecutado:** push, PR, merge, CI de este SHA, Preview, despliegue, activación de Analytics real y validación en producción.

## Artefactos

- Borrador PR: `docs/BORRADOR_PR_LANDING_008.md`.
- Checklist Vercel: `docs/CHECKLIST_VERCEL_LANDING_008.md`.
- Seguridad de dependencias: `docs/REPORTE_SEGURIDAD_DEPENDENCIAS.md`.
- Resultados ampliados: `docs/pruebas.md`.
- Paquete externo: `ENTREGA_LANDING_008_REVISION.zip` con diff completo desde `main`, capturas y resultados. No contiene un commit creado por LANDING-008.
