const ActionHelper = require('../../helpers/actionHelpers');

class Header{

    getObjectLocator() {
        return require('./../../screens/web/sections.screen.js')
    }

    getObjectLocatorLogin() {
        return require('./../../screens/web/login.screen.js')
    }

    account() {
        ActionHelper.launchBrowserUrl(process.env.URL)
        // ActionHelper.pause(3)
        ActionHelper.isVisible(this.getObjectLocator().logAcc)
        ActionHelper.waitForElement(this.getObjectLocator().logAcc)
        ActionHelper.click(this.getObjectLocator().logAcc)
    }

    login2(){
        ActionHelper.pause(5)
        ActionHelper.sendText(this.getObjectLocatorLogin().masukkanEmail, "invalid")
        ActionHelper.sendText(this.getObjectLocatorLogin().masukkanPassword, "pw12")
        ActionHelper.pause(5)
    }
}

module.exports = new Header();
