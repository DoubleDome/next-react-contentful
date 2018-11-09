import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import memoize from 'memoize-one';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ResponsiveDiv from '../ResponsiveDiv.component';
import ImageSlider from '../ImageSlider/ImageSlider.component';
import Button from '../Button/Button.component';
import './HeroSection.scss'; // build-ignore-line

const getSliderImagesProp = memoize(images =>
  images.map(({ url, caption }) => ({ url, alt: caption })),
);

/**
 * Documentation: [Section Hero](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/17006651/Section+Hero), [Premium Section Hero](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/17006674/Premium+Section+Hero)
 *
 * ### TODO
 *
 * - images preloading (with loading animation?)
 */
class HeroSection extends React.PureComponent {
  static displayName = 'HeroSection';

  static propTypes = {
    /** If true, the slider's background will be taller */
    premium: PropTypes.bool,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        caption: PropTypes.string,
        tertiaryAction: PropTypes.shape({
          label: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }),
      }),
    ).isRequired,
    secondaryAction: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
    logoUrl: PropTypes.string,
    imageSliderOptions: PropTypes.shape({
      autoPlaySpeed: PropTypes.number,
      animationSpeed: PropTypes.number,
    }),
  };

  static defaultProps = {
    premium: false,
    description: undefined,
    secondaryAction: undefined,
    logoUrl: undefined,
    imageSliderOptions: undefined,
  };

  state = {
    autoPlay: true,
    activeImageIndex: 0,
  };

  handleSlideWillChange = nextActiveImageIndex => {
    this.setState({ activeImageIndex: nextActiveImageIndex });
  };

  disableAutoPlay = () => {
    this.setState(state => ({ state, autoPlay: false }));
  };

  render() {
    const {
      premium,
      title,
      description,
      images,
      logoUrl,
      secondaryAction,
      imageSliderOptions,
    } = this.props;
    const { autoPlay, activeImageIndex } = this.state;
    const activeImage = images[activeImageIndex];

    return (
      <div
        className={classNames('HeroSection', {
          'HeroSection--premium': premium,
          'HeroSection--has-multiple-slides': images.length > 1,
        })}
      >
        <div className="HeroSection__slider">
          <div className="HeroSection__slider__background">
            <ImageSlider
              {...imageSliderOptions}
              autoplay={autoPlay}
              images={getSliderImagesProp(images)}
              onSlideWillChange={this.handleSlideWillChange}
              onSlideManualChange={this.disableAutoPlay}
            />
          </div>
          {logoUrl && (
            <div className="HeroSection__slider__logo">
              <img src={logoUrl} alt="" />
            </div>
          )}
          <div className="HeroSection__overlay">
            <div className="HeroSection__overlay__left">
              <h1 className="HeroSection__overlay__title">{title}</h1>
              {(description || secondaryAction) && (
                <ResponsiveDiv screen="min-md">
                  {description && (
                    <div className="HeroSection__overlay__description">
                      {description}
                    </div>
                  )}
                  {secondaryAction && (
                    <div className="HeroSection__overlay__cta">
                      <Button
                        as="a"
                        variant="secondary"
                        size="medium-padded"
                        inverted
                        href={secondaryAction.url}
                        label={secondaryAction.label}
                      />
                    </div>
                  )}
                </ResponsiveDiv>
              )}
            </div>
            <ResponsiveDiv screen="min-md">
              <div className="HeroSection__overlay__right">
                <TransitionGroup className="HeroSection__overlay__captions">
                  <CSSTransition
                    key={activeImageIndex}
                    timeout={500}
                    classNames="fade"
                  >
                    <div className="HeroSection__overlay__caption">
                      {activeImage.caption && (
                        <span className="HeroSection__overlay__caption__label">
                          {activeImage.caption}
                        </span>
                      )}
                      {activeImage.tertiaryAction && (
                        <Button
                          as="a"
                          variant="tertiary"
                          size="inline"
                          inverted
                          href={activeImage.tertiaryAction.url}
                          label={activeImage.tertiaryAction.label}
                          iconRight="Right"
                          className="HeroSection__overlay__caption__button"
                          onMouseEnter={this.disableAutoPlay}
                        />
                      )}
                    </div>
                  </CSSTransition>
                </TransitionGroup>
              </div>
            </ResponsiveDiv>
          </div>
        </div>

        {(description || secondaryAction) && (
          <ResponsiveDiv screen="max-sm">
            <div className="HeroSection__caption">
              {description && (
                <div className="HeroSection__caption__description">
                  {description}
                </div>
              )}
              {secondaryAction && (
                <div className="HeroSection__caption__cta">
                  <Button
                    as="a"
                    variant="secondary"
                    fluid
                    href={secondaryAction.url}
                    label={secondaryAction.label}
                  />
                </div>
              )}
            </div>
          </ResponsiveDiv>
        )}
      </div>
    );
  }
}

export default HeroSection;
