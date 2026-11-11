import { expect, test } from '@playwright/test'

test('home keeps its existing sections and legal navigation', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: /la uni se vive en el camino/i })).toBeVisible()
  await expect(page.getByText('EN TU CELULAR')).toBeVisible()
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

test('home fits a mobile viewport without horizontal overflow', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Responsive width assertion is specific to the mobile project.')
  await page.goto('/')
  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth,
  }))
  expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport)
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
})
