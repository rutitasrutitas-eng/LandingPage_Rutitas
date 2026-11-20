# LANDING-018 — lanzamiento informativo condicionado

**Fecha:** 2026-11-19
**Estado:** **BLOQUEADA ANTES DEL PR POR PREVIEW AUTOMÁTICA INESPERADA**
**Rama:** `feature/landing-integracion-final-local`
**HEAD al iniciar:** `b87f899d77bf467d24364071d7df0bbadedc63bb`
**HEAD remoto tras el primer push:** `c11fcf1e549576b16675a0da54d093d2e335fa25`
**`origin/main`:** `80ef7b1388aa709dbef692154c66b0c5a9966715`
**Proyecto Vercel:** `landing-page-rutitas`, equipo `rutitasrutitas-8977`
**Costo adicional autorizado:** $0 MXN; no se consumieron créditos.

## Resumen de decisión

La preparación local y sus validaciones concluyeron. El FAQ ahora explica que no existe una versión pública de Android y que una eventual versión interna aprobada sería únicamente para testers autorizados de Google Play. Las reservas, los viajes multiusuario y la eliminación remota siguen descritos como no operativos; el aviso de privacidad sigue como borrador no ratificado.

**La revalidación de cuenta del 2026-11-19 satisface el gate económico para publicar la rama y abrir un PR Draft.** En Billing se observó Hobby activo, sin método de pago ni facturas; AI Gateway muestra saldo `$0.00` y `Auto-reload Off`. El control de `Priority projects` se ve azul/activado, pero su panel indica `No Priority projects`; la configuración del proyecto ofrece `Upgrade to Priority` y señala que requiere Pro. La documentación oficial de Vercel confirma que Hobby debe actualizar a Pro para usar Priority Projects, y que el cargo de `$200 USD/mes` aplica por cada proyecto elevado en Pro/Enterprise. No hay proyecto Priority ni obligación de pago actual visible. No se modificó el control.

El repositorio del proyecto sigue conectado y la rama productiva es `main`. `Ignored Build Step` muestra `Only build production`. El deployment productivo consultado está listo y proviene de `main` en `80ef7b1388aa709dbef692154c66b0c5a9966715`. Tras el push autorizado, Vercel mostró una Preview nueva para `feature/landing-integracion-final-local`; esto contradice el resultado esperado de la configuración. El estado del build no aparece en la tarjeta revisada y no se verificó por separado. Se detuvo el flujo antes de crear PR. No se canceló ni modificó el recurso. Merge y producción siguen bloqueados por aprobación legal.

## Alcance público comprobado localmente

| Tema | Contenido/estado observado |
|---|---|
| Etapa del proyecto | La Landing describe Rutitas como proyecto universitario en desarrollo. |
| Android | No se ofrece versión pública ni ficha pública autorizada. El FAQ precisa que una build interna, si se aprueba, solo será para testers internos autorizados. La distribución real en Play no se comprobó en esta tarea. |
| Reservas y viajes | La Landing dice que no están disponibles; su integración sigue en desarrollo. |
| Eliminación | `/eliminar-cuenta` es informativa; no existe evidencia de eliminación remota operativa ni canal web habilitado. |
| Privacidad | `/privacidad` conserva visiblemente “Borrador para validación interna”; correo de privacidad mostrado sin atribuir condición legal no confirmada. |
| Formularios/telemetría | No se añadió formulario ni captura de datos. No se activó GA4 real ni GTM. |
| SEO y rutas legales | Verificador local confirma cuatro reglas `X-Robots-Tag` y el rewrite SPA; no es una prueba HTTP en Vercel. |

Cambio funcional mínimo: se actualizó únicamente el texto de las dos respuestas FAQ sobre disponibilidad/descarga de Android. Se agregaron aserciones Vitest y Playwright para conservar esas afirmaciones.

## Gate económico Vercel

### Evidencia directa de cuenta (19-Nov-2026)

