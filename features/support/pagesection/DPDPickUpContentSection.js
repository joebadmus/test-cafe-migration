const { Selector } = require('testcafe');


function select(selector) {
    return Selector(selector).with({ boundTestRun: testController });
}


exports.DPDPickUpContentSection = {
    verifyPageIsDisplayed: function () {
        return select("#custListItem", { visibilityCheck: true }).exists;
    }
}