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
- [ ] Repetir `npm audit --audit-level=high` después de una actualización compatible que resuelva GHSA-fc5q-39xc-vjpf, o documentar aceptación explícita del riesgo antes del release. El estado actual reporta 11 entradas high del mismo advisory transitivo.
- [ ] Antes de liberar, verificar por HTTP autorizado `X-Robots-Tag: noindex, follow` en `/privacidad`, `/privacidad/`, `/eliminar-cuenta` y `/eliminar-cuenta/`; la prueba actual valida únicamente `vercel.json`, no el comportamiento desplegado.
- [ ] Obtener autorización humana explícita para producción y registrar plan de reversión.

Este checklist no ejecuta ni autoriza push, PR, Preview, merge o despliegue. Los ajustes del proyecto fueron observados en Edge el 2026-11-18; facturación, consumo y garantía de costo cero no se verificaron en esta actividad. El riesgo de dependencias requiere aceptación humana antes del release.
