# Checklist de release futuro — sin autorización de publicación

- [ ] Revisar diff completo y rama local `feature/landing-integracion-final-local`.
- [ ] Publicar la rama solo después de confirmar que el primer push no iniciará un Preview no deseado.
- [ ] Comprobar el workflow GitHub Actions asociado al SHA exacto y revisar cada check/artifact.
- [ ] Revisar visualmente Preview autorizado: escritorio, móvil, rutas directas y recarga; verificar consola y enlaces.
- [x] Revisión de solo lectura en Edge: repo correcto conectado, `main` como rama productiva, Ignored Build Step `Automatic`, opción PR-only disponible pero no activada, Vercel Authentication / Require Log In y Standard Protection activos; sección de excepciones sin dominios listados. Ver `LANDING_011_SEGURIDAD_Y_RELEASE.md`.
- [ ] Confirmar con el administrador el estado efectivo de Preview Branch Tracking y establecer una política compatible con $0 MXN antes del primer push; el push actual puede iniciar Preview.
- [ ] Obtener aprobación legal humana del aviso, del responsable, contacto y tratamientos reales; retirar la etiqueta de borrador solo después de aprobar el texto final.
- [ ] Definir y probar eliminación de cuentas/datos antes de cualquier distribución que lo requiera, incluida verificación de identidad y política de respaldo/retención.
- [ ] Confirmar URL HTTPS oficial de Google Play; sin ella, mantener «Próximamente» y sin QR.
- [ ] Confirmar GA4 y consentimiento con los responsables; no desplegar el ID sin actualizar la documentación legal correspondiente.
- [x] Conciliación LANDING-017: GitHub retiró `GHSA-fc5q-39xc-vjpf` el 2026-11-18 como no-seguridad; `npm audit --json` actual reportó 0. El paquete sigue en dev/build, sin hallazgo activo de ese advisory.
- [ ] Repetir el audit completo en GitHub Actions del PR y revisar cualquier advisory nuevo. La corrida local no acredita CI.
- [ ] Antes de liberar, verificar por HTTP autorizado `X-Robots-Tag: noindex, follow` en `/privacidad`, `/privacidad/`, `/eliminar-cuenta` y `/eliminar-cuenta/`; la prueba actual valida únicamente `vercel.json`, no el comportamiento desplegado.
- [ ] Obtener autorización humana explícita para producción y registrar plan de reversión.

Este checklist no ejecuta ni autoriza por sí solo push, PR, Preview, merge o despliegue. La verificación Vercel de LANDING-017 quedó bloqueada: conector 403 y Edge no accesible mediante Computer Use por incertidumbre de URL. Plan, cuotas, créditos, costo y ajuste actual `Only build production` no se pudieron confirmar; no publicar hasta resolver este gate. El advisory retirado no es un bloqueo vigente; revisión legal, ratificación SDD y otros gates siguen pendientes.
