import { test, expect } from '@playwright/test';

test.describe('When the home page is loaded', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('the title is rdcox.fyi', async ({ page }) => {
    await expect(page).toHaveTitle('rdcox.fyi');
  });
});
