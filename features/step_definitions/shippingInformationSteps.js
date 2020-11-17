const { Given, When, Then } = require('cucumber');
const pageHelper = require('../../helper/PagerHelper').PagerHelper;

Then("I should be taken to the Shipping Information page", async function () {
    let shippingInfoPage = pageHelper.create('ShippingInformationPage');
    await testController.expect(shippingInfoPage.storefrontContentSection().verifyPageIsDisplayed()).ok;

});