import { expect, Locator, Page } from '@playwright/test';
import * as faker from 'faker';

export class NewLeadPage {
    readonly page: Page;
    readonly club: Locator;
    readonly clubLocation: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly mobilePhone: Locator;
    readonly homePhone: Locator;
    readonly workPhone: Locator;
    readonly email: Locator;
    readonly notes: Locator;
    readonly eventType: Locator;
    readonly eventWith: Locator;
    readonly eventDate: Locator;
    readonly eventTime: Locator;
    readonly eventDuration: Locator;
    readonly eventRemindAttendee: Locator;
    readonly eventRemindOwner: Locator;
    readonly followUpWith: Locator;
    readonly origin: Locator;
    readonly marketingSource: Locator;
    readonly employer: Locator;
    readonly selectAllInterestsLink: Locator;
    readonly selectNoneInterestsLink: Locator;
    readonly newProspectResponseEmailCheckbox: Locator;
    readonly optInCheckbox: Locator;
    readonly referredByQuickSearch: Locator;
    readonly referredByList: Locator;
    readonly addReferralsLink: Locator;
    readonly referralsList: Locator;
    readonly address1: Locator;
    readonly address2: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly zipCode: Locator;
    readonly country: Locator;
    readonly timeZone: Locator;
    readonly gender: Locator;
    readonly birthMonth: Locator;
    readonly birthDay: Locator;
    readonly birthYear: Locator;
    readonly saveNewLeadButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.club = page.locator('#clubId');
        this.clubLocation = page.locator('#clubLocationId');
        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.mobilePhone = page.locator('#mobilePhone');
        this.homePhone = page.locator('#homePhone');
        this.workPhone = page.locator('#workPhone');
        this.email = page.locator('#email');
        this.notes = page.locator('#tiScriptNotes');
        this.eventType = page.locator('#eventType');
        this.eventWith = page.locator('#appointmentUserId');
        this.eventDate = page.locator('#appointmentDate');
        this.eventTime = page.locator('#appointmentStartTime');
        this.eventDuration = page.locator('#appointmentDuration');
        this.eventRemindAttendee = page.locator('#appointmentRemindAttendeeMinutes');
        this.eventRemindOwner = page.locator('#appointmentRemindCreatorMinutes');
        this.followUpWith = page.locator('#marketingFollowUpWith');
        this.origin = page.locator('#marketingOrigin');
        this.marketingSource = page.locator('#marketingSource');
        this.employer = page.locator('#clubEmployer');
        this.selectAllInterestsLink = page.locator('.checkbox-group__select-button.btn.btn-link:has-text("All")');
        this.selectNoneInterestsLink = page.locator('.checkbox-group__select-button.btn.btn-link:has-text("None")');
        this.newProspectResponseEmailCheckbox = page.locator('#sendNewProspectResponseEmail');
        this.optInCheckbox = page.locator('#emailOptIn');
        this.referredByQuickSearch = page.locator('#referred-by-search');
        this.referredByList = page.locator('.referred-by.attendees-added');
        this.addReferralsLink = page.locator('.add-preferred-guests');
        this.referralsList = page.locator('.attendees-added');
        this.address1 = page.locator('#address1');
        this.address2 = page.locator('#address2');
        this.city = page.locator('#city');
        this.state = page.locator('#state');
        this.zipCode = page.locator('#zipCode');
        this.country = page.locator('#country');
        this.timeZone = page.locator('#timezone');
        this.gender = page.locator('#gender');
        this.birthMonth = page.locator('#birthMonth');
        this.birthDay = page.locator('#birthDay');
        this.birthYear = page.locator('#birthYear');
        this.saveNewLeadButton = page.locator('button[type="Submit"]');
    }

    async completeBasicInformation(club: string, location: string) {
        await this.club.selectOption(club);
        await this.clubLocation.selectOption(location);
        const firstName = faker.name.firstName();
        await this.firstName.fill(firstName);
        const lastName = faker.name.lastName();
        await this.lastName.fill(lastName);
        await this.mobilePhone.fill(faker.phone.phoneNumber('212-###-####'));
        await this.homePhone.fill(faker.phone.phoneNumber('212-###-####'));
        await this.workPhone.fill(faker.phone.phoneNumber('212-###-####'));
        await this.email.fill(faker.internet.email(firstName, lastName, 'mailinator.com'));
    }

    async completeNotes() {
        
    }

    async scheduleAppointment() {
        
    }

    async completeMarketingInformation() {
        await this.followUpWith.selectOption('151016414');
        await this.origin.selectOption('1');
        await this.marketingSource.selectOption('Social Media');
        await this.selectAllInterestsLink.click();
    }

    async optInEmailCommunication() {
        
    }

    async optOutEmailCommunication() {
        
    }

    async addReferredBy() {
        
    }

    async addReferrals() {
        
    }

    async completePersonalInformation() {
        await this.address1.fill(faker.address.streetAddress());
        await this.address2.fill(faker.address.secondaryAddress());
        await this.city.fill(faker.address.city());
        await this.state.selectOption("NY");
        await this.zipCode.fill(faker.address.zipCode('#####'));
        await this.timeZone.selectOption('America/New_York');
        await this.gender.selectOption('M');
        await this.birthMonth.selectOption('7');
        await this.birthDay.selectOption('24');
        await this.birthYear.selectOption('1989');
    }

    async saveNewLead() {
        await Promise.all([
            this.page.waitForNavigation(),
            this.saveNewLeadButton.click()
        ])
    }
}