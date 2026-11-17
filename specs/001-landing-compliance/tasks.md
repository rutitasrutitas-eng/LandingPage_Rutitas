# Tareas — LANDING-001

| ID | Estado inicial | Resultado objetivo | Verificación |
|---|---|---|---|
| T-001 | completado | Publicar auditoría inicial y documentar la base. | `docs/auditoria-inicial.md`; árbol limpio al inicio y evidencia de inventario. |
| T-002 | completado | Crear Constitución propuesta y guías SDD sin ratificar. | `.specify/memory/constitution.md` está `PENDIENTE_RATIFICACION`. |
| T-003 | completado | Crear estructura de especificación/plan/checklist/matriz. | `specs/001-landing-compliance/` y `docs/matriz-trazabilidad.md`. |
| T-004 | completado | Implementar navegación a rutas legales y rutas directas. | Vitest y Playwright; `vercel.json` SPA rewrite. |
| T-005 | completado | Crear privacidad con todos los apartados y marcadores no confirmados. | UT-LP-003; revisión del borrador en `src/LegalPages.tsx`; requiere aprobación humana. |
| T-006 | completado | Crear eliminación informativa sin formulario ni endpoint simulado. | UT-LP-004; SEC-LP-005/006; Playwright de carga directa. |
| T-007 | completado | Preparar Google Play con URL configurable validada. | UT-LP-005 y pruebas de configuración; URL oficial sigue pendiente. |
| T-008 | completado | Preparar GA4 opt-in, sin ID ficticio ni PII. | UT-LP-006; integración no verificada en propiedad real. |
| T-009 | completado | Mejorar foco/modal y hacer páginas legales responsive. | Playwright teclado, rutas y anchos 320 px y móvil. |
| T-010 | completado | Añadir lockfile y scripts de calidad mínimos. | `npm ci`, lint, typecheck, build, Vitest, Playwright y auditoría de dependencias. |
| T-011 | completado | Añadir workflow GitHub Actions de PR, seguridad y evidencias. | YAML/JSON revisados; ejecución remota pendiente de GitHub. |
| T-012 | completado | Cerrar memoria, trazabilidad, checklist y reporte final. | Revisión documental y del árbol Git sin commit/push. |
| L5-T-001 | completado | Trazar cambios de presentación antes de editar interfaz. | LP-REQ-015–017 añadidos a `spec.md`/`plan.md` y enlazados en matriz. |
| L5-T-002 | completado | Explicar propósito, funcionamiento y seguridad con estados precisos. | Pruebas de contenido; revisión Android/Backend y SHAs en `docs/REPORTE_LANDING_005.md`. |
| L5-T-003 | completado | Agregar diez preguntas frecuentes accesibles en el diálogo de proyecto. | Vitest y Playwright validan diez preguntas, respuestas, navegación nativa y retorno de foco. |
| L5-T-004 | completado | Corregir metadatos y comprobar recursos internos sin alterar identidad. | Playwright verifica metadatos, favicon, siete resoluciones y ausencia de overflow. |

| L6-T-001 | completado | Inspeccionar el paquete de privacidad recibido y registrar requisitos/trazabilidad antes de integrar. | Paquete extraído fuera del repo; `LP-REQ-003`, `LP-REQ-011–014`, matriz y checklist LANDING-006. |
| L6-T-002 | completado | Integrar la nueva vista `/privacidad`, conservando portada, Analytics y `/eliminar-cuenta`. | Componente/estilos recibidos; pruebas locales conservan Home y ambas rutas. |
| L6-T-003 | completado | Revisar lenguaje para separar el sitio actual, datos locales DEMO y capacidades previstas; registrar aprobación pendiente. | Landing, Android DEMO local y código Backend diferenciados; cotejo con ramas/SHA descrito en `docs/VALIDACIONES_PRIVACIDAD.md`. |
| L6-T-004 | completado | Ejecutar controles completos y guardar resultados reales. | Resultados locales finales en `docs/pruebas.md`; CI remoto no ejecutado. |
| L6-T-005 | completado | Actualizar Memoria, checklist, matriz y evidencia LANDING-006. | Reporte y evidencia local actualizados; no se publica ni fusiona. |
| L6-T-006 | completado | Contrastar afirmaciones de privacidad/eliminación con repositorios Android y Backend accesibles. | SHAs, ramas, configuración DEMO, modelos, endpoints y límites registrados en `docs/VALIDACIONES_PRIVACIDAD.md`. |
| L6-T-007 | completado | Corregir suite completa con Analytics sintético sin clics forzados ni envío de eventos externos. | E2E completa sintética 18/18; prueba dedicada bloquea GTM y pruebas generales usan rechazo explícito. |
| L6-T-008 | completado | Preparar decisiones legales y dependencias reales de eliminación. | `docs/PENDIENTES_LEGALES_RUTITAS.md`; no se agregaron contactos o plazos inventados. |

Estados permitidos: `no_iniciado`, `en_progreso`, `bloqueado`, `completado`, `no_ejecutado`. El estado final de cada tarea se actualizará solo con evidencia.
