# LANDING-011 — Seguridad y control de publicación

**Fecha:** 2026-11-18
**Rama:** `feature/landing-integracion-final-local`
**SHA de entrada revisado:** `ced61fff15c31001af03621bbd276c7e7e82cdb7`
**Política:** costo adicional autorizado = **$0 MXN**.
**Estado histórico (2026-11-18):** evidencia local en preparación; primer push/release detenido. La actualización al 2026-11-19 está al final de este informe.

## Resumen

- **Resultado histórico al 2026-11-18:** la auditoría completa reportó 11 entradas High del mismo advisory transitivo `GHSA-fc5q-39xc-vjpf` asociado a `picomatch@4.0.7`; el árbol de producción auditado no reportó vulnerabilidades.
- **Estado actual al 2026-11-19:** GitHub retiró el advisory el 2026-11-18 indicando que no constituye un problema de seguridad; la auditoría actual `npm audit --json` reporta cero vulnerabilidades. `picomatch@4.0.7` aún existe en el árbol de desarrollo/build, pero la presencia del paquete no equivale a una vulnerabilidad confirmada. No se cambiaron dependencias.
- Build estático regenerado sin coincidencias textuales de picomatch/fdir/tinyglobby; no se encontró procesamiento explícito de globs del visitante en la fuente/configuración de esta Landing.
- **Observación histórica de Vercel (2026-11-18):** Edge mostró Ignored Build Step `Automatic`; posteriormente LANDING-012 lo cambió a `Only build production`. Para LANDING-017 no fue posible revalidar el estado actual: el conector recibió 403 y Computer Use detuvo la interacción al no poder identificar con confianza la URL de Edge.
- Recomendación bajo la regla estricta de $0 MXN: mantener detenido el push hasta que el administrador establezca y confirme una política adecuada. La protección de acceso no bloquea builds ni acredita costo cero.

## 1. Git e historial

Al inicio `git status --short` estaba vacío y HEAD era el SHA esperado. El historial conserva LANDING-004 (`ba6ad15`, `2ccb740`, `d96103c`), LANDING-005 (`6dcb89d`, integrado mediante `e46daf5`) y LANDING-006 (`1fe9589`, `fc43246`, integrado mediante `5ef79c6`), además de LANDING-008/009/010. Se comprobaron como ancestros de HEAD los heads locales de las ramas LANDING-005 y LANDING-006 y la corrección LANDING-004. `main` local y `origin/main` local apuntan a `0481387`; no se hizo `fetch`, por lo que no afirmo que esa referencia local sea la versión remota más reciente. La rama no tenía upstream configurado.

Este trabajo modifica documentos de seguridad/trazabilidad solamente. No toca código de producto, dependencias, lockfile, workflow, `vercel.json`, `main` ni configuración remota. No se creó commit; el SHA revisado sigue siendo el HEAD de entrada.

## 2. Hallazgo de dependencias — evidencia histórica al 2026-11-18

