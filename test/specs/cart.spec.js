import { $, browser, expect } from '@wdio/globals';
import loginPage from '../pageobjects/login.page';
import cartPage from '../pageobjects/cart.page';

describe('Verify cart functionality', function(){
    beforeEach(async () => {
        loginPage.openPage();
        loginPage.clickLogin();
        loginPage.loginProcess("ayura", "ayu12345");
    })
    
    describe("Verify Add Product to Cart", function(){
        it.only("Add product to cart", async function(){
            await cartPage.clickProductSamsung6();
            await cartPage.clickAddToCartButton();
            expect(cartPage.productDetailTitle).toHaveText('Samsung galaxy s6')
        })
    })

    describe("Verify Delete Product to Cart", function(){
        it("Delete product in the cart", async function(){

        })
    })

    describe("Verify Delete Product to Cart", function(){
        it("Delete product in the cart", async function(){

        })
    })
})