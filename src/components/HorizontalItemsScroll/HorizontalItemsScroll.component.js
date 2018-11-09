import PropTypes from 'prop-types';
import React from 'react';
import './HorizontalItemsScroll.scss'; // build-ignore-line

/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/17137925/Highlight+Carousel)
 */
class HorizontalItemsScroll extends React.PureComponent {
  static displayName = 'HorizontalItemsScroll';

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;
    return (
      <div className="HorizontalItemsScroll">
        <div className="HorizontalItemsScroll__list">
          <div className="HorizontalItemsScroll__list__inner">{children}</div>
        </div>
      </div>
    );
  }
}

export default HorizontalItemsScroll;
