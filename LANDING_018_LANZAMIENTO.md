# LANDING-018 — lanzamiento informativo condicionado

**Fecha:** 2026-11-19
**Estado actual (2026-11-19): PR #14 ABIERTA EN DRAFT; checks completados. Sin merge ni publicación.**
**Rama:** `feature/landing-integracion-final-local`
**HEAD al iniciar:** `b87f899d77bf467d24364071d7df0bbadedc63bb`
**HEAD remoto tras el primer push:** `c11fcf1e549576b16675a0da54d093d2e335fa25`
**`origin/main`:** `80ef7b1388aa709dbef692154c66b0c5a9966715`
**Proyecto Vercel:** `landing-page-rutitas`, equipo `rutitasrutitas-8977`
**Costo adicional autorizado:** $0 MXN; no se consumieron créditos.

## Resumen de decisión

> **Actualización posterior al estado inicial:** la sección que decía “detenido antes de crear PR” describe el estado histórico del primer informe, no el estado actual. Coordinación autorizó revisar la Preview y abrir un PR Draft. El PR #14 ya existe y permanece en Draft.

La preparación local y sus validaciones concluyeron. El FAQ ahora explica que no existe una versión pública de Android y que una eventual versión interna aprobada sería únicamente para testers autorizados de Google Play. Las reservas, los viajes multiusuario y la eliminación remota siguen descritos como no operativos; el aviso de privacidad sigue como borrador no ratificado.

**La revalidación de cuenta del 2026-11-19 satisface el gate económico para publicar la rama y abrir un PR Draft.** En Billing se observó Hobby activo, sin método de pago ni facturas; AI Gateway muestra saldo `$0.00` y `Auto-reload Off`. El control de `Priority projects` se ve azul/activado, pero su panel indica `No Priority projects`; la configuración del proyecto ofrece `Upgrade to Priority` y señala que requiere Pro. La documentación oficial de Vercel confirma que Hobby debe actualizar a Pro para usar Priority Projects, y que el cargo de `$200 USD/mes` aplica por cada proyecto elevado en Pro/Enterprise. No hay proyecto Priority ni obligación de pago actual visible. No se modificó el control.

El repositorio del proyecto sigue conectado y la rama productiva es `main`. `Ignored Build Step` muestra `Only build production`. El deployment productivo consultado está listo y proviene de `main` en `80ef7b1388aa709dbef692154c66b0c5a9966715`. Tras el push, Vercel registró una Preview asociada al SHA remoto `c11fcf1e549576b16675a0da54d093d2e335fa25`, pero su estado exacto es `Canceled` / `Build Canceled`: el mensaje indica que Ignored Build Step omitió ese build; duración `—`. GitHub la presenta como `Skipped Deployment` / `Ignored`. No se ejecutó una compilación de Preview ni se modificó o canceló manualmente el recurso. La aparición del registro concuerda con el control observado. Merge y producción siguen bloqueados por aprobación legal.

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
| Uso (últimos 30 días, consulta final) | `Fast Data Transfer` 39.56 MB / 100 GB; `Fast Origin Transfer` 0 B / 10 GB; `CDN Requests` 694 / 1,000,000; `Function Invocations` 0; `Build Minutes` 0 s; `Build CPU Minutes` 58 m (agregado, sin atribución a esta Preview); `AI Gateway Traces` 0; Web Analytics y Speed Insights Events 0. La Preview de este SHA muestra duración `—`, por lo que el build no se ejecutó. |
| Priority projects | El interruptor se ve azul/activado y muestra `$200/mo per project`; al abrir `Manage projects`, el panel dice `No Priority projects`. No se cambió el control. |
| Add-ons | Los controles pagados visibles de Speed Insights Plus, Web Analytics Plus, Password Protection y Preview Deployment Suffix se veían apagados. No se habilitó ni configuró ningún add-on. |
| Proyecto | Repositorio conectado: `rutitasrutitas-eng/LandingPage_Rutitas`; `Only build production`; deployment productivo listo, rama `main`, SHA `80ef7b1388aa709dbef692154c66b0c5a9966715`. |
| Deployments | La inspección de Settings/Billing/Usage no inició deployment. Overview mostró el deployment existente de `main` como Ready, actualizado 7 h antes; no se creó nada en esta tarea. |

