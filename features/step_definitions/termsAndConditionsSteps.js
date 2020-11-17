const { Given, When, Then } = require('cucumber');
const pageHelper = require('../../helper/PagerHelper').PagerHelper;

Then("I should be taken to the the Terms and Conditions page", async function () {
    let termsAndConditionsPage = pageHelper.create("TermsAndConditionsPage");
    await testController.expect(termsAndConditionsPage.termsAndConditionsContentSection().verifyPageIsDisplayed()).ok;
});

