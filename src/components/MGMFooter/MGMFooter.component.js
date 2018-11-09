import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import PropertiesGrid from './PropertiesGrid/PropertiesGrid.component';

import './MGMFooter.scss'; // build-ignore-line

const linkTemplate = link => (
  <a className="MGMFooter__link" key={link.key} href={link.url}>
    {link.label}
  </a>
);

export default class MGMFooter extends PureComponent {
  render() {
    const { logo, links, properties } = this.props;

    return (
      <div className="MGMFooter">
        <div className="MGMFooter__container">
          <div className="MGMFooter__row">
            <div className="MGMFooter__aside">
              <div className="MGMFooter__logo-container">
                <LazyLoad height={64} offset={400}>
                  <img
                    className="MGMFooter__logo"
                    src={logo}
                    alt="MGM Resorts International"
                  />
                </LazyLoad>
              </div>

              <div className="MGMFooter__links">
                {links.map(link => linkTemplate(link))}
              </div>
            </div>

            <div className="MGMFooter__properties">
              <PropertiesGrid properties={properties} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MGMFooter.propTypes = {
  logo: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  properties: PropTypes.arrayOf(PropTypes.object).isRequired,
};
