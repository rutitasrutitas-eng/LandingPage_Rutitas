# Reporte LANDING-002 — Validación final y preparación de publicación

**Fecha de revisión:** 2026-11-05
**Estado global:** **PARCIAL**. Las dos ramas separadas se publicaron; la integración no permitió crear los Draft PRs, por lo que no arrancaron Actions. La Preview no pudo confirmarse con el acceso Vercel disponible. La auditoría local, la corrección de dependencias y la preparación documental están completas.
**Evaluación académica:** 2026-12-02.
**Proyecto local:** `C:\Users\rafle\OneDrive\Desktop\anterior\Rutitas_Landing\Rutitas_Landing_React`.

## 1. Resumen ejecutivo

LANDING-001 está en la rama remota `feature/landing-001-compliance`, commit `61efe04a5613033e5fed74107c7133e134b43fc9`. LANDING-002 está separada en `feature/landing-002-release`, apilada sobre LANDING-001. No se pudo crear ninguno de los PRs: la integración GitHub respondió `403 Resource not accessible by integration` al solicitar el primero. No se ha fusionado ni desplegado nada. La landing pública abre, pero las rutas `/privacidad` y `/eliminar-cuenta` devuelven `404 NOT_FOUND` en producción; esto corresponde al sitio actualmente publicado, no a una Preview de las ramas.

Se corrigió el advisory moderado de `minimatch` con un override de versión fijada en el rango compatible con la versión corregida, sin degradar ESLint ni utilizar `npm audit fix --force`. El lock resuelve `minimatch@11.0.4`. Todas las pruebas locales posteriores pasan y `npm audit` informa cero vulnerabilidades.

No se cambió GitHub ni Vercel. El conector de Vercel negó acceso de lectura al scope Rutitas (403). No hay ejecución de GitHub Actions ni Preview de esta entrega. La especificación, el workflow y los documentos distinguen esos estados para evitar presentarlos como terminados.

## 2. Estado inicial de Git y origen

- Repositorio confirmado a partir del remoto local: `rutitasrutitas-eng/LandingPage_Rutitas` (público).
- Rama base al inicio: `main`, upstream `origin/main`.
- HEAD base: `1b00d15fa89184a187b387d65ca81c5f8bf614b8` (`fix: include Vite environment types`); rama local alineada con su referencia `origin/main` al registrar el estado.
- Árbol inicial de esta fase: cambios y archivos sin seguimiento de LANDING-001; se conservaron y separaron mediante staging selectivo.
- GitHub: se confirmó que `origin/main` seguía en `1b00d15fa89184a187b387d65ca81c5f8bf614b8` antes de publicar las ramas. Las ramas nuevas se publicaron sin force push. Al inicio no había PR abiertos; `.github/workflows/quality.yml` no existía en `main`.
- Estado combinado del commit base: check de Vercel `success`; no se encontró un check de GitHub Actions.
- El conector reporta permiso `push` pero no `admin`; el push de ramas por la conexión Git autorizada se completó. La llamada de creación de PR respondió 403 `Resource not accessible by integration`. La CLI `gh` no está instalada. No se verificó la protección de rama.
- La lectura de protección de `main` respondió 403 `Resource not accessible by integration`; reglas de branch protection quedan NO VERIFICADAS por falta de permiso administrativo.
- Vercel MCP listó 0 proyectos sin scope y, al consultar `rutitasrutitas-8977`, respondió 403 requiriendo autorización del team. No se intentó cambiar settings ni iniciar un deployment.

## 3. Auditoría repetida de LANDING-001

| Control | Resultado | Estado |
|---|---|---|
| `npm ci` original | Exit 0 antes de corregir minimatch. | Verificado |
| `npm run lint` | Exit 0. | Verificado |
| `npm run typecheck` | Exit 0. | Verificado |
| `npm run test` | Vitest 11/11. | Verificado |
| `npm run test:e2e` | 9 aprobadas y 1 omitida (assertion exclusiva del proyecto móvil al correr Chromium desktop). | Verificado |
| `npm run sdd:verify` | 12 documentos y 10 IDs 001 trazados (en la primera revalidación). Se amplió el script para incluir L002. | Verificado antes y después de extender el verificador |
| `npm run build` | Exit 0 con Vite 6.4.5. | Verificado |
| `npm audit` anterior | 10 rutas de dependencia moderadas para un advisory de minimatch. | Reproducido y luego corregido |
| `git diff --check` | Exit 0; avisos de normalización CRLF solamente. | Verificado |

## 4. Vulnerabilidad de minimatch y remediación

