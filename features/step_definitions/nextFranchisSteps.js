const { Given, When, Then } = require('cucumber');
const pageHelper = require('../../helper/PagerHelper').PagerHelper;


Then("I should be taken to the Next Franchise page", async function () {

    let nextFranchisePage = pageHelper.create("NextFranchisePage");
    await testController.expect(nextFranchisePage.nextFranchiseMainGridSection().verifyPageIsDisplayed()).ok;
});