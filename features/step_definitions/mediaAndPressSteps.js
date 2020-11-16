const { Given, When, Then } = require('cucumber');
const pageHelper = require('../../helper/PagerHelper').PagerHelper;

Then("I should be taken to the Media and Press page", async function () {
    let mediaAndPressPage = pageHelper.create('Media&PressPage');

    let acceptCookieConsent = mediaAndPressPage.mediaAndPressContentSection().acceptCookieConsent();
    await testController.click(acceptCookieConsent);
    await testController.expect(mediaAndPressPage.mediaAndPressContentSection().verifyPageIsDisplayed()).ok; 
});