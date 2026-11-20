# Borrador no publicado — Pull Request LANDING-008

**Título:** LANDING-004/005/006: preparar revisión integrada de Rutitas Landing

**Base:** `main` (`0481387180eab973b7c0416b073099638a3f7328`)

**Compare:** `feature/landing-integracion-final-local`; HEAD de código `8544401a6ab4713aded5e3024ee9fcdc58793472`. Las adiciones documentales LANDING-008 están en el árbol de trabajo y todavía no tienen commit.
**Estado:** borrador para copiar/revisar; no se creó en GitHub.

## Resumen

- Conserva y reúne los commits de LANDING-004 (accesibilidad/estabilidad), LANDING-005 (presentación/FAQ) y LANDING-006 (aviso de privacidad en borrador).
- Mantiene `/eliminar-cuenta` informativa, consentimiento de Analytics opt-in y configuración condicional de Google Play.
- Agrega evidencia de captura de portada determinista y documentos de revisión; no implementa endpoints, viajes, reservas o cambios Android/Backend.
- Adjunta `docs/REPORTE_SEGURIDAD_DEPENDENCIAS.md` como análisis aceptado para revisión técnica; no altera dependencias ni suprime el fallo de audit.

## Validación local

- Lint y typecheck: exit 0.
- Vitest: 17/17.
- Playwright sin ID de GA: 23 pasadas, 3 omisiones intencionales.
- Playwright con ID sintético: 25 pasadas, 1 omisión intencional; sin Analytics real.
- Build: exit 0 con Vite 6.4.5.
- SDD: exit 0; 30 documentos y trazabilidad verificada.
- `npm audit --audit-level=high`: exit 1, 11 hallazgos high por GHSA `picomatch`; el detalle y las mitigaciones están en `docs/REPORTE_SEGURIDAD_DEPENDENCIAS.md`.
- `git diff --check`: consultar la evidencia final de LANDING-008.
- Ninguno de los resultados locales acredita un check de GitHub Actions para este SHA.

## Capturas adjuntas

- `evidence/screenshots/landing-home-desktop.png`
- `evidence/screenshots/landing-home-mobile.png`
- `evidence/screenshots/landing-faq-desktop.png` y `landing-faq-mobile.png`
- `evidence/screenshots/landing-privacy-desktop.png` y `landing-privacy-mobile.png`
- `evidence/screenshots/landing-home-desktop-decoded.png` (prueba de regresión directa/reload)

## Riesgos y bloqueos

- **Bloqueo para release:** el `npm audit` completo permanece en exit 1 con 11 hallazgos high en dependencias de desarrollo/CI. La aceptación formal del riesgo residual por la persona responsable sigue pendiente; no se autoriza release hasta que exista un parche compatible o aceptación humana documentada.
- Aviso de privacidad es borrador pendiente de datos y aprobación legal. La Constitución SDD está `PENDIENTE_RATIFICACION`.
- Los PR Android #9/#10 y el estado Backend se documentan como código/PR; no se afirma integración remota probada ni servicio productivo.
- Vercel, CI, GA real, Google Play y la operación de eliminación remota requieren verificaciones externas.

## Antes de fusionar

- Comparar explícitamente `main...feature/landing-integracion-final-local`; revisar el diff completo y confirmar que 004/005/006 permanecen en el historial.
- Ejecutar los checks en GitHub sobre el SHA enviado y publicar artefactos; el job de audit actualmente puede fallar por el advisory.
- Requerir revisión de frontend, seguridad (incluida la aceptación o resolución formal del riesgo) y privacidad/legal.
- Confirmar política Vercel antes del primer push, pues el push por sí solo puede iniciar una Preview.
- Mantener el texto legal como borrador y no promover a producción hasta aprobación.

## Checklist de revisión

- [ ] El destino de comparación es `main`.
- [ ] El historial LANDING-004/005/006 se conserva.
- [ ] Se revisó el paquete de evidencia y las capturas.
- [ ] GitHub Actions ejecutó el SHA del PR; el resultado de audit se trata según política explícita y no se oculta.
- [ ] Existe aceptación humana formal del riesgo residual o un fix compatible antes de release.
- [ ] Privacidad/legal y ratificación SDD aprobadas por responsables humanos.
- [ ] Administrador confirmó comportamiento de Vercel antes del primer push.

## Actualización LANDING-017 — estado de seguridad/publicación al 2026-11-19

La referencia de 11 entradas High por `GHSA-fc5q-39xc-vjpf` en este borrador corresponde a una ejecución histórica. GitHub retiró el advisory el 2026-11-18 porque no era un problema de seguridad; `npm audit --json` actual terminó exit 0 con 0 vulnerabilidades. El paquete `picomatch@4.0.7` permanece en el grafo dev/build y no se modificó.

Este borrador no se publicó. `origin/main` está en `80ef7b1388aa709dbef692154c66b0c5a9966715`, pero el preflight Vercel/costo no pudo completarse: API 403 y Edge no accesible mediante Computer Use por incertidumbre de URL. No se hizo push/PR porque no se pudo confirmar plan, uso/cuotas/créditos ni el ajuste actual de Preview. Ver `LANDING_017_PUBLICACION_OFICIAL.md`; no declarar listo/publicado hasta pasar ese gate.