| Control | Observación en la sesión autenticada |
|---|---|
| Equipo/plan | Equipo `rutitasrutitas-8977`; `Hobby Plan — Active`. |
| Pago e invoices | Billing indica `No payment methods added`; Invoices indica `No Invoices`. El endpoint de cargos del conector no fue accesible (403), así que no se afirma que se haya consultado un ledger separado de invoices. |
| AI Gateway | Balance `$0.00`; `Auto-reload Off`. En Usage, `AI Gateway Traces` figura en 0 durante el periodo mostrado. No se hizo llamada ni se consumieron créditos. |
| Uso (últimos 30 días, 20-Oct a 19-Nov) | `Fast Data Transfer` 39.56 MB / 100 GB; `CDN Requests` 694 / 1,000,000; `Build Time` 29 m / 100 h. La pantalla también registra `Build CPU Minutes` 58 m, sin límite indicado en ese resumen. |
| Priority projects | El interruptor se ve azul/activado y muestra `$200/mo per project`; al abrir `Manage projects`, el panel dice `No Priority projects`. No se cambió el control. |
| Add-ons | Los controles pagados visibles de Speed Insights Plus, Web Analytics Plus, Password Protection y Preview Deployment Suffix se veían apagados. No se habilitó ni configuró ningún add-on. |
| Proyecto | Repositorio conectado: `rutitasrutitas-eng/LandingPage_Rutitas`; `Only build production`; deployment productivo listo, rama `main`, SHA `80ef7b1388aa709dbef692154c66b0c5a9966715`. |
| Deployments | La inspección de Settings/Billing/Usage no inició deployment. Overview mostró el deployment existente de `main` como Ready, actualizado 7 h antes; no se creó nada en esta tarea. |

