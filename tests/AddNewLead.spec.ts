import { test } from '@playwright/test';
import { PageObjectManager } from '../models/PageObjectManager';

test.beforeAll

test('Add New Lead', async ({ browser }) => {
    const context = await browser.newContext({ storageState: 'state.json' });
    const page = await context.newPage();
    const pageObjectManager = new PageObjectManager(page);
    const basePage = pageObjectManager.getBasePage();
    await basePage.gotoBaseUrl();
    await basePage.gotoNewLeadPage();
    const newLeadPage = pageObjectManager.getNewLeadPage();
    await newLeadPage.completeBasicInformation('659', '4585');
    await newLeadPage.completeMarketingInformation();
    await newLeadPage.completePersonalInformation();
    await newLeadPage.saveNewLead();
});