import { $, browser, expect } from '@wdio/globals';
import loginPage from '../pageobjects/login.page';
import cartPage from '../pageobjects/cart.page';
import checkoutPage from '../pageobjects/checkout.page';

describe('Verify place an order successfully', function(){
    beforeEach(async () => {
        await loginPage.openPage();
        await loginPage.clickLogin();
        await loginPage.loginProcess("ayura", "ayu12345");
        await cartPage.clickProductSamsung6();
        await cartPage.clickAddToCartButton();
    })
    it("Place an Order with valid input form", async function(){
        await cartPage.clickCartMenu();
        await checkoutPage.clickCheckout();
        await checkoutPage.fillFormCheckout("Ayu", "Indonesia", "Surabaya", "2424", "November", "2024");
        await checkoutPage.clickPurchase();
        const successMessage = await checkoutPage.getSuccessMessage();
        expect(successMessage).toHaveText("Thank you for your purchase!")
    })
describe('Verify failed when place an order', function(){
    beforeEach(async () => {
        await loginPage.openPage();
        await loginPage.clickLogin();
        await loginPage.loginProcess("ayura", "ayu12345");
        await cartPage.clickProductSamsung6();
        await cartPage.clickAddToCartButton();
    })
    it("Place an order fails without input the form", async function(){
        await cartPage.clickCartMenu();
        await checkoutPage.clickCheckout();
        await checkoutPage.fillFormCheckout("", "", "", "", "", "");
        await checkoutPage.clickPurchase();
        const alertMessage = await browser.getAlertText(); 
        expect(alertMessage).toBe("Please fill out Name and Creditcard.");
        await browser.acceptAlert();
    })
})
describe("Verify failed when place an order", function(){
    beforeEach(async () => {
        await loginPage.openPage();
        await loginPage.clickLogin();
        await loginPage.loginProcess("ayura", "ayu12345");
    })
    it("Place an order fails without adding any product to cart", async function() {
        await cartPage.clickCartMenu();
        await checkoutPage.clickCheckout(); 
        await checkoutPage.fillFormCheckout("Ayu", "Indonesia", "Surabaya", "2424", "November", "2024");
        await checkoutPage.clickPurchase();
        const successMessage = await checkoutPage.getSuccessMessage();
        expect(successMessage).not.toHaveText("Thank you for your purchase!")
    });
})
    
})