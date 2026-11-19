# LANDING-013 — eliminación programada de cuentas

**Fecha:** 18 de noviembre de 2026

- **Repositorio/rama:** `rutitasrutitas-eng/LandingPage_Rutitas` / `feature/landing-integracion-final-local`
- **HEAD de entrada de LANDING-013:** `ced61fff15c31001af03621bbd276c7e7e82cdb7` (el estado sin commit corresponde al cierre de esa actividad)
- **Estado del aviso:** **BORRADOR NO RATIFICADO**
- **Costo adicional autorizado:** $0 MXN; sin servicios externos, instalación ni consumo de créditos.

## Cambios en las páginas

### `/eliminar-cuenta`

- Explica que Android tendrá una opción de solicitud futura y que el flujo remoto requiere implementación y validación de Mark y Ame. La baja de Android DEMO sigue siendo solo local.
- Presenta un procedimiento web por correo como **propuesta todavía no habilitada**: al aprobarse, el equipo recibiría la solicitud, una persona designada verificaría titularidad con un método proporcional y habría seguimiento humano. El correo por sí solo no demuestra identidad ni confirma la solicitud.
- Advierte no enviar contraseñas, tokens o documentos personales innecesarios. No implementa formulario, endpoint ni mecanismo que guarde o confirme solicitudes.
- Explica la política futura de recuperación de siete días, iniciada únicamente después de que Backend confirme una solicitud validada. El acceso normal se bloquearía durante el periodo. La cancelación está propuesta, pero sus mecanismos deben definirse y probarse.
- Describe como objetivo futuro la eliminación definitiva de la cuenta y datos personales asociados, con excepciones legales documentadas y acotadas. Inventario, respaldo, plazos y constancia del resultado requieren validación.

### `/privacidad`

- Separa los hasta dos meses de conservación general prevista, sujetos a revisión, de los siete días de recuperación solicitada.
- Describe bloqueo temporal, eventual cancelación, borrado final, excepciones legales y respaldos como política prevista, no como operación demostrada.
- Mantiene la advertencia de borrador no ratificado y los pendientes de responsable legal/domicilio, tratamiento de datos, servicios, plazos, excepciones y revisión legal.

## Vía web y estado de Google Play

La política oficial de Google Play para apps que permiten crear cuentas contempla una opción de solicitud dentro de la aplicación y un recurso web accesible fuera de ella, además de eliminación de los datos asociados salvo retenciones legítimas debidamente informadas. El código local de `/eliminar-cuenta` prepara instrucciones de estado, pero **no permite presentar una solicitud todavía**; por tanto, no se declara que Rutitas cumpla operativamente ese requisito ni que el enlace esté listo para Play. Coordinación confirmó que Mark, Ame, Ulises y la coordinación de Rutitas atenderán conjuntamente los mensajes recibidos en `rutitas.rutitas@gmail.com`. Se recomienda asignar internamente una persona responsable por solicitud para verificar el seguimiento y cierre, con apoyo del equipo. Sigue pendiente definir y aprobar el proceso de verificación y seguimiento; este acuerdo no habilita el canal.

## Dependencias y decisiones pendientes

- **Mark y Ame:** implementar solicitud autenticada y confirmada por Backend, bloqueo de acceso normal durante siete días, mecanismo de cancelación, ejecución definitiva, tratamiento de datos vinculados y evidencia de pruebas; coordinar el control de solicitud en Android.
- **Responsabilidad compartida de atención:** coordinación confirmó que Mark, Ame, Ulises y la coordinación atenderán conjuntamente las solicitudes recibidas en el correo oficial. Se recomienda asignar un responsable por cada solicitud para dar seguimiento, documentar validación y confirmar el cierre; el equipo restante puede apoyar. El procedimiento todavía no está habilitado.
- **Coordinación y revisión técnica/legal:** aprobar verificación de titularidad con datos mínimos, acuse y referencia de seguimiento, mecanismo de cancelación y notificaciones. Inventariar datos asociados (perfil, rutas, fotos/documentos y registros), qué se borra de sistemas activos y respaldos, excepciones legítimas con fundamento y duración, plazo general de hasta dos meses y comunicación del resultado.
- Completar identificación legal y domicilio del responsable, confirmar tratamientos y proveedores reales, y ratificar legalmente el aviso. La Constitución SDD sigue pendiente de ratificación humana.
- **Seguridad:** el riesgo High `GHSA-fc5q-39xc-vjpf` de `picomatch` no se volvió a auditar ni se ocultó; sigue pendiente de corrección compatible o aceptación formal conforme al reporte previo.

