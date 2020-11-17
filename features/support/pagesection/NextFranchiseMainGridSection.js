const { Selector } = require('testcafe');


function select(selector) {
    return Selector(selector).with({ boundTestRun: testController });
}


exports.NextFranchiseMainGridSection = {
    verifyPageIsDisplayed: function () {
        return select('[data-index="03_2"]', {visibilityCheck: true}).exists;
    }
}