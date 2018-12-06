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
  async queryContent(query, tokens) {
    let result;
    
    if (!query) {
      throw new Error('Query must be defined!');
    }
    
    if (!tokens.delivery) {
      throw new Error('Contentful Delivery Token must be defined!');
    }
    
    if (!tokens.id) {
      throw new Error('Contentful Space ID must be defined!');
    }

    let response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${tokens.id}/environments/master`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokens.preview}`
        },
        body: JSON.stringify({
          query
        })
      }
    );
    
    let data = await response.json()
    .then(res => {
      result = res;
    })
    
    return result;  
  }
  
};
