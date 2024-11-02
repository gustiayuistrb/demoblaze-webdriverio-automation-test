import { $, browser } from '@wdio/globals'

class LoginPage{
    get loginMenu(){ return $("//a[@id='login2']")}
    get inputUsername(){ return $("#loginusername")}
    get inputPassword(){ return $("#loginpassword")}
    get loginButton(){ return $("//button[@onclick='logIn()']")}
    get cancelLoginButton() { return $("//button[@class='btn btn-secondary']")}
    get welcomeUser() { return $("#nameofuser")}
    get alertMessage() { return $(".alert"); }

    async openPage(){
        await browser.url("https://demoblaze.com/");
    }

    async clickLogin(){
        await this.loginMenu.click();
    }

    async loginProcess(username, password){
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

    async getAlertText() {
        await this.alertMessage.waitForDisplayed(); // Wait until the alert message is visible
        return await this.alertMessage.getText(); // Return the text of the alert message
    }
    
    
}

export default new LoginPage;