El [advisory oficial de GitHub](https://github.com/advisories/GHSA-fc5q-39xc-vjpf), consultado el 2026-11-18, clasifica el problema como High / CVSS 8.7, afecta `picomatch <=4.0.7` y muestra `Patched versions: None`. Describe ReDoS mediante extglobs repetidos de una rama, capaces de provocar backtracking exponencial y bloquear el event loop de procesos Node si reciben patrones/cadenas preparados para activar ese caso.

| Comprobación | Resultado real |
|---|---|
| `npm audit --json` | Exit 1; 11 High, 0 Critical/Moderate/Low. Un advisory raíz aparece por múltiples rutas del grafo, no son 11 advisories distintos. |
| `npm audit --omit=dev --audit-level=high --json` | Exit 0; total 0 vulnerabilidades. |
| `npm ls picomatch --all` | Exit 0; `picomatch@4.0.7` bajo Vite (directo, `fdir`, `tinyglobby`) y Vitest. |
| `npm run build` | Exit 0; Vite 6.4.5, 36 módulos. JS 257.49 kB (79.68 kB gzip), CSS 20.88 kB (5.35 kB gzip). |
| `rg -n -i "picomatch|fdir|tinyglobby" dist` | Cero coincidencias en el bundle recién producido. |
| Búsqueda de uso de globs | Sin matches de glob/picomatch/fdir/tinyglobby en `src`, `scripts`, configs Vite/Vitest; la búsqueda amplia encuentra solo el override preexistente de `minimatch` en `package.json`, paquete distinto. |

La evidencia apunta a exposición en herramientas de desarrollo/build/CI, no en el bundle estático runtime. La explotación necesitaría alcanzar el procesamiento de un patrón y una cadena preparados; no se identificó un flujo de visitantes de la Landing que entregue globs a ese toolchain. La revisión textual no es una prueba formal de todos los caminos internos de las dependencias.

Al corte de este informe original no había una actualización corregida listada por el advisory. El fix forzado reportado previamente por npm implicaba una degradación major de Vitest. No se ejecutó `npm audit fix`, no se hizo downgrade ni se agregó una excepción. Este párrafo documenta la situación del 2026-11-18 y queda supersedido por el addendum LANDING-017, que registra la retirada posterior del aviso.

## 3. Configuración observada de Vercel

Navegación de solo lectura en el Edge abierto por el usuario. No se leyeron cookies, credenciales, tokens o secretos; no se guardó ninguna opción.

| Ajuste | Observación | Clasificación |
|---|---|---|
| Plan visible | Cabecera del scope dice `Hobby`. | VERIFICADO en el panel; no sustituye datos de facturación/uso. |
| Repositorio | `rutitasrutitas-eng/LandingPage_Rutitas`, conectado. | VERIFICADO en Settings → Git. |
| Producción | Tracking indica que cada commit a `main` crea Production Deployment. | VERIFICADO. No se probó push. |
| Preview | El patrón visible es `All unassigned branches`. | Observado; no se determinó de forma inequívoca el estado habilitado del checkbox Branch Tracking, por lo que falta confirmar su efecto. |
| Ignored Build Step | `Automatic`. | VERIFICADO. |
| PR-only | `Only build previews for pull requests` aparece disponible, pero no está seleccionada. | VERIFICADO sin seleccionar ni guardar. |
| Protección | Vercel Authentication `Require Log In` encendido; `Standard Protection` seleccionado. | VERIFICADO visualmente. Efectivamente controla acceso a URLs; no bloquea la generación del build. Standard Protection protege deployments salvo dominios de producción, según la [documentación oficial](https://vercel.com/docs/deployment-protection). |
| Excepciones | La sección de Deployment Protection Exceptions no muestra dominios agregados. | VERIFICADO en la pantalla observada; una excepción configurada haría público el dominio excluido. |
| Facturación, consumo, créditos y techo de gasto | No se revisaron en esta actividad. | NO VERIFICADO en LANDING-011. La evidencia económica anterior de Hobby/ausencia de método de pago/recarga AI apagada no constituye un límite duro de uso. |

Vercel documenta que, de forma predeterminada, cada commit a un repositorio conectado crea deployment y build salvo que se omita el build step ([Project settings](https://vercel.com/docs/project-configuration/project-settings)).

## 4. Escenarios de push y PR

| Escenario | Efecto esperado | Recursos y producción |
|---|---|---|
| **A — Automatic y push de feature sin PR** | Puede iniciarse Preview inmediatamente al recibirse el commit. | Consume recursos/minutos de build sujetos a los límites del plan. No es producción mientras no llegue a `main`; puede existir un registro/deployment aunque el acceso esté protegido. |
| **A — después abrir PR** | Puede actualizarse o reconstruirse la Preview/check de Vercel. | Cantidad de builds dependiente del flujo de Git; no se puede garantizar coste cero. |
| **B — PR-only habilitado antes del push** | Sin PR, omite Preview; al abrir/actualizar PR, sí compila Preview. El preset se publicó el 2026-11-17 y Vercel dice que en GitHub/GitLab la Preview omitida se cancela antes de consumir Build CPU Minutes ([changelog](https://vercel.com/changelog/pull-request-only-preset-now-available-for-preview-builds)). | Reduce builds de ramas sin PR, pero no evita la Preview al abrir PR ni demuestra cero consumo de otras cuotas. No cumple por sí solo “ninguna Preview”. |
| **C — sin push** | La rama permanece local. | Única opción que no dispara esta integración remota y respeta el requisito actual de no publicar/desplegar bajo incertidumbre económica. Recomendación actual. |

El preset `Only build production` puede omitir builds Preview según el entorno, pero necesita cambio administrativo y verificación; los commits a `main` seguirían pudiendo desplegar Production. No implica por sí mismo un techo de costo duro. Con la configuración observada no es seguro inferir el efecto del primer push por el solo hecho de que el PR aún no exista.

## 5. Costo cero, decisiones y bloqueos

**Permitido y realizado:** lectura local de manifiesto, lockfile ya instalado, auditoría npm, build local, búsqueda textual de artefactos y navegación de Edge de solo lectura.

**Bloqueado:** push, PR, merge, Preview/Production, cualquier cambio Vercel, instalar paquetes/AI SDK, llamadas a AI Gateway/modelos, consumo de créditos, crear recursos o añadir pagos. Una alerta de gasto o protección de URL no equivale a un hard cap.

**Recomendación:** mantener detenido el primer push hasta que coordinación relaje/aclare la prohibición de Previews, el administrador confirme el estado efectivo de Branch Tracking y establezca controles económicos efectivos suficientes. Si no existe control que impida todo uso/cargo adicional, no publicar la rama.

Pendientes antes del release:

- **Histórico/supersedido:** resolver o aceptar formalmente el riesgo High de `picomatch`; el advisory fue retirado y el audit actual reporta 0. Revisar otros hallazgos en CI.
- Confirmar el estado de Preview Branch Tracking y política de deployment con administrador.
- Confirmar que el esquema elegido impide cargos/consumo no autorizado; el plan Hobby y las protecciones no lo demuestran.
- Refrescar `origin/main` mediante operación remota autorizada antes de una comparación final.
- Validación legal del aviso, identidad completa/domicilio, tratamientos/proveedores y plazo previsto; implementación/validación de eliminación por Mark y Ame.
- Ratificación humana de Constitución SDD.
- No se ejecutaron CI remoto, push, PR, Preview, merge o despliegue para este SHA.

## 6. Validaciones documentales

Como no cambió el producto, no se repitieron Lint/Vitest/Playwright. Se ejecutaron auditorías, árbol de dependencias, build para revisar el bundle, SDD y diff check. La evidencia final está en `docs/pruebas.md`.

## Addendum LANDING-017 — estado vigente al 2026-11-19

El [registro oficial de GitHub](https://github.com/advisories/GHSA-fc5q-39xc-vjpf) ahora muestra el advisory como **Withdrawn**, retirado el 2026-11-18 porque no es un problema de seguridad. El rango y la evaluación High reflejaban la publicación original; se conservan arriba como contexto histórico, no como riesgo vigente.

En la rama integrada a LANDING-016, `npm audit --json` terminó exit 0 el 2026-11-19 y reportó 0 vulnerabilidades en 283 dependencias. `npm ls picomatch --all` terminó exit 0 y confirma que `picomatch@4.0.7` sigue como dependencia transitiva de desarrollo/build bajo Vite, fdir, tinyglobby y Vitest. No se cambiaron dependencias. La existencia de ese paquete no contradice que el advisory haya sido retirado. La comprobación de CI deberá confirmar que el audit completo sigue limpio y detectar cualquier aviso distinto.

En la misma actividad se verificó que `origin/main` sigue en `80ef7b1388aa709dbef692154c66b0c5a9966715` y HEAD local es `f1cefb4a28e3a700e234720c799949ce0615d8a3`. Vercel no pudo revalidarse: el conector oficial devolvió 403 por falta de acceso al scope y Computer Use detuvo la lectura de Edge porque no logró determinar la URL activa con suficiente confianza. No se intentó evadir el bloqueo, autorizar scopes, ni cambiar configuración.

Por el gate de costo cero, **no se hizo push ni se abrió PR**: faltan confirmar actualmente el plan/uso/cuotas, los créditos y la configuración `Only build production`/Preview. Estado de publicación: **BLOQUEADA hasta confirmar económicamente Vercel**. La revisión legal, eliminación de cuentas y otros gates siguen como se describen en `LANDING_017_PUBLICACION_OFICIAL.md`.
