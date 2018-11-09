import PropTypes from 'prop-types';
import React from 'react';
import './PromoCardsRowSection.scss'; // build-ignore-line

import HorizontalItemsScroll from '../HorizontalItemsScroll/HorizontalItemsScroll.component';
import Section from '../Section/Section.component';
import PromoCard, { PromoCardPropTypes } from './PromoCard/PromoCard.component';
import ResponsiveDiv from '../ResponsiveDiv.component';
import IconRight from '../../shared/Icons/Right';

/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/45088842/Promo+Card+Row)
 */
class PromoCardsRowSection extends React.PureComponent {
  static displayName = 'PromoCardsRowSection';

  static propTypes = {
    title: PropTypes.string,
    readMoreButton: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        ...PromoCardPropTypes,
      }),
    ).isRequired,
  };

  static defaultProps = {
    title: undefined,
    readMoreButton: undefined,
  };

  render() {
    const { title, readMoreButton, cards } = this.props;
    return (
      <Section
        title={title}
        readMoreButton={readMoreButton}
        className="PromoCardsRowSection"
      >
        <HorizontalItemsScroll>
          {cards.map(({ key, ...cardProps }, index) => (
            <PromoCard key={key || index} {...cardProps} />
          ))}

          {cards.length > 2 &&
            readMoreButton && (
              <ResponsiveDiv screen="max-sm">
                <a
                  href={readMoreButton.url}
                  className="PromoCardsRowSection__moreBtn"
                >
                  <div className="PromoCardsRowSection__moreBtn__circle">
                    <IconRight />
                  </div>
                  <div className="PromoCardsRowSection__moreBtn__label">
                    {readMoreButton.label}
                  </div>
                </a>
              </ResponsiveDiv>
            )}
        </HorizontalItemsScroll>
      </Section>
    );
  }
}

export default PromoCardsRowSection;
