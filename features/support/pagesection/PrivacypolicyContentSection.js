const {Selector} = require('testcafe');


function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}


exports.PrivacypolicyContentSection = {

      verifyPageIsDisplayed: function(){
        return select("div[data-index='03_1']", {visibilityCheck: true}).exists;
    }
    
}
