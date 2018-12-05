import React from 'react';
import { queryContent } from '../integrations/contentful';
import config from '../integrations/contentful/config';
import Layout from '../layouts/layout';
import G2TextHeaderSection from '../../dmp/components/G2TextHeaderSection/G2TextHeaderSection.component';
import G2HeroSection from '../../dmp/components/G2HeroSection/G2HeroSection.component';
import G2RoomOverviewCardCollectionSection from '../../dmp/components/G2RoomOverviewCardCollectionSection/G2RoomOverviewCardCollectionSection.component';
import PromoCardsRowSection from '../../src/components/PromoCardsRowSection/PromoCardsRowSection.component';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import 'isomorphic-fetch';
import { gqlQuery, translateResponse } from '../queries/index.query';

class Index extends React.Component {
  static async getInitialProps() {
    let response;

    // Hard coding in the only room landing page ID we have right now
    await queryContent(gqlQuery('4dxYMm3HWEaoA0qocm4SaQ'), config.spaces.rooms) // eslint-disable-line no-use-before-define
      .then(res => {
        response = res;
      });
        
    return translateResponse(response.data.roomLandingPage);
  }

  createTextHeader(data) {
    return <G2TextHeaderSection title={data.title} subtitle={data.subtitle} />;
  }

  createHero(data) {
    return (
      <G2HeroSection
        title={data.title}
        premium={data.premium}
        description={data.description}
        images={data.images}
        secondaryAction={data.secondaryAction}
      />
    );
  }

  createRoomOverview(collection, layout) {
    return (
      <G2RoomOverviewCardCollectionSection rooms={collection} layout={layout} />
    );
  }

  createPromoSection(data) {
    return (
      <PromoCardsRowSection
        title={data.title}
        readMoreButton={{
          label: data.button.label,
          url: data.button.url
        }}
        cards={data.cards}
      />
    );
  }

  santizeComponentCollection() {
    const result = [];
    this.props.componentsCollection.forEach(component => {
      result.push({
        name: component.component.name,
        dataField: component.dataField
      });
    });
    return result;
  }

  render() {
    // This approach allows to reorder the components depending on data coming from the CMS
    const components = [];

    const sanitizedCollection = this.santizeComponentCollection(
      this.props.componentsCollection
    );

    sanitizedCollection.forEach(component => {
      switch (component.name) { // eslint-disable-line default-case
        case 'G2TextHeaderSection':
          components.push(
            this.createTextHeader(this.props[component.dataField])
          );
          break;
        case 'G2HeroSection':
          components.push(this.createHero(this.props[component.dataField]));
          break;
        case 'G2RoomOverviewCardCollectionSection':
          components.push(
            this.createRoomOverview(
              this.props[component.dataField],
              this.props.roomCollectionLayout
            )
          );
          break;
        case 'PromoCardsRowSection':
          components.push(
            this.createPromoSection(this.props[component.dataField])
          );
          break;
      }
    });

    return <Layout>{components.map(component => component)}</Layout>;
  }
}

export default Index;
