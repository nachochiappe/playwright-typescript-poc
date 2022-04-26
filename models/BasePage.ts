import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;
    readonly logo: Locator;
    readonly searchBox: Locator;
    readonly addButton: Locator;
    readonly newUser: Locator;
    readonly newLead: Locator;
    readonly userDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator('img[alt="Club OS Logo"]');
        this.searchBox = page.locator('#quick-search-text');
        //this.addButton = page.locator('#user-add'); NOT WORKING DUE TO (?) BUTTON INTERCEPTING ACTION
        this.addButton = page.locator('.icon.icon-user-add');
        this.newUser = page.locator('a:has-text("New User")');
        this.newLead = page.locator('a:has-text("New Lead")');
        this.userDropdown = page.locator(".dropdown-toggle.control-panel-toggle");
    }

    async gotoBaseUrl() {
        await this.page.goto('https://qa.club-os.com/')
    }

    async getBaseUrl() {
        await expect(this.page).toHaveURL('https://qa.club-os.com/action/Dashboard/view');
    }

    async verifyLoggedUserFullname(fullname: string) {
        await expect(this.userDropdown).toHaveText(fullname);
    }

    async gotoNewLeadPage() {
        await this.addButton.hover();
        await Promise.all([
            this.page.waitForNavigation(),
            this.newLead.click()
        ])
        await expect(this.page).toHaveURL('https://qa.club-os.com/action/NewLead');
    }
}