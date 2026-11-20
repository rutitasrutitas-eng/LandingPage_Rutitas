# Plan de revisión y publicación — no autorizado

Este plan documenta verificaciones futuras. No cambia la configuración de Vercel/GitHub y no autoriza push, Preview, PR ni publicación.

## Antes de enviar la rama

1. Revisar el diff completo desde `d96103cb4a3c477c4e3e2cffd2ccec0a8b75b5e6` y confirmar que únicamente contiene LANDING-005/006 y sus trazas.
2. Revisar el árbol `feature/landing-integracion-final-local`; confirmar rama destino, acceso y política de protección de `main`.
3. Inspeccionar en Vercel el proyecto vinculado, repositorio, Production Branch, Preview deployments, Git deployment protection y reglas de ignorar build. La opción `git.deploymentEnabled` propuesta para LANDING-004 nunca se ha confirmado en configuración remota.
4. Verificar primero la política que aplica a nuevos branches y a pull requests. Un primer `git push` de la rama puede iniciar Preview antes de abrir PR; evitar el PR por sí solo no es una barrera.
5. Si no hay garantía verificable de excluir la rama, mantenerla local. Solicitar al administrador del proyecto que configure una exclusión explícita (si la plataforma y el esquema vigente la admiten) o desactive Preview automáticas antes del primer push. No modificar esa configuración sin aprobación del administrador.
6. Si el equipo autoriza el push, monitorear Vercel inmediatamente y comprobar en el Dashboard que no se inició un deployment. En GitHub, confirmar que el check requerido se ejecutó sobre el SHA exacto y revisar artefactos/logs antes de solicitar revisión.

## Secuencia de publicación propuesta tras autorización

```powershell
git status --short
git branch --show-current
git show -s --format=%H HEAD
git push -u origin feature/landing-integracion-final-local
```

El push es una operación remota capaz de activar Preview. Ejecutarlo solo cuando exista autorización y el administrador haya confirmado el control de Preview. Después, abrir manualmente un PR hacia `main` si y cuando se autorice; no fusionarlo automáticamente. El equipo debe decidir por separado si el PR puede crear una Preview.

## Bloqueos previos a un lanzamiento

- Aprobación del responsable del proyecto y ratificación de la Constitución SDD.
- Aprobación legal del aviso y confirmación de responsable, canal atendido, tratamientos, proveedores, seguridad, conservación, derechos y fecha efectiva.
- Confirmación de proceso real de eliminación, estado Android–Backend, URL oficial de Play y propiedad/configuración GA4.
- Revisión humana de accesibilidad, contenido y despliegue; evidencia de CI y control de Preview sobre el SHA exacto.

No se afirma que el primer push sea seguro para Preview hasta que se compruebe la configuración real del proyecto.
