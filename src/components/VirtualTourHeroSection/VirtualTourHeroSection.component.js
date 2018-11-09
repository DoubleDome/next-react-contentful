import PropTypes from 'prop-types';
import React from 'react';
import './VirtualTourHeroSection.scss'; // build-ignore-line

import VRIcon from '../../shared/Icons/VR';
import VRCircledIcon from '../../shared/Icons/VRCircled';
import Button from '../Button/Button.component';
import ResponsiveDiv from '../ResponsiveDiv.component';
import HorizontalItemsScroll from '../HorizontalItemsScroll/HorizontalItemsScroll.component';

export const VirtualTourHeroSectionPropTypes = {
  tours: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      imageAlt: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      button: PropTypes.shape({
        url: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
};

const VirtualTourHeroSectionTour = ({ tour }) => (
  <div className="VirtualTourHeroSection__tour">
    <div className="VirtualTourHeroSection__image-wrapper">
      <div className="VirtualTourHeroSection__image">
        <img
          src={tour.imageUrl}
          alt={tour.imageAlt || tour.title || ''}
          role={tour.imageAlt ? undefined : 'presentation'}
          className="VirtualTourHeroSection__image"
        />
      </div>

      <div className="VirtualTourHeroSection__overlay">
        <div className="VirtualTourHeroSection__overlay__inner">
          {tour.button && (
            <ResponsiveDiv screen="xs">
              <div className="VirtualTourHeroSection__overlay__button">
                <Button
                  as="a"
                  variant="secondary"
                  size="medium-padded"
                  inverted
                  href={tour.button.url}
                  label={tour.button.label}
                />
              </div>
            </ResponsiveDiv>
          )}
          {tour.button && (
            <ResponsiveDiv screen="sm">
              <div className="VirtualTourHeroSection__overlay__button">
                <Button
                  as="a"
                  variant="secondary"
                  size="medium-padded"
                  inverted
                  href={tour.button.url}
                  label={tour.button.label}
                  iconLeft={
                    <VRIcon style={{ height: '1.5em', margin: '-.25em 0' }} />
                  }
                />
              </div>
            </ResponsiveDiv>
          )}
          {(tour.title || tour.description || tour.button) && (
            <ResponsiveDiv screen="min-md">
              <div className="VirtualTourHeroSection__overlay__icon">
                <VRCircledIcon />
              </div>

              {tour.title && (
                <h3 className="VirtualTourHeroSection__overlay__title">
                  {tour.title}
                </h3>
              )}
              {tour.description && (
                <div className="VirtualTourHeroSection__overlay__description">
                  {tour.description}
                </div>
              )}
              {tour.button && (
                <div className="VirtualTourHeroSection__overlay__button">
                  <Button
                    as="a"
                    variant="secondary"
                    size="medium-padded"
                    inverted
                    href={tour.button.url}
                    label={tour.button.label}
                  />
                </div>
              )}
            </ResponsiveDiv>
          )}
        </div>
      </div>
    </div>
    {(tour.title || tour.description) && (
      <ResponsiveDiv screen="max-sm">
        <div className="VirtualTourHeroSection__caption">
          <h3 className="VirtualTourHeroSection__caption__title">
            {tour.title}
          </h3>
          <div className="VirtualTourHeroSection__caption__description">
            {tour.description}
          </div>
        </div>
      </ResponsiveDiv>
    )}
  </div>
);

VirtualTourHeroSectionTour.propTypes = {
  tour: PropTypes.shape({
    imageUrl: PropTypes.string,
    imageAlt: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    button: PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/47088262/Virtual+Tour+Hero)
 */
class VirtualTourHeroSection extends React.PureComponent {
  static propTypes = VirtualTourHeroSectionPropTypes;

  render() {
    const { tours } = this.props;

    return (
      <React.Fragment>
        {tours.length <= 1 && (
          <div className="VirtualTourHeroSection VirtualTourHeroSection--singular">
            {tours.map((tour, index) => (
              <VirtualTourHeroSectionTour tour={tour} key={index} />
            ))}
          </div>
        )}

        {tours.length > 1 && (
          <React.Fragment>
            <ResponsiveDiv screen="max-sm">
              <div className="VirtualTourHeroSection VirtualTourHeroSection--multiple VirtualTourHeroSection--multiple--scrolled">
                <HorizontalItemsScroll>
                  {tours.map((tour, index) => (
                    <VirtualTourHeroSectionTour tour={tour} key={index} />
                  ))}
                </HorizontalItemsScroll>
              </div>
            </ResponsiveDiv>

            <ResponsiveDiv screen="min-md">
              <div className="VirtualTourHeroSection VirtualTourHeroSection--multiple VirtualTourHeroSection--multiple--inline">
                {tours.map((tour, index) => (
                  <VirtualTourHeroSectionTour tour={tour} key={index} />
                ))}
              </div>
            </ResponsiveDiv>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default VirtualTourHeroSection;
