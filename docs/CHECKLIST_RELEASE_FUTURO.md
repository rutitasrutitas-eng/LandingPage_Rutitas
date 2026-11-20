# Checklist de release futuro — sin autorización de merge ni producción

## LANDING-018 — estado al corte inicial (histórico, 2026-11-19)

- [x] Copy informativo aclara que no hay versión pública Android; una versión de prueba, si se aprueba, sería solo para testers internos autorizados.
- [x] Validaciones locales: Vitest 19/19; Playwright 27 passed/5 skipped; lint, typecheck, build, headers, SDD, audit y diff-check pasaron. No CI remoto.
- [x] Revalidar `Priority projects`: control azul, pero el panel indica `No Priority projects`; el equipo Hobby requeriría actualización a Pro para elevar un proyecto. La tarifa publicada es $200 USD/mes por proyecto en Pro/Enterprise. No hay facturas ni método de pago. No desactivar ni activar nada; conservar el costo actual en $0 MXN.
- [ ] Obtener aprobación legal humana del aviso y del responsable antes de merge/producción.
- [x] Gate económico actualizado: autoriza push de rama y PR Draft. Inspeccionar Deployments después del push; detenerse antes del PR si aparece una Preview compilándose.

- [x] Revisar diff completo y rama local `feature/landing-integracion-final-local`; excluir `evidence/` y `LANDING_013.diff` del commit.
- [x] Coordinación autorizó el primer push controlado y PR Draft de manera condicionada. El push se completó; Vercel mostró una Preview inesperada y se detuvo antes del PR.
- [ ] Comprobar el workflow GitHub Actions asociado al SHA exacto y revisar cada check/artifact.
- [ ] Revisar visualmente Preview autorizado: escritorio, móvil, rutas directas y recarga; verificar consola y enlaces.
- [x] LANDING-017 y revalidación LANDING-018 en Edge: Hobby activo, sin método de pago ni invoices, AI Gateway $0/Auto-reload Off; Priority control on pero sin proyectos asociados; `Only build production`, GitHub repo y producción `main` confirmados. Ver `LANDING_018_LANZAMIENTO.md`.
- [x] Determinar que no hay proyecto Priority asignado ni cargo visible: Vercel requiere plan Pro para elevar proyectos y muestra un cargo de $200 USD/mes por proyecto en Pro/Enterprise. El gate actual permite push/PR Draft bajo Hobby y cuotas incluidas; no se modifica la selección.
- [x] Registrar el riesgo residual: Hobby no muestra hard cap efectivo para gasto adicional. Mantener el plan, no agregar método de pago, no habilitar add-ons ni consumir créditos; la lectura actual no garantiza costo futuro cero ante cambios de uso o política.
- [x] Tras el push, revisar Deployments: Vercel mostró una nueva Preview para la rama (URL registrada en `LANDING_018_LANZAMIENTO.md`); su estado exacto no se verificó.
- [ ] Pedir decisión humana sobre la Preview inesperada antes de crear PR. No se canceló ni modificó.
- [ ] Obtener aprobación legal humana del aviso, del responsable, contacto y tratamientos reales; retirar la etiqueta de borrador solo después de aprobar el texto final.
- [ ] Definir y probar eliminación de cuentas/datos antes de cualquier distribución que lo requiera, incluida verificación de identidad y política de respaldo/retención.
- [ ] Confirmar URL HTTPS oficial de Google Play; sin ella, mantener «Próximamente» y sin QR.
- [ ] Confirmar GA4 y consentimiento con los responsables; no desplegar el ID sin actualizar la documentación legal correspondiente.
- [x] Conciliación LANDING-017: GitHub retiró `GHSA-fc5q-39xc-vjpf` el 2026-11-18 como no-seguridad; `npm audit --json` actual reportó 0. El paquete sigue en dev/build, sin hallazgo activo de ese advisory.
- [ ] Repetir el audit completo en GitHub Actions del PR y revisar cualquier advisory nuevo. La corrida local no acredita CI.
- [ ] Antes de liberar, verificar por HTTP autorizado `X-Robots-Tag: noindex, follow` en `/privacidad`, `/privacidad/`, `/eliminar-cuenta` y `/eliminar-cuenta/`; la prueba actual valida únicamente `vercel.json`, no el comportamiento desplegado.
- [ ] Obtener autorización humana explícita para producción y registrar plan de reversión.

Histórico al corte inicial: el checklist registraba el push, una Preview cuyo estado aún no se había confirmado y el PR sin abrir. La revisión posterior confirmó la Preview omitida, abrió el PR #14 Draft y completó CI; el estado posterior está en la adenda LANDING-019 y `LANDING_018_LANZAMIENTO.md`.

## Adenda LANDING-019 — estado actual previo al push

- [x] Candidata de privacidad distingue el deployment de siete endpoints reportado por infraestructura en Azure/MongoDB Atlas de disponibilidad pública y tratamiento real no comprobado.
- [x] Android DEMO, reservas/viajes no operativos y eliminación remota pendiente siguen explícitos; el aviso continúa no ratificado.
- [x] GA4 y GTM permanecen desactivados/no confirmados.
- [x] Validación local: lint, typecheck, build, SDD, audit High y `git diff --check` exitosos; Vitest 19/19; Playwright 27 aprobadas/5 omitidas intencionales.
- [ ] Push del commit LANDING-019 autorizado y CI del SHA resultante revisado.
- [ ] Coordinación ratifica identidad legal/domicilio, contacto, tratamientos y finalidades, proveedores efectivos, retención, derechos y procedimiento de eliminación.
- [ ] Persona autorizada firma aceptación expresa del riesgo residual general de dependencias para el SHA y alcance revisados. CI/audit aprobados no significan riesgo cero.
- [ ] PR #14 permanece Draft hasta aprobación humana; no merge ni producción sin autorización específica.
