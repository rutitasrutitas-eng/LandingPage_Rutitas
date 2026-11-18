# Auditoría de costo cero — Rutitas / Vercel

**Fecha:** 2026-11-17
**Prioridad declarada:** costo adicional autorizado `0.00 MXN`; no consumir créditos.
**Alcance:** lectura del resumen del proyecto Vercel en Edge y consulta de documentación/precios públicos oficiales. No se ejecutaron solicitudes AI Gateway, instalaciones, despliegues ni cambios de configuración.

## Resumen

En el resumen de Vercel se observó el plan **Hobby**, el proyecto `landing-page-rutitas`, el repositorio `rutitasrutitas-eng/LandingPage_Rutitas`, producción desde `main` y un deployment de producción `Ready`. El panel de observabilidad mostró, en la ventana visible de 6 horas, 2 solicitudes CDN, 0 invocaciones de funciones y 0% de errores. Estas cifras son una lectura puntual, no una factura ni el consumo total mensual.

No se pudo abrir Billing, Usage, AI Gateway, Budgets & Spend, Git/Deployment Settings ni Protection. La interacción del control de computadora falló al intentar navegar desde el resumen, y la captura de pantalla devuelta mostró otra ventana; por ello no se adjunta captura como evidencia fiable. Los importes/cargos de la cuenta, el saldo de créditos, presupuestos activos y reglas de deployment quedan **NO VERIFICADOS**. No se puede afirmar que los cargos actuales sean cero.

La página pública del modelo confirma que `moonshotai/kimi-k3` está disponible. El catálogo muestra tarifas públicas desde **USD $1.50 por millón de tokens de entrada y USD $10 por millón de salida**, con variación según proveedor; por ejemplo, la fila de Moonshot AI muestra $3/M de entrada y $15/M de salida. La documentación indica créditos gratuitos mensuales para ciertos usos, pero el catálogo no marca Kimi K3 como elegible para crédito gratuito. Además, la condición de costo cero prohíbe consumir créditos, por lo que no se realizará la petición.

**Conclusión:** AI Gateway queda **NO EJECUTADO — BLOQUEADO POR POLÍTICA DE COSTO CERO**. No se recomienda hacer el primer push hasta que el administrador confirme la política de Preview en la cuenta/proyecto y descarte efectos automáticos no deseados.

## Elementos verificados

| Estado | Elemento | Evidencia observada |
|---|---|---|
| **VERIFICADO** | Ventana y URL de Vercel | Árbol de accesibilidad de Edge identificó `https://vercel.com/rutitasrutitas-8977/landing-page-rutitas`. No se accedió a cookies, contraseñas, tokens ni archivos del navegador. |
| **VERIFICADO** | Equipo/plan visible | La cabecera del selector de equipo mostró `rutitasrutitas-8977` y la etiqueta `Hobby`. Billing y suscripciones no se abrieron. |
| **VERIFICADO** | Proyecto y GitHub | Proyecto `landing-page-rutitas`; vínculo de repositorio a `rutitasrutitas-eng/LandingPage_Rutitas`. |
| **VERIFICADO** | Rama de producción | El resumen muestra que se actualiza producción al hacer push a `main`. |
| **VERIFICADO** | Deployment de producción visible | Estado `Ready`, fuente `main`, commit `0481387180eab973b7c0416b073099638a3f7328`, creado Nov 12 por `rutitasrutitas-eng`; dominio visible `landing-page-rutitas.vercel.app`. |
| **VERIFICADO** | Métricas de resumen | En la ventana de 6 h: 2 CDN requests, 0 function invocations, 0% error rate. No equivale a consumo total de la cuenta ni al monto facturado. |
| **VERIFICADO** | Existencia histórica de Previews | El resumen listó Previews anteriores de `feature/landing-003-hero-fotografico` asociado a PR #9 y ramas Dependabot; algunos aparecían `Ready` y otros con error. Esto prueba que hubo deployments Preview, no la regla vigente para cada push. |
| **VERIFICADO** | Disponibilidad pública de Kimi K3 | La página oficial de Vercel AI Gateway lista `moonshotai/kimi-k3` y múltiples proveedores. No se hizo petición. |
| **VERIFICADO** | Tarifas publicadas | Precio mínimo mostrado: USD $1.50/M input y $10/M output; la ruta Moonshot AI muestra USD $3/M y $15/M. Son precios públicos variables, no la tarifa confirmada de la ruta de esta cuenta. |
| **VERIFICADO** | Costo provocado por esta auditoría | No se ejecutó petición AI, instalación, deployment ni cambio de settings. No hay evidencia de consumo provocado por estas acciones. Esto no verifica cargos históricos de la cuenta. |

