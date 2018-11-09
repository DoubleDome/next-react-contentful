import React from 'react';
import PropTypes from 'prop-types';

import './TextHeaderSection.scss'; // build-ignore-line

/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/29851653/Text+Header)
 */
class TextHeaderSection extends React.PureComponent {
  static displayName = 'TextHeaderSection';

  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  };

  static defaultProps = {
    subtitle: undefined,
  };

  render() {
    const { title, subtitle } = this.props;

    return (
      <div className="TextHeaderSection">
        <div className="TextHeaderSection__container">
          <h1 className="TextHeaderSection__title">{title}</h1>
          {subtitle && (
            <div className="TextHeaderSection__subtitle">{subtitle}</div>
          )}
        </div>
      </div>
    );
  }
}

export default TextHeaderSection;
