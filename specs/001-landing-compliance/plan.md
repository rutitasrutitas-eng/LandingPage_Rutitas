# Plan — LANDING-001

**Estado:** EJECUTADO LOCALMENTE; revisión externa y ratificación humana pendientes. Los cambios se trazan a `spec.md` y los resultados están en `docs/pruebas.md` y los reportes por entrega. Se autoriza integración local para revisión; no se autoriza push ni publicación.

| Fase | Requisito(s) | Trabajo | Evidencia requerida |
|---|---|---|---|
| 1. Auditoría | LP-REQ-001, 010 | Inventario y estado base; documentar hallazgos sin cambiar comportamiento. | `docs/auditoria-inicial.md`, Git limpio inicial. |
| 2. Especificar | LP-REQ-001–010 | Fijar escenarios, límites, riesgos, tareas y criterios; dejar Constitución pendiente de ratificación. | Especificación, plan, checklist, matriz. |
| 3. Preparar rutas y páginas | LP-REQ-002–004, 007 | Implementar rutas directas, navegación legal, privacidad en borrador y eliminación informativa sin formulario. | Pruebas de render y rutas; review de placeholders. |
| 4. Configuración externa | LP-REQ-005–006 | Consentimiento opt-in y GA4 desactivado sin configuración; URL Play opcional validada; `.env.example`. | Pruebas de carga/ausencia y config; no afirmar verificación remota. |
| 5. Accesibilidad / visual | LP-REQ-001, 007 | Hacer scroll legal, foco de diálogo y teclado; conservar estilos existentes. | Playwright responsive/teclado si navegador disponible; revisión manual de capturas. |
| 6. Calidad / CI | LP-REQ-008–009 | Lockfile, scripts de pruebas y workflow PR con mínimo privilegio. | Salidas reales de build/tests/auditoría/secret scan; artefacto de resultados. |
| 7. Documentar / revisar | LP-REQ-010 | Actualizar arquitectura, requisitos, tests, matriz y memoria; checklist final; verificar git diff. | Lista de requisitos con estado y límites; árbol de trabajo sin commit/push. |
| 8. LANDING-006 privacidad | LP-REQ-003, LP-REQ-004, LP-REQ-007, LP-REQ-008, LP-REQ-010–014 | Integrar el diseño recibido únicamente en `/privacidad`; validar el contenido por categorías (Landing actual, Android DEMO local, Backend/capacidades en desarrollo y funciones previstas), preservar eliminación informativa y actualizar evidencia SDD. | Paquete de origen inspeccionado; unitarias, Playwright responsive/teclado/Analytics y controles de calidad; pendientes legales documentados. |
| 9. LANDING-005 presentación | LP-REQ-015–017 | Precisar textos de los modales sin alterar la identidad del hero; agregar FAQ accesible compacta en el modal de proyecto; corregir metadatos que prometen disponibilidad no confirmada. | Pruebas de contenido, navegación por teclado/FAQ, metadatos y siete resoluciones; fuentes Android/Backend cotejadas. |
| 10. Integración local | LP-REQ-010, LP-REQ-015–017 | Crear rama desde LANDING-004 y fusionar localmente LANDING-005 y LANDING-006 con sus commits; resolver conflictos y actualizar evidencia combinada. | Historial Git preservado, pruebas completas y entrega reproducible; sin push/PR/despliegue. |
| 11. Corrección final de evidencia | LP-REQ-001, LP-REQ-008, LP-REQ-010, LP-REQ-012; L7-T-001/002 | Hacer determinista la espera de carga/decodificación de la foto del hero para captura directa y recarga; cotejar ramas y PR vigentes de Android/Backend sin asumir que los tests usan un servidor real. | Playwright comprueba `complete`, `naturalWidth`, `decode()` y visibilidad; captura desktop nueva; SHAs/estados de PR, DEMO y límites de pruebas registrados en matriz y reporte. |
| 12. Evaluación de GHSA | LP-REQ-009, LP-REQ-010; L8-T-001 | Auditar el árbol de dependencias y el bundle, validar disponibilidad de parche y documentar condiciones de explotación/mitigaciones sin ocultar avisos. | Salida audit JSON y omit-dev, `npm ls`, registro oficial de advisory, búsqueda del bundle y reporte reproducible; cambios solo si existe versión corregida compatible. |

## Riesgos y respuesta

| Riesgo | Mitigación |
|---|---|
| Datos legales desconocidos | Marcadores visibles en páginas y docs; bloquear estado «definitivo» hasta validación humana. |
| Ningún backend/contacto para borrado | No formulario ni transmisión de datos; explicar bloqueo. |
| Sin ID GA4 | No cargar scripts por defecto; configurar opt-in solo si un administrador entrega ID válido. |
| Sin enlace Play | Mantener estado «Muy pronto», sin QR ni enlace accionable. |
| Rutas directas en hosting | Revisar estrategia SPA de Vercel y agregar fallback versionado solo si hace falta; no modificar el dashboard. |
| Dependencias sin lockfile | Crear lockfile revisado e instalar dependencias sin cambiar framework; ejecutar `npm audit`. |
| Capturas del diseño | Comparar a 390px y escritorio; no cambiar la portada salvo defecto comprobado. |
| Afirmaciones del proyecto | Contrastar contra ramas y SHA examinados; describir integración prevista, sin atribuir operación real a funciones de código o DEMO. |

## Restricciones de ejecución

- No editar Constitution/AGENTS/memoria base de otros proyectos; este trabajo queda dentro del repo de la landing.
- No efectuar commits, push, cambios de Vercel ni producción.
- No ratificar textos ni completar hechos legales/operativos desconocidos.
- Si una prueba externa requiere credenciales, consentimiento no anticipado, cuenta GA4 o tienda, registrar como pendiente y detener únicamente esa prueba.
