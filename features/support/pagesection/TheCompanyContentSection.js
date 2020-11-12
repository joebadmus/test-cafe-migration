const { Selector } = require('testcafe');


function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}


exports.TheCompanyContentSection = {

    goto: function() {
        return globalThis.countryUnderTest.url;
    },
    verifyPageIsDisplayed: function() {
     return select("#cc-saveAll-startBtn").withAttribute('type', 'button')
    }

}