## Elementos no verificados

| Estado | Dato pendiente | Evidencia necesaria |
|---|---|---|
| **NO VERIFICADO** | Facturas, cargos pendientes, método/condición de facturación, suscripciones e integraciones de pago | Captura manual de Team Settings → Billing/Invoices, ocultando números y datos de pago. |
| **NO VERIFICADO** | Consumo acumulado mensual, proyección, uso por proyecto y límites/caps actuales | Captura de Team Usage con periodo visible y filtro del proyecto. El panel de 6 h no basta. |
| **NO VERIFICADO** | Saldo y elegibilidad/fecha de vencimiento de créditos AI Gateway del equipo | Captura de AI Gateway con saldo y detalles del crédito, sin mostrar claves. No se debe pulsar botones de compra/top-up. |
| **NO VERIFICADO** | Activación/estado de AI Gateway, requests y gasto histórico | Capturas de AI Gateway Overview/Logs/Budgets & Spend. No abrir pantallas de generación de keys ni pagos. |
| **NO VERIFICADO** | Presupuestos de equipo, proyecto, API key o usuario; límites de auto top-up y alertas | Captura de Budgets & Spend que muestre scopes, límites y spend. No cambiar valores. |
| **NO VERIFICADO** | Auto top-up en esta cuenta | Captura de la sección de créditos/configuración de top-up; no activar ni editar. La documentación pública dice que está desactivado por defecto, lo que no prueba el estado de esta cuenta. |
| **NO VERIFICADO** | Configuración Git exacta, previews automáticas por push/PR, Ignored Build Step y preset PR-only | Capturas de Project Settings → Git/Deployments, incluida la regla de preview/ignored build step. |
| **NO VERIFICADO** | Deployment Protection, SSO, alcance de personas con acceso y permisos efectivos del usuario | Captura de la página de protección/settings con identidades y secretos ocultos. |
| **NO VERIFICADO** | Funciones, Storage, Web Analytics, Speed Insights, imágenes y otras integraciones facturables realmente habilitadas/consumidas | Capturas de Settings/Integrations y Usage del proyecto. Las tarjetas/recomendaciones del resumen no demuestran activación. |
| **NO VERIFICADO** | Capturas fiables de la sesión Vercel | La captura solicitada al control UI mostró una ventana de ChatGPT, no Edge; no se guardó ni adjuntó imagen para evitar evidencia incorrecta. |

## AI Gateway: precio, crédito y límites

