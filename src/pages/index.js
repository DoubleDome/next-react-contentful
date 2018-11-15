import { createClient } from '../../common/contentful';
import React from 'react';
import Layout from '../components/layout';
import G2TextHeaderSection from '../../dmp/components/G2TextHeaderSection/G2TextHeaderSection.component';

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
    return (
      <Layout>
        <G2TextHeaderSection title={content.textHeader.fields.title} subtitle={content.textHeader.fields.subtitle}/>
      </Layout>
    );
  }
}

export default Index;
