# LANDING-010 — consolidación local y preparación de release

> **Conciliación posterior LANDING-017 (2026-11-19):** los resultados High y el bloqueo por `picomatch` que aparecen en esta evidencia corresponden a la evaluación previa. GitHub retiró `GHSA-fc5q-39xc-vjpf` el 2026-11-18; el audit local posterior informó cero vulnerabilidades. El histórico se conserva, pero este advisory no es un bloqueo de seguridad vigente. La validación CI sigue pendiente.

- **Fecha:** 2026-11-18
- **Rama:** `feature/landing-integracion-final-local`
- **SHA inicial:** `8544401a6ab4713aded5e3024ee9fcdc58793472`
- **Estado:** preparado para revisión local; no aprobado para release ni publicación.

## Cambios y commits locales

Se conservaron e incorporaron los trabajos reconocibles de LANDING-008 y LANDING-009. La evidencia y documentos exclusivos de LANDING-008 quedaron separados de los cambios de interfaz/pruebas de LANDING-009. Memoria, README, SDD, matriz y pruebas contienen trazabilidad compartida y se cerraron como documentación de LANDING-010.

| Entrega | Commit | SHA |
|---|---|---|
| LANDING-008: paquete local, evidencia, borrador PR, checklist Vercel y auditoría de costo cero | `docs(landing): consolidate LANDING-008 release evidence` | `54c9429bd60c730f0f7ac5ffa342d256ab379e90` |
| LANDING-009: aviso de privacidad y eliminación informativa | `feat(landing): update LANDING-009 privacy information` | `704ab294fcdbe5fa27fb7f8cde634b3aafdf938e` |
| LANDING-010: SDD, trazabilidad, resultados y reporte de preparación | `docs(landing): finalize LANDING-010 release readiness` | este commit; SHA final se comunica en el resumen de entrega para evitar una autorreferencia |

Los documentos SDD y de memoria son compartidos entre LANDING-008/009, por eso se consolidaron en la última unidad documental en lugar de duplicarlos en ambos commits funcionales. No se reescribieron commits anteriores.

Archivos incluidos por unidad:

- LANDING-008: `AUDITORIA_COSTO_CERO_RUTITAS.md`, `DIAGNOSTICO_CONEXION_VERCEL_RUTITAS.md`, `docs/BORRADOR_PR_LANDING_008.md`, `docs/CHECKLIST_VERCEL_LANDING_008.md`, `docs/REPORTE_LANDING_008.md`.
- LANDING-009: `src/PrivacyRutitas.tsx`, `src/LegalPages.tsx`, `src/App.test.tsx`, `docs/AVISO_PRIVACIDAD_RUTITAS_BORRADOR.md`, `docs/PENDIENTES_LEGALES_RUTITAS.md`, `docs/VALIDACIONES_PRIVACIDAD.md`.
- LANDING-010 trazabilidad/cierre: `Memoria.md`, `README.md`, `docs/matriz-trazabilidad.md`, `docs/pruebas.md`, `specs/001-landing-compliance/checklist.md`, `plan.md`, `spec.md`, `tasks.md` y este reporte.

## Validaciones locales

| Control | Resultado |
|---|---|
| `npm run test -- --reporter=dot` | Exit 0: **17 aprobadas**, 0 fallidas, 0 omitidas; 2 archivos de prueba. |
| `npm run test:e2e` | Exit 0: **23 aprobadas**, 0 fallidas, **3 omitidas** de 26 casos. Dos requieren configurar el ID sintético de Analytics; una es exclusiva de escritorio para fotografía hero y se omite en móvil. No se configuró ID ni se emitieron solicitudes Analytics. |
| `npm run lint` | Exit 0, sin warnings de ESLint. |
| `npm run typecheck` | Exit 0. |
| `npm run build` | Exit 0; TypeScript y Vite 6.4.5. |
| `npm run sdd:verify` | Exit 0; 30 documentos, 21 requisitos 001, 14 requisitos 002, 8 requisitos 003 y 9 requisitos 004 trazados; repetido con el reporte presente. |
| `git diff --check` | Exit 0; Git avisa que normalizará LF a CRLF en algunos Markdown de Windows. |
| `npm audit --audit-level=high` | **Exit 1; 11 hallazgos High**, asociados a GHSA-fc5q-39xc-vjpf en `picomatch@4.0.7`, transitivo por Vite/Vitest y herramientas. La solución `--force` propone un downgrade incompatible de Vitest a 3.1.4; no se aplicó. |
| `npm audit --omit=dev --audit-level=high` | Exit 0; 0 vulnerabilidades en dependencias de producción. |
| `npm ls picomatch --all` | Confirma `picomatch@4.0.7` bajo Vite/fdir/tinyglobby y Vitest. |

