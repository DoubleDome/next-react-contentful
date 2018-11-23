const commonSpaceID = '72xerp76i8ku';
const commonAccessToken =
  'e47e54822455d3275ad2b4d6e88e102c7803f2c6f37d92fe12eb54d9f4df3e35';
const componentContentID = 'component';

const contentful = require('../integrations/contentful');
const delivery = contentful.createDeliveryClient({
  space: commonSpaceID,
  accessToken: commonAccessToken,
});
const management = contentful.createManagementClient();

class ComponentListBuilder {
  constructor() {
  }

  pull() {
    return delivery
      .getEntries({
        content_type: componentContentID,
        include: 1,
      })
      .then(response => this.sanitize(response))
      .catch(error => console.log(error));
  }

  sanitize(response) {
    this.items = response.items.map(item => item.fields.name);
  }

  sync(items){
    const result = items.filter(item => !this.exists(item));
    result.map(item => this.add(item));
  }

  add(name) {
    return management
      .getSpace(commonSpaceID)
      .then(space =>
        space.createEntry(componentContentID, {
          fields: {
            name: {
              'en-US': name,
            },
          },
        }),
      )
      .then(entry => entry.publish())
      // .then(entry => console.log(`Entry ${name} - ${entry.sys.id} published.`))
      .catch(console.error);
  }

  exists(name) {
    const result = this.items.filter(item => item === name);
    return result.length > 0;
  }
}

module.exports = ComponentListBuilder;
