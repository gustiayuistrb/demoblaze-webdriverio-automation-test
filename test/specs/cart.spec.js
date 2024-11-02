import { $, browser, expect } from '@wdio/globals';
import loginPage from '../pageobjects/login.page';
import cartPage from '../pageobjects/cart.page';

describe('Verify cart functionality', function(){
    beforeEach(async () => {
        await loginPage.openPage();
        await loginPage.clickLogin();
        await browser.pause(3000); 
        loginPage.loginProcess("ayura", "ayu12345");
        expect (loginPage.welcomeUser).toHaveText('Welcome ayura')
        await browser.pause(3000); 
    })
    
    describe("Verify Cart Functionality", function(){
        it("Add product to cart", async function(){
            await cartPage.clickProductSamsung6();
            await cartPage.clickAddToCartButton();

            expect(cartPage.productDetailTitle).toHaveText('Samsung galaxy s6')
            await browser.pause(12000); 
            
            const alertText = await browser.getAlertText();
            expect(alertText).toBe('Product added.');
            await browser.acceptAlert();
         
        })
    
        it("Delete product in the cart", async function(){
            await browser.pause(3000); 

            await cartPage.clickProductSamsung6();
            await cartPage.clickAddToCartButton();
            expect(cartPage.productDetailTitle).toHaveText('Samsung galaxy s6')
            await browser.pause(3000); 
            await cartPage.clickCartMenu();
            await cartPage.clickDeleteProduct();
            await browser.pause(1000); 
            const cartItemsText = await cartPage.getCartItemsText();
            expect(cartItemsText).toHaveLength(0); 
        })
    })

})