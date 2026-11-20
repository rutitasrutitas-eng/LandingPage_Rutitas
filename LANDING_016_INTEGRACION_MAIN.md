# LANDING-016 — integración local de main y validación de jsdom 31

- **Repositorio:** `rutitasrutitas-eng/LandingPage_Rutitas`
- **Rama:** `feature/landing-integracion-final-local`
- **SHA local inicial:** `28ea5117f23e39c8760d4684115473773d43345c`
- **`origin/main` integrado:** `80ef7b1388aa709dbef692154c66b0c5a9966715`
- **SHA final:** `f1cefb4a28e3a700e234720c799949ce0615d8a3`.
- **Fecha:** 2026-11-19
- **Costo adicional autorizado:** $0 MXN; no se usaron créditos.

## Merge y conservación de historial

Se ejecutaron `git switch feature/landing-integracion-final-local` y `git merge --no-ff --no-commit origin/main`. Git combinó automáticamente y sin conflictos `package.json` y `package-lock.json`; no hubo otros archivos modificados por el merge. El merge quedó staged y sin commit mientras se realizaron las validaciones; se creó el commit de integración local solo después de que todas pasaron.

No se usó rebase. Los cinco commits previos permanecen con sus SHA originales:

1. `01da191203933d57cc86d7f6ab3f1d6431f27918` — LANDING-011.
2. `e90e5d045e8f3de4cce7aff9f310c7956ecc7387` — LANDING-012.
3. `53080ae4804724cf4d4b4b2816f2abcab47a8676` — LANDING-013.
4. `28b78ab872785ef5e4eadd415d418068601a2409` — LANDING-014.
5. `28ea5117f23e39c8760d4684115473773d43345c` — consolidación LANDING-011–015.

Se preservó `test:vercel-headers` junto con el cambio de `jsdom` a `^31.0.1`. `package-lock.json` resuelve `jsdom@31.0.1`. La instalación local lista `react@19.3.1` y `vitest@5.1.0`; no se incorporaron los PR #6, #11 ni #12 y no se actualizaron Vite, TypeScript o React plugin.

## Instalación y validaciones

`npm ci` terminó con exit 0: instaló 233 paquetes y auditó 234, con cero vulnerabilidades reportadas. npm emitió un aviso de que el script de instalación de `esbuild` no estaba cubierto por `allowScripts`; el build posterior fue exitoso. No se usaron flags para omitir o forzar dependencias.

| Control | Resultado real |
|---|---|
| `npm run lint` | Exit 0. |
| `npm run typecheck` | Exit 0. |
| `npm run test` | Exit 0; 2 archivos y 19/19 pruebas aprobadas en el entorno con jsdom 31.0.1. |
| `npm run test:e2e` | Exit 0; 32 casos: 27 aprobados, 5 omitidos intencionalmente, 0 fallidos. Omitidos: prueba GA sintética en ambos proyectos, aislamiento del modal con variable sintética en ambos proyectos y regresión de foto desktop-only en mobile-Chromium. |
| `LANDING_E2E_GA_SYNTHETIC=1 npx playwright test e2e/analytics-synthetic.spec.ts --project=chromium` | Exit 0; 1/1 aprobada. Usa ID sintético y bloquea/intercepta el request localmente; no activa GA4 ni envía datos a Google. |
| `npm run build` | Exit 0; Vite 6.4.5, 37 módulos, JS 263.67 kB y CSS 21.48 kB. |
| `npm run sdd:verify` | Exit 0; 30 documentos, 26 requisitos 001 y trazabilidad 14/8/9 para 002/003/004. |
| `npm run test:vercel-headers` | Exit 0; valida cuatro rutas legales, header `noindex, follow`, Home sin regla y rewrite SPA preservado. Es una prueba de configuración local, no HTTP contra Vercel. |
| `npm audit --audit-level=high` | Exit 0; “found 0 vulnerabilities” en la ejecución posterior a `npm ci`. |
| `git diff --check` y `git diff --cached --check` | Exit 0, sin errores. |

La cobertura comprobó navegación y recarga SPA, modales y teclado, cinco enlaces sociales HTTPS, consentimiento y revocación Analytics con datos sintéticos, ausencia de GTM, títulos/canonical/robots de rutas, `robots.txt`, sitemap, HTML de Search Console y configuración declarativa de `X-Robots-Tag`.

## Seguridad, privacidad y publicación

- **`picomatch`:** el audit de LANDING-016 reportó cero vulnerabilidades. La discrepancia con las 11 entradas High históricas queda explicada por la retirada del advisory `GHSA-fc5q-39xc-vjpf` el 2026-11-18: GitHub dice que no es un problema de seguridad. En LANDING-017 se volvió a ejecutar `npm audit --json` (exit 0, cero) y `npm ls picomatch --all` (exit 0; sigue instalado transitivamente como herramienta). No se modificaron dependencias ni existe aceptación de un riesgo de seguridad que GitHub retiró. La CI deberá confirmar el audit y reportar otros avisos por separado.
- **Privacidad:** el aviso permanece **BORRADOR NO RATIFICADO**. Responsable legal completo, domicilio, tratamientos/proveedores reales y revisión legal final siguen pendientes.
- **Eliminación:** no está operativa. La ventana de siete días depende de confirmación del Backend; Android/Backend requieren implementación y validación de Mark y Ame. El canal web por correo sigue sin habilitarse operativamente.
- **Analytics/GTM/Search Console:** GA4 real y GTM no se activaron. Search Console no se verificó remotamente ni se publicó sitemap.
- **Headers:** `vercel.json` declara `X-Robots-Tag: noindex, follow` para las dos rutas legales con y sin slash final, preserva el rewrite SPA y excluye Home. No se inició Preview ni deployment; por ello no se afirma que Vercel responda con esos headers.
- **CI y GitHub:** la validación fue local. No se hizo push, PR, merge remoto ni despliegue. La rama está preparada para revisión, no para publicación automática.

## Archivos sin seguimiento preservados

Al inicio y al cierre se mantuvieron `evidence/` y `LANDING_013.diff` sin seguimiento y fuera del commit. La instalación y pruebas no los eliminaron. No hay cambios remotos ni cargos conocidos.

## Addendum LANDING-017

El SHA de este informe es `f1cefb4a28e3a700e234720c799949ce0615d8a3`; `origin/main` continúa en `80ef7b1388aa709dbef692154c66b0c5a9966715`. El preflight local fue limpio salvo por `evidence/` y `LANDING_013.diff`, preservados deliberadamente.

La revisión directa del advisory oficial confirmó `Withdrawn` (2026-11-18, no es un problema de seguridad). Audit actual: 0 hallazgos; el paquete permanece en el árbol dev, sin cambios de dependencias.

Vercel no fue verificable para esta publicación: la consulta del proyecto por conector devolvió 403 y Computer Use detuvo Edge porque no pudo determinar su URL con suficiente confianza. No se hizo push/PR ni se generó despliegue. El gate de costo y la configuración actual de Vercel quedan **NO VERIFICADOS** y bloquean publicación bajo la política de $0 MXN. Ver `LANDING_017_PUBLICACION_OFICIAL.md`.
