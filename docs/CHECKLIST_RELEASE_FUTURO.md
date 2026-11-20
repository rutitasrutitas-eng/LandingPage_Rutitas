# Checklist de release futuro — sin autorización de merge ni producción

## LANDING-018 — estado local (2026-11-19)

- [x] Copy informativo aclara que no hay versión pública Android; una versión de prueba, si se aprueba, sería solo para testers internos autorizados.
- [x] Validaciones locales: Vitest 19/19; Playwright 27 passed/5 skipped; lint, typecheck, build, headers, SDD, audit y diff-check pasaron. No CI remoto.
- [x] Revalidar `Priority projects`: control azul, pero el panel indica `No Priority projects`; el equipo Hobby requeriría actualización a Pro para elevar un proyecto. La tarifa publicada es $200 USD/mes por proyecto en Pro/Enterprise. No hay facturas ni método de pago. No desactivar ni activar nada; conservar el costo actual en $0 MXN.
- [ ] Obtener aprobación legal humana del aviso y del responsable antes de merge/producción.
- [x] Gate económico actualizado: autoriza push de rama y PR Draft. Inspeccionar Deployments después del push; detenerse antes del PR si aparece una Preview compilándose.

- [x] Revisar diff completo y rama local `feature/landing-integracion-final-local`; excluir `evidence/` y `LANDING_013.diff` del commit.
- [x] Coordinación autorizó el primer push controlado y PR Draft de manera condicionada. `Only build production` está guardado, pero no se ha probado experimentalmente el resultado de push/PR.
- [ ] Comprobar el workflow GitHub Actions asociado al SHA exacto y revisar cada check/artifact.
- [ ] Revisar visualmente Preview autorizado: escritorio, móvil, rutas directas y recarga; verificar consola y enlaces.
- [x] LANDING-017 y revalidación LANDING-018 en Edge: Hobby activo, sin método de pago ni invoices, AI Gateway $0/Auto-reload Off; Priority control on pero sin proyectos asociados; `Only build production`, GitHub repo y producción `main` confirmados. Ver `LANDING_018_LANZAMIENTO.md`.
- [x] Determinar que no hay proyecto Priority asignado ni cargo visible: Vercel requiere plan Pro para elevar proyectos y muestra un cargo de $200 USD/mes por proyecto en Pro/Enterprise. El gate actual permite push/PR Draft bajo Hobby y cuotas incluidas; no se modifica la selección.
- [x] Registrar el riesgo residual: Hobby no muestra hard cap efectivo para gasto adicional. Mantener el plan, no agregar método de pago, no habilitar add-ons ni consumir créditos; la lectura actual no garantiza costo futuro cero ante cambios de uso o política.
- [ ] Tras el push autorizado, revisar Deployments de inmediato y confirmar que no se haya creado Preview; la configuración sugiere que commits no productivos se omiten, pero no hubo prueba experimental.
- [ ] Obtener aprobación legal humana del aviso, del responsable, contacto y tratamientos reales; retirar la etiqueta de borrador solo después de aprobar el texto final.
- [ ] Definir y probar eliminación de cuentas/datos antes de cualquier distribución que lo requiera, incluida verificación de identidad y política de respaldo/retención.
- [ ] Confirmar URL HTTPS oficial de Google Play; sin ella, mantener «Próximamente» y sin QR.
- [ ] Confirmar GA4 y consentimiento con los responsables; no desplegar el ID sin actualizar la documentación legal correspondiente.
- [x] Conciliación LANDING-017: GitHub retiró `GHSA-fc5q-39xc-vjpf` el 2026-11-18 como no-seguridad; `npm audit --json` actual reportó 0. El paquete sigue en dev/build, sin hallazgo activo de ese advisory.
- [ ] Repetir el audit completo en GitHub Actions del PR y revisar cualquier advisory nuevo. La corrida local no acredita CI.
- [ ] Antes de liberar, verificar por HTTP autorizado `X-Robots-Tag: noindex, follow` en `/privacidad`, `/privacidad/`, `/eliminar-cuenta` y `/eliminar-cuenta/`; la prueba actual valida únicamente `vercel.json`, no el comportamiento desplegado.
- [ ] Obtener autorización humana explícita para producción y registrar plan de reversión.

Este checklist registra la autorización condicionada, pero no ejecuta por sí solo operaciones remotas. El gate económico fue satisfecho en lectura el 2026-11-19; el push y el PR Draft están autorizados solo bajo los controles documentados en `LANDING_018_LANZAMIENTO.md`. No se ha probado aún el efecto real de `Only build production` ante un push; comprobar Deployments antes de abrir PR. El advisory retirado no es un bloqueo vigente. Revisión legal, ratificación SDD y otros gates siguen pendientes antes del merge/producción.
