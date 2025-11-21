import { test, expect } from '@playwright/test';

test.describe('Visual Regression Testing', () => {
  test('Homepage', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForTimeout(2000); // Add a 2-second delay
    await expect(page).toHaveScreenshot('homepage.png', { fullPage: true });
  });

  test('About page', async ({ page }) => {
    await page.goto('http://localhost:3000/about');
    await page.waitForTimeout(2000); // Add a 2-second delay
    await expect(page).toHaveScreenshot('about.png', { fullPage: true });
  });

  test('Process page', async ({ page }) => {
    await page.goto('http://localhost:3000/process');
    await page.waitForTimeout(2000); // Add a 2-second delay
    await expect(page).toHaveScreenshot('process.png', { fullPage: true });
  });
});
