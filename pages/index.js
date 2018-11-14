import { createClient } from '../common/contentful';
import React from 'react';
import Layout from '../components/layout';

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
        <div className="text-center">
          <h1>{this.props.homePageProp.fields.header}</h1>
          {this.props.homePageProp.fields.rooms.map((room, index) => {
            return (
              <p>{room.fields.description}</p>
            );
          })}
        </div>
      </Layout>
    );
  }
}

export default Index;
