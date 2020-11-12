const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;

const pageHelper = require('../../helper/PagerHelper').PagerHelper;
const testdataHelper = require('../../helper/TestdataHelper').TestDataHelper;


Given('I am an {string} user on {string} visiting {string} viewing {string} page', async function (testUser, modeType, country, currentPage) {
    testdataHelper.setTestCountry(country)
    
    let page = pageHelper.create("HomePage");     
    await testController.navigateTo(page.goto());


    let testpage = pageHelper.create(currentPage);
    globalThis.testPage = testpage;
    await testController.click(testpage.goto());
    
});

