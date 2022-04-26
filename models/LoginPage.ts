import { expect, Locator, Page, BrowserContext } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly logo: Locator;
    readonly username: Locator;
    readonly password: Locator;
    readonly forgotUserOrPassword: Locator;
    readonly loginButton: Locator;
    readonly userDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator(".club-logo-img");
        this.username = page.locator("input[name='username']");
        this.password = page.locator("input[name='password']");
        this.forgotUserOrPassword = page.locator(".pull-left.btn.btn-link.js-to-password");
        this.loginButton = page.locator(".pull-right.btn.btn-brand.js-login");
        this.userDropdown = page.locator(".dropdown-toggle.control-panel-toggle");
    }

    async goto() {
        await this.page.goto('https://qa.club-os.com/');
        await expect(this.logo).toBeVisible();
    }

    async enterCredentials(username: string, password: string) {
        await this.username.type(username);
        await this.password.type(password);
    }

    async login() {
        await Promise.all([
            this.page.waitForNavigation(),
            this.loginButton.click(),
        ]);
    }

    async saveStorageState(context: BrowserContext, storageState: string) {
        await context.storageState({ path: storageState });
    }
}