El advisory de GitHub `GHSA-g3hv-75wg-m249` marca afectados `minimatch >=7.0.0, <11.0.1` y fija `11.0.1`. Describe amplificación de `globParts` y coste cuadrático cuando un atacante puede controlar el patrón, con impacto de consumo de CPU/memoria. [Advisory de GitHub](https://github.com/advisories/GHSA-g3hv-75wg-m249), [release firmada 11.0.1](https://github.com/isaacs/minimatch/releases/tag/v11.0.1).

La instalación previa resolvía `10.2.6` solo como dependencia transitiva de desarrollo de ESLint (`@eslint/config-array`) y typescript-eslint (`@typescript-eslint/typescript-estree`). `npm ls minimatch --omit=dev` retorna un árbol vacío; no es dependencia del bundle de producción. La inspección de los call sites muestra opciones estáticas `dot:true` o `MINIMATCH_OPTIONS` sin `optimizationLevel`, por lo que no se vio el requisito descrito por el advisory (`optimizationLevel >= 2`) en esos usos actuales. Los patrones son configuración de herramientas, no patrones recibidos en requests del sitio; el alcance práctico se concentra en desarrollo/CI con configuración no confiable. Esto reduce exposición, pero no sustituye la corrección.

Se agregó `overrides.minimatch: ^11.0.1`; el lock resuelve `11.0.4`, manteniendo ESLint 10.14.0 y typescript-eslint 8.72.1. Los consumidores usan `Minimatch` y `minimatch()`; lint, typecheck, tests, E2E y build pasan con la nueva versión. No se usó `--force`. `npm audit` ahora termina con exit 0 y `found 0 vulnerabilities`.

## 5. Revalidación posterior a la corrección

- `npm ls minimatch --all`: 11.0.4 compartido por ESLint y typescript-eslint.
- `npm audit`: cero vulnerabilidades.
- `npm run lint`: aprobado.
- `npm run typecheck`: aprobado.
- `npm run test`: 11/11 aprobadas.
- `npm run test:e2e`: 9 aprobadas, 1 omitida por la variante desktop-only.
- `npm run sdd:verify`: aprobado tras extenderse para 001/002; resultado final consta en `docs/pruebas.md`.
- `npm run build`: aprobado.
- `git diff --check`: aprobado.
- Instalación limpia: `npm ci` pasó con el lock actualizado en una carpeta temporal fuera de OneDrive. En la carpeta original, dos intentos posteriores al override fallaron al limpiar `node_modules` con error de Windows `EBUSY`; `npm install` reparó el árbol y se repitieron satisfactoriamente todos los controles. npm avisó que esbuild tiene un script de instalación pendiente de la allowlist del gestor de paquetes; no impidió la compilación.

## 6. Secretos y seguridad del repositorio

- Gitleaks no se ejecutó localmente: Docker no está instalado y el workflow no está en el branch GitHub remoto.
- No se puede afirmar que el repositorio haya pasado un escaneo de secretos. La revisión de nombres de archivo encontró solo `.env.example`; una búsqueda local de marcadores comunes de claves conocidas no halló coincidencias, pero esa comprobación heurística no reemplaza Gitleaks. No se observó un archivo `.env.local`/`.env` en el repo.
- El workflow local coloca Gitleaks antes de la instalación de dependencias, solicita `contents: read`, usa acciones fijadas por SHA, usa digest fijado para la imagen, realiza scan Git con `--redact`, checkout completo y auditoría npm estricta. Debe ejecutarse en GitHub para validar su comportamiento real y sus logs.
- No se exponen valores sensibles en este reporte. No hay token, clave privada o credencial intencional configurada en la landing.

## 7. GitHub y Pull Requests

Se publicaron dos ramas, sin forzar actualizaciones:

1. `feature/landing-001-compliance` parte de `main`, con commit `61efe04a5613033e5fed74107c7133e134b43fc9`. PR previsto: [comparar con main](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/compare/main...feature/landing-001-compliance?expand=1). El conector rechazó la creación del Draft PR con HTTP 403; por tanto aún no existe URL de PR.
2. `feature/landing-002-release` parte del commit de LANDING-001. PR previsto, apilado inicialmente sobre `feature/landing-001-compliance`: [comparar con LANDING-001](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/compare/feature/landing-001-compliance...feature/landing-002-release?expand=1). La rama está publicada; el Draft PR tampoco se ha creado.

El SHA de punta de la rama LANDING-002 y su estado de publicación se registran en el historial de Git. No se han creado PRs, comentarios ni ejecuciones de Actions. El archivo workflow sí está en ambas ramas, pero no en `main`; los eventos configurados son `pull_request`, así que no existe un run de CI que pueda atribuirse a esta entrega mientras no se creen los PRs. No se ocultaron fallos. Se requiere conceder a la integración de GitHub permiso de escritura de Pull requests (y lectura de Actions para consultar runs) o completar los Draft PRs desde GitHub. No se fusionará ningún PR.

## 8. Estado Vercel, producción y Preview

- Home pública observada en navegador el 2026-11-05: carga y conserva el título/contenido de Rutitas.
- `https://landing-page-rutitas.vercel.app/privacidad`: `404 NOT_FOUND`.
- `https://landing-page-rutitas.vercel.app/eliminar-cuenta`: `404 NOT_FOUND`.
- Esto confirma que la producción aún no contiene las rutas de LANDING-001. No se inspeccionaron errores de consola del navegador en el control público.
- No se obtuvo una URL Preview para las ramas. El conector Vercel respondió 403 para el equipo `rutitasrutitas-8977`; no se abrió sesión de autorización ni se cambió el proyecto. El check Vercel del commit base no acredita una Preview nueva. Al no estar creados los PRs, tampoco se confirmó si la configuración del proyecto crea Preview al recibir solo una rama.
- `vercel.json` mantiene la regla SPA local y se parsea; falta probarla en Preview una vez enviada la rama autorizada.

## 9. GA4 y Google Play

- GA4: `VITE_GA_MEASUREMENT_ID` sigue vacío. Integración local valida formato/consentimiento y no activa Analytics sin opt-in; no hay evento Realtime verificado, ID proporcionado ni cambio de entorno Vercel.
- Google Play: `VITE_GOOGLE_PLAY_URL` sigue vacío; la interfaz conserva «Muy pronto» y no inventa QR/enlace. No hay URL oficial para validar.

## 10. Privacidad, eliminación y Constitución

- Los borradores están implementados localmente y las rutas pasan pruebas locales. Producción todavía devuelve 404.
- `docs/APROBACION_LEGAL_PENDIENTE.md` enumera datos/finalidades/contacto/proveedores/retención/derechos/ubicación/documentos, proceso de eliminación, GA4 y Play que debe validar el equipo.
- No existe formulario, canal verificado ni backend de borrado en el repo. No se declara cumplido el requisito de eliminación.
- La Constitución continúa `PENDIENTE_RATIFICACION`; no se marcó aprobada.

## 11. Estado académico por categoría

- **IMPLEMENTADO LOCALMENTE:** LANDING-001, tests, docs SDD 002, matriz y reportes; override de minimatch y auditoría local limpia; workflow reforzado y documentado.
- **VERIFICADO EN CI:** no. No existe workflow en el branch remoto; no hay run URL/SHA de ejecución.
- **VERIFICADO EN PREVIEW:** no. No existe Preview para estos cambios.
- **PUBLICADO EN PRODUCCIÓN:** la versión anterior de la portada está pública; las rutas nuevas no, responden 404.
- **PENDIENTE DE APROBACIÓN:** ratificación SDD, datos/textos legales, proceso real de eliminación, ID/consentimiento GA4, ficha Play, acceso Vercel y autorización de publicación.

## 12. Pendientes, responsables y riesgos

| Pendiente | Responsable | Riesgo/acción |
|---|---|---|
| Aprobar Constitution y texto legal | Profesor/equipo responsable | No publicar borradores como definitivos; checklist está en documento separado. |
| Confirmar eliminación de cuentas | Equipo backend/soporte | Requisito de tienda no queda cubierto solo por una página informativa. |
| GA4 y Play | Administradores de esas propiedades | No hay identificación ni evento/enlace real. |
| Habilitar creación de Draft PRs y consultar Actions | Administrador GitHub | La integración devolvió 403 al crear PR; branches están publicadas. |
| Ejecutar Gitleaks y CI | Administrador GitHub | Aún no existe un run remoto; Docker no está instalado localmente. |
| Autorizar scope Vercel y revisar Preview | Administrador Vercel | El acceso al equipo fue denegado (403); producción tiene 404 en rutas legales. |
| Protección de `main` | Administrador GitHub | No verificada por permiso admin; una auditoría no prueba reglas. |

## 13. Publicación y reversión

1. Autorizar el resumen y enviar PR 1; revisar y esperar CI/merge humano.
2. Enviar PR 2; revisar CI completo, auditoría limpia y diff; aprobarlo y fusionarlo de forma humana.
3. Con acceso Vercel, revisar Preview asociada al SHA: home, footer, privacidad, eliminación, acceso directo/recarga, móvil, recursos y consola. No cambiar variables hasta tener IDs/URLs aprobados.
4. El responsable aprueba contenido legal y la publicación; el administrador autoriza producción por separado.
5. Identificar el deployment READY de producción previo, asociar el deployment nuevo autorizado y revisar home/rutas/errores. Registrar URL y SHA.
6. Si falla, el administrador de Vercel selecciona el deployment anterior conocido y solicita rollback desde el panel o CLI del proyecto correcto. Verificar después el estado/dominio y volver a probar home y rutas. No se ejecutó este procedimiento.

## 14. Acciones pendientes de acceso

La autorización del usuario para publicar ramas y abrir Draft PRs ya fue otorgada. Falta habilitar la escritura de Pull requests para la conexión GitHub de Codex: al intentar crear PR1, GitHub respondió `403 Resource not accessible by integration`; la CLI `gh` tampoco está instalada. Tras conceder ese alcance, crear PR1 hacia `main`, esperar sus checks, y luego crear PR2 hacia `feature/landing-001-compliance`. Mantener ambos en Draft y sin merge.

Para Vercel, autorizar desde la conexión oficial de Vercel en Codex el acceso al team `rutitasrutitas-8977` (slug visible `rutitasrutitas-8977`). Aprobar únicamente la conexión/alcance del equipo necesario para leer proyectos y deployments; no se requiere cambiar el proyecto, dominios, facturación ni variables. Después revisar si existe Preview y validar las tres rutas si se proporciona.

La autorización de ramas y PRs no autoriza despliegue productivo, cambios de configuración Vercel, ratificación legal, GA4 o uso de Google Play. Esas decisiones permanecen separadas.
