import PropTypes from 'prop-types';
import React from 'react';
import Carousel from 'nuka-carousel';

import { document, window } from '../../utils/browser';
import { getCurrentScreenGridDimensions } from '../../utils/media';
import './HorizontalItemsCarousel.scss'; // build-ignore-line

/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/17137925/Highlight+Carousel)
 */
class HorizontalItemsCarousel extends React.PureComponent {
  static displayName = 'HorizontalItemsCarousel';

  static propTypes = {
    autoPlay: PropTypes.bool,
    autoPlaySpeed: PropTypes.number,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    autoPlay: true,
    autoPlaySpeed: 3000,
  };

  defaultSlideWidth = 300;

  slidesToShow = 3;

  slidesContainerRef = React.createRef();

  state = {
    ...this.calculateCarouselDimensions(),
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeHandler);
  }

  onResizeHandler = () => {
    this.setState({
      ...this.calculateCarouselDimensions(),
    });
  };

  // eslint-disable-next-line class-methods-use-this
  calculateCarouselDimensions() {
    const {
      insidePadding: iP,
      outsidePadding: oP,
    } = getCurrentScreenGridDimensions();
    const cW =
      (this.slidesContainerRef.current &&
        this.slidesContainerRef.current.offsetWidth) ||
      ((document && document.body && document.body.offsetWidth) ||
        document.body.clientWidth) ||
      undefined;
    const n = this.slidesToShow;
    const sW = cW ? (cW - 2 * oP - (n - 1) * iP) / n : this.defaultSlideWidth;
    return {
      slideWidth: sW,
      cellSpacing: iP,
    };
  }

  render() {
    const { autoPlay, autoPlaySpeed, children } = this.props;
    const { cellSpacing, slideWidth } = this.state;
    return (
      <div className="HorizontalItemsCarousel" ref={this.slidesContainerRef}>
        <Carousel
          autoGenerateStyleTag={false}
          autoplay={autoPlay}
          autoplaySpeed={autoPlaySpeed}
          cellAlign="center"
          cellSpacing={cellSpacing}
          dragging={false}
          heightMode="max"
          pauseOnHover
          slideWidth={`${slideWidth}px`}
          slideIndex={Math.floor(this.slidesToShow / 2)}
          slidesToScroll={1}
          speed={1000}
          easing="easeCubicInOut"
          edgeEasing="easeElasticOut"
          swiping
          transitionMode="scroll"
          wrapAround
          renderTopCenterControls={null}
          renderBottomCenterControls={null}
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              type="button"
              onClick={previousSlide}
              onKeyPress={e => e.key === 'Enter' && previousSlide()}
              className="HorizontalItemsCarousel__arrow HorizontalItemsCarousel__prev"
            >
              Previous slide
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              type="button"
              onClick={nextSlide}
              onKeyPress={e => e.key === 'Enter' && nextSlide()}
              className="HorizontalItemsCarousel__arrow HorizontalItemsCarousel__next"
            >
              Next slide
            </button>
          )}
        >
          {children}
          {// fixes nuka-carousel bug which appears on smaller number of items,
          // that upon scrolling to the end of carousel,
          // we don't see the next child in the far end of it.
          children && children.length && children.length <= 4 ? children : null}
        </Carousel>
      </div>
    );
  }
}

export default HorizontalItemsCarousel;
