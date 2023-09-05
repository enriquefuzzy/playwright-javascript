// @ts-check
const { test, expect } = require('@playwright/test');
const { GoogleSearchPage } = require('../pages/google-search.page');

test('Verify user can search for Dogs', async ({page})=>{
    const googleSearchPage = new GoogleSearchPage(page);
    await googleSearchPage.searchGoogleFor('Dogs');
    await googleSearchPage.assertSearchBarText('Dogs');
    await googleSearchPage.assertSearchHeadingTitle('Dog');
});

test('Verify user can search for Cats', async ({page})=>{
    const googleSearchPage = new GoogleSearchPage(page);
    await googleSearchPage.searchGoogleFor('Cats');
    await googleSearchPage.assertSearchBarText('Cats');
    await googleSearchPage.assertSearchHeadingTitle('Cat');
});
