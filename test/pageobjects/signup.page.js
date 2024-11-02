import { $, browser } from '@wdio/globals'

class SignUpPage{
    get signUpMenu(){ return $("//a[@id='signin2']")}
    get inputUsername(){ return $("#sign-username")}
    get inputPassword(){ return $("#sign-password")}
    get signUpButton(){ return $("//button[@onclick='register()']")}
    get cancelSignupButton() { return $("button[onclick='register()']")}

    async openPage(){
        await browser.url("https://demoblaze.com/");
    }

    async clickSignUp(){
        await this.signUpMenu.click();
    }

    async signupProcess(username, password){
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.signUpButton.click();
    }

}

export default new SignUpPage;