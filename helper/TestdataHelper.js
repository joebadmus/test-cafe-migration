const prodConfig = require('../testSettings/prod.json')
const countryCode = require("../testSettings/countryCode.json")

exports.TestDataHelper = {

    setTestCountry: function(value){
        
        let countryUrl = prodConfig["url"][value];
    
        if (countryUrl === undefined) throw `Country ${value} is not found`;
        
        let countryUnderTest = {
            name: value,
            code: countryCode[value.toUpperCase()],
            url: countryUrl,
          };
          globalThis.countryUnderTest = countryUnderTest;
    },

};