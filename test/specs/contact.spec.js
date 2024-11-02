import { $, browser, expect } from '@wdio/globals';
import loginPage from '../pageobjects/login.page';
import contactPage from '../pageobjects/contact.page';

describe('Verify contact functionality', function(){
    beforeEach(async () => {
        await loginPage.openPage();
        await loginPage.clickLogin();
        await loginPage.loginProcess("ayura", "ayu12345")
    })

    it('Contact with valid input form', async () => {
        await contactPage.clickContactMenu();
        await contactPage.fillContactForm("ayu@gmail.com", "ayu", "Hello, I would like to inquire about your services");
        await contactPage.clickSendMessage();
        const successMessage = await browser.getAlertText();
        expect(successMessage).toHaveText("Thanks for the message!!")
        await browser.acceptAlert();
    })

    it('Contact without input form', async () => {
        await contactPage.clickContactMenu();
        await contactPage.fillContactForm("", "", "");
        await contactPage.clickSendMessage();
        const errorMessage = await browser.getAlertText();
        expect(errorMessage).not.toHaveText("Thanks for the message!!")
        await browser.acceptAlert();
    })
})