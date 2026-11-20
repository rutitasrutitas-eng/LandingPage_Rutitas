# LANDING-019 — cierre factual y candidata de privacidad

**Estado:** candidata local en revisión; el aviso continúa como **BORRADOR NO RATIFICADO**.
**Rama:** `feature/landing-integracion-final-local`
**PR:** [#14 Draft](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/pull/14)
**Base remota previa:** `c11fcf1e549576b16675a0da54d093d2e335fa25`
**HEAD local antes de LANDING-019:** `e3eab7e26f8ad9148a2b9d134939432340ecad7e`
**Commit de contenido LANDING-019:** `6a1baf0e6a3580a3162480f0a25a40b6b765cb50`
**Costo adicional autorizado:** `$0 MXN`. No activar servicios ni consumir créditos.

## Corrección factual

El corte de `docs/VALIDACIONES_PRIVACIDAD.md` del 2026-11-17 se conserva como evidencia histórica. El 2026-11-19 coordinación comunicó que infraestructura reportó el despliegue y verificación de siete endpoints técnicos del Backend en Microsoft Azure con MongoDB Atlas. Esta actualización no es una inspección directa de Azure/Atlas ni prueba que se hayan recibido o almacenado datos personales.

La candidata distingue:

- Infraestructura Backend reportada como desplegada en Azure con MongoDB Atlas; Vercel aloja la Landing.
- Siete endpoints técnicos de registro/login/logout, perfil propio GET/PATCH y catálogo/listado/detalle de rutas. El despliegue no demuestra disponibilidad pública ni uso por Android.
- El tratamiento efectivo de datos personales requiere comprobación independiente de solicitudes y almacenamiento reales; no se declara que exista ni que no exista.
- La versión Android revisada mantiene `DEMO_MODE=true`; los datos DEMO son locales y las pruebas conocidas usan respuestas simuladas.
- Reservas y viajes multiusuario no son funciones operativas confirmadas.
- La eliminación remota sigue pendiente; los endpoints reportados no implementan la baja. `/eliminar-cuenta` permanece informativa y no recibe solicitudes.
- GA4 y GTM continúan desactivados/no confirmados; el código opcional de GA4 no es evidencia de medición real.

## Campos de aprobación humana

`docs/APROBACION_LEGAL_PENDIENTE.md` registra los puntos que debe ratificar coordinación/responsable: identidad legal y domicilio; contacto atendido; categorías y tratamientos efectivos por sistema; finalidades y fundamento; proveedores, ubicaciones y transferencias; conservación prevista de hasta dos meses y sus criterios; derechos y proceso de atención; y procedimiento de eliminación. El plazo futuro de recuperación de siete días comienza únicamente tras confirmación del Backend y no equivale al plazo general de conservación.

No se inventaron datos legales, representación, domicilio, contratos, bases legales o procedimientos. La política de $0 MXN no se presenta como garantía de gratuidad de proveedores.

## Aprobaciones y riesgo

- No se retiró la advertencia de borrador ni se declaró aprobación legal.
- No se afirmó que la eliminación remota o su canal web estén operativos.
- La constancia `docs/ACEPTACION_RIESGO_DEPENDENCIAS_PENDIENTE.md` corresponde al SHA/CI de este cierre tras su actualización, pero permanece sin firma. CI y `npm audit` aprobados no significan riesgo cero.
- No se activaron GA4, GTM ni servicios facturables.

## Validaciones y entrega

Se registran aquí únicamente resultados efectivamente ejecutados para este cambio:

| Validación | Resultado |
|---|---|
| `npm run lint` | Exit 0. |
| `npm run typecheck` | Exit 0. |
| `npm run test` | Exit 0; 19/19 aprobadas, 2 archivos. Una aserción obsoleta falló inicialmente; se actualizó para comprobar la nueva distinción factual y la repetición pasó. |
| `npm run test:e2e` | Exit 0; 27 aprobadas, 5 omitidas intencionalmente de 32. Dos expectativas antiguas fallaron en la primera corrida; se actualizaron para validar Azure/Atlas reportado y la falta de evidencia de tratamiento; la repetición pasó. |
| `npm run build` | Exit 0; Vite 6.4.5, 37 módulos. |
| `npm run sdd:verify` | Exit 0; 30 documentos, 29 requisitos 001, 14 requisitos 002, 8 requisitos 003 y 9 requisitos 004 trazados. |
| `npm audit --audit-level=high` | Exit 0; 0 vulnerabilidades reportadas. No es garantía de riesgo cero. |
| `git diff --check` | Exit 0; solo avisos de normalización LF/CRLF. |
| CI del SHA `6a1baf0e6a3580a3162480f0a25a40b6b765cb50` | Run [44673981352](https://github.com/rutitasrutitas-eng/LandingPage_Rutitas/actions/runs/44673981352) completado con éxito. Pasaron Gitleaks, instalación lockfile, SDD, lint, typecheck, build, unitarias/integración, Chromium, browser tests y `npm audit`. Vercel status `Canceled by Ignored Build Step`; Preview omitida, no build. |

Cambios limitados a copy de privacidad/eliminación, documentación factual, aprobación y trazabilidad SDD. Se excluyen `LANDING_013.diff`, `evidence/` y archivos temporales. No se autoriza merge, despliegue productivo, activación de servicios ni cambio de configuración Vercel.

La lectura económica de Vercel que habilitó el PR observó Hobby y ausencia de método de pago/facturas, con AI Gateway sin saldo ni recarga automática. Para el push LANDING-019, Vercel registró una Preview omitida por Ignored Build Step, sin build. No se volvió a abrir Billing/Usage tras este push; no se afirma una lectura nueva de cargos o consumo agregado. No se consumieron créditos ni se activaron servicios.

### Archivos de esta entrega

- **Contenido web:** `src/PrivacyRutitas.tsx`, `src/LegalPages.tsx`.
- **Pruebas:** `src/App.test.tsx`, `e2e/landing.spec.ts`.
- **Privacidad/aprobación:** `docs/AVISO_PRIVACIDAD_RUTITAS_BORRADOR.md`, `docs/VALIDACIONES_PRIVACIDAD.md`, `docs/PENDIENTES_LEGALES_RUTITAS.md`, `docs/APROBACION_LEGAL_PENDIENTE.md`.
- **Riesgo:** `docs/ACEPTACION_RIESGO_DEPENDENCIAS_PENDIENTE.md` (plantilla sin firma).
- **SDD y memoria:** `specs/001-landing-compliance/spec.md`, `plan.md`, `tasks.md`, `docs/matriz-trazabilidad.md`, `docs/CHECKLIST_RELEASE_FUTURO.md`, `Memoria.md`, `docs/REPORTE_INTEGRACION_FINAL.md`.
- **Informes de cierre:** `LANDING_018_LANZAMIENTO.md` (conciliación previa) y este informe.
