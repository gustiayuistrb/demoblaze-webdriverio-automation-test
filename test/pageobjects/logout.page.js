import { $, browser } from '@wdio/globals'

class LogoutPage{
    get logoutMenu(){ return $('#logout2')}

    async clickLogout(){
        await this.logoutMenu.click();
    }
}

export default new LogoutPage;