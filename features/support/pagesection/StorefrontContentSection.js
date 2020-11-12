const {Selector} = require('testcafe');


function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}



exports.StorefrontContentSection = {

      verifyPageIsDisplayed: function(){
        return select('#divStorefrontContentSection', {visibilityCheck: true}).exists;
    }
    
}