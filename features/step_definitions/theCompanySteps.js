const { Given, When, Then } = require('cucumber');
const pageHelper = require('../../helper/PagerHelper').PagerHelper;


Then('I should be taken to the The Company page', async function () {
    let companyPage = pageHelper.create("TheCompanyPage");

    let acceptCookieConsent = companyPage.theCompanyContentSection().acceptCookieConsent();
    await testController.click(acceptCookieConsent);
    let va = companyPage.theCompanyContentSection().verifyPageIsDisplayed();
    await testController.expect(va).ok;
});