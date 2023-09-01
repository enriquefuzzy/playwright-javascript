// @ts-check
const { test, expect } = require('@playwright/test');

test('Verify user can search for Dogs', async ({page})=>{
    await page.goto('https://www.google.com');
    await page.getByTitle('Search').fill('Dogs');
    await page.getByTitle('Search').press('Enter');
    await expect(page.getByRole('combobox', { name: 'Search' })).toHaveText('Dogs');
    // await expect(page.locator('textarea[name=q]')).toHaveText('Dogs'); - Alternate CSS assertion
    await expect(page.getByRole('heading', { name: 'Dog', exact: true })).toHaveText('Dog');
    // await expect(page.locator('[data-attrid=title]')).toHaveText('Dog'); - Alternate CSS assertion
});

test('Verify user can search for Cats', async ({page})=>{
    await page.goto('https://www.google.com');
    await page.getByTitle('Search').fill('Cats');
    await page.getByTitle('Search').press('Enter');
    await expect(page.getByRole('combobox', { name: 'Search' })).toHaveText('Cats');
    await expect(page.locator('[data-attrid=title]')).toHaveText('Cat');
});
