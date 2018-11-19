/* eslint-disable no-undef, no-unused-vars */
import Head from 'next/head';
import React from 'react';
import Router from 'next/router';
import stylesheet from '../styles/base.dmp.scss';
import PropertyFooter from './PropertyFooter/PropertyFooter.component';
import MGMFooter from './MGMFooter/MGMFooter.component';
import CopyrightFooter from './CopyrightFooter/CopyrightFooter.component';

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class Layout extends React.Component {

  componentDidMount() {
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
  }

  render() {
    return  (
      <div style={{ height: '100%' }}>
        <Head>
          <title>Next / Contentful / React</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>

        <div className="container-fluid" style={{ height: '100%' }}>
          {this.props.children}
        </div>
        <PropertyFooter
          awards={[
            { imageUrl: 'https://via.placeholder.com/96x96' },
            { imageUrl: 'https://via.placeholder.com/96x96' },
            { imageUrl: 'https://via.placeholder.com/96x96' },
          ]}
          contact={{
            label: 'Find Aria',
            address: ['3730 S Las Vegas Bivd', 'Las Vegas, NV 89158'],
            phone: '702.590.7111',
            email: 'guestservices@aria.com',
            social: [
              {
                label: 'Social button 1',
                iconUrl: 'https://via.placeholder.com/40x40',
                url: '/',
              },
              {
                label: 'Social button 2',
                iconUrl: 'https://via.placeholder.com/40x40',
                url: '/',
              },
              {
                label: 'Social button 3',
                iconUrl: 'https://via.placeholder.com/40x40',
                url: '/',
              },
              {
                label: 'Social button 4',
                iconUrl: 'https://via.placeholder.com/40x40',
                url: '/',
              },
            ],
          }}
          links={[
            {
              label: 'Guest services',
              links: [
                { label: 'Find Reservation', url: '/' },
                { label: 'Check In', url: '/' },
                { label: 'Check Out', url: '/' },
                { label: 'Request Receipt', url: '/' },
                { label: 'Concierge Services', url: '/' },
                { label: 'Gift Cards', url: '/' },
                { label: 'Guestbook Sign-Up', url: '/' },
              ],
              url: '/',
            },
            {
              label: 'Aria hotel',
              links: [
                { label: 'Contact Aria', url: '/' },
                { label: 'Site Map', url: '/' },
                { label: 'Property Map', url: '/' },
                { label: 'FAQ', url: '/' },
                { label: 'Sustainability', url: '/' },
                { label: 'Blog', url: '/' },
              ],
              url: '/',
            },
            {
              label: 'M life Rewards',
              links: [
                { label: 'Join Now!', url: '/' },
                { label: 'Log in', url: '/' },
                { label: 'M life Rewards Mastercard', url: '/' },
              ],
              url: '/',
            },
            {
              label: 'Mobile app',
              links: [
                { label: 'Download iPhone', url: '/' },
                { label: 'Download Android', url: '/' },
              ],
              url: '/',
            },
            {
              label: 'Awards',
              links: [],
              url: '/',
              mobileOnly: true,
            },
            {
              label: 'MGM Resorts',
              links: [],
              url: '/',
              mobileOnly: true,
            },
          ]}
          mobileLabel="More Aria"
        />

        <MGMFooter
          logo="https://via.placeholder.com/234x64"
          links={[
            {
              key: 1,
              label: 'Contact MGM',
              url: '//',
            },
            {
              key: 2,
              label: 'Press Room',
              url: '//',
            },
            {
              key: 3,
              label: 'Weather',
              url: '//',
            },
            {
              key: 4,
              label: 'Investor Relations',
              url: '//',
            },
            {
              key: 5,
              label: 'Employment',
              url: '//',
            },
            {
              key: 6,
              label: 'Become an Affiliate',
              url: '//',
            },
          ]}
          properties={[...Array(26)].map((_, index) => ({
            key: `Hotel Name ${index}`,
            title: `Hotel Name ${index}`,
            image_url: 'https://via.placeholder.com/60x34',
            url: '//',
          }))}
        />

        <CopyrightFooter
          links={[]}
          copyrightNotice="Copyright © 2018 Citycenter Land, Llc. All Rights Reserved"
        />
      </div>
    );

  }
}


export default Layout;
