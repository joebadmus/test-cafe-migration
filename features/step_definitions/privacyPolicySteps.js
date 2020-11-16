const { Given, When, Then } = require('cucumber');
const pageHelper = require('../../helper/PagerHelper').PagerHelper;

Then("I should be taken to the Privacy Policy page", async function () {
    let privacyPolicyPage = pageHelper.create('PrivacyPolicyPage');
    await testController.expect(privacyPolicyPage.privacypolicyContentSection().verifyPageIsDisplayed()).ok;

});