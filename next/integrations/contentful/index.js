/* eslint-disable no-undef */
const contentfulDelivery = require('contentful');
const contentfulManagement = require('contentful-management');
const defaultConfig = require('./config');

module.exports = {
  createDeliveryClient(params) {
    if (!params) {
      throw new Error('Params must be defined!');
    }

    const options = {
      host: defaultConfig.hosts.preview,
      space: params.id,
      accessToken: params.preview,
    };

    if (process.env.NODE_ENV === 'production' && !process.env.STAGING) {
      options.host = defaultConfig.hosts.production;
      options.accessToken = params.delivery;
    }

    return contentfulDelivery.createClient(options);
  },
  createManagementClient(token) {
    return contentfulManagement.createClient({
      accessToken: token,
    });
  },
};
