const HomePage = require('../features/support/pages/HomePage').HomePage
const ContactUsPage = require('../features/support/pages/ContactUsPage').ContactUsPage
const TheCompanyPage = require('../features/support/pages/TheCompanyPage').TheCompanyPage
const CareersAtNextPage = require('../features/support/pages/CareersAtNextPage').CareersAtNextPage
const SitemapPage = require('../features/support/pages/SitemapPage').SitemapPage

exports.PagerHelper = {

  create: function (page) {
    switch (page) {
      case "HomePage": return HomePage;
      case "ContactUsPage": return ContactUsPage;
      case "TheCompanyPage": return TheCompanyPage;
      case "Careers@NextPage": return CareersAtNextPage;
      case "SitemapPage": return SitemapPage;


      default: throw `Page ${marketType} is not defined in the page helper`;

    }
  }
};
