# LANDING-015 — consolidación final y preparación para GitHub

- **Fecha:** 2026-11-19
- **Repositorio:** `rutitasrutitas-eng/LandingPage_Rutitas`
- **Rama:** `feature/landing-integracion-final-local`
- **Base de esta consolidación:** `ced61fff15c31001af03621bbd276c7e7e82cdb7`
- **Estado de entrega:** cinco commits locales; listos para revisión humana. Sin push, PR, merge, CI remoto, Preview ni despliegue.
- **Costo adicional autorizado:** $0 MXN; no se consumieron créditos.

## Resultado de indexación

Se incorporaron reglas en `vercel.json` que declaran `X-Robots-Tag: noindex, follow` en `/privacidad`, `/privacidad/`, `/eliminar-cuenta` y `/eliminar-cuenta/`. El rewrite SPA `/(.*) → /index.html` se conserva exactamente y Home no tiene regla `noindex`.

`npm run test:vercel-headers` valida el JSON, los cuatro patrones únicos, el valor exacto, la ausencia de regla para Home y el rewrite. Esta prueba verifica el archivo local; **no confirma una respuesta HTTP de Vercel**, el orden/precedencia de las reglas, propagación del header por el rewrite ni resultados de un crawler. No se ejecutó despliegue ni Preview. Se requiere verificación HTTP posterior con autorización de publicación antes de declarar el caso resuelto en producción.

## Archivos consolidados

### Código y recursos

- Privacidad/eliminación LANDING-013: `src/LegalPages.tsx`, `src/PrivacyRutitas.tsx`.
- Redes/SEO/Analytics de LANDING-014: `src/App.tsx`, `src/SiteFooter.tsx`, `src/styles.css`, `src/seo.ts`, `index.html`, `playwright.config.ts`, `public/assets/social/*.svg`, `public/googlee72a4fcd7bd338a1.html`, `public/robots.txt`, `public/sitemap.xml`.
- Reglas de robots y verificación local: `vercel.json`, `scripts/verify-vercel-robots.mjs`, script `test:vercel-headers` en `package.json`.
- Pruebas: `src/App.test.tsx`, `e2e/landing.spec.ts`, `e2e/analytics-synthetic.spec.ts`.
- No se cambiaron `package-lock.json`, dependencias, backend, Android ni ajustes remotos.

### Documentación y SDD

Se actualizaron `Memoria.md`, `docs/CHECKLIST_RELEASE_FUTURO.md`, `docs/PENDIENTES_LEGALES_RUTITAS.md`, `docs/matriz-trazabilidad.md`, `docs/pruebas.md` y `specs/001-landing-compliance/{spec.md,plan.md,tasks.md,checklist.md}`. Informes de cada actividad y el inventario están en `LANDING_011_SEGURIDAD_Y_RELEASE.md`, `LANDING_012_CONTROL_PUBLICACION.md`, `LANDING_013_ELIMINACION_CUENTAS.md`, `LANDING_014_ANALYTICS_REDES_SEO.md` y `LANDING_011-014_INVENTARIO_REVISION.md`.

Las capturas en `evidence/landing-014/` y el diff histórico `LANDING_013.diff` se conservaron localmente sin agregarlos a commits. No se encontró `.env.local`. La revisión de patrones de secretos no detectó coincidencias; Gitleaks no está instalado y no se declara ejecutado.

## Commits locales

1. `01da191203933d57cc86d7f6ab3f1d6431f27918` — `docs(landing-011): documentar riesgo picomatch y revisión de Vercel`.
2. `e90e5d045e8f3de4cce7aff9f310c7956ecc7387` — `docs(landing-012): registrar Only build production`.
3. `53080ae4804724cf4d4b4b2816f2abcab47a8676` — `feat(landing-013): reflejar eliminación programada pendiente`.
4. `28b78ab872785ef5e4eadd415d418068601a2409` — `feat(landing-014): integrar redes SEO y preparación GSC`.
5. `docs(landing-014): conciliar seguridad indexación e inventario` — documentación final de esta consolidación; SHA completo informado en la entrega.

Los commits históricos anteriores a LANDING-011 se conservaron sin reescritura. LANDING-004/005/006 siguen dentro de la historia de la rama.

## Validaciones ejecutadas localmente

| Validación | Resultado |
|---|---|
| `npm run lint` | Exit 0. |
| `npm run typecheck` | Exit 0. |
| `npm run test -- --reporter=dot` | Exit 0; 2 archivos, 19 pruebas aprobadas. |
| `npm run test:e2e` | Exit 0; 32 casos, 27 aprobados, 5 omitidos intencionalmente, 0 fallidos. Omitidos: Analytics con ID sintético (dos proyectos), aislamiento de Analytics sin variable sintética (dos proyectos), y fotografía hero exclusiva de escritorio en mobile-Chromium. La prueba GA sintética dirigida se ejecutó antes y pasó 1/1 con interceptación local. |
| `npm run build` | Exit 0; Vite 6.4.5, 37 módulos, JS 263.67 kB y CSS 21.48 kB. |
| `npm run sdd:verify` | Exit 0; 30 documentos, 26 requisitos 001 y trazabilidad 14/8/9 en especificaciones 002/003/004. |
| `npm audit --audit-level=high` | Exit 0; 0 vulnerabilidades reportadas en la ejecución del 2026-11-19. |
| `npm run test:vercel-headers` | Exit 0; cuatro rutas legales, directiva exacta, Home excluida y rewrite preservado. |
| `git diff --check` | Exit 0; sin errores de whitespace. Git mostró advertencias de normalización LF/CRLF en documentación. |

Resultados locales únicamente. No hay evidencia CI para estos commits.

## Seguridad y riesgos pendientes

- **Dependencias — revisión humana bloqueante para release:** LANDING-011 registró 11 entradas High de `GHSA-fc5q-39xc-vjpf` sobre `picomatch@4.0.7`; esta revisión reportó 0 con `npm audit --audit-level=high`. No cambiaron manifests ni lockfile, así que el resultado posterior no demuestra que el advisory o el paquete se hayan corregido. No se ocultó el riesgo, no se añadió excepción y no se acepta formalmente. Antes de release repetir `npm audit --json`, `npm ls picomatch --all`, contrastar el advisory vigente y documentar cierre compatible o aceptación explícita.
- **Privacidad:** aviso **BORRADOR NO RATIFICADO**. Identidad legal completa, domicilio, inventario y confirmación de tratamientos/proveedores, retención real y revisión legal final pendientes.
- **Eliminación de cuentas:** no está operativa. Android/Backend dependen de implementación y validación de Mark/Ame. El periodo de siete días solo comenzará tras confirmación del Backend. El correo todavía no habilita solicitudes; coordinación confirmó atención conjunta y recomienda asignar una persona responsable por caso.
- **Analytics y servicios:** Measurement ID real no configurado; no se activó GA4, GTM, Search Console ni publicación del sitemap. La prueba usa ID sintético y request interceptado localmente.
- **SDD:** la Constitución permanece `PENDIENTE_RATIFICACION`; ninguna aprobación legal/académica se presume.
- **Publicación y costo:** no se validó CI ni la respuesta Vercel; primer push requiere autorización humana y revisión de Preview/cuotas. No se realizaron operaciones remotas ni se generaron cargos conocidos.

## Siguiente paso

Revisión humana del diff y de los cinco commits. Antes de publicar, resolver o aceptar formalmente el riesgo de dependencias, completar revisiones legales/operativas y autorizar expresamente cualquier push o verificación HTTP desplegada. Este documento no autoriza publicación.
