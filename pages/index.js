import { createClient } from '../common/contentful';
import React from 'react';
import Layout from '../components/layout';
import G2TextHeaderSection from '../dmp/components/G2TextHeaderSection/G2TextHeaderSection.ssr-chunk';

class Index extends React.Component {
  static async getInitialProps() {
    const client = createClient();
    const entries = await client.getEntries({
      content_type:'testLandingPage',
      include: 1
    });
    return { homePageProp: entries.items[0] };
  }

  render() {
    return (
      <Layout>
       <G2TextHeaderSection title="Hi" subtitle="Subtitle"/>
      </Layout>
    );
  }
}

export default Index;
