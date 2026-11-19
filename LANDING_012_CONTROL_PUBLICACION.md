# LANDING-012 — control de publicación en Vercel

- **Fecha:** 18 de noviembre de 2026 (America/Mexico_City)
- **Proyecto/equipo revisado:** `landing-page-rutitas` / `rutitasrutitas-8977` (Hobby visible en el panel)
- **Repositorio:** `rutitasrutitas-eng/LandingPage_Rutitas`
- **Production Branch:** `main`
- **Rama local / HEAD:** `feature/landing-integracion-final-local` / `ced61fff15c31001af03621bbd276c7e7e82cdb7`
**Costo adicional autorizado:** $0.00 MXN; no se consumieron créditos promocionales.

## Resultado

**GUARDADO Y VERIFICADO.** En Settings → Build and Deployment, el valor anterior `Automatic` se cambió únicamente a `Only build production`. La pantalla confirmó `Ignored build step updated`; después de recargar, el control continuó mostrando `Only build production` y el botón Save quedó deshabilitado. El comando mostrado por Vercel fue equivalente a:

```sh
if [ "$VERCEL_ENV" == "production" ]; then exit 1; else exit 0; fi
```

No se mostró confirmación para crear un deployment, activar un servicio o cambiar de plan. No se inició ningún deployment como parte de esta tarea; tampoco se hicieron pushes de prueba.

## Comprobaciones remotas

| Punto | Estado y evidencia |
|---|---|
| Equipo y proyecto | **VERIFICADO:** encabezado del panel identificó `rutitasrutitas-8977` y `landing-page-rutitas`; plan Hobby visible. |
| Ignored Build Step | **VERIFICADO:** `Automatic` antes del único cambio autorizado; `Only build production` tras guardar y volver a cargar. |
| Repositorio Git | **VERIFICADO:** `rutitasrutitas-eng/LandingPage_Rutitas`, conectado. |
| Rama de producción | **VERIFICADO:** Environment → Production indicó que cada commit a `main` crea Production Deployment. |
| Protección de acceso | **VERIFICADO:** `Require Log In` activo y `Standard Protection` seleccionado. |
| Excepciones de dominios | **NO VERIFICADO EN ESTA REVISIÓN:** no se inspeccionó ni modificó la lista; la protección general sí quedó visible. |
| Variables | **NO MODIFICADAS.** En el entorno Production, el panel mostró “No Environment Variables Added”; no se inspeccionaron ni revelaron valores sensibles de otros entornos. |
| Dominios y facturación | **NO MODIFICADOS; no se hizo una comparación exhaustiva pantalla por pantalla.** |
| Deployments de esta tarea | **NINGUNO INICIADO NI OBSERVADO:** no hubo push/PR ni acción de despliegue; la operación del panel solo actualizó el ajuste. No se hizo una prueba de comportamiento por push. |

La captura de la sección de protección se inspeccionó en Edge y confirmó visualmente el control encendido, el selector Standard Protection y el aviso de que Password Protection requiere plan Pro. No se guardó una captura de cuenta en el repositorio para evitar conservar detalles de sesión/cuenta. La evidencia reproducible disponible es el valor persistido después de recarga y el registro anterior.

## Efecto esperado y límite económico

`Only build production` debe permitir el build de producción cuando `VERCEL_ENV` sea `production` y omitir el build para los demás entornos. Esto reduce los builds Preview ordinarios de commits a ramas feature. Es una expectativa basada en la configuración guardada; no se verificó mediante push, PR o deployment.

**No es un límite de gasto ni una garantía de costo cero.** La documentación oficial de Vercel indica que el comando de ignore se ejecuta durante el build y que al omitirlo el deployment queda cancelado; esos deployments cancelados todavía cuentan para cuotas de deployment y espacios concurrentes. El costo efectivo/consumo depende del plan y las reglas vigentes de la cuenta. Por la política de Rutitas no se probó ni consumió nada para medirlo. No hacer el primer push hasta que una persona administradora acepte este riesgo residual o determine un control adicional realmente efectivo.

## GitHub Actions

Se inspeccionó localmente `.github/workflows/quality.yml` en la rama y SHA informados:

- Activadores `pull_request` hacia `main` y `feature/landing-001-compliance`, además de `workflow_dispatch`.
- No hay activador `push`; por sí solo, un push a la rama de integración no lanza este workflow.
- El workflow conserva `npm audit`, sin excepción global. El check puede fallar debido al hallazgo High de `picomatch`/`GHSA-fc5q-39xc-vjpf` ya documentado; no se repitió la auditoría en esta tarea.
- Abrir un PR hacia `main` puede ejecutar el workflow y su auditoría. No se abrió ningún PR, por tanto no hay resultado CI nuevo para este SHA.

## Pendientes de seguridad y privacidad

- **BLOQUEADO para release:** riesgo High de `picomatch`; sigue pendiente corrección compatible o aceptación formal humana. No se ocultó ni volvió a auditar en esta tarea.
- **PENDIENTE:** Constitución SDD sin ratificar; identidad legal completa/domicilio y revisión legal final del aviso; confirmación de tratamientos/proveedores y funcionamiento operativo del contacto.
- **PENDIENTE:** confirmar si el uso de Preview Branch Tracking y otros controles de cuota proporcionan protección económica suficiente. `Require Log In` protege el acceso a deployments, no es un control de gasto.
- Los deployments cancelados pueden consumir cuota según Vercel; una alerta presupuestaria tampoco debe tratarse como bloqueo de consumo.

## Estado de Git y validaciones

- Rama `feature/landing-integracion-final-local`, HEAD `ced61fff15c31001af03621bbd276c7e7e82cdb7` (sin commit nuevo).
- Se conservaron sin sobrescribir los cambios documentales locales que ya existían antes de LANDING-012, incluido el trabajo LANDING-011.
- Cambios de LANDING-012: este reporte y trazabilidad mínima en `spec.md`, `plan.md`, `tasks.md`, matriz, checklist, `docs/pruebas.md` y `Memoria.md`.
- No se modificó código de la Landing, workflow, ajustes de dominio/variables/billing, Android o Backend.
- No se hicieron push, PR, merge, commit, despliegue, Preview, instalación, llamada a AI Gateway ni consumo de créditos.
- `npm run sdd:verify`: exit 0; verificó 30 documentos, 23 requisitos 001 y trazabilidad para 14/8/9 requisitos 002/003/004. `git diff --check`: exit 0; Git mostró solo avisos CRLF/LF para algunos archivos. Las pruebas de producto no se reejecutaron: no hubo cambios de código y un push de prueba está prohibido.

## Siguiente paso recomendado

Mantener detenida la publicación. Revisar el riesgo `picomatch`, los pendientes legales y el riesgo de cuotas incluso con deployments Preview omitidos; luego, una persona con responsabilidad del costo debe autorizar explícitamente o rechazar el primer push. La configuración guardada confirma el estado del panel, pero no demuestra experimentalmente qué ocurrirá al enviar un commit.

### Referencia oficial

- [Project Settings — Ignored Build Step](https://vercel.com/docs/project-configuration/project-settings): comportamiento de `Only build production`, códigos de salida y efecto de deployments cancelados sobre cuotas.
