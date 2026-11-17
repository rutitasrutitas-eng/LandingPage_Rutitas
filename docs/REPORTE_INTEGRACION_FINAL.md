# Reporte de integración local — Rutitas Landing

**Fecha:** 2026-11-17  
**Rama:** `feature/landing-integracion-final-local`  
**Estado:** integración local completada; no publicada.

## Historial integrado

- Base: LANDING-004 `d96103cb4a3c477c4e3e2cffd2ccec0a8b75b5e6`.
- LANDING-005: `6dcb89df1f4d8bb73818b6d678818956d785afc0` (`feat(landing): clarify project and add accessible FAQ`).
- LANDING-006: `fc43246bb401a9991114376ca78665cc922a6ebb` (`fix(privacy): verify demo scope and analytics flow`).
- Merge LANDING-005: `e46daf59b1b3222715eca2b467cdb07829e71bc9`.
- Merge LANDING-006: `5ef79c6a17b551dbf6edb7af933a8a313b2276ba`.
- `main` no se modificó; su referencia local observada es `0481387180eab973b7c0416b073099638a3f7328`.

Los commits de ambas ramas se conservaron mediante merges locales. Los conflictos documentales se resolvieron manteniendo trazabilidad de requisitos 001–004 y marcando las observaciones iniciales reemplazadas como históricas.

## Resultado funcional

- La portada mantiene marca, fotografía y estructura; la información presenta el piloto como propuesta sujeta a aprobación.
- El modal de proyecto incluye diez preguntas accesibles por teclado; la FAQ no promete viajes o reservas disponibles.
- `/privacidad` usa el diseño recibido y conserva la marca visible de borrador. Distingue la Landing estática, Android DEMO local y código de Backend revisado sin afirmar operación desplegada.
- `/eliminar-cuenta` continúa informativa: no ofrece formulario falso ni asegura eliminación remota.
- La preferencia de Analytics reside en el footer, sin tapar los enlaces legales en pantallas estrechas. Los E2E usan ID sintético y bloquean solicitudes reales a Google.
- README, Memoria, SDD, matriz, checklist y documentación legal registran evidencia y decisiones pendientes.

## Pruebas ejecutadas en la integración

| Validación | Resultado |
| --- | --- |
| `npm ci` | exit 0; 243 paquetes; 0 vulnerabilidades reportadas por instalación |
| `npm run lint` | exit 0 |
| `npm run typecheck` | exit 0 |
| `npm run test` | 17/17 pasaron |
| `npm run test:e2e` sin ID de GA | 22 pasaron; 2 omitidas intencionalmente por falta de ID sintético |
| `VITE_GA_MEASUREMENT_ID=G-SYNTHETIC123 npm run test:e2e` | 24/24 pasaron; el escenario dedicado interceptó GTM |
| `npm run build` | exit 0; Vite 6.4.5; JS 255.68 kB (79.25 kB gzip), CSS 20.88 kB (5.35 kB gzip) |
| `npm run sdd:verify` | exit 0; 30 documentos, trazabilidad de requisitos 001–004 |
| `npm audit --audit-level=high` | exit 0; 0 vulnerabilidades reportadas |
| `git diff --check` | exit 0 antes del commit de integración |

La salida de E2E cambia al combinar LANDING-005 y LANDING-006: la corrida sintética independiente de LANDING-006 registró 18/18 y LANDING-005 16 pasadas más 2 omisiones; la suite combinada registró 24/24 con ID sintético. No se usó credencial ni Measurement ID real.

## Límites de la evidencia

- Son ejecuciones locales. No hubo workflow de GitHub para esta rama, por lo que no se declara validación CI.
- No se consultó ni modificó Vercel remoto; no hubo Preview, despliegue, push o PR.
- Android y Backend se inspeccionaron en modo solo lectura en los SHA indicados en `docs/VALIDACIONES_PRIVACIDAD.md`; no se compilaron ni probaron contra servicios.
- Constitución SDD, piloto, texto legal, contacto, conservación, proveedores, tratamiento real, mecanismo remoto de eliminación, propiedad GA y ficha Play requieren validación humana o evidencia externa.

## Pendientes de revisión

Consultar `docs/PENDIENTES_LEGALES_RUTITAS.md` y `docs/PLAN_REVISION_PUBLICACION.md`. No retirar la marca de borrador ni publicar hasta que las personas responsables confirmen los datos y autoricen explícitamente la publicación.