## Validaciones locales

| Comprobación | Resultado |
|---|---|
| Unitarias | `npm run test -- --reporter=dot`: exit 0; 2 archivos, 17/17 tests. |
| E2E afectadas | `npm run test:e2e -- e2e/landing.spec.ts`: exit 0; 19 passed, 1 skipped intencionalmente en mobile-chromium para caso desktop-only. Ruta directa/recarga de privacidad y eliminación, contenido, ausencia de formulario, y siete viewports de privacidad incluidos. |
| Lint | `npm run lint`: exit 0. |
| Typecheck | `npm run typecheck`: exit 0. |
| Build | `npm run build`: exit 0; Vite 6.4.5, 36 módulos. |
| SDD | `npm run sdd:verify`: exit 0; 30 documentos, 24 requisitos 001, trazabilidad 14/8/9 para specs 002/003/004. |
| Formato | `git diff --check`: exit 0; avisos Git de conversión CRLF/LF, sin errores de whitespace. |

No se ejecutó `npm audit` de nuevo, no se instalaron dependencias y no se tocaron lockfiles. Las pruebas validan copy/rutas en local; **no validan un servidor Backend real, Google Play Console, la entrega de correo ni el borrado remoto**.

## Archivos de LANDING-013

- `src/LegalPages.tsx`
- `src/PrivacyRutitas.tsx`
- `src/App.test.tsx`
- `e2e/landing.spec.ts`
- `specs/001-landing-compliance/spec.md`
- `specs/001-landing-compliance/plan.md`
- `specs/001-landing-compliance/tasks.md`
- `specs/001-landing-compliance/checklist.md`
- `docs/matriz-trazabilidad.md`
- `docs/PENDIENTES_LEGALES_RUTITAS.md`
- `docs/pruebas.md`
- `Memoria.md`
- `LANDING_013_ELIMINACION_CUENTAS.md`
- `LANDING_013.diff` (patch del diff rastreado completo; incluye cambios locales anteriores LANDING-011/012 que se conservaron, no solo LANDING-013)

Los cambios documentales de LANDING-011/012 y otros que ya estaban sin commit se conservaron. No se modificaron `package.json`, lockfile, `vercel.json`, ajustes remotos, Backend o Android.

## Referencia de política

- [Google Play — Account Deletion Requirement](https://support.google.com/googleplay/android-developer/answer/10144311?hl=en): exige, en apps que permitan crear cuentas, un medio interno y un recurso web para iniciar la solicitud, eliminar los datos asociados y revelar retenciones legítimas.

## Estado de publicación

Todo el cambio es local. No se creó commit y el HEAD permanece en el SHA de referencia. No hubo push, PR, merge, Preview, deployment, cambio de Vercel, activación de servicios ni cargos. No presentar el aviso como definitivo ni la eliminación web/remota como funcional hasta completar los puntos anteriores y obtener aprobación humana.
### Addendum LANDING-013 — responsabilidad compartida de atención

Coordinación confirmó internamente que Mark, Ame, Ulises y la coordinación de Rutitas atenderán conjuntamente los mensajes recibidos en `rutitas.rutitas@gmail.com`. Se recomienda designar dentro del equipo a una persona responsable por cada solicitud para registrar su seguimiento y cierre. Este acuerdo de atención conjunta no habilita las solicitudes de eliminación: siguen pendientes la verificación de titularidad, el procedimiento, el seguimiento humano y la implementación del Backend. El contenido público usa solamente «Equipo de Rutitas» y el correo oficial, sin nombres personales; el correo no inicia el plazo ni confirma una eliminación.
