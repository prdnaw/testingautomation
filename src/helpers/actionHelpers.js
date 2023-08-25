class ActionHelper {

    //web

    static launchBrowserUrl(urlToLaunch) {
        browser.url(urlToLaunch)
    }

    static getTitle() {
        return browser.getTitle();
    }

    static getValue(locator) {
        return $(locator).getValue();
    }

    // native
    static launchApp() {
        driver.launchApp();
    }

    static back() {
        driver.back();
    }

    static refreshPage() {
        driver.refresh();
    }

    static pauseMobile(seconds) {
        driver.pause(seconds * 300);
    }

    static scrollUp() {
        driver.touchAction([
            { action: 'longPress', x: 600, y: 1800 },
            { action: 'moveTo', x: 600, y: 1100 },
            'release'
        ]);
    }

    static switchToNativeContext() {
        browser.switchContext('NATIVE_APP');
    }

    static switchToWebViewContext() {
        browser.switchContext('WEBVIEW_chrome');
    }

    static pause(seconds) {
        browser.pause(seconds * 300);
    }

    static isVisible(locator) {
        return $(locator).isDisplayed() ? true : false;
    }

    static click(locator) {
        $(locator).click();
    }

    static waitForElement(locator, waitTimeInSeconds) {
        $(locator).waitForDisplayed(waitTimeInSeconds * 2000);
    }

    static clearText(locator) {
        $(locator).clearValue();
    }

    static sendText(locator, inputText) {
        $(locator).addValue(inputText);
    }

    static addText(locator, inputText) {
        $(locator).setValue(inputText);
    }

    static keyboardDefault(char) {
        driver.keys(char);
    }

    static getText(locator) {
        return $(locator).getText();
    }

    static async scrollIntoView(locator) {
        return await $(locator).scrollIntoView()
    }
}

module.exports = ActionHelper;
