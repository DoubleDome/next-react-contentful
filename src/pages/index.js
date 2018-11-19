import { createClient } from '../../common/contentful';
import React from 'react';
import Layout from '../components/layout';
import G2TextHeaderSection from '../../dmp/components/G2TextHeaderSection/G2TextHeaderSection.component';
import G2HeroSection  from '../../dmp/components/G2HeroSection/G2HeroSection.component';
import G2RoomOverviewCardCollectionSection  from '../../dmp/components/G2RoomOverviewCardCollectionSection/G2RoomOverviewCardCollectionSection.component';
import PromoCardsRowSection from '../../src/components/PromoCardsRowSection/PromoCardsRowSection.component';
import PropertyFooter from '../../src/components/PropertyFooter/PropertyFooter.component';
import MGMFooter from '../../src/components/MGMFooter/MGMFooter.component';
import CopyrightFooter from '../../src/components/CopyrightFooter/CopyrightFooter.component';

class Index extends React.Component {
  static async getInitialProps() {
    const client = createClient();
    const entries = await client.getEntries({
      content_type:'roomLandingPage',
      include: 1
    });
    return { roomLandingPageProp: entries.items[0] };
  }

  render() {
    const content = this.props.roomLandingPageProp.fields;
    const hero = content.sectionHero.fields;

    return (
      <Layout>
        <G2TextHeaderSection title={content.textHeader.fields.title} subtitle={content.textHeader.fields.subtitle}/>
        <G2RoomOverviewCardCollectionSection
            rooms={
              content.roomCollection.map((room) => {
                  return (
                  {
                      title: room.fields.title,
                      keyValues: [room.fields.squareFeet, room.fields.bedType, room.fields.maxGuests],
                      description: room.fields.shortDescription.content[0].content[0].value,
                    image: {
                        url: room.fields.cardImageUrl,
                      },
                      primaryAction: {
                        label: room.fields.primaryActionLabel,
                        url: room.fields.primaryActionUrl,
                      },
                      secondaryAction: {
                        label: room.fields.secondaryActionLabel,
                        url: room.fields.secondaryActionUrl,
                      },
                      tertiaryAction: {
                        label: room.fields.tertiaryActionLabel,
                        url: room.fields.tertiaryActionUrl,
                      },
                  }
                )
              })
          }
          layout={content.roomCollectionLayout}
        />
      </Layout>
    );
  }
}

export default Index;
