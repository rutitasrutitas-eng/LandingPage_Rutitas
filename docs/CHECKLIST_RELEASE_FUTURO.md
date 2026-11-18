# Checklist de release futuro — sin autorización de publicación

- [ ] Revisar diff completo y rama local `feature/landing-integracion-final-local`.
- [ ] Publicar la rama solo después de confirmar que el primer push no iniciará un Preview no deseado.
- [ ] Comprobar el workflow GitHub Actions asociado al SHA exacto y revisar cada check/artifact.
- [ ] Revisar visualmente Preview autorizado: escritorio, móvil, rutas directas y recarga; verificar consola y enlaces.
- [ ] Confirmar permisos de acceso, proyecto vinculado, rama de producción y reglas de Preview de Vercel; no inferir controles a partir de una propuesta local.
- [ ] Obtener aprobación legal humana del aviso, del responsable, contacto y tratamientos reales; retirar la etiqueta de borrador solo después de aprobar el texto final.
- [ ] Definir y probar eliminación de cuentas/datos antes de cualquier distribución que lo requiera, incluida verificación de identidad y política de respaldo/retención.
- [ ] Confirmar URL HTTPS oficial de Google Play; sin ella, mantener «Próximamente» y sin QR.
- [ ] Confirmar GA4 y consentimiento con los responsables; no desplegar el ID sin actualizar la documentación legal correspondiente.
- [ ] Repetir `npm audit --audit-level=high` después de una actualización compatible que resuelva GHSA-fc5q-39xc-vjpf, o documentar aceptación explícita del riesgo antes del release. El estado actual reporta 11 hallazgos high por una dependencia transitiva.
- [ ] Obtener autorización humana explícita para producción y registrar plan de reversión.

Este checklist no ejecuta ni autoriza push, PR, Preview, merge o despliegue. La configuración actual de Vercel no fue confirmada en remoto.
