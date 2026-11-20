# LANDING-017 — publicación oficial controlada

## Estado: **BLOQUEADA antes del push; se observó un add-on potencialmente facturable activado**

- **Repositorio:** `rutitasrutitas-eng/LandingPage_Rutitas`
- **Rama:** `feature/landing-integracion-final-local`
- **SHA de entrada de LANDING-017:** `f1cefb4a28e3a700e234720c799949ce0615d8a3`
- **HEAD al iniciar la revisión documental:** `16c8716aaeb11e9df578c0178e0918e83b265c6e`; el cierre documental se guardó en un commit local posterior a la observación de bloqueo.
- **SHA candidato a publicación (código integrado):** `f1cefb4a28e3a700e234720c799949ce0615d8a3` (sin cambios de código en esta tarea).
- **Último commit anterior a LANDING-017:** `16c8716aaeb11e9df578c0178e0918e83b265c6e`.
- **`origin/main`:** `80ef7b1388aa709dbef692154c66b0c5a9966715`
- **Dominio esperado:** `https://landing-page-rutitas.vercel.app/`
- **Costo adicional autorizado:** $0 MXN; no se consumieron créditos.

Coordinación autorizó condicionalmente el push controlado de la rama y un PR Draft a `main`. En la comprobación inmediatamente anterior se observó un add-on `Priority projects` activado en Billing y etiquetado con tarifa de `$200/mo per project`. Como no puede confirmarse desde esta lectura si está facturando o es aplicable mientras el plan es Hobby, el gate económico no pasa y no se ejecutan push ni PR. No se modificó ese ajuste. No se hizo push, PR, merge remoto, CI, Preview ni despliegue. El dashboard identifica un deployment productivo actual; su disponibilidad HTTP pública no se probó en este ciclo.

## Preflight Git y contenido

- Antes de las modificaciones documentales, HEAD era `16c8716aaeb11e9df578c0178e0918e83b265c6e`, rama `feature/landing-integracion-final-local`; tracked tree limpio. Permanecían sin seguimiento `evidence/` y `LANDING_013.diff`, que se conservaron.
- `git fetch origin main` confirmó que `origin/main` seguía en `80ef7b1388aa709dbef692154c66b0c5a9966715`.
- Los cinco commits LANDING-011–016 y LANDING-004/005/006 se conservaron. `evidence/` y `LANDING_013.diff` siguen sin seguimiento y se preservaron.
- La inspección de nombres de archivos encontró `.env.example`, no `.env.local`, llaves PEM/PFX ni archivos con nombres de credenciales. Gitleaks no está instalado localmente: no se afirma una revisión exhaustiva de secretos. La acción Gitleaks fijada en GitHub Actions no se ejecutó porque no se abrió PR.
- No se cambiaron dependencias, archivos de código, configuración remota ni archivos de producto.

## Conciliación de seguridad

