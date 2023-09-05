// @ts-check
const { test, expect } = require('@playwright/test');

exports.GoogleSearchPage = class GoogleSearchPage {
    constructor(page) {
        this.page = page;
        this.homeSearchBar = page.getByTitle('Search');
        this.comboboxSearchBar = page.getByRole('combobox', { name: 'Search' });
        // await expect(page.locator('textarea[name=q]')).toHaveText('Dogs'); - Alternate CSS assertion
        this.searchHeader = page.locator('[data-attrid=title]');
        // await expect(page.getByRole('heading', { name: 'Dog', exact: true })).toHaveText('Dog'); - Alternate header locator for Dog
}

    async searchGoogleFor(search) {
        await this.page.goto('https://www.google.com')
        await this.homeSearchBar.fill(search);
        await this.homeSearchBar.press('Enter');
    }

    async assertSearchBarText(search) {
        await expect(this.comboboxSearchBar).toHaveText(search);
    }

    async assertSearchHeadingTitle(title) {
        await expect(this.searchHeader).toHaveText(title);
    }
}