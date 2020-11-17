const HomePage = require('../features/support/pages/HomePage').HomePage
const ContactUsPage = require('../features/support/pages/ContactUsPage').ContactUsPage
const TheCompanyPage = require('../features/support/pages/TheCompanyPage').TheCompanyPage
const CareersAtNextPage = require('../features/support/pages/CareersAtNextPage').CareersAtNextPage
const SitemapPage = require('../features/support/pages/SitemapPage').SitemapPage
const MediaAndPressPage = require('../features/support/pages/MediaAndPressPage').MediaAndPressPage
const PrivacyPolicyPage = require('../features/support/pages/PrivacyPolicyPage').PrivacyPolicyPage
const ReturnsInformationPage = require('../features/support/pages/ReturnsInformationPage').ReturnsInformationPage
const ShippingInformationPage = require('../features/support/pages/ShippingInformationPage').ShippingInformationPage
const NextFranchisePage = require('../features/support/pages/NextFranchisePage').NextFranchisePage
const TermsAndConditionsPage = require('../features/support/pages/TermsAndConditionsPage').TermsAndConditionsPage

exports.PagerHelper = {

  create: function (page) {
    switch (page) {
      case "HomePage": return HomePage;
      case "ContactUsPage": return ContactUsPage;
      case "TheCompanyPage": return TheCompanyPage;
      case "Careers@NextPage": return CareersAtNextPage;
      case "SitemapPage": return SitemapPage;
      case "Media&PressPage": return MediaAndPressPage;
      case "PrivacyPolicyPage": return PrivacyPolicyPage;
      case "ReturnsInformationPage": return ReturnsInformationPage;
      case "ShippingInformationPage": return ShippingInformationPage;
      case "NextFranchisePage": return NextFranchisePage;
      case "TermsAndConditionsPage": return TermsAndConditionsPage;





      default: throw `${page} is not defined in the page helper`;

    }
  }
};
