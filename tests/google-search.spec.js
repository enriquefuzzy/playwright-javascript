// @ts-check
const { test, expect } = require('@playwright/test');

test('Verify user can search for Dogs', async ({page})=>{
    await page.goto('https://www.google.com');

    await page.getByTitle('Search').fill('Dogs');
    await page.getByTitle('Search').press('Enter');
    // await expect(page.getByRole('searchbox', {name: 'q'})).toHaveText('Dogs');
    // await expect(page.getByRole('textbox', {name:'q'})).toHaveText('Dogs');
    // await expect(page.locator('textarea[name=q]')).toHaveText('Dogs');
    await expect(page.getByRole('heading', { name: 'Dog', exact: true })).toHaveText('Dog');
    // await expect(page.getByRole('heading', {level: 2})).toHaveText('Dog');
    await expect(page.locator('[data-attrid=title]')).toHaveText('Dog');
});
