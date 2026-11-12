import { expect, test } from '@playwright/test'

test('home keeps the photographic hero, illustrative demo, and legal navigation', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: /la uni se vive en el camino/i })).toBeVisible()
  await expect(page.getByText('Compartir el trayecto también es parte de la experiencia.')).toBeVisible()
  await expect(page.locator('.brand img')).toHaveAttribute('src', '/assets/rutitas-logo.png')
  await expect(page.getByRole('main').locator('picture source').first()).toHaveAttribute('srcset', '/assets/rutitas-auto-hero-mobile.webp')
  await expect(page.getByRole('button', { name: /descubre rutitas/i })).toBeVisible()
  await expect(page.getByRole('button', { name: /conoce el proyecto/i })).toBeVisible()
  await expect(page.getByText('EN TU CELULAR')).toBeVisible()
  const heroY = (await page.getByRole('main').boundingBox())?.y ?? 0
  const demoY = (await page.getByRole('heading', { name: 'Una vista de demostración' }).boundingBox())?.y ?? 0
  expect(demoY).toBeGreaterThan(heroY)
  await expect(page.getByRole('navigation', { name: 'Enlaces legales' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Eliminar cuenta' })).toHaveAttribute('href', '/eliminar-cuenta')
})

test('legal links navigate and survive a direct reload', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Privacidad' }).click()
  await expect(page).toHaveURL(/\/privacidad$/)
  await expect(page.getByRole('heading', { name: 'Aviso de privacidad' })).toBeVisible()
  await page.reload()
  await expect(page.getByRole('heading', { name: 'Aviso de privacidad' })).toBeVisible()

  await page.getByRole('link', { name: 'Eliminar cuenta' }).click()
  await expect(page).toHaveURL(/\/eliminar-cuenta$/)
  await expect(page.getByRole('heading', { name: 'Eliminación de cuenta' })).toBeVisible()
  await page.reload()
  await expect(page.getByRole('heading', { name: 'Eliminación de cuenta' })).toBeVisible()
})

test('hero and navigation fit every required viewport', async ({ page }) => {
  const viewports = [
    { width: 1440, height: 900 },
    { width: 1366, height: 768 },
    { width: 768, height: 1024 },
    { width: 390, height: 844 },
    { width: 320, height: 568 },
  ]
  for (const viewport of viewports) {
    await page.setViewportSize(viewport)
    await page.goto('/')
    await expect(page.getByRole('heading', { name: /la uni se vive en el camino/i })).toBeVisible()
    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth,
    }))
    expect(dimensions.content, `horizontal overflow at ${viewport.width}x${viewport.height}`).toBeLessThanOrEqual(dimensions.viewport)
    if (viewport.width <= 900) {
      const toggle = page.getByRole('button', { name: 'Abrir navegación' })
      await toggle.click()
      await expect(page.getByRole('navigation', { name: 'Navegación principal' }).getByRole('button', { name: 'Seguridad' })).toBeVisible()
      await page.getByRole('navigation', { name: 'Navegación principal' }).getByRole('button', { name: 'Seguridad' }).click()
      await expect(page.getByRole('dialog')).toBeVisible()
      await page.keyboard.press('Escape')
      await expect(page.getByRole('dialog')).toHaveCount(0)
    }
    await page.getByRole('link', { name: 'Privacidad' }).scrollIntoViewIfNeeded()
    await expect(page.getByRole('link', { name: 'Eliminar cuenta' })).toBeVisible()
  }
})

test('small mobile legal page can scroll without horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 })
  await page.goto('/privacidad')
  await expect(page.getByRole('heading', { name: 'Aviso de privacidad' })).toBeVisible()
  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth,
  }))
  expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport)
  await expect(page.getByRole('link', { name: 'Eliminar cuenta' })).toBeVisible()
})

test('the existing informational dialog works with keyboard controls', async ({ page }) => {
  await page.goto('/')
  const trigger = page.getByRole('button', { name: /descubre rutitas/i })
  await trigger.click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(trigger).toBeFocused()

  const projectTrigger = page.getByRole('button', { name: /conoce el proyecto/i })
  await projectTrigger.click()
  await expect(page.getByRole('dialog')).toContainText('Más cerca, en comunidad.')
})
