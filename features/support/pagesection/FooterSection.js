const { Selector } = require('testcafe');


function select(selector) {
    return Selector(selector).with({ boundTestRun: testController });
}



exports.FooterSection = {
    selectFootByText: function (linkText) {
        return select('a').withText(linkText);
    }
}