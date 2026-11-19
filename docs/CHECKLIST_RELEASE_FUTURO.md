# Checklist de release futuro — sin autorización de publicación

- [ ] Revisar diff completo y rama local `feature/landing-integracion-final-local`.
- [ ] Con autorización humana específica, hacer primer push controlado; `Only build production` está guardado, pero no se probó experimentalmente el resultado de push/PR.
- [ ] Comprobar el workflow GitHub Actions asociado al SHA exacto y revisar cada check/artifact.
- [ ] Revisar visualmente Preview autorizado: escritorio, móvil, rutas directas y recarga; verificar consola y enlaces.
- [x] LANDING-017 lectura en Edge: Hobby activo, sin método de pago; AI Gateway saldo $0/Auto-reload Off; `Priority projects` marcado activo con tarifa `$200/mo per project`, efecto económico bajo Hobby no verificado. Ver `LANDING_017_PUBLICACION_OFICIAL.md`.
- [ ] Resolver con administración el add-on `Priority projects` (confirmar si genera obligación en Hobby o autorizar su desactivación); repetir el preflight económico. No hacer push ni PR mientras siga ambiguo.
- [ ] Aceptar humanamente que Hobby no ofrece hard cap visible para gasto; mantener plan Hobby, no agregar método de pago, no habilitar add-ons ni consumir créditos promocionales. No es posible garantizar costo adicional cero futuro con un límite técnico en la cuenta.
- [ ] Tras el push autorizado, revisar Deployments de inmediato y confirmar que no se haya creado Preview; la configuración sugiere que commits no productivos se omiten, pero no hubo prueba experimental.
- [ ] Obtener aprobación legal humana del aviso, del responsable, contacto y tratamientos reales; retirar la etiqueta de borrador solo después de aprobar el texto final.
- [ ] Definir y probar eliminación de cuentas/datos antes de cualquier distribución que lo requiera, incluida verificación de identidad y política de respaldo/retención.
- [ ] Confirmar URL HTTPS oficial de Google Play; sin ella, mantener «Próximamente» y sin QR.
- [ ] Confirmar GA4 y consentimiento con los responsables; no desplegar el ID sin actualizar la documentación legal correspondiente.
- [x] Conciliación LANDING-017: GitHub retiró `GHSA-fc5q-39xc-vjpf` el 2026-11-18 como no-seguridad; `npm audit --json` actual reportó 0. El paquete sigue en dev/build, sin hallazgo activo de ese advisory.
- [ ] Repetir el audit completo en GitHub Actions del PR y revisar cualquier advisory nuevo. La corrida local no acredita CI.
- [ ] Antes de liberar, verificar por HTTP autorizado `X-Robots-Tag: noindex, follow` en `/privacidad`, `/privacidad/`, `/eliminar-cuenta` y `/eliminar-cuenta/`; la prueba actual valida únicamente `vercel.json`, no el comportamiento desplegado.
- [ ] Obtener autorización humana explícita para producción y registrar plan de reversión.

Este checklist no ejecuta ni autoriza por sí solo operaciones remotas. Coordinación autorizó condicionalmente push/PR Draft, pero la revalidación más reciente falló: `Priority projects` aparece activo con tarifa mensual y su efecto en Hobby es incierto. No hacer push/PR hasta resolverlo y repetir el gate. Además, Hobby carece de hard cap visible y el comportamiento Preview ante push no se probó. El advisory retirado no es un bloqueo vigente; revisión legal, ratificación SDD y otros gates siguen pendientes.
