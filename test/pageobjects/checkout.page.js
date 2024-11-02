import { $, browser } from '@wdio/globals'

class CheckoutPage{
    get checkoutButton() { return $("//button[text()='Place Order']");}
    get inputName() { return $("//input[@id='name']");}
    get inputCountry() { return $("//input[@id='country']");}
    get inputCity() { return $("//input[@id='city']");}
    get inputCreditCard() { return $("//input[@id='card']");}
    get inputMonth() { return $("//input[@id='month']");}
    get inputYear() { return $("//input[@id='year']");}
    get purchaseButton() { return $("//button[text()='Purchase']");}
    get closeButton() { return $("//button[text()='Close']");}

    async clickCheckout (){
        await this.checkoutButton.click();
    }

    async fillFormCheckout (name, country, city, creditCard, month, year){
        await this.inputName.setValue(name);
        await this.inputCountry.setValue(country);
        await this.inputCity.setValue(city);
        await this.inputCreditCard.setValue(creditCard);
        await this.inputMonth.setValue(month);
        await this.inputYear.setValue(year);
    }

    async clickPurchase(){
        await this.purchaseButton.click();
    }

    async getSuccessMessage() {
        const message = $('//h2[contains(text(), "Thank you")]'); 
        await message.waitForDisplayed();
        return await message.getText();
    }

}

export default new CheckoutPage;