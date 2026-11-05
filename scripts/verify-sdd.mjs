import { readFile } from 'node:fs/promises'

const requiredFiles = [
  '.specify/memory/constitution.md',
  'specs/001-landing-compliance/spec.md',
  'specs/001-landing-compliance/plan.md',
  'specs/001-landing-compliance/tasks.md',
  'specs/001-landing-compliance/checklist.md',
  'docs/auditoria-inicial.md',
  'docs/arquitectura.md',
  'docs/requisitos-profesor.md',
  'docs/matriz-trazabilidad.md',
  'docs/pruebas.md',
  'AGENTS.md',
  'Memoria.md',
]

const contents = new Map()
const failures = []

for (const path of requiredFiles) {
  try {
    contents.set(path, await readFile(path, 'utf8'))
  } catch {
    failures.push(`Falta documento requerido: ${path}`)
  }
}

const constitution = contents.get('.specify/memory/constitution.md') ?? ''
if (!constitution.includes('PENDIENTE_RATIFICACION')) {
  failures.push('La Constitución debe seguir pendiente de ratificación humana.')
}

const specification = contents.get('specs/001-landing-compliance/spec.md') ?? ''
const traceability = contents.get('docs/matriz-trazabilidad.md') ?? ''
const requirementIds = [...new Set(specification.match(/LP-REQ-\d{3}/g) ?? [])]
if (requirementIds.length < 10) failures.push('La especificación no declara los 10 requisitos LP-REQ esperados.')
for (const id of requirementIds) {
  if (!traceability.includes(id)) failures.push(`Sin trazabilidad para ${id}.`)
}

const tasks = contents.get('specs/001-landing-compliance/tasks.md') ?? ''
if (!tasks.includes('no_iniciado') || !tasks.includes('completado')) {
  failures.push('La tabla de tareas debe documentar los estados permitidos.')
}

if (failures.length) {
  for (const failure of failures) console.error(`SDD: ${failure}`)
  process.exitCode = 1
} else {
  console.log(`SDD verificado: ${requiredFiles.length} documentos y ${requirementIds.length} requisitos con trazabilidad.`)
}
