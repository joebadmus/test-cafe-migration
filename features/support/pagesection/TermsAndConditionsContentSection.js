const { Selector } = require('testcafe');


function select(selector) {
    return Selector(selector).with({ boundTestRun: testController });
}


exports.TermsAndConditionsContentSection = {
    verifyPageIsDisplayed: function () {
        return select('[data-index="03_1"]', {visibilityCheck: true}).exists;
    }
}
