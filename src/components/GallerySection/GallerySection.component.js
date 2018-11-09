import PropTypes from 'prop-types';
import React from 'react';
import './GallerySection.scss'; // build-ignore-line

import GalleryCard from '../GalleryCard/GalleryCard.component';
import VirtualTourHeroSection, {
  VirtualTourHeroSectionPropTypes,
} from '../VirtualTourHeroSection/VirtualTourHeroSection.component';
import Section from '../Section/Section.component';
import Button from '../Button/Button.component';
import GalleryLightboxService from '../../services/GalleryLightbox.service';

/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/16711778/Gallery+Collection)
 */
class GallerySection extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    viewAllButton: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string,
      onClick: PropTypes.func,
      onKeyPress: PropTypes.func,
    }),
    /** `VirtualTourHeroSection` component props. */
    virtualTourHero: PropTypes.exact(VirtualTourHeroSectionPropTypes),
    items: PropTypes.arrayOf(
      PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        imageAlt: PropTypes.string,
        video: PropTypes.shape({
          url: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
        }),
        caption: PropTypes.string,
        credit: PropTypes.string,
      }),
    ),
    /** How many items initially should be seen? (All the others will be hidden behind 'Load more' button.) */
    itemsInitialLimit: PropTypes.number,
    /** After clicking 'Load more' button, how many more items should be shown? */
    itemsLoadMoreStep: PropTypes.number,
  };

  static defaultProps = {
    title: undefined,
    viewAllButton: undefined,
    virtualTourHero: undefined,
    items: [],
    itemsInitialLimit: 4,
    itemsLoadMoreStep: 4,
  };

  state = {
    itemsLimit: this.props.itemsInitialLimit, // eslint-disable-line react/destructuring-assignment
  };

  get remainingItemsCount() {
    const { items } = this.props;
    const { itemsLimit } = this.state;
    return Math.max(items.length - itemsLimit, 0);
  }

  handleLoadMoreClick = () => {
    const { itemsLoadMoreStep } = this.props;
    this.setState(prevState => ({
      itemsLimit: prevState.itemsLimit + itemsLoadMoreStep,
    }));
  };

  openGalleryLightbox(item, itemIndex) {
    const { items } = this.props;
    GalleryLightboxService.open({
      items,
      currentItemIndex: itemIndex,
    });
  }

  render() {
    const { title, viewAllButton, items, virtualTourHero } = this.props;
    const { itemsLimit } = this.state;

    return (
      <Section
        title={title}
        readMoreButton={
          viewAllButton && { ...viewAllButton, mobileVariant: 'tertiary' }
        }
      >
        {virtualTourHero && (
          <div className="GallerySection__vtour">
            <VirtualTourHeroSection {...virtualTourHero} />
          </div>
        )}

        <div className="GallerySection__cards">
          <div className="GallerySection__cards__row">
            {items.slice(0, itemsLimit).map((item, index) => (
              <div key={index} className="GallerySection__cards__item">
                <GalleryCard
                  imageUrl={item.imageUrl}
                  imageAlt={item.imageAlt}
                  video={!!item.video}
                  caption={item.caption}
                  onOpen={() =>
                    this.openGalleryLightbox(
                      {
                        imageUrl: item.imageUrl,
                        imageAlt: item.imageAlt,
                        video: item.video,
                        caption: item.caption,
                        credit: item.credit,
                      },
                      index,
                    )
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {this.remainingItemsCount > 0 && (
          <div className="GallerySection__load-more">
            <Button
              variant="secondary"
              size="medium-padded"
              onClick={this.handleLoadMoreClick}
              onKeyPress={e => e.key === 'Enter' && this.handleLoadMoreClick()}
              label={`Load more (${this.remainingItemsCount})`}
            />
          </div>
        )}
      </Section>
    );
  }
}

export default GallerySection;
