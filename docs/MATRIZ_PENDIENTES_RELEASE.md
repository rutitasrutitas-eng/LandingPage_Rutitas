# Matriz de pendientes antes de release

| Área | Estado comprobado | Pendiente | Quién debe confirmar |
| --- | --- | --- | --- |
| Código web | Integrado en rama local; lint, tipos, 17 pruebas unitarias, build y E2E reportados en `REPORTE_INTEGRACION_FINAL.md` | Revisión humana del diff y aprobación de release | Equipo del proyecto |
| GitHub CI | No ejecutado para esta rama; no hubo push | Ejecutar workflow sobre SHA revisado y registrar URL/resultado | Equipo con acceso al repositorio |
| Vercel Preview | No se verificó configuración remota; el primer push puede disparar Preview | Revisar repositorio vinculado, rama de producción, reglas de Preview y exclusión antes de push | Administrador Vercel |
| Aviso de privacidad | Borrador visible, pendiente de aprobación | Responsable/domicilio, datos, finalidades, base/consentimiento, proveedores, medidas, conservación, derechos, contacto y entrada en vigor | Responsable legal y equipo del proyecto |
| Eliminación de cuenta | Página informativa; Android DEMO borra localmente; no se confirmó eliminación remota | Definir flujo, verificación de titularidad, endpoint, datos relacionados, respaldos/retenciones y comprobación de resultado | Responsables Android y Backend; legal |
| Android–Backend | Repositorios cotejados en los SHA citados; integración operativa no confirmada | Validar integración y tratamientos en entorno autorizado de pruebas | Responsables técnicos |
| Google Play | No hay URL pública oficial confirmada; conserva “Próximamente” | Entregar y verificar ficha HTTPS oficial antes de habilitar enlace | Equipo Android/publicación |
| Analytics | Código condicional; pruebas con ID sintético sin solicitudes a Google; no se configuró propiedad real | Confirmar propiedad, consentimiento, eventos, proveedores y texto legal | Administrador GA y responsable legal |
| SDD | Constitución `PENDIENTE_RATIFICACION`; verificador local pasa | Revisión y ratificación humana explícita | Equipo del proyecto/docente según corresponda |
| Accesibilidad | Teclado, foco, siete viewports y texto aumentado probados localmente | Zoom nativo, lectores de pantalla y dispositivos físicos no ejecutados | Revisión QA/accesibilidad |
| Dependencias npm | `npm audit --audit-level=high` ejecutado; reportó 11 entradas high por `picomatch@4.0.7` transitivo | Advisory consultado no declara versión corregida; mantener bloqueado release hasta actualizar con fix compatible o documentar aceptación explícita del riesgo. El `--force` sugerido implica downgrade major de Vitest | Responsables frontend/seguridad |
| Producción | Sin despliegues ni cambios productivos | Aprobación explícita separada y plan de reversión | Responsable de publicación |

Los estados reflejan únicamente evidencia reunida para esta integración; «pendiente» no equivale a aprobado ni a rechazado.
