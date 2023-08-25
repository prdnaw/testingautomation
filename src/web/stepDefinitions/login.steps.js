const { Given, When, Then } = require('@cucumber/cucumber');
require('dotenv').config();
const LoginPage = require('../../pages/web/login.page');
const SectionPage = require('../../pages/web/sections.page');

//Users can login to the web
Given(/^User visit SHAFIQ page and access login form$/, {timeout : 2 * 7000}, () => {
    SectionPage.account()
});

When(/^User provide invalid email format and password too length$/, () => {
    SectionPage.login2()
});

Then(/^Appear error alert message$/, () => {
    LoginPage.alert1()
});

