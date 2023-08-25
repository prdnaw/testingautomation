const ActionHelper = require('../../helpers/actionHelpers');
const { account } = require('./sections.page');

require('dotenv').config();
// const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    getObjectLocatorLogin() {
        return require('./../../screens/web/login.screen.js')
    }

    getObjectLocatorRegister() {
        return require('./../../screens/web/register.screen.js')
    }

    getObjectLocatorSections() {
        return require('./../../screens/web/sections.screen.js')
    }

    getObjectLocatorHome() {
        return require('./../../screens/web/home.screen.js')
    }

    alert1(){
        ActionHelper.isVisible(this.getObjectLocator().alertEmail)
        ActionHelper.waitForElement(this.getObjectLocator().alertPassword)
        ActionHelper.pause(5)
    }

    open() {
        browser.url(process.env.URL)
    }

}

module.exports = new LoginPage();