No se ejecutó `npm ci`, no se instalaron/actualizaron dependencias y no hubo CI remoto. Gitleaks no estaba instalado. Un análisis local de patrones conocidos de credenciales encontró cero coincidencias en los 20 archivos modificados o sin seguimiento al cierre; este análisis limitado no sustituye Gitleaks.

## Riesgos y bloqueos

### Dependencias

El audit general sigue fallando por 11 hallazgos High en herramientas de desarrollo/build; la auditoría de producción (`--omit=dev`) no encontró vulnerabilidades. No se forzó downgrade, override ni excepción de CI. La **aceptación humana del riesgo residual sigue siendo obligatoria antes de un release**.

### Privacidad y eliminación

- `/privacidad` sigue como borrador no ratificado. Equipo de Rutitas se identifica como responsable operativo y se muestra el contacto proporcionado; identidad legal completa, domicilio, régimen y atención/procedimiento del buzón están pendientes.
- El plazo de hasta dos meses es previsto, sujeto a revisión técnica y legal. Tratamientos, categorías, respaldos, excepciones y proveedores realmente utilizados deben confirmarse.
- Vercel es el hosting observado de la Landing. Microsoft Azure, MongoDB Atlas, Google Maps Platform, Google Analytics como medición activa y Google Play están contemplados o pendientes de confirmación, no declarados como activos.
- El costo adicional autorizado es **$0 MXN**; no es una garantía de gratuidad de proveedores.
- La eliminación remota de cuenta y datos no es operativa. Mark y Ame deben implementar el botón Android y el mecanismo seguro Backend y validarlos antes de anunciar disponibilidad.
- Sigue pendiente revisión legal final. La Constitución SDD permanece `PENDIENTE_RATIFICACION`.

### Vercel, publicación y costos

Según evidencia administrativa proporcionada para este proyecto: plan Hobby, repo conectado `rutitasrutitas-eng/LandingPage_Rutitas`, rama productiva `main`, Ignored Build Step `Automatic`, Preview para `All unassigned branches`, opción `Only build previews for pull requests` disponible pero no activada, y AI Gateway con saldo mostrado US$0.00 y recarga automática desactivada. No se verificó un límite efectivo que garantice cero consumo/cargos; esas observaciones no autorizan uso.

Un push de `feature/landing-integracion-final-local` podría crear un Preview. No se tocó Vercel ni se hizo push. Para una publicación futura, el administrador debe decidir y confirmar un control eficaz de Preview/costo antes de que una persona autorice expresamente el primer push. No ejecutar modelo/AI Gateway, Preview, deployment o servicio facturable mientras la política de $0 MXN siga sin garantía verificable.

## Estado de Git y pasos futuros

La rama no tiene upstream mostrado en `git branch -vv`; `origin/main` es una referencia local existente en `0481387180eab973b7c0416b073099638a3f7328`. No se hizo `fetch`, por lo que no se afirma que esa referencia represente el estado remoto actual. El estado final local y el SHA final del commit de cierre se entregan en el resumen de esta tarea.

Próximo paso recomendado: revisión humana del reporte, aceptación explícita o mitigación compatible del riesgo de `picomatch`, cierre de los pendientes legales y confirmación administrativa de controles de Vercel/costo. Solo después de esas decisiones, solicitar por separado autorización para publicar la rama y abrir un PR a `main`. No fusionar ni desplegar sin las aprobaciones requeridas.

**Acciones remotas de esta tarea:** no hubo push, Pull Request, merge, tag remoto, cambio de GitHub/Vercel, Preview, deployment, llamada de AI Gateway ni consumo de créditos.
