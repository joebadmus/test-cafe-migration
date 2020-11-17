const prodConfig = require('../testSettings/prod.json')
const countryCode = require("../testSettings/countryCode.json")

let primaryLanguageFooters = require("../footers/primaryLanguageFooters.json");
let secondLanguageFooter = require("../footers/secondLanguageFooter.json");

exports.TestDataHelper = {

    setTestCountry: function (value) {
        let countryUrl = prodConfig["url"][value];

        if (countryUrl === undefined) throw `Country ${value} is not found`;

        let countryUnderTest = {
            name: value,
            code: countryCode[value.toUpperCase()],
            url: countryUrl,
        };
        globalThis.countryUnderTest = countryUnderTest;
    },

    getFooterLinks: function (countryCode, isPrimaryLanguage = true) {
        return isPrimaryLanguage ? primaryLanguageFooters[countryCode] : secondLanguageFooter[countryCode];
    },

    getInternationalFooterIndex(footerText) {
        // if (footerText === "Size Guide") return 0;
        if (footerText === "Returns Information") return 0;
        if (footerText === "Shipping Information") return 1;
        if (footerText === "Contact Us") return 2;
        if (footerText === "Sitemap") return 3;

        if (!["FR", "LU", "IS"].includes(globalThis.countryUnderTest.code)) {
            if (footerText === "Privacy Policy") return 4;
            if (footerText === "Terms & Conditions") return 5;
            if (footerText === "Media & Press") return 6;
            if (footerText === "The Company") return 7;
            if (footerText === "Careers@next") return 8;
            if (footerText === "Next Franchise") return 9;
            if (footerText === "Next Affiliates") return 10;
        } else {
            if (globalThis.countryUnderTest.code === "LU") {
                if (footerText === "DPD Pick Up") return 4;
            }
            if (globalThis.countryUnderTest.code === "FR") {
                if (footerText === "Parcelshop") return 4;
            }
            if (globalThis.countryUnderTest.code === "IS") {
                if (footerText === "Find a Store") return 4;
            }
            if (footerText === "Privacy Policy") return 5;
            if (footerText === "Terms & Conditions") return 6;
            if (footerText === "Media & Press") return 7;
            if (footerText === "The Company") return 8;
            if (footerText === "Careers@next") return 9;
            if (footerText === "Next Franchise") return 10;
            if (footerText === "Next Affiliates") return 11;

            throw `The footer ${footerText} does not exist`;
        }
    }

};