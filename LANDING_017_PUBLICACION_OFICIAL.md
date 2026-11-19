# LANDING-017 — publicación oficial controlada

## Estado: **BLOQUEADA — gate económico/Vercel sin verificar**

- **Repositorio:** `rutitasrutitas-eng/LandingPage_Rutitas`
- **Rama:** `feature/landing-integracion-final-local`
- **SHA de entrada de LANDING-017:** `f1cefb4a28e3a700e234720c799949ce0615d8a3`
- **SHA candidato a publicación (código integrado):** `f1cefb4a28e3a700e234720c799949ce0615d8a3` (sin cambios de código en esta tarea).
- **Commit documental LANDING-017:** incluye este informe; el SHA completo se registra en la entrega final.
- **`origin/main`:** `80ef7b1388aa709dbef692154c66b0c5a9966715`
- **Dominio esperado:** `https://landing-page-rutitas.vercel.app/`
- **Costo adicional autorizado:** $0 MXN; no se consumieron créditos.

No se hizo push, PR, merge remoto, CI, Preview ni despliegue. No hay enlace de PR, SHA de deployment, URL verificada en este ciclo ni aprobación de release. El commit de documentación local se reporta en la entrega; no se incluye su propio hash dentro de sí mismo.

## Preflight Git y contenido

- Antes de las modificaciones documentales, HEAD coincidía con `f1cefb4a28e3a700e234720c799949ce0615d8a3`, rama correcta, sin cambios tracked/staged y `origin/main` en el SHA esperado.
- `git fetch origin main` confirmó que `origin/main` seguía en `80ef7b1388aa709dbef692154c66b0c5a9966715`.
- Los cinco commits LANDING-011–016 y LANDING-004/005/006 se conservaron. `evidence/` y `LANDING_013.diff` siguen sin seguimiento y se preservaron.
- La inspección de nombres de archivos encontró `.env.example`, no `.env.local`, llaves PEM/PFX ni archivos con nombres de credenciales. Gitleaks no está instalado localmente: no se afirma una revisión exhaustiva de secretos. La acción Gitleaks fijada en GitHub Actions no se ejecutó porque no se abrió PR.
- No se cambiaron dependencias, archivos de código, configuración remota ni archivos de producto.

## Conciliación de seguridad

La página oficial de [GitHub Advisory Database](https://github.com/advisories/GHSA-fc5q-39xc-vjpf) fue consultada directamente. `GHSA-fc5q-39xc-vjpf` aparece **Withdrawn**, retirado el 2026-11-18 con la explicación de que no es un problema de seguridad. Las 11 entradas High de LANDING-011 se conservan como evidencia histórica de cuando el aviso estaba activo; no se presentan como vulnerabilidades vigentes ni se requiere aceptar un riesgo retirado.

| Comprobación | Resultado ejecutado |
|---|---|
| `npm audit --json` | Exit 0; 0 vulnerabilidades (0 info, low, moderate, high y critical); 283 dependencias contabilizadas. |
| `npm ls picomatch --all` | Exit 0; `picomatch@4.0.7` sigue bajo Vite, fdir, tinyglobby y Vitest. No se modificó el lockfile. |
| Dependencias forzadas o masivas | Ninguna. No se usó `npm audit fix --force` ni se cambiaron Vite, TypeScript o React plugin. |

La continuidad del paquete en el árbol de herramientas no contradice la retirada del advisory. El audit de CI del PR deberá confirmar el estado y detectar otros advisories, si aparecieran.

## Gate Vercel y costo

La lectura por conector oficial de Vercel al proyecto `prj_VPzi04e6hKw3Vgbfua2KesKGlhDz` devolvió **403 Forbidden**: el scope de `rutitasrutitas-8977` no está autorizado para ese conector. No se cambiaron permisos ni se usó otra cuenta.

La ventana de Microsoft Edge apareció en la lista local, pero Computer Use se detuvo al no poder determinar con confianza su URL activa. Se respetó el bloqueo y no se intentó evadirlo. No se obtuvo captura de Vercel.

Por estas razones, los siguientes datos actuales están **NO VERIFICADOS**:

- Plan vigente, facturación/cargos, uso y cuotas del equipo.
- Créditos promocionales y condición de no utilizarlos.
- Protecciones o límites efectivos de gasto.
- Proyecto y repositorio vinculados, rama de producción `main` y `Ignored Build Step: Only build production`.
- Automatización Preview, protección de acceso y configuración actual del dominio.

LANDING-012 documentó históricamente `Only build production` guardado; no se presenta como revalidado en este preflight. Informes anteriores mencionaron plan Hobby y ausencia de método de pago, pero no se volvieron a verificar aquí. No se puede garantizar que un push no genere uso/cargos con la evidencia accesible en esta ejecución. Por eso no se publicó la rama.

## Estado de otros gates

- **GitHub Actions:** no ejecutado en este SHA; no hay CI verde que declarar. Los PR #6, #11 y #12 de Dependabot no se incorporaron.
- **Privacidad:** `/privacidad` continúa **BORRADOR NO RATIFICADO**. Faltan responsable legal completo y domicilio, confirmación de tratamientos/proveedores y revisión legal final.
- **Eliminación:** la ruta explica el procedimiento previsto, pero no es operativa. El inicio del periodo de siete días depende de confirmación Backend; Mark/Ame deben implementar y validar Android/Backend. El canal web por correo no está habilitado como trámite.
- **Analytics/GTM:** GA4 real y GTM siguen inactivos; no se usaron identificadores reales ni se enviaron eventos.
- **Search Console:** no se verificó la propiedad ni se publicó el sitemap.
- **Headers legales:** `vercel.json` declara `X-Robots-Tag: noindex, follow` en cuatro patrones. La prueba disponible valida el JSON local; no hubo respuesta HTTP real ni deployment.
- **SDD:** Constitución sigue pendiente de ratificación humana.

## Cambios documentales y validación

Se actualizaron los informes de LANDING-011/016, la reconciliación de dependencias, el checklist, la matriz y la trazabilidad. Este informe registra la causa precisa del bloqueo.

Validaciones ejecutadas para este cambio documental: `npm audit --json` exit 0; `npm ls picomatch --all` exit 0; `npm run sdd:verify` exit 0 (30 documentos, 27 requisitos 001 y 14/8/9 requisitos 002/003/004); `git diff --check` exit 0. Git solo emitió avisos de normalización LF/CRLF en documentos; no reportó whitespace errors. No se repitieron build, Vitest o Playwright porque no se cambió código, manifest ni lockfile. No se ejecutó CI.

## Siguiente paso seguro

El equipo debe proporcionar una vía de lectura accesible de Vercel que permita confirmar plan, cuotas/cargos, créditos, `Only build production`, rama de producción y protecciones, sin aceptar servicios ni cambiar configuración. Tras completar ese gate se podrá retomar el push y PR autorizados. La fusión y producción continúan esperando las aprobaciones humanas descritas arriba. **Este bloqueo detiene la publicación; no autoriza otro método de acceso.**
