# Constancia de riesgo residual de dependencias — pendiente

**Estado:** PENDIENTE DE ACEPTACIÓN HUMANA. No constituye aprobación ni autorización de release.

## Evidencia técnica

- CI de GitHub Actions para el SHA que se indique en `LANDING_019_CIERRE_CONTENIDO.md` completó satisfactoriamente sus checks, incluido `npm audit`.
- El audit de CI aprobado indica que, con el lockfile y la base de avisos usados por esa ejecución, npm no reportó un hallazgo que hiciera fallar el comando. No demuestra ausencia de toda vulnerabilidad ni riesgo cero.
- El advisory histórico `GHSA-fc5q-39xc-vjpf` fue retirado por GitHub y no se presenta como vulnerabilidad activa. La aceptación de esta constancia se refiere al riesgo residual general de dependencias y cadena de suministro, no a afirmar que ese advisory siga vigente.
- La evidencia y el árbol de dependencias deben revisarse de nuevo si cambia el lockfile, aparece un aviso nuevo o falla CI.

## Declaración para revisión y firma

Yo, ______________________________, con responsabilidad de ______________________________, confirmo que revisé `docs/REPORTE_SEGURIDAD_DEPENDENCIAS.md`, el resultado de CI del SHA ______________________________ y el estado del audit reportado.

Entiendo que el éxito de CI y `npm audit` no equivale a riesgo cero y que pueden aparecer vulnerabilidades nuevas o riesgos no detectados por las herramientas ejecutadas. Tras revisar el riesgo residual general descrito, ( ) lo acepto para el alcance ______________________________, con estas condiciones/mitigaciones: ______________________________________________; o ( ) no lo acepto y solicito mantener bloqueado el release.

Esta decisión no aprueba por sí sola los textos legales, no convierte el PR en Ready y no autoriza merge ni despliegue.

**Nombre:** ______________________________
**Cargo/autoridad:** ______________________________
**Fecha:** ______________________________
**Firma o constancia verificable:** ______________________________

No marcar la casilla ni completar la firma en nombre de otra persona.
