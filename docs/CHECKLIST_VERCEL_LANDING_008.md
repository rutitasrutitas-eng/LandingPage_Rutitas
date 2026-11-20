# Checklist de Vercel — LANDING-008 (solo para administrador)

**Estado:** checklist documental; ninguna configuración remota fue inspeccionada o modificada en esta actividad. No crear Preview ni iniciar despliegue para esta revisión.

## Antes de autorizar el primer push

- [ ] Confirmar que el proyecto está conectado al repositorio `rutitasrutitas-eng/LandingPage_Rutitas` correcto y que la carpeta raíz/framework/build command coinciden con la landing.
- [ ] Confirmar la rama de producción configurada en el proyecto y que sigue siendo `main`.
- [ ] Revisar qué eventos de GitHub están habilitados (push a rama, pull request, commits) y el estado de Preview Deployments.
- [ ] Verificar si Deployment Protection/SSO protege Preview y quién puede acceder; no compartir bypass tokens ni enlaces privados en el repo.
- [ ] Confirmar si existen reglas `git.deploymentEnabled` en el archivo remoto que procesa Vercel o configuración equivalente en dashboard; las reglas no listadas se consideran habilitadas por defecto en el esquema documentado.
- [ ] Acordar explícitamente con el administrador qué política evita construir una Preview para la rama antes del PR.
- [ ] **Opción de dashboard a verificar:** el changelog oficial del 2026-11-17 anuncia el preset de Ignored Build Step **“Only build previews for pull requests”**, que cancela previews de ramas sin PR y conserva previews de PR. Comprobar que el preset esté disponible en este proyecto/plan y probarlo en un proyecto/commit de ensayo autorizado antes de aplicarlo al flujo real.
- [ ] Si se considera una regla por rama en `vercel.json`, revisar el diff exacto, el repositorio/commit que Vercel recibirá y posibles reglas de coincidencia; conservar intacto el rewrite SPA existente. La propuesta local previa está fuera de esta rama y no se incluye aquí.
- [ ] Acordar un procedimiento de recuperación por si el primer push genera una Preview: detener/cancelar el deployment desde el dashboard, documentar el SHA, y no promoverlo a producción.

## Incertidumbre del primer push

La rama GitHub actual no se ha publicado y no se inspeccionó la configuración remota de este proyecto. La documentación de Vercel indica que, por defecto, cada commit empujado al repo conectado crea un deployment salvo que Build Step se omita. Por tanto, hacer push puede producir una Preview antes de abrir un PR. Una opción de Ignored Build Step dependiente del PR aparece en el changelog de la fecha de esta revisión, pero no se verificó disponibilidad/configuración efectiva para este proyecto. No afirmar que `git.deploymentEnabled` local lo impedirá hasta comprobarlo con el administrador.

## Verificación posterior cuando se autorice

- [ ] Guardar captura/export del ajuste administrativo y su fecha/alcance, sin credenciales.
- [ ] Tras autorización del primer push, revisar el dashboard de Deployments por SHA y confirmar que no se generó Preview si esa es la política aprobada.
- [ ] Si se abre un PR posteriormente, verificar exactamente qué evento generó el deployment y que Protection impide acceso no autorizado.
- [ ] Confirmar que ninguna acción del PR altera producción, alias o dominios.

Referencias oficiales vigentes consultadas:

- [Git configuration: `git.deploymentEnabled`](https://vercel.com/docs/project-configuration/git-configuration)
- [Project settings: Ignored Build Step y despliegues por commits](https://vercel.com/docs/project-configuration/project-settings)
- [Changelog: preset de previews solo para PR, 17 nov 2026](https://vercel.com/changelog/pull-request-only-preset-now-available-for-preview-builds)
