import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { LoginPage } from './LoginPage';
import { NewLeadPage } from './NewLeadPage';

export class PageObjectManager {
    readonly page: Page;
    readonly basePage: BasePage;
    readonly loginPage: LoginPage;
    readonly newLeadPage: NewLeadPage;
    
    constructor(page: Page) {
        this.page = page;
        this.basePage = new BasePage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.newLeadPage = new NewLeadPage(this.page);
    }

    getBasePage() {
        return this.basePage;
    }

    getLoginPage() {
        return this.loginPage;
    }

    getNewLeadPage() {
        return this.newLeadPage;
    }
}