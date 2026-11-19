# LANDING-011 a LANDING-015 — inventario consolidado

- **Fecha:** 2026-11-19
- **Rama:** `feature/landing-integracion-final-local`
- **Base:** `ced61fff15c31001af03621bbd276c7e7e82cdb7`
- **Estado:** cinco commits locales LANDING-011–015; no push, PR, merge, Preview ni despliegue.
- **Costo adicional autorizado:** $0 MXN; no se consumieron créditos.

## Estado e historial Git

- Se conservaron los commits anteriores de LANDING-004/005/006 y la base LANDING-010; no se reescribió historia previa.
- Commits locales creados en esta consolidación:
  1. `01da191` — `docs(landing-011): documentar riesgo picomatch y revisión de Vercel`.
  2. `e90e5d0` — `docs(landing-012): registrar Only build production`.
  3. `53080ae` — `feat(landing-013): reflejar eliminación programada pendiente`.
  4. `28b78ab` — `feat(landing-014): integrar redes SEO y preparación GSC`.
  5. `docs(landing-014): conciliar seguridad indexación e inventario` — este commit documental; su SHA completo es el HEAD reportado al entregar.
- El último commit registrado en la base antes de esta consolidación fue `ced61fff15c31001af03621bbd276c7e7e82cdb7`.
- `package.json` añade solamente el script local `test:vercel-headers`; `package-lock.json` y versiones de dependencias no se cambiaron.
- `vercel.json` declara cuatro reglas `X-Robots-Tag: noindex, follow` para rutas legales con/sin slash final y conserva el rewrite `/(.*) → /index.html`. Es configuración en el repositorio, no una modificación del dashboard ni evidencia de respuesta desplegada.

## Inventario por categoría

### Código

- Modificados: `src/App.tsx`, `src/SiteFooter.tsx`, `src/styles.css`, `src/LegalPages.tsx`, `src/PrivacyRutitas.tsx`, `src/App.test.tsx`, `e2e/landing.spec.ts`, `index.html`, `playwright.config.ts`, `package.json`, `vercel.json`.
- Nuevos: `src/seo.ts`, `scripts/verify-vercel-robots.mjs`, `e2e/analytics-synthetic.spec.ts`.
- El modo local DEMO y las páginas públicas de eliminación siguen sin flujo remoto operativo, formulario o endpoint.

### Documentación

- Modificados: `Memoria.md`, `docs/CHECKLIST_RELEASE_FUTURO.md`, `docs/PENDIENTES_LEGALES_RUTITAS.md`, `docs/matriz-trazabilidad.md`, `docs/pruebas.md`, y `specs/001-landing-compliance/{spec.md,plan.md,tasks.md,checklist.md}`.
- Informes nuevos: `LANDING_011_SEGURIDAD_Y_RELEASE.md`, `LANDING_012_CONTROL_PUBLICACION.md`, `LANDING_013_ELIMINACION_CUENTAS.md`, `LANDING_014_ANALYTICS_REDES_SEO.md`, `LANDING_015_CONSOLIDACION_FINAL.md` y este inventario.
- Las capturas locales de escritorio/móvil están en `evidence/landing-014/` y se conservan fuera de commits. `LANDING_013.diff` es un artefacto anterior sin seguimiento, también preservado fuera de commits.

### Pruebas y recursos visuales

- Pruebas unitarias y E2E cubren navegación, eliminación informativa, privacidad, consentimiento sintético, metadatos, SEO, recursos de búsqueda, cinco enlaces sociales HTTPS y configuración declarativa de headers.
- Nuevos SVG locales: `public/assets/social/{facebook,instagram,youtube,x,tiktok}.svg`.
- Recursos nuevos: `public/googlee72a4fcd7bd338a1.html`, `public/robots.txt` y `public/sitemap.xml`.
- Capturas generadas localmente: home, FAQ y borrador de privacidad, escritorio/móvil. No representan Preview pública.

## Revisión de secretos y temporales

- No se encontró `.env.local` en el repositorio; `.env.example` conserva el campo de Measurement ID vacío. No se añadieron valores secretos a pruebas o documentación.
- La búsqueda local de patrones comunes de credenciales no encontró coincidencias. Gitleaks no está instalado, por lo que no se declara ejecutado un escaneo Gitleaks exhaustivo.
- `test-results/`, `dist/` y `node_modules/` están ignorados por Git. `test-results/` conserva rastros de ejecución previos y no se borró.
- `evidence/` y `LANDING_013.diff` se mantienen locales y no forman parte de los cinco commits. No se incorporaron archivos temporales al historial.

## Conciliación del advisory `GHSA-fc5q-39xc-vjpf`

- LANDING-011 (2026-11-18) registró `npm audit --json` exit 1 con 11 entradas High que corresponden al mismo advisory asociado a `picomatch@4.0.7`; el audit omit-dev reportó 0. Eran rutas múltiples, no once advisories raíz.
- La ejecución local de LANDING-014 (2026-11-19) reportó 0 vulnerabilidades con `npm audit --audit-level=high`, sin cambios a `package.json` ni lockfile.
- El resultado nuevo no prueba que el paquete o advisory se haya corregido. Se conservan ambas evidencias; no se añade excepción y no se acepta formalmente el riesgo.
- Antes de release, repetir `npm audit --json` y `npm ls picomatch --all`, cotejar el advisory vigente y registrar cierre compatible o aceptación humana explícita.

## Indexación y Vercel

- `noindex,follow` se actualiza en metadatos SPA. Además, el código local declara el header HTTP `X-Robots-Tag` en cuatro patrones legales. `npm run test:vercel-headers` valida JSON, rutas, valores, ausencia de directiva en Home y rewrite.
- La prueba es estática: no acredita respuestas de Vercel, propagación del header por rewrite ni comportamiento tras publicación. No hubo Preview ni despliegue.
- El ajuste de Ignored Build Step `Only build production` se verificó en Edge durante LANDING-012. No constituye un límite efectivo de gasto ni prueba qué hará un push.
- El primer push sigue sin autorización y con posible efecto de Preview sujeto a configuración efectiva del proyecto. Reconfirmar los controles del equipo antes de publicarlo; no se hizo push.

## Privacidad, Analytics y aprobaciones

- Aviso de privacidad: **BORRADOR NO RATIFICADO**. Identidad legal completa, domicilio, inventario/tratamientos, proveedores reales y revisión legal siguen pendientes.
- La eliminación programada de siete días no es funcional. El plazo comienza solo tras confirmación del Backend; Android/Backend requieren implementación y validación de Mark y Ame. El canal de correo no está habilitado para solicitudes de eliminación; coordinación confirmó atención conjunta y se recomienda asignación interna por solicitud.
- GA4 real, GTM, verificación remota de Search Console y publicación del sitemap no están activados. La prueba sintética intercepta solicitudes localmente.
- La Constitución SDD permanece `PENDIENTE_RATIFICACION`; no se inventa aprobación académica o legal.

## Diff de revisión

Los cambios están separados en cinco commits locales. `../LANDING_011-014_REVIEW.diff` es el diff generado en la etapa anterior y no incorpora esta consolidación; no debe usarse como parche final. El diff correcto de revisión se genera desde la base `ced61fff15c31001af03621bbd276c7e7e82cdb7` hasta el HEAD de entrega. Las capturas y `LANDING_013.diff` permanecen preservados en el equipo y fuera de ese diff de commits.

**Acción posterior:** revisión humana antes de push. No se autoriza en este informe ningún push, PR, merge, Preview, despliegue, activación de Analytics ni consumo de créditos.
