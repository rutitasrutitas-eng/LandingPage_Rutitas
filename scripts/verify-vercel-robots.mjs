import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const config = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url), 'utf8'))
const expectedRoutes = ['/privacidad', '/privacidad/', '/eliminar-cuenta', '/eliminar-cuenta/']

assert.deepEqual(config.headers.map(rule => rule.source), expectedRoutes, 'Only the four legal route variants should match')
assert.equal(new Set(config.headers.map(rule => rule.source)).size, expectedRoutes.length, 'Header sources must be unique')

for (const rule of config.headers) {
  assert.deepEqual(rule.headers, [{ key: 'X-Robots-Tag', value: 'noindex, follow' }], `${rule.source} must return the noindex header`)
}

assert.deepEqual(config.rewrites, [{ source: '/(.*)', destination: '/index.html' }], 'Keep the SPA fallback unchanged')
assert.equal(config.headers.some(rule => rule.source === '/'), false, 'The home page must remain indexable')

console.log('Vercel header rules verified: 4 legal paths; SPA rewrite preserved; home has no noindex rule.')
