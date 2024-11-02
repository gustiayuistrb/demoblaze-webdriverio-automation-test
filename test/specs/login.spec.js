import { $, browser, expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page';

describe('Verify Login Successfully', function(){
    beforeEach(async () => {
        await loginPage.openPage();
        await loginPage.clickLogin();
    })

    it.only('Login user with valid data', async function(){
        await loginPage.loginProcess("ayura", "ayu12345")
        await browser.pause(3000);

        expect (loginPage.welcomeUser).toHaveText('Welcome ayura')
        const currentUrl = await browser.getUrl();
        expect (currentUrl).toEqual('https://demoblaze.com/index.html')
    })

    it('Login user with invalid data (wrong password)', async function(){
        await loginPage.loginProcess("ayura", "ayu123")
        const alertText = await browser.getAlertText(); 
        expect (alertText).toEqual('Wrong password.')
    })

    it('Login user without entering username field', async function(){
        await loginPage.loginProcess("", "ayu12345")
        const alertText = await browser.getAlertText(); 
        expect (alertText).toEqual('Please fill out Username and Password.')
    })

    it('Login user without entering password field', async function(){
        await loginPage.loginProcess("ayura", "");
        const alertText = await browser.getAlertText(); 
        expect (alertText).toEqual('Please fill out Username and Password.')
    })

    it('Login user with empty field', async function(){
        await loginPage.loginProcess("", "ayu12345");
        const alertText = await browser.getAlertText(); 
        expect (alertText).toEqual('Please fill out Username and Password.')
    })

})