- **Modelo:** disponible en catálogo público. El precio publicado cambia por proveedor y cantidad de tokens. En la vista consultada, el resumen del modelo indicaba desde USD `$1.50/M` entrada y `$10/M` salida; Moonshot AI figuraba a `$3/M` y `$15/M`. Costos en USD; no se convierten a MXN porque el tipo de cambio, impuestos y proveedor facturado de la cuenta no están verificados.
- **Créditos:** la documentación describe un nivel gratuito con `$5 USD/mes` para un subconjunto de modelos; indica que los créditos empiezan al primer request. La página del modelo menciona `$5` cada 30 días para usuarios sin pagos. No es gratuidad permanente ni permite concluir que Kimi K3 sea elegible; la columna de elegibilidad de crédito gratuito no mostraba una marca para este modelo. Saldo y vencimiento exactos de la cuenta: **NO VERIFICADOS**.
- **Costo real:** aun sin markup de plataforma, AI Gateway aplica precios del proveedor; el cargo depende de proveedor, tokens de entrada/salida y posibles fees. Con BYOK hay cargos del proveedor y la documentación advierte que el fallback a claves de Vercel puede generar consumo de créditos. No se inspeccionó cuál autenticación/configuración usa esta cuenta.
- **Presupuesto vs alerta:** la documentación actual describe presupuestos por equipo/proyecto/API key/usuario; al superar el límite, AI Gateway rechaza solicitudes posteriores. También los describe como un *soft cap*: la solicitud que cruza el límite puede completarse y excederlo ligeramente. Las alertas de correo solo notifican umbrales; no bloquean consumo. Un presupuesto no garantiza `$0.00` ni que no se consuman créditos. Estado real y existencia de límites en esta cuenta: **NO VERIFICADOS**.
- **Conclusión para política cero:** no hacer llamadas. Incluso una llamada “gratis” consumiría créditos, podría usar un modelo fuera del free tier y el proveedor exacto/ruta/coste cuenta no están confirmados.

## Riesgos de cargos

| Estado | Riesgo |
|---|---|
| **RIESGO** | AI Gateway tiene tarifas por tokens y modalidad pay-as-you-go/créditos. Auto top-up o balance pagado podrían ocasionar compra/cobro; estado de cuenta no verificado. |
| **RIESGO** | Una petición puede consumir crédito aunque el cargo en efectivo sea `$0`; la política del proyecto también prohíbe ese consumo. |
| **RIESGO** | BYOK podría generar cargo directo del proveedor; en fallos, el fallback documentado puede utilizar claves de Vercel y créditos si está habilitado. Configuración cuenta desconocida. |
| **RIESGO** | El primer push puede activar deployments/Previews. Ya hay Previews históricas, pero no se observó la regla actual ni el saldo/límite asociado. |
| **RIESGO** | Features adicionales (Analytics, Speed Insights Plus, Storage, Functions, imágenes u otras integraciones) pueden tener consumo facturable según plan/configuración. El resumen presentó enlaces/recomendaciones, no evidencia suficiente de habilitación. |
| **BLOQUEADO** | La petición a `moonshotai/kimi-k3` no se ejecutará bajo la política de `$0.00` y cero consumo de créditos. |
| **BLOQUEADO** | No se pueden certificar cargos actuales igual a `$0.00 MXN` sin Billing/Invoices y Usage de la cuenta. |

## Acciones y recomendaciones

### Permitidas sin costo dentro de esta auditoría

- Lectura de páginas oficiales públicas y del resumen Vercel visible.
- Recopilar capturas manuales recortadas/ocultas de datos financieros sensibles y settings de solo lectura.
- Mantener inactivo el ejemplo local y no instalar AI SDK por ahora.
- Mantener la rama local sin push; revisar documentación y diff localmente.

### Bloqueadas hasta decisión humana y evidencia

- Cualquier solicitud al modelo, incluso desde créditos gratis; probar clave/modelo; crear claves.
- `npm install ai` o instalación de paquetes hasta decidir que es necesaria y segura (no ejecutada en este reintento).
- Push, PR, merge, Preview, Production, creación de proyecto/recurso, plan Pro/trial, cambio de integración, budget, alertas, auto top-up o variables.
- Añadir método de pago, suscripción o contrato.

### Recomendaciones de costo cero

