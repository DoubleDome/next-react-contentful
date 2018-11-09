import PropTypes from 'prop-types';
import React from 'react';
import './HighlightCard.scss'; // build-ignore-line

/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/47121126/Highlight+Card)
 */
class HighlightCard extends React.PureComponent {
  static displayName = 'HighlightCard';

  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  };

  static defaultProps = {
    description: undefined,
  };

  render() {
    const { imageUrl, title, description } = this.props;
    return (
      <div className="HighlightCard">
        <div className="HighlightCard__image">
          <img src={imageUrl} alt={title} />
        </div>

        <h4 className="HighlightCard__title">{title}</h4>

        {description && (
          <div className="HighlightCard__description">{description}</div>
        )}
      </div>
    );
  }
}

export default HighlightCard;
