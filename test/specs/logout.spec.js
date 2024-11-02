import { $, browser, expect } from '@wdio/globals'
import logoutPage from '../pageobjects/logout.page'
import loginPage from '../pageobjects/login.page'

describe('Verify user logout successfully', function(){
    this.beforeEach(async () => {
        await loginPage.openPage();
        await loginPage.clickLogin();
        await loginPage.loginProcess("ayura", "ayu12345");
    })
    it('Success logged out', async function(){
        await logoutPage.clickLogout();
        await browser.pause(3000);

        const loginMenu = $("//a[@id='login2']");
        expect(await loginMenu.isDisplayed()).toBe(true);
    })
})