La documentación vigente de [Priority Projects](https://vercel.com/docs/vercel-firewall/priority-projects) especifica que en Hobby hay que actualizar el equipo a Pro para poder elevar un proyecto; cada proyecto Priority cuesta `$200 USD/mes` en Pro/Enterprise y el flujo de upgrade presenta cargos que deben confirmarse. La [página oficial de precios](https://vercel.com/pricing) describe Hobby como `$0/mes` y limitado a sus cuotas. Esto concuerda con la cuenta: no hay proyecto Priority, la pantalla del proyecto ofrece `Upgrade to Priority` y señala que requiere Pro, no hay método de pago ni facturas. Por lo tanto, el valor azul del control de equipo no evidencia por sí solo una suscripción facturable activa.

**Gate: SATISFECHO PARA PUSH DE RAMA Y PR DRAFT.** El gate se basa en el plan Hobby vigente, cuotas de uso observadas por debajo de sus topes, ausencia de método de pago/facturas, saldo AI Gateway cero con recarga automática apagada, ningún proyecto Priority asignado, repo/producción correctos y `Only build production`. La tarifa Priority solo aplicaría tras cambiar a Pro y elevar explícitamente uno o más proyectos. Mantener el control sin cambios. No es una garantía contra cambios futuros de plan/configuración, abuso de cuotas o cambios de política; no se consumieron créditos promocionales.

## Validaciones locales

| Comando | Resultado real |
|---|---|
| `npm run test -- --reporter=dot` | Exit 0; **19/19 aprobadas**, 2 archivos. |
| `npm run test:e2e` | Exit 0; **27 aprobadas, 5 omitidas de 32**. Omitidas: cuatro casos que requieren ID sintético de Analytics y la prueba de foto hero desktop al correr en mobile-chromium. |
| `npm run lint` | Exit 0. |
| `npm run typecheck` | Exit 0. |
| `npm run build` | Exit 0; Vite 6.4.5, 37 módulos. |
| `npm run test:vercel-headers` | Exit 0; 4 rutas legales, rewrite SPA preservado, Home sin regla noindex. Solo valida configuración local. |
| `npm run sdd:verify` | Exit 0; al ejecutar: 30 documentos, 28 requisitos 001 y 14/8/9 requisitos 002/003/004 con trazabilidad. |
| `npm audit --audit-level=high` | Exit 0; cero vulnerabilidades en esta ejecución. No se cambiaron dependencias. |
| `git diff --check` / `git diff --cached --check` | Exit 0; solo avisos de normalización LF/CRLF. |
| Escaneo de secretos | Gitleaks no está instalado. Búsqueda local limitada de formatos comunes en el diff: sin coincidencias; no equivale a Gitleaks. |

No se ejecutaron `npm ci`, GitHub Actions, pruebas contra el dominio productivo, push, PR, merge, Preview ni deployment. No se modificó Vercel.

## Estado de Git y archivos

La rama continúa en `feature/landing-integracion-final-local`; HEAD es `b87f899d77bf467d24364071d7df0bbadedc63bb`. `origin/main` consultado permanece `80ef7b1388aa709dbef692154c66b0c5a9966715`. Los cambios siguientes quedan locales y sin commit:

- Código/copy: `src/App.tsx`.
- Pruebas: `src/App.test.tsx`, `e2e/landing.spec.ts`.
- SDD/trazabilidad: `specs/001-landing-compliance/spec.md`, `plan.md`, `tasks.md`; `docs/matriz-trazabilidad.md`.
- Memoria, checklist, resultados y reporte: `Memoria.md`, `docs/CHECKLIST_RELEASE_FUTURO.md`, `docs/pruebas.md`, este archivo.

`LANDING_013.diff` se conservó intacto y fuera del trabajo. La suite E2E generó/actualizó las seis capturas habituales bajo `evidence/landing-014/`; permanecen sin seguimiento y no se incluirán en ningún commit/push. No hubo cambios a Android, Backend, dependencias, `vercel.json` o configuración de servicios externos.

## Operaciones remotas y publicación

| Elemento | Estado |
|---|---|
| SHA remoto de rama | Push no forzado completado: `c11fcf1e549576b16675a0da54d093d2e335fa25`; coincide con HEAD local. |
| PR / URL | Ninguno. No se creó porque Vercel inició una Preview inesperada. |
| GitHub Actions / CI | No hay ejecución CI para este SHA. `quality.yml` no tiene trigger `push`; no se abrió PR porque se detuvo ante la Preview inesperada. |
| Merge a `main` | No realizado. |
| Vercel deployment / URL | Edge mostró una nueva Preview para esta rama: `https://landing-page-rutitas-git-feature-lan-644e28-rutitasrutitas-8977.vercel.app/`. Vercel la listó en “Recent Previews”; el estado exacto del build no se confirmó. No se inició deployment manual ni Production. |
| Search Console / Analytics real | Sin verificación ni activación. |

Después de aparecer la Preview no se volvió a consultar Usage/Billing; por tanto, el uso de build/cuotas y cualquier cargo asociado a ese deployment quedan **NO VERIFICADOS**. No se consumieron créditos de IA ni se cambió una configuración de facturación.

## Bloqueos y acción necesaria

1. **Detenido antes del PR:** Vercel mostró una Preview inesperada tras el push. Coordinación debe decidir el tratamiento del Preview; no fue cancelado ni alterado.
2. Antes de cualquier continuación, revisar en Edge el estado exacto del deployment y el impacto económico; el conector Vercel respondió 403 para la lectura de deployments.
3. No crear PR Draft hasta recibir instrucción humana tras revisar la Preview. CI no se inició porque el workflow no corre con push y aún no hay PR.
4. Mantener el aviso de privacidad como borrador no ratificado. Aprobación legal del responsable y del contenido sigue pendiente antes de merge o producción.
5. No hacer merge ni despliegue manual; no activar GA4, GTM, Search Console ni funciones de eliminación.

**Resultado:** **BLOQUEADA ANTES DEL PR.** El push de la rama fue autorizado y completado, pero Vercel creó/listó una Preview inesperada; se requiere decisión humana antes de continuar. Merge y publicación productiva siguen bloqueados por aprobación legal y los demás gates de release.
