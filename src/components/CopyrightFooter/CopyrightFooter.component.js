import React from 'react';
import PropTypes from 'prop-types';

import './CopyrightFooter.scss'; // build-ignore-line

class CopyrightFooter extends React.PureComponent {
  static propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }),
    ),
    copyrightNotice: PropTypes.string.isRequired,
  };

  static defaultProps = {
    links: [],
  };

  render() {
    const { copyrightNotice, links } = this.props;

    return (
      <div className="CopyrightFooter">
        <div className="CopyrightFooter__container">
          <div className="CopyrightFooter__content">
            <div className="CopyrightFooter__notice">{copyrightNotice}</div>
            <div className="CopyrightFooter__links">
              {links.map((link, index) => (
                <a
                  className="CopyrightFooter__link"
                  href={link.url}
                  key={index}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CopyrightFooter;
