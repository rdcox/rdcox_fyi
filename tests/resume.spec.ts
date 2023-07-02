import { expect, test } from "@playwright/test";

test.describe('When the /resume page is loaded', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/resume');
    });

    test('the url should contain /resume', async ({page}) => {
        expect(page.url()).toContain('/resume');
    });
});