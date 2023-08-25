class SectionsScreen {
    constructor() {
        //haven't login
        this.logAcc = `//*[@id="offcanvas"]/div[1]/div[1]/a`;
        this.alertEmail = `//div[contains(text(),'email tidak valid')]`;
        this.alertPassword = `//div[contains(text(),'terlalu pendek, minimal 8 karakter atau lebih.')]`;
    }
}

module.exports = new SectionsScreen();