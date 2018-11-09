import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import {
  SCREEN_WIDTH_SM_MIN,
  SCREEN_WIDTH_MD_MIN,
  SCREEN_WIDTH_LG_MIN,
  SCREEN_WIDTH_XL_MIN,
  SCREEN_WIDTH_XS_MAX,
  SCREEN_WIDTH_SM_MAX,
  SCREEN_WIDTH_MD_MAX,
  SCREEN_WIDTH_LG_MAX,
} from '../config/config';
import { window } from '../utils/browser';

const ENV_TEST = window.ENV_TEST === true;

const mediaQueries = {
  xs: `(max-width: ${SCREEN_WIDTH_XS_MAX}px)`,
  sm: `(min-width: ${SCREEN_WIDTH_SM_MIN}px) and (max-width: ${SCREEN_WIDTH_SM_MAX}px)`,
  md: `(min-width: ${SCREEN_WIDTH_MD_MIN}px) and (max-width: ${SCREEN_WIDTH_MD_MAX}px)`,
  lg: `(min-width: ${SCREEN_WIDTH_LG_MIN}px) and (max-width: ${SCREEN_WIDTH_LG_MAX}px)`,
  xl: `(min-width: ${SCREEN_WIDTH_XL_MIN}px)`,
  'min-sm': `(min-width: ${SCREEN_WIDTH_SM_MIN}px)`,
  'min-md': `(min-width: ${SCREEN_WIDTH_MD_MIN}px)`,
  'min-lg': `(min-width: ${SCREEN_WIDTH_LG_MIN}px)`,
  'min-xl': `(min-width: ${SCREEN_WIDTH_XL_MIN}px)`,
  'max-xs': `(max-width: ${SCREEN_WIDTH_XS_MAX}px)`,
  'max-sm': `(max-width: ${SCREEN_WIDTH_SM_MAX}px)`,
  'max-md': `(max-width: ${SCREEN_WIDTH_MD_MAX}px)`,
  'max-lg': `(max-width: ${SCREEN_WIDTH_LG_MAX}px)`,
};

class ResponsiveDiv extends React.PureComponent {
  static propTypes = {
    screen: PropTypes.oneOf(Object.keys(mediaQueries)).isRequired,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  };

  render() {
    const { screen, children } = this.props;

    const mediaQuery = mediaQueries[screen];
    if (!mediaQuery) {
      throw new TypeError(`Unknown screen prop value: ${screen}`);
    }

    if (ENV_TEST) {
      // For now let's simulate lg screen size on test environment
      const matches =
        'lg min-sm min-md min-lg max-lg'.split(' ').indexOf(screen) !== -1;
      if (typeof children === 'function') {
        return children(matches);
      }
      return matches ? children : null;
    }

    return <MediaQuery query={mediaQuery}>{children}</MediaQuery>;
  }
}

export default ResponsiveDiv;
