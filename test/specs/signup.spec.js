import { $, browser, expect } from '@wdio/globals'
import signupPage from '../pageobjects/signup.page';

describe('Verify Sign Up Successfully', function(){
    beforeEach(async () => {
        await signupPage.openPage();
        await signupPage.clickSignUp();
    })

    it('Sign up user with valid data', async function(){
        await signupPage.signupProcess("ayuk", "ayu12345")
        await browser.pause(3000); 
        const alertText = await browser.getAlertText(); 
        expect(alertText).toBe('Sign up successful.');
        await signupPage.acceptAlert();
    })

    it('Sign up a user with a registered user.', async function(){
        await signupPage.signupProcess("ayuayu", "ayu12345");
        await browser.pause(3000); 
        const alertText = await browser.getAlertText(); 
        expect(alertText).toEqual("This user already exist.");
        await browser.acceptAlert();
    })

    //fail
    it('Sign up user with an invalid username.', async function(){
        await signupPage.signupProcess("ay-!@%#", "ayu12345");
        await browser.pause(3000); 
        const alertText = await browser.getAlertText(); 
        expect (alertText).toBe('Invalid username. Please try again.');
        await browser.acceptAlert();
    })

    it('Sign up user with an invalid password', async function(){
        await signupPage.signupProcess("ayura", "a");
        await browser.pause(3000); 
        const alertText = await browser.getAlertText(); 
        expect (alertText).toBe('Invalid password. Please try again.');
        await browser.acceptAlert();
    })
    
    it('Sign up user without entering username field', async function(){
        await signupPage.signupProcess("", "ayu12345");
        await browser.pause(3000); 
        const alertText = await browser.getAlertText(); 
        expect (alertText).toBe('Please fill out Username and Password.');
        await browser.acceptAlert();
    })

    it('Sign up user without entering password field', async function(){
        await signupPage.signupProcess("ayura", "");
        await browser.pause(3000); 
        const alertText = await browser.getAlertText(); 
        expect (alertText).toBe('Please fill out Username and Password.');
        await browser.acceptAlert();
    })

    it('Sign up user with empty field', async function(){
        await signupPage.signupProcess("", "ayu12345");
        await browser.pause(3000); 
        const alertText = await browser.getAlertText(); 
        expect (alertText).toBe('Please fill out Username and Password.');
        await browser.acceptAlert();
    })

})