La página oficial de [GitHub Advisory Database](https://github.com/advisories/GHSA-fc5q-39xc-vjpf) fue consultada directamente. `GHSA-fc5q-39xc-vjpf` aparece **Withdrawn**, retirado el 2026-11-18 con la explicación de que no es un problema de seguridad. Las 11 entradas High de LANDING-011 se conservan como evidencia histórica de cuando el aviso estaba activo; no se presentan como vulnerabilidades vigentes ni se requiere aceptar un riesgo retirado.

| Comprobación | Resultado ejecutado |
|---|---|
| `npm audit --json` | Exit 0; 0 vulnerabilidades (0 info, low, moderate, high y critical); 283 dependencias contabilizadas. |
| `npm ls picomatch --all` | Exit 0; `picomatch@4.0.7` sigue bajo Vite, fdir, tinyglobby y Vitest. No se modificó el lockfile. |
| Dependencias forzadas o masivas | Ninguna. No se usó `npm audit fix --force` ni se cambiaron Vite, TypeScript o React plugin. |

La continuidad del paquete en el árbol de herramientas no contradice la retirada del advisory. El audit de CI del PR deberá confirmar el estado y detectar otros advisories, si aparecieran.

## Verificación de Vercel en Edge — solo lectura

La ventana activa mostró exactamente la URL solicitada bajo `https://vercel.com/rutitasrutitas-8977/landing-page-rutitas/`; el encabezado del equipo indicó `rutitasrutitas-8977`. La navegación permaneció dentro de Vercel y del equipo/proyecto autorizados. No se leyeron cookies, contraseñas, tokens ni datos de pago. No se guardaron capturas dentro del repositorio; las capturas limpias de pantalla completa se mostraron durante la sesión. Una captura preliminar que incluía pestañas ajenas se descartó y no se usa como evidencia.

| Apartado | Resultado observado | Estado |
|---|---|---|
| Plan/facturación | Hobby Plan, Active. En Billing se mostraba “No payment methods added”; Invoices indicó “No Invoices”. No se observó un cargo facturado. | VERIFICADO en la UI; no es garantía contractual de costo futuro cero. |
| Créditos AI Gateway | Saldo actual `$0.00`; Auto-reload `Off`; el periodo de expiración indicado es un año después de una compra. No se consumieron créditos ni se hizo llamada al Gateway. No había un crédito positivo visible. | VERIFICADO para saldo/recarga; disponibilidad o elegibilidad promocional futura no verificada. |
| Uso acumulado | Panel “Last 30 Days”, 20 oct 13:00–19 nov 12:00; datos pueden retrasarse hasta una hora. Fast Data Transfer 39.15 MB / 100 GB; Fast Origin Transfer 0 B / 10 GB; CDN Requests 688; Build CPU Minutes 58 m; Deployment Storage 50.3 MB. AI Gateway Traces, Web Analytics Events, Speed Insights Events y Function Invocations mostraron 0. Billing describió la asignación Hobby como 1M solicitudes CDN y 100 GB de transferencia. | VERIFICADO en el panel; cifras sujetas al retraso indicado. |
| Gasto real en AI Gateway | “No team budget”, sin gasto en el rango seleccionado y sin presupuesto/periodo por usuario configurado. AI Gateway Traces: 0. | VERIFICADO para la vista y rango observados. |
| Presupuestos/alertas | Spend Management requiere Upgrade to Pro para configurar presupuestos, notificaciones, webhooks y pausa automática por umbral. La pantalla de alertas ofreció Upgrade to Pro; Add Monitor estaba deshabilitado. No se observó control de gasto efectivo disponible en Hobby. | VERIFICADO: no se puede tratar una alerta como límite ni afirmar que exista hard cap. |
| Add-ons/servicios de pago | En Billing, los toggles visibles de Speed Insights Plus, Observability Plus, Web Analytics Plus, Password Protection, Preview Deployment Suffix y Flat Rate CDN estaban apagados. `Priority projects` aparecía encendido (azul) con tarifa indicada de `$200/mo per project`. El equipo seguía en Hobby y no tenía método de pago. La UI no aclara si el ajuste activo genera una obligación o queda inerte en Hobby. No se cambió. | **Bloqueo:** add-on facturable marcado activo; efecto económico real NO VERIFICADO. No se satisface “sin add-ons facturables activos conocidos” hasta aclaración administrativa. |
| Git | Project Settings → Git mostró conectado `rutitasrutitas-eng/LandingPage_Rutitas`. En Overview, el deployment productivo actual se identifica como procedente de `main` y la UI indica que para actualizar producción se debe enviar a `main`. | VERIFICADO. |
| Ignored Build Step | Project Settings → Build and Deployment mostró Behavior `Only build production`; comando observado: `if [ "$VERCEL_ENV" == "production" ]; then exit 1; else exit 0; fi`. | VERIFICADO en el valor guardado que muestra la UI. |
| Deployments | Overview identificó el deployment productivo como `Ready`, originado desde `main`, commit `80ef7b1388aa709dbef692154c66b0c5a9966715`, con el dominio principal `landing-page-rutitas.vercel.app`. El dashboard ofreció `Visit`; no se hizo una petición HTTP externa. La lista Active Branches mostró deployments Preview previos de ramas históricas. | Estado Ready y fuente verificados en Dashboard; disponibilidad pública HTTP NO VERIFICADA. Previews históricos ya existen. |
| Protección | Project Settings → Deployment Protection mostró `Standard Protection` y `Require Log In` activado; Password Protection estaba deshabilitada/no disponible en Hobby y no había shareable links activos. La UI explica que visitantes deben iniciar sesión y pertenecer al equipo. El alcance exacto por ambiente Preview/Production no aparece separado en esa vista. | Configuración observada; mapeo exhaustivo por ambiente NO VERIFICADO. |

### Evidencia visual y límites

En Edge, sin la barra de pestañas visible, se capturaron vistas de Build and Deployment (incluido `Only build production`), Deployment Protection, Usage (Last 30 Days), Billing/AI Gateway Credit, Alerts y el deployment productivo. Se omiten de este repositorio porque Computer Use no proporciona una ruta de archivo exportable y no se almacenaron imágenes. Las vistas mostradas durante la sesión no incluyen códigos financieros ni pestañas ajenas. Git y algunos valores fueron comprobados mediante el árbol de accesibilidad, además de la vista de Overview.

## Gate económico y comportamiento esperado

El costo corriente observado es compatible con Hobby sin método de pago ni facturas, y AI Gateway tiene saldo cero con recarga apagada. Sin embargo, **no hay garantía de costo adicional cero de forma permanente**: no está disponible un presupuesto con pausa efectiva ni alertas de gasto en Hobby; el equipo podría cambiar de plan, añadir un método de pago, activar un add-on o crear recursos más adelante. La ausencia actual de tarjeta reduce la posibilidad de cobro automático, pero no sustituye una política de cuenta ni impide una futura modificación por un administrador.

`Only build production` está guardado y se espera que omita builds Preview ordinarios para commits que no sean de producción. Es una verificación de configuración, no una prueba experimental: no se hizo push ni PR. La existencia de Previews antiguos confirma que el cambio no elimina los deployments previos. No se inició ninguna operación de deployment al navegar en modo lectura.

**Decisión:** la autorización humana específica para push y PR Draft fue recibida el 2026-11-19, pero la condición de cuenta sin add-ons potencialmente facturables no se pudo confirmar: `Priority projects` aparece activado y tiene precio mensual visible. Se detuvo la fase remota antes del push. El estado Hobby y la ausencia de tarjeta no bastan para descartar una obligación o consumo facturable. Se requiere que coordinación/administrador confirme el efecto de ese add-on o lo desactive mediante una autorización específica, y luego repetir el gate completo. No se probó el comportamiento de Preview; no se abrió PR.

## Revalidación económica inmediatamente antes de publicar

La pantalla de Billing se volvió a revisar en la sesión Edge autorizada, en la ruta del equipo correcto. Hobby seguía activo; no había métodos de pago; AI Gateway mostraba saldo `$0.00` y Auto-reload `Off`. En el listado de add-ons, `Priority projects` aparecía activado (toggle azul) junto a una tarifa visible de `$200/mo per project`. La pantalla no permitía determinar si la selección produce obligación mientras el equipo permanezca en Hobby. No se hizo clic ni se cambió el ajuste.

**Gate: FALLIDO.** Por la exigencia de costo adicional autorizado $0 MXN, el estado ambiguo de un add-on con tarifa basta para detener el proceso. Se omite el push y la creación del PR Draft. Tras detectar el bloqueo no se continuó a revalidar Settings → Git, Build and Deployment, Deployment Protection ni Deployments; los valores de esos apartados en la tabla anterior pertenecen a la comprobación Edge previa, no a este preflight inmediato. La navegación de lectura no inició un deployment. No hay evidencia de Preview nueva por esta tarea porque no se hizo push.

## Estado de otros gates

- **GitHub Actions:** no ejecutado en este SHA; no hay CI verde que declarar. Los PR #6, #11 y #12 de Dependabot no se incorporaron.
- **Privacidad:** `/privacidad` continúa **BORRADOR NO RATIFICADO**. Faltan responsable legal completo y domicilio, confirmación de tratamientos/proveedores y revisión legal final.
- **Eliminación:** la ruta explica el procedimiento previsto, pero no es operativa. El inicio del periodo de siete días depende de confirmación Backend; Mark/Ame deben implementar y validar Android/Backend. El canal web por correo no está habilitado como trámite.
- **Analytics/GTM:** GA4 real y GTM siguen inactivos; no se usaron identificadores reales ni se enviaron eventos.
- **Search Console:** no se verificó la propiedad ni se publicó el sitemap.
- **Headers legales:** `vercel.json` declara `X-Robots-Tag: noindex, follow` en cuatro patrones. La prueba disponible valida el JSON local; no hubo respuesta HTTP real ni deployment.
- **SDD:** Constitución sigue pendiente de ratificación humana.

## Cambios documentales y validación

Se actualizaron los informes de LANDING-011/016, la reconciliación de dependencias, el checklist, la matriz y la trazabilidad. Este informe registra la causa precisa del bloqueo.

Validaciones ejecutadas para este cambio documental: `npm audit --json` exit 0; `npm ls picomatch --all` exit 0; `npm run sdd:verify` exit 0 (30 documentos, 27 requisitos 001 y 14/8/9 requisitos 002/003/004); `git diff --check` exit 0. Git solo emitió avisos de normalización LF/CRLF en documentos; no reportó whitespace errors. No se repitieron build, Vitest o Playwright porque no se cambió código, manifest ni lockfile. No se ejecutó CI.

## Siguiente paso seguro

Mantener sin push y sin PR hasta que coordinación resuelva el add-on `Priority projects` y se repita el gate. Si el gate queda limpio, ejecutar únicamente el push autorizado; comprobar GitHub/Vercel inmediatamente y crear el PR en Draft solo si no aparece una Preview inesperada. No hacer auto-merge. Fusión y producción siguen sujetas a las aprobaciones legales, SDD y de release pendientes.
