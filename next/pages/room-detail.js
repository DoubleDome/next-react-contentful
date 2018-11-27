import React from 'react';
import { createDeliveryClient } from '../integrations/contentful/index';
import config from '../integrations/contentful/config';

import Layout from '../layouts/layout';
import G2RoomOverviewHeaderSection from '../../dmp/components/G2RoomOverviewHeaderSection/G2RoomOverviewHeaderSection.component';
import G2HighlightCarouselSection from '../../dmp/components/G2HighlightCarouselSection/G2HighlightCarouselSection.component';
import G2AccordionSection from '../../dmp/components/G2AccordionSection/G2AccordionSection.component';
import G2GallerySection from '../../dmp/components/G2GallerySection/G2GallerySection.component';
import G2TwoColumnHeroSection from '../../dmp/components/G2TwoColumnHeroSection/G2TwoColumnHeroSection.component';
import G2RoomOverviewCardRowSection from '../../dmp/components/G2RoomOverviewCardRowSection/G2RoomOverviewCardRowSection.component';

class RoomDetail extends React.Component {
    static async getInitialProps({query}) {
        const client = createDeliveryClient(config.spaces.rooms);
        const entries = await client.getEntries({
          content_type: 'roomDetailPage',
          'fields.slug': query.id
        });

        return { room: entries };
    }

  render() {

    const { room } = this.props;

    return (
      <Layout>

      </Layout>
    );
  }
}

export default RoomDetail;