1. No ejecutar AI Gateway ni el script del ZIP. Mantener `.env.local` fuera de Git y no reutilizar la clave comprometida; la rotación no se verificó desde Vercel.
2. Pedir al administrador que confirme Billing, Usage y AI Gateway credits/budgets; distinguir cargos liquidados, pendientes, crédito y uso por proyecto.
3. No tratar las alertas como límites. Documentación de Vercel indica que el presupuesto de Gateway puede ser superado ligeramente por la solicitud que cruza el límite y que BYOK tiene particularidades; no constituye garantía de costo exactamente cero.
4. No hacer el primer push. Antes, pedir captura de Git/Deployments con Production Branch, auto Preview, Ignored Build Step/preset PR-only, Protection y las excepciones de branch. El resumen visto confirma producción en `main` y previews históricas, pero no la regla que procesaría un nuevo push.
5. Para garantizar la política de este trabajo, no activar ni ejecutar servicios con costo o crédito. La desactivación de configuraciones remotas podría requerir cambios no autorizados; por ahora no se modificó nada.

## Evidencia y limitaciones de navegación

Edge mostró la dirección exacta del proyecto y el árbol de accesibilidad expuso los campos de resumen enumerados arriba. La navegación por enlace hacia Usage devolvió `coordinate input geometry is unavailable`; al solicitar una captura, la imagen correspondió a la ventana ChatGPT en vez de Edge. Se detuvo la navegación. No se intentó acceder por cookies, sesión, tokens, archivos, API ni otra vía para sortear la limitación. Para cerrar datos no verificados, compartir capturas manuales de:

1. Team → Settings → Billing (plan/facturas/cargos; ocultar toda tarjeta o dato de pago).
2. Team → Usage, últimos 30 días y filtro de `landing-page-rutitas`.
3. AI Gateway → Overview/credits; Budgets & Spend (ocultar API keys e identificadores sensibles).
4. Project → Settings → Git/Deployments y Protection (reglas Preview/branch, Production Branch, Ignored Build Step, protección).
5. Settings/Integrations relevantes para Functions, Storage, Analytics y Speed Insights, mostrando solo estado y nunca valores secretos.

No aceptes diálogos de compra, activación, cambio de plan o despliegue para obtener estas capturas.

## Fuentes públicas oficiales (consultadas 2026-11-17)

- [AI Gateway pricing](https://vercel.com/docs/ai-gateway/pricing): créditos, tasas del proveedor, tiers y costes.
- [Kimi K3 en AI Gateway](https://vercel.com/ai-gateway/models/kimi-k3): disponibilidad, precios/proveedores y datos públicos del modelo.
- [AI Gateway Budgets & Spend](https://vercel.com/docs/ai-gateway/observability-and-spend/budgets): presupuestos, rechazo al exceder, soft cap y alertas.
- [Plan Hobby](https://vercel.com/docs/plans/hobby): topes del plan y comportamiento general al alcanzarlos.
- [Usage en Vercel](https://vercel.com/docs/pricing/manage-and-optimize-usage): ubicación del detalle de consumo en el dashboard.

**Estado final:** costo adicional causado por esta auditoría `0.00 MXN`; cargos actuales de la cuenta **NO VERIFICADOS**; AI Gateway no probado y sin consumo autorizado. Esperar capturas/decisión humana antes de ampliar la auditoría.

## Addendum — diagnóstico del conector oficial — 2026-11-17

- El plugin Vercel está disponible. `list_teams` devolvió `teams: []`, `count: 0`.
- `get_team(team_DkoPaNhiPIS1xwsaaVJbkMOO)` y `get_project(landing-page-rutitas, teamId=...)` devolvieron 403 por scope no autorizado `rutitasrutitas-8977`.
- Se pidió el consentimiento oficial mediante `authorize_team_access` con el Team ID proporcionado; el servicio respondió 404 `Team not found` y no entregó enlace. No se intentó ID/token alternativo.
- Billing, Usage, AI Gateway, presupuestos y settings siguen sin datos nuevos. No hubo llamadas, consumo de créditos, gastos, cambios ni despliegues.
- El diagnóstico completo, incluidos errores, evidencia Edge previa y pasos humanos seguros, está en `DIAGNOSTICO_CONEXION_VERCEL_RUTITAS.md`.
