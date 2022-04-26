import { test } from '@playwright/test';
import { PageObjectManager } from '../models/PageObjectManager';

const dataset =  JSON.parse(JSON.stringify(require("../data/loginTestData.json")));

test('Login', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const pageObjectManager = new PageObjectManager(page);
    const loginPage = pageObjectManager.getLoginPage();
    await loginPage.goto();
    await loginPage.enterCredentials(dataset.users[0].username, dataset.users[0].password);
    await loginPage.login();
    const basePage = pageObjectManager.getBasePage();
    await basePage.getBaseUrl();
    await basePage.verifyLoggedUserFullname(dataset.users[0].fullname);
});