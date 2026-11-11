# Estrategia y casos de prueba — LANDING-001

## Unitarias

- UT-LP-001: render de la portada.
- UT-LP-002: footer contiene enlaces legales.
- UT-LP-003: aviso de privacidad incluye secciones y marcas pendientes.
- UT-LP-004: eliminación explica proceso pendiente y no muestra formulario.
- UT-LP-005: Google Play no ofrece enlace/QR con URL ausente o inválida.
- UT-LP-006: Analytics no carga sin Measurement ID válido y consentimiento; la ruta enviada no contiene datos personales.

## Integración

- IT-LP-001: desde Inicio se navega a Privacidad.
- IT-LP-002: desde Inicio se navega a Eliminación de cuenta.
- IT-LP-003: recarga directa de ambas rutas mediante servidor de SPA.
- IT-LP-004: app renderiza con y sin variables opcionales.
- IT-LP-005: solo URL válida configurada alimenta el link de Play/QR.

## Seguridad

- SEC-LP-001: escaneo de secretos Gitleaks en CI.
- SEC-LP-002: no enviar nombre, email, tokens, query privada ni identificador personal a Analytics.
- SEC-LP-003: enlaces externos HTTPS y sin target inseguro.
- SEC-LP-004: `npm audit --audit-level=high` en lockfile.
- SEC-LP-005: no se ofrece borrado sin autenticación/proceso.
- SEC-LP-006: no se recaban datos mediante formularios sin proceso autorizado.

## Visual/accesibilidad

- UI-LP-001: viewport móvil y navegación de rutas.
- UI-LP-002: escritorio conserva la portada.
- UI-LP-003: foco, Escape y recorrido por teclado.
- UI-LP-004: portada y todos sus modales permanecen.

## Ejecución local — 2026-11-05

Entorno: Windows, Node.js 24.20.0, npm, Chromium de Playwright; Vite 6.4.5 desde el lockfile.

| Control | Comando | Resultado |
|---|---|---|
| Instalación reproducible | `npm ci` | Aprobado. |
| Lint | `npm run lint` | Aprobado, cero warnings. |
| Tipos | `npm run typecheck` | Aprobado. |
| Unitarias/integración React | `npm run test` | 11/11 aprobadas. |
| Navegador, desktop y Pixel 7 | `npm run test:e2e` | 9 aprobadas; 1 omitida porque el ancho responsive se corre solo en móvil. |
| Build | `npm run build` | Aprobado; Vite 6.4.5. |
| SDD/trazabilidad | `npm run sdd:verify` | Aprobado: 12 documentos requeridos, 10 requisitos trazados. |
| JSON/YAML | Node JSON.parse; paquete YAML temporal para análisis sintáctico | `package.json`, `vercel.json` y los dos archivos YAML válidos. |
| Diff whitespace | `git diff --check` | Aprobado; solo avisos de normalización CRLF de Git. |
| Dependencias | `npm audit --audit-level=high` | Exit 0 para umbral alto; npm reporta 10 alertas moderadas vinculadas a `minimatch` (GHSA-g3hv-75wg-m249). `--force` propone cambio mayor de ESLint; no aplicado. |

## No ejecutado / pendiente

- Gitleaks local: no se ejecutó; Docker no está instalado y la ejecución local del binario no quedó disponible. El workflow de CI sí contiene el escaneo con imagen/versionado digest fijado, pendiente de una corrida remota.
- No se ejecutó el workflow en GitHub, ni se activó protección de rama.
- No se creó Preview ni se probó una URL desplegada. `vercel.json` contiene el fallback SPA; la confirmación del host requiere Preview.
- No se verificaron eventos en Tag Assistant/GA4 Realtime porque no hay Measurement ID ni propiedad confirmados.
- No se probó una ficha de Google Play porque el equipo no proporcionó URL pública.
- No es posible validar visualmente tablets físicas; se capturaron y revisaron screenshots Playwright en escritorio y Pixel 7 emulados, además del test legal a 320 px.

Una comprobación local no acredita eventos reales de GA4 ni la ficha Play, aprobación legal, controles remotos de GitHub o una publicación de Vercel.

## Revalidación de liberación — LANDING-002 — 2026-11-05

| Control | Resultado real | Nota |
|---|---|---|
| Instalación | `npm ci` aprobado al inicio (antes del override); después el `npm ci` directo en OneDrive falló dos veces con `EBUSY` al eliminar archivos bloqueados de `node_modules`. `npm install` reparó el árbol y una copia temporal limpia de `package.json` + `package-lock.json` ejecutó `npm ci` con exit 0. | La limitación es de bloqueo de archivos en Windows/OneDrive; el lock actual se instaló reproduciblemente fuera de esa carpeta. |
| Dependencias | `npm ls minimatch --all` muestra `minimatch@11.0.4` compartido por ESLint 10 y typescript-eslint; `npm ls minimatch --omit=dev` no encuentra dependencia de producción. | La rama afectada anterior era `10.2.6`, solo de desarrollo. |
| Auditoría | `npm audit` | Exit 0, 0 vulnerabilidades tras override. |
| Lint / tipos / unitarias | `npm run lint`, `npm run typecheck`, `npm run test` | Aprobados; Vitest 11/11. |
| E2E / build / SDD | `npm run test:e2e`, `npm run build`, `npm run sdd:verify` | E2E 9 aprobadas y 1 omitida por variante desktop-only; build aprobado; verificador ahora incluye specs 001/002. |
| Git diff | `git diff --check` | Exit 0. |

Gitleaks no se ejecutó localmente porque Docker no está instalado; no hay workflow LANDING-001 en la rama remota, por tanto el control no se pudo lanzar en Actions sin publicar la rama. El workflow local de LANDING-002 quedó configurado para escanear el historial completo con `--redact`, antes de instalar dependencias.