La documentación vigente de [Priority Projects](https://vercel.com/docs/vercel-firewall/priority-projects) especifica que en Hobby hay que actualizar el equipo a Pro para poder elevar un proyecto; cada proyecto Priority cuesta `$200 USD/mes` en Pro/Enterprise y el flujo de upgrade presenta cargos que deben confirmarse. La [página oficial de precios](https://vercel.com/pricing) describe Hobby como `$0/mes` y limitado a sus cuotas. Esto concuerda con la cuenta: no hay proyecto Priority, la pantalla del proyecto ofrece `Upgrade to Priority` y señala que requiere Pro, no hay método de pago ni facturas. Por lo tanto, el valor azul del control de equipo no evidencia por sí solo una suscripción facturable activa.

**GATE ECONÓMICO SATISFECHO PARA PR DRAFT.** La consulta final confirma Hobby y consumo mostrado dentro de las cuotas incluidas; no se observó cargo nuevo, factura nueva ni consumo de AI Gateway. Esto no significa consumo total cero: Usage muestra actividad incluida, entre ella 39.56 MB de transferencia, 694 solicitudes CDN y 58 minutos CPU de build agregados. La Preview de este SHA se omitió y no ejecutó build. Se conserva la evidencia previa de ausencia de método de pago/facturas, saldo AI Gateway `$0.00` con recarga automática apagada y ningún proyecto Priority asignado. No se afirma que todos los apartados de Billing se hayan vuelto a abrir en esta consulta. No se consumieron créditos promocionales. El gate no garantiza cambios futuros de plan/configuración o política.

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

Al corte inicial del informe, no se habían ejecutado `npm ci`, GitHub Actions, pruebas contra el dominio productivo, push, PR, merge, Preview ni deployment. Posteriormente se publicó el SHA indicado arriba, se abrió PR #14 y se verificaron CI y el deployment omitido; no se modificó Vercel.

## Estado de Git y archivos al corte inicial (histórico)

En el corte inicial, la rama estaba en `b87f899d77bf467d24364071d7df0bbadedc63bb`. Los archivos enumerados a continuación se incluyeron posteriormente en el push remoto `c11fcf1e549576b16675a0da54d093d2e335fa25`; no describen archivos pendientes actuales:

- Código/copy: `src/App.tsx`.
- Pruebas: `src/App.test.tsx`, `e2e/landing.spec.ts`.
- SDD/trazabilidad: `specs/001-landing-compliance/spec.md`, `plan.md`, `tasks.md`; `docs/matriz-trazabilidad.md`.
- Memoria, checklist, resultados y reporte: `Memoria.md`, `docs/CHECKLIST_RELEASE_FUTURO.md`, `docs/pruebas.md`, este archivo.

`LANDING_013.diff` se conservó intacto y fuera del trabajo. La suite E2E generó/actualizó las seis capturas habituales bajo `evidence/landing-014/`; permanecen sin seguimiento. No hubo cambios a Android, Backend, dependencias, `vercel.json` o configuración de servicios externos.

## Estado local previo a LANDING-019 (histórico)

En la revisión del cierre de LANDING-018, la rama estaba en `feature/landing-integracion-final-local`; HEAD local `e3eab7e26f8ad9148a2b9d134939432340ecad7e` (documentación local no publicada); SHA remoto `c11fcf1e549576b16675a0da54d093d2e335fa25`; `origin/main` de referencia `80ef7b1388aa709dbef692154c66b0c5a9966715`. En ese momento solo este reporte estaba modificado; `LANDING_013.diff` y `evidence/` seguían sin seguimiento y preservados.

## Estado remoto actual — actualización 2026-11-19

| Elemento | Estado actual verificado |
|---|---|
| SHA remoto de rama | `c11fcf1e549576b16675a0da54d093d2e335fa25`; no se hizo push adicional. |
| PR / URL | [PR #14](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/pull/14), título `feat(landing): integrar LANDING-011 a LANDING-018 para revisión`; abierto en **Draft**, base `main` (`80ef7b1388aa709dbef692154c66b0c5a9966715`), head `c11fcf1e549576b16675a0da54d093d2e335fa25`; sin auto-merge. |
| Preview Vercel | Deployment `B3jnNTjUprZoXpr3z9my7KMmeQ8r`: `Canceled` / `Build Canceled`, motivo Ignored Build Step; Environment Preview; duración `—`. GitHub indica `Skipped Deployment` / `Ignored`. No build completado ni Preview Ready. |
| GitHub Actions | Run [44655601902](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/44655601902), `Quality and security checks`, completado con éxito. Gitleaks, instalación desde lockfile, SDD, lint, typecheck, build, pruebas unitarias/integración, instalación de Chromium, pruebas de navegador y auditoría de dependencias pasaron. El resumen consultado no expone el conteo de pruebas; no se inventa. |
| Checks adicionales | `Vercel Preview Comments` pasó (0 comentarios sin resolver); el check Vercel figura `success`, `Canceled by Ignored Build Step`, no como deployment desplegado. |
| Merge / Production | No realizado. Ningún despliegue manual. |
| Search Console / Analytics real | Sin verificación ni activación. |

La descripción remota del PR todavía conserva el texto redactado antes de que terminara CI y contiene métricas Vercel de una consulta anterior. Se intentó actualizar solo la descripción para alinearla; la integración GitHub respondió `403 Resource not accessible by integration`. No se cambió el PR por otra vía. El estado actual y los resultados aquí documentados son la referencia verificada; queda pendiente que un usuario con permisos actualice la descripción del PR si lo considera necesario.

## Historial del estado inicial (19-Nov-2026; superado)

| Elemento | Estado |
|---|---|
| SHA remoto de rama | Push no forzado completado: `c11fcf1e549576b16675a0da54d093d2e335fa25`; coincide con HEAD local. |
| PR / URL | En el informe inicial todavía no existía PR; posteriormente se abrió el PR #14 Draft con autorización de coordinación. |
| GitHub Actions / CI | Al momento del informe inicial no había run por `push` (el workflow no tiene trigger `push`). Tras abrir PR #14, la validación normal de `pull_request` se ejecutó y completó con éxito. |
| Merge a `main` | No realizado. |
| Vercel deployment / URL | La tarjeta histórica listó una Preview. Inspección posterior confirmó que el deployment asociado al SHA fue omitido/cancelado por Ignored Build Step, sin build ni Preview Ready. No se inició deployment manual ni Production. |
| Search Console / Analytics real | Sin verificación ni activación. |

En la revisión posterior se consultó Usage: sus valores y el estado de la Preview se documentan arriba. El uso agregado de Build CPU Minutes no se atribuye a este deployment; para esta Preview la duración es `—` y el build se omitió. No se observó cargo asociado ni se consumieron créditos de IA ni se cambió una configuración de facturación.

## Bloqueos y acción necesaria (estado actual)

1. El PR #14 permanece en Draft para revisión humana; no marcarlo Ready ni fusionarlo sin autorización posterior.
2. **Aprobación legal pendiente:** validar identidad/datos del responsable del sitio, aviso de privacidad y datos de contacto. El aviso permanece borrador no ratificado.
3. Confirmar que `/eliminar-cuenta` no comunique que existe eliminación remota operativa ni que enviar un correo inicie el plazo de siete días.
4. Confirmar que la Landing no prometa reservas reales, Android disponible públicamente o funciones no implementadas.
5. Mantener sin activar GA4/GTM/Search Console; el riesgo residual de dependencias sigue sujeto a la revisión humana registrada.
6. No hacer merge ni despliegue manual. Tras las aprobaciones legales y la revisión del PR, cualquier transición a Ready/merge requiere autorización. La publicación productiva esperada sería el build automático de `main` bajo `Only build production`; después deben verificarse el dominio, las rutas legales y los headers por HTTP. No se ejecutó este procedimiento.

**Resultado actual:** **PR EN REVISIÓN (DRAFT), checks de CI aprobados; merge y publicación bloqueados hasta aprobación humana de privacidad/contenido y autorización explícita.** La Preview se omitió según Ignored Build Step, sin build de Preview. No se hizo push adicional, merge, despliegue ni cambio de Vercel.
