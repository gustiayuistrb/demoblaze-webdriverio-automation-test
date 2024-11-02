import { $, browser } from '@wdio/globals';

class ContactPage{
    get contactMenu() { return $("//a[text()='Contact']");}
    get inputContactEmail() { return $("//input[@id='recipient-email']");}
    get inputContactName() { return $("//input[@id='recipient-name']");}
    get inputMessage() { return $("//input[@id='message-text']");}
    get sendMessageButton() { return $("//button[text()='Send message']");}
    get cancelButton() { return $("//button[text='Cancel']");}

    async clickContactMenu(){
        await this.contactMenu.click();
    }
    
    async fillContactForm(email, name, message){
        await this.inputContactEmail.setValue(email);
        await this.inputContactName.setValue(name);
        await this.inputMessage.setValue(message);
    }

    async clickSendMessage(){
        await this.sendMessageButton.click();
    }
}

export default new ContactPage;