import React from 'react';
import { queryContent } from '../integrations/contentful/index';
import config from '../integrations/contentful/config';
import Layout from '../layouts/layout';
import G2RoomOverviewHeaderSection from '../../dmp/components/G2RoomOverviewHeaderSection/G2RoomOverviewHeaderSection.component';
import G2HighlightCarouselSection from '../../dmp/components/G2HighlightCarouselSection/G2HighlightCarouselSection.component';
import G2AccordionSection from '../../dmp/components/G2AccordionSection/G2AccordionSection.component';
import G2GallerySection from '../../dmp/components/G2GallerySection/G2GallerySection.component';
import G2TwoColumnHeroSection from '../../dmp/components/G2TwoColumnHeroSection/G2TwoColumnHeroSection.component';
import G2RoomOverviewCardRowSection from '../../dmp/components/G2RoomOverviewCardRowSection/G2RoomOverviewCardRowSection.component';
import "isomorphic-fetch";
import { gqlQuery, translateResponse } from '../queries/room-detail.query'

class RoomDetail extends React.Component {

    static async getInitialProps({query}) {
        let response;
        await queryContent(gqlQuery(query.id), config.spaces.rooms) // eslint-disable-line no-use-before-define
        .then((res) => {
          response = res; // eslint-disable-line prefer-destructuring
        });
        
        return translateResponse(response.data.roomDetailPageCollection.items[0]);
      }



    createOverviewHeader(data) {
      return (
        <G2RoomOverviewHeaderSection
          {...data
          }
        />
      );
    }

    createHighlightCarousel(data) {
      return (
        <G2HighlightCarouselSection
          title={data.title}
          cards={data.cards}
        />
      )
    }

    createGallery(data) {
      return (
        <G2GallerySection
          title={data.title}
          virtualTourHero={data.virtualTourHero}
          items={data.items}
        />
      )
    }

    createAccordion(data) {
      return (
        <G2AccordionSection
          {...data
          }
        />
      )
    }

    createCardRow(data) {
      return (
        <G2RoomOverviewCardRowSection
          title={data.title}
          readMoreButton={data.readMoreButton}
          rooms={data.rooms}
        />
      )
    }

    createTwoColumnHero(data) {
      return (
        <G2TwoColumnHeroSection
          title={data.title}
          image={data.image}
          subtitle={data.subtitle}
          contentHTML={data.contentHTML}
          actions={data.actions}
          sidebarSections={data.sidebarSections}
        />
      )
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
        case 'G2RoomOverviewHeaderSection':
              components.push(
                this.createOverviewHeader(this.props.room[component.dataField])
              );
              break;
        case 'G2HighlightCarouselSection':
              components.push(
                this.createHighlightCarousel(this.props.room[component.dataField])
              );
              break;
        case 'G2AccordionSection':
              components.push(
                this.createAccordion(this.props.room[component.dataField])
              );
              break;
        case 'G2GallerySection':
              components.push(
                this.createGallery(this.props.room[component.dataField])
              );
              break;
        case 'G2TwoColumnHeroSection':
              components.push(
                this.createTwoColumnHero(this.props.room[component.dataField])
              );
              break;
          case 'G2RoomOverviewCardRowSection':
              components.push(
                this.createCardRow(this.props.room[component.dataField])
              );
              break;
      }
    });

    return (
      <Layout>
        {components.map(component => component)}
      </Layout>
    );
  }
}

export default RoomDetail;