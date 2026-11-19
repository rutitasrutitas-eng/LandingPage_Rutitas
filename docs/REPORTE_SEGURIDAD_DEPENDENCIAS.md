# Revisión de seguridad de dependencias — GHSA-fc5q-39xc-vjpf

**Fecha:** 2026-11-17  
**Rama:** `feature/landing-integracion-final-local`  
**SHA de código revisado:** `9cd90686781e41afc9c4cfd3f4e4298b08d8285a`  
**Cambio de dependencias:** ninguno. El hallazgo permanece visible.

> **Actualización LANDING-017 (2026-11-19):** el resultado y la interpretación siguientes son históricos al 2026-11-17. GitHub retiró `GHSA-fc5q-39xc-vjpf` el 2026-11-18 porque no constituye un problema de seguridad. El `npm audit --json` actual reporta 0 vulnerabilidades; el árbol aún contiene `picomatch@4.0.7` como herramienta transitiva. No se cambió ninguna dependencia. Consulta `LANDING_017_PUBLICACION_OFICIAL.md` para la evidencia actual y el bloqueo de publicación no relacionado con este advisory.

## Resultado ejecutivo

La auditoría completa registra **11 entradas high** en el grafo transitivo, todas asociadas a `picomatch@4.0.7` y sus consumidores. No son 11 advisories independientes: las entradas agregadas incluyen paquetes que heredan el mismo advisory por diferentes caminos.

El árbol de producción está limpio: `npm audit --omit=dev --audit-level=high` terminó exit 0 con 0 vulnerabilidades; `npm ls --omit=dev picomatch --all` no encontró el paquete. Se reconstruyó `dist` y una búsqueda textual de `picomatch`, `fdir` y `tinyglobby` no encontró coincidencias en los archivos del bundle. Esto reduce la exposición del sitio estático desplegado, pero no elimina el riesgo del entorno de desarrollo/compilación.

No existe una corrección segura que se pueda aplicar ahora: `npm view picomatch version dist-tags --json` informó `4.0.7` como `latest`, y el [advisory oficial GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf), actualizado el 2026-11-17, declara afectadas las versiones `<=4.0.7` y `Patched versions: None`. npm propone `vitest@3.1.4` con `isSemVerMajor: true`; la versión actual es `vitest@5.1.0`. No se hizo el downgrade ni se agregó un override que no corresponda a un fix publicado.

## Comandos ejecutados y salidas

### `npm audit --json`

Exit real del comando: **1**.

```text
info: 0
low: 0
moderate: 0
high: 11
critical: 0
total: 11
```

`metadata.dependencies`: 4 prod, 289 dev, 53 optional y 8 peer. Las entradas afectadas son `picomatch`, `fdir`, `tinyglobby`, `vite`, `vitest`, `typescript-eslint` y `@typescript-eslint/{eslint-plugin,parser,type-utils,typescript-estree,utils}`. El advisory raíz de `picomatch` tiene rango `<=4.0.7`; `fixAvailable` de npm indica degradar Vitest a 3.1.4 mediante un cambio major.

### `npm audit --omit=dev --audit-level=high`

Exit: **0**.

```text
found 0 vulnerabilities
```

### `npm ls picomatch --all`

Exit: **0**.

```text
rutitas-landing
├─ vite@6.4.5
│  ├─ fdir@6.5.0 → picomatch@4.0.7
│  ├─ picomatch@4.0.7
│  └─ tinyglobby@0.2.17 → picomatch@4.0.7
└─ vitest@5.1.0
   └─ tinyglobby@0.2.17 → fdir@6.5.0 / picomatch@4.0.7
```

El árbol ampliado también muestra la ruta `typescript-eslint@8.72.1 → @typescript-eslint/typescript-estree@8.72.1 → tinyglobby@0.2.17 → fdir@6.5.0 → picomatch@4.0.7`. Todas esas dependencias superiores aparecen bajo `devDependencies` en `package.json`; las dependencias runtime declaradas son `react` y `react-dom`.

### Bundle de producción

`npm run build` terminó exit 0 con Vite 6.4.5. Salidas: JS 255.68 kB (79.25 kB gzip) y CSS 20.88 kB (5.35 kB gzip). La búsqueda `rg -n -i "picomatch|fdir|tinyglobby" dist` no encontró coincidencias. La aplicación se entrega como assets estáticos; el chequeo no es un análisis binario exhaustivo, pero junto con el árbol auditado sin dev dependencies no se observa una inclusión runtime de esos paquetes.

## Severidad, alcance y condiciones de explotación

El advisory describe una denegación de servicio ReDoS: se requiere que un proceso invoque `picomatch` con un patrón extglob de una sola rama, repetido, y pruebe una cadena que active backtracking exponencial. El efecto descrito es consumo de CPU/bloqueo del event loop, no exposición o modificación de datos.

En este repositorio no se encontraron llamadas de la aplicación cliente a `picomatch`, y el paquete no aparece en el bundle. El riesgo visible está en las herramientas Node de desarrollo, pruebas y build (Vite, Vitest y la cadena de `typescript-eslint`). Para explotar ese riesgo, una entrada controlada por un atacante tendría que alcanzar el procesamiento de patrones de dichas herramientas; no se identificó en la Landing un flujo que acepte globs de visitantes. Esto no equivale a una prueba formal de ausencia de toda ruta en herramientas/plugin/config.

El script local `npm run dev` lanza Vite con `--host 0.0.0.0`. No se encontró ni probó una ruta del dev server que permita explotar el advisory directamente, por lo que no se declara explotación remota confirmada. Aun así, conviene no exponer el servidor de desarrollo en redes no confiables.

## Controles actuales y mitigaciones recomendadas

- El árbol de producción omite las dependencias vulnerables y el bundle inspeccionado no incluye sus nombres/código reconocible.
- El workflow CI tiene `permissions: contents: read`, `persist-credentials: false` en checkout y `timeout-minutes: 20`; limita permisos y duración, pero no corrige el paquete ni evita por sí solo consumo de CPU durante ese intervalo.
- No pasar patrones/globs proporcionados por usuarios a Vite, Vitest, `tinyglobby` ni plugins durante builds o pruebas.
- Mantener `vite --host 0.0.0.0` en redes confiables únicamente; usar loopback/firewall cuando no se necesite acceso LAN. Esta revisión no modifica ese script.
- Seguir el advisory y un release upstream. Cuando exista versión corregida compatible con el rango de Vite/Vitest/typescript-eslint, actualizar manifiesto y lockfile con revisión, y ejecutar `npm ci`, lint, typecheck, unit tests, E2E, build, SDD y audit.
- No añadir supresiones de audit ni overrides que sustituyan la versión vulnerable por otra versión también afectada. No aplicar el downgrade major sugerido por `npm audit` sin justificación y compatibilidad probada.

## Recomendación para revisión humana

No hay evidencia de exposición de `picomatch` en producción; sí queda un hallazgo alto real en herramientas de desarrollo/CI, por lo que el `npm audit` completo continuará fallando y el workflow que lo ejecuta puede fallar. Mantener el resultado visible. Antes de aprobar una publicación, pedir a la persona responsable de seguridad que decida entre mantener bloqueado el release hasta que exista un fix compatible o aceptar formalmente este riesgo acotado, después de revisar la exposición de Vite en las redes de trabajo y las condiciones del pipeline.

Esta revisión no alteró dependencias, workflow, Vercel ni configuración de despliegue.
