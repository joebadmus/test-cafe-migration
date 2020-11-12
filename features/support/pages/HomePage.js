const { Selector } = require('testcafe');


function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}


exports.HomePage = {

    goto: function() {
        return globalThis.countryUnderTest.url;
    },

}

