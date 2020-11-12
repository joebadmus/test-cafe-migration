const { Selector } = require('testcafe');


function select(selector) {
    return Selector(selector).with({ boundTestRun: testController });
}


exports.CareersAtNextContentSection = {
    
    verifyPageIsDisplayed() {
        return select(".town").exists;

    }

};