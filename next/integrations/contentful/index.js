/* eslint-disable no-undef */
const contentfulDelivery = require('contentful');
const contentfulManagement = require('contentful-management');

const defaultConfig = {
  CTF_SPACE_ID: process.env.CTF_SPACE_ID,
  CTF_CDA_TOKEN: process.env.CTF_CDA_TOKEN,
  CTF_CPA_TOKEN: process.env.CTF_CPA_TOKEN,
  CTF_MGMT_TOKEN: process.env.CTF_MGMT_TOKEN,
};

module.exports = {
  createDeliveryClient(config = defaultConfig) {
    const options = {host:'preview.contentful.com'};
    options.space = config.space || defaultConfig.CTF_SPACE_ID;
    options.accessToken = config.accessToken || defaultConfig.CTF_CPA_TOKEN;
    
    if (process.env.NODE_ENV === 'production' && !process.env.STAGING) {
      options.host = 'cdn.contentful.com';
      options.accessToken = config.CTF_CDA_TOKEN;
    }

    return contentfulDelivery.createClient(options);
  },
  createManagementClient(config = defaultConfig) {
    return contentfulManagement.createClient({
      accessToken: config.CTF_MGMT_TOKEN,
    });
  },
};
