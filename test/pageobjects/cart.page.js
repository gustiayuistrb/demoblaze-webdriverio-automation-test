import { $, browser } from '@wdio/globals'

class CartPage{
    get phoneCategories() { return $('//a[class="list-group-item" and text()="Phones"]'); }
    get laptopCategories() { return $('//a[class="list-group-item" and text()="Laptops"]'); }
    get monitorCategories() { return $('//a[class="list-group-item" and text()="Monitors"]'); }
    get samsungs6() { return $('=Samsung galaxy s6'); }
    get macbookair() { return $('=MacBook air'); }
    get applemonitor() { return $('=Apple monitor 24'); }
    get cartMenu() { return $('//a[@id="cartur"]'); }
    get addToCartButton() { return $("//a[text()='Add to cart']"); }
    get productDetailTitle() { return $("//h2[@class='name']"); }
    get deleteButton() { return $("//a[text()='Delete']")}
    get cartItems() { return $$('//tbody[@id="tbodyid"]/tr/td[2]'); }

    async clickProductSamsung6(){
        await this.samsungs6.click();
    }

    async clickProductMacbookair(){
        await this.laptopCategories.click();
        await this.macbookair.click();
    }

    async clickProductApplemonitor(){
        await this.monitorCategories.click();
        await this.applemonitor.click();
    }

    async clickCartMenu(){
        await this.cartMenu.click();
    }

    async clickAddToCartButton(){
        await this.addToCartButton.click();
    }

    async clickDeleteProduct(){
        await this.deleteButton.click();
    }

    async getCartItemsText() {
        const items = await this.cartItems; 
        if (items.length === 0) {
            return []; 
        }
        return Promise.all(items.map(async item => await item.getText()));
    }
}

export default new CartPage;