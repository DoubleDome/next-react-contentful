import PropTypes from 'prop-types';
import React from 'react';

import HorizontalItemsCarousel from '../HorizontalItemsCarousel/HorizontalItemsCarousel.component';
import HorizontalItemsScroll from '../HorizontalItemsScroll/HorizontalItemsScroll.component';
import Section from '../Section/Section.component';
import ResponsiveDiv from '../ResponsiveDiv.component';
import HighlightCard from './HighlightCard/HighlightCard.component';

import './HighlightCardsCarouselSection.scss'; // build-ignore-line

/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/17137925/Highlight+Carousel)
 */
class HighlightCardsCarouselSection extends React.PureComponent {
  static displayName = 'HighlightCardsCarouselSection';

  static propTypes = {
    title: PropTypes.string,
    readMoreButton: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
      }),
    ).isRequired,
    autoPlay: PropTypes.bool,
    autoPlaySpeed: PropTypes.number,
  };

  static defaultProps = {
    title: undefined,
    readMoreButton: undefined,
    autoPlay: true,
    autoPlaySpeed: 3000,
  };

  render() {
    const {
      title,
      readMoreButton,
      cards,
      autoPlay,
      autoPlaySpeed,
    } = this.props;
    return (
      <Section title={title} readMoreButton={readMoreButton}>
        <ResponsiveDiv screen="min-md">
          {minMd =>
            minMd && cards.length > 3 ? (
              <div className="HighlightCardsCarouselSection HighlightCardsCarouselSection--carousel">
                <HorizontalItemsCarousel
                  autoPlay={autoPlay}
                  autoPlaySpeed={autoPlaySpeed}
                >
                  {cards.map(({ key, ...cardProps }, index) => (
                    <HighlightCard key={key || index} {...cardProps} />
                  ))}
                </HorizontalItemsCarousel>
              </div>
            ) : (
              <div className="HighlightCardsCarouselSection HighlightCardsCarouselSection--scroll">
                <HorizontalItemsScroll>
                  {cards.map(({ key, ...cardProps }, index) => (
                    <HighlightCard key={key || index} {...cardProps} />
                  ))}
                </HorizontalItemsScroll>
              </div>
            )
          }
        </ResponsiveDiv>
      </Section>
    );
  }
}

export default HighlightCardsCarouselSection;
