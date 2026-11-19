# Validaciones obligatorias del aviso de privacidad Rutitas

**Estado:** Borrador técnico, no ratificado. Fecha de revisión de repositorios: 17 de noviembre de 2026.

## Verificación técnica vigente en GitHub (solo lectura)

**Corte consultado:** 2026-11-17. Se consultaron PR metadata, diff/archivos en sus SHA de cabecera, rama `main` y check-runs públicos. Las referencias describen código disponible, no una integración operativa ni tratamiento de datos en producción.

### Android

- `main` está en `df87c74b3baea7cc8779019a01a50fd1091d0f4d`.
- [PR #9 — autenticación Backend, Fase A](https://github.com/rutitasrutitas-eng/Rutitas_App/pull/9) sigue **abierto, no fusionado**. Base `main` (`df87c74…`), head `feature/android-backend-phase-a` (`75eb7ca58886fea3f0de13597b6e88b676556849`). El código añade Retrofit/auth, almacenamiento del token, manejo inicial de sesión y pantallas de Backend.
- [PR #10 — perfil, rutas y errores](https://github.com/rutitasrutitas-eng/Rutitas_App/pull/10) sigue **abierto, no fusionado** y depende del PR #9. Base `feature/android-backend-phase-a` (`75eb7ca…`), head `feature/android-backend-phase-b` (`36422554f6880f1a18545d8b1ce83aaed2af9303`). El código añade operaciones de perfil/rutas, pantallas, recuperación de sesión y manejo 401/409/429/503 y Retry-After.
- `android/app/build.gradle.kts` en ambos heads conserva `DEMO_MODE=true`; la URL por defecto para la capa Backend es `https://example.invalid/api/v1/`. La existencia de Retrofit y pantallas conectadas en ramas de PR no implica que las use el flujo predeterminado de la app.
- Los bodies de PR reportan 48 pruebas instrumentadas para #9 y 58 para #10. Check-runs publicados: [Actions #44005616215](https://github.com/rutitasrutitas-eng/Rutitas_App/actions/runs/44005616215) con tres jobs exitosos en PR #9, y [Actions #44020645292](https://github.com/rutitasrutitas-eng/Rutitas_App/actions/runs/44020645292) con tres jobs exitosos en PR #10. La consulta de estado combinado de ambos SHA devolvió `pending`; por ello no se afirma que el estado global requerido de cada PR esté aprobado.
- Las pruebas Android revisadas construyen respuestas HTTP mediante interceptores `OkHttp` y usan `https://example.invalid/api/v1/`; por ejemplo, [BackendRoutesRateLimitTest](https://github.com/rutitasrutitas-eng/Rutitas_App/blob/36422554f6880f1a18545d8b1ce83aaed2af9303/android/app/src/androidTest/java/mx/edu/uttt/rutitas/BackendRoutesRateLimitTest.kt) y [BackendErrorHandlerTest](https://github.com/rutitasrutitas-eng/Rutitas_App/blob/36422554f6880f1a18545d8b1ce83aaed2af9303/android/app/src/androidTest/java/mx/edu/uttt/rutitas/BackendErrorHandlerTest.kt) de PR #10. Sirven para probar lógica del cliente y errores simulados, **no** hacen solicitudes al Backend Rutitas. `DEMO_MODE` se verifica en el [build.gradle.kts del head #10](https://github.com/rutitasrutitas-eng/Rutitas_App/blob/36422554f6880f1a18545d8b1ce83aaed2af9303/android/app/build.gradle.kts).
- El texto del PR #10 deja pendientes las pruebas de los siete endpoints contra un entorno HTTPS autorizado. No encontramos evidencia de llamadas Android–Backend reales ni las ejecutamos.

### Backend

- `main` está en `a95e62e2f0f9fbde46af0144c9fb89c858670c94`; [PR #6 de contrato](https://github.com/rutitasrutitas-eng/Rutitas_BackEnd/pull/6) está **fusionado** en ese commit.
- El Backend mantiene código para los siete endpoints de registro/login/logout, perfil propio GET/PATCH y rutas GET/listado/detalle. La fusión de PR #6 actualizó documentación/contrato; por sí sola no conecta ni valida el cliente Android.
- Los tres check-runs de [Actions #44020116632](https://github.com/rutitasrutitas-eng/Rutitas_BackEnd/actions/runs/44020116632) aparecen exitosos para el SHA de `main`. Son verificaciones de CI del Backend, no pruebas de comunicación Android–servidor.
- El README de esa versión declara que todavía no hay un entorno HTTPS y MongoDB de pruebas autorizado y desplegado. No se localizaron resultados que acrediten los siete endpoints consumidos desde Android contra un servidor real. No se hicieron llamadas a un servicio remoto durante esta revisión.
- La revisión previa de controladores en el mismo SHA no encontró operaciones de viajes/reservas ni `DELETE` de cuenta. La baja DEMO local no demuestra borrado en Backend.

### Qué está y qué no está verificado

| Estado | Evidencia |
| --- | --- |
| Código disponible para revisión | Cambios de Android en PR #9/#10; Backend y contrato en `main` tras PR #6. |
| Integrado en `main` de Android | No: ambos PR Android siguen abiertos. |
| `DEMO_MODE` | `true` en los heads Android #9 y #10. |
| Pruebas simuladas del cliente | Bodies de PR reportan 48 y 58 pruebas instrumentadas; test sources usan interceptores/respuestas fabricadas. CI publica jobs exitosos, pero el estado combinado de cada SHA fue `pending`. |
| Pruebas funcionales contra servidor real | No confirmadas en evidencia consultada; PR #10 las lista como pendientes. No se ejecutaron aquí. |
| Servicio Android–Backend operativo en producción | No demostrado. |
| Aviso legal | Continúa como borrador pendiente de validación humana; no se cambia a definitivo. |

La captura anterior de Android `feature/integracion-android-ci-cd` (`4b2ea8d10f4dbc94830db515a65dd3d00c6a66ad`) queda como **cotejo histórico**, no como referencia vigente de la integración en PR.

### Landing y analítica

- Landing local: no contiene formulario de registro. Analytics requiere ID válido y consentimiento afirmativo.
- No se verificó Measurement ID real, propiedad GA4 ni envío a servicio externo. Las pruebas con ID sintético interceptan las solicitudes externas.

## Decisiones de coordinación para el borrador — 2026-11-17

Estas decisiones actualizan el contenido, pero no sustituyen la validación del tratamiento real ni la aprobación legal.

| Tema | Información indicada por coordinación | Estado y límite |
|---|---|---|
| Responsable operativo | Equipo de Rutitas | Indicado para operación del proyecto; no identifica al responsable legal completo ni a la entidad jurídica. |
| Contacto | `rutitas.rutitas@gmail.com` | Mostrado como enlace `mailto:`; no se verificó administración del buzón ni procedimiento de atención. La Landing no recibe ni almacena solicitudes. |
| Conservación prevista | Hasta 2 meses | Propuesta sujeta a revisión técnica y legal; punto inicial, categorías, respaldos y excepciones por validar. No se afirma que esté implementada. |
| Eliminación | Se desarrollará un botón Android y mecanismo seguro en Backend | Futuro, no operativo. Mark y Ame deben implementar y validar; el borrado DEMO actual es local y no acredita eliminación remota. |
| Política económica | Costo adicional autorizado de $0 MXN | Restricción de Rutitas, no garantía de gratuidad de terceros. No activar servicios con costo potencial sin resolver compatibilidad con esta política. |

### Proveedores: uso comprobado y posibilidades

| Proveedor | Clasificación para este borrador | Evidencia/límite |
|---|---|---|
| Vercel | En uso para alojar la Landing | El sitio y proyecto Vercel existen. Esto no acredita que aloje el Backend ni datos de cuenta. |
| Google Analytics | Código opcional integrado; uso real no confirmado | No se verificó ID GA4 real, propiedad ni recolección activa. La prueba sintética intercepta solicitudes. |
| MongoDB Atlas | Contemplado / pendiente | Hay repositorios MongoDB en el Backend revisado; no se confirmó clúster, cuenta ni conexión Atlas operativa. |
| Microsoft Azure | Contemplado / pendiente | No se presenta como proveedor activo del servicio; confirmar recursos y configuración antes de describir uso. |
| Google Maps Platform | Contemplado / pendiente | No se confirmó uso/transmisión en la app operativa; permisos Android no prueban uso del proveedor. |
| Google Play | Previsto para distribución / pendiente | No se confirmó ficha pública ni distribución activa de la aplicación. |

La matriz anterior separa código/configuración de servicios activados, tratamiento de datos y contratos. Esos hechos requieren confirmación del equipo antes de retirar la condición de borrador.

## Auditoría de dependencias — actualización del 2026-11-17

> **Nota posterior (LANDING-017, 2026-11-19):** las cifras y el estado del advisory descritos en esta sección corresponden exclusivamente a la consulta del 2026-11-17. GitHub retiró `GHSA-fc5q-39xc-vjpf` el 2026-11-18 como no problema de seguridad; `npm audit --json` local del 2026-11-19 reportó 0 vulnerabilidades. Se conserva la evidencia histórica sin mantener este advisory como riesgo activo. El árbol de herramientas aún contiene `picomatch@4.0.7`; revisar el audit de CI por otros avisos.

`npm audit --audit-level=high` consultado el 2026-11-17 terminó con **exit 1 y 11 entradas de severidad alta** en el árbol transitivo, agrupadas alrededor de `picomatch@4.0.7`, `fdir`, `tinyglobby`, Vite/Vitest y las herramientas TypeScript-ESLint. El advisory [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf) identifica ReDoS por patrones extglob repetidos, afecta `picomatch <=4.0.7` y a la hora de consultar aún no lista versión corregida.

El árbol está en dependencias de desarrollo/build; no se encontró `picomatch` en dependencias runtime directas de la Landing. Esto no convierte el hallazgo en resuelto: un proceso local/CI que procese patrones no confiables puede ser relevante. `npm audit fix --force` propone degradar Vitest a `3.1.4` como cambio major; no se ejecutó ni se aplicó override/downgrade por la ausencia de versión corregida declarada y el riesgo de incompatibilidad. Se requiere una actualización compatible cuando el advisory publique un fix y volver a correr `npm ci`, pruebas, build y audit.

## Falta aprobación documentada

- [ ] Identificación legal completa y domicilio del responsable; el Equipo de Rutitas está indicado solo como responsable operativo, y el régimen aplicable sigue por definir.
- [ ] Confirmar atención del correo `rutitas.rutitas@gmail.com`, quién responderá y el procedimiento ARCO/privacidad; la Landing no recibe solicitudes.
- [ ] Inventario de datos exacto de Android y Backend: obligatorios, opcionales y sensibles.
- [ ] Cotejar de nuevo ramas/SHA de Android y Backend al preparar una versión legal para aprobación.
- [ ] Determinar uso verdadero de permisos de ubicación y cámara, fotos, documentos y datos de viajes.
- [ ] Finalidades primarias y secundarias con consentimiento aplicable.
- [ ] Confirmar en uso efectivo y por sistema los proveedores, funciones, ubicación, transferencias y subencargados. Vercel aloja la Landing; GA está integrado pero sin uso real verificado. Azure, Atlas, Maps, medición GA y Play siguen contemplados o pendientes.
- [ ] Validar técnicamente/legalmente la previsión de hasta 2 meses, inicio, categorías, respaldos y excepciones.
- [ ] Mark y Ame deben implementar y validar el botón de Android y el mecanismo seguro en Backend; definir protocolo de identidad/respuesta y probar el borrado remoto antes de presentarlo como disponible.
- [ ] Medidas de seguridad efectivamente implementadas; no declarar certificaciones inexistentes.
- [ ] Fecha de entrada en vigor, control de cambios y aprobación humana del responsable.
- [ ] Concordancia con etiquetas Data safety de Google Play y aviso resumido dentro de la app (funciones futuras; alcance Android por confirmar).
- [ ] Revisar si usuarios menores de edad pueden registrarse y, de ser así, medidas y consentimientos aplicables.

## Fuentes externas de referencia (consultadas nov 2026)

Estas referencias fueron entregadas dentro del paquete; Codex no las revisó como asesoría legal ni las usa para declarar cumplimiento. Deben verificarse por la persona responsable antes de ratificar el texto.

- https://www.ordenjuridico.gob.mx/Documentos/Federal/html/wo125102.html — LFPDPPP actual artículos 15-18 y 21-29; verificar si el responsable es particular.
- https://support.google.com/googleplay/android-developer/answer/10144311 — política de privacidad accesible y Data safety.
- https://support.google.com/googleplay/android-developer/answer/13327111 — enlace web de eliminación y mecanismo dentro de app.
- https://legal.blablacar.com/es-mx/privacy-policy/ — categorías por comunidad/viajes.
- https://privacycenter.didiglobal.com/MX/privacy-notice/e092a6655fadcc7f615083bd284e1a22/es_MX — referencia sector transporte; no copiar texto ni asumir tratamientos de DiDi.
