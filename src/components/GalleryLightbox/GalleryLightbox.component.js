import React from 'react';
import './GalleryLightbox.scss'; // build-ignore-line

import Modal from '../Modal/Modal.component';
import CloseIcon from '../../shared/Icons/Close';
import PrevIcon from '../../shared/Icons/Prev';
import NextIcon from '../../shared/Icons/Next';
import GalleryLightboxService from '../../services/GalleryLightbox.service';

class GalleryLightbox extends React.PureComponent {
  state = GalleryLightboxService.state;

  subscriptions = [];

  componentDidMount() {
    const unsubscribeOnStateChange = GalleryLightboxService.onStateChange(
      nextState => {
        this.setState(nextState);
      },
    );
    this.subscriptions.push({
      unsubscribe: unsubscribeOnStateChange,
    });
  }

  componentWillUnmount() {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.subscriptions.length = 0;
  }

  handlePrevClick = () => {
    GalleryLightboxService.goToPreviousItem();
  };

  handleNextClick = () => {
    GalleryLightboxService.goToNextItem();
  };

  handleClose = () => {
    GalleryLightboxService.close();
  };

  render() {
    const { open, items, currentItemIndex } = this.state;
    const item = open ? items[currentItemIndex] : undefined;
    return (
      <Modal open={open}>
        <div
          className="GalleryLightbox"
          role="dialog"
          aria-label="Gallery Modal"
        >
          <div className="GalleryLightbox__header">
            {items.length > 1 && (
              <div className="GalleryLightbox__header__pagination">
                {`${currentItemIndex + 1} of ${items.length}`}
              </div>
            )}
            <button
              className="GalleryLightbox__header__close"
              type="button"
              aria-label="Close modal"
              onClick={this.handleClose}
              onKeyPress={e => e.key === 'Enter' && this.handleClose()}
            >
              <CloseIcon className="GalleryLightbox__header__close__icon" />
            </button>
          </div>

          {item && (
            <div className="GalleryLightbox__content">
              <div className="GalleryLightbox__item-with-caption">
                <div className="GalleryLightbox__item-with-caption__inner">
                  <div className="GalleryLightbox__item">
                    <div className="GalleryLightbox__item__inner">
                      {!item.video && (
                        <img
                          src={item.imageUrl}
                          alt={item.imageAlt}
                          className="GalleryLightbox__item__image"
                        />
                      )}

                      {!!item.video && (
                        <video
                          controls
                          poster={item.imageUrl}
                          autoPlay={
                            item.video.autoPlay !== undefined
                              ? item.video.autoPlay
                              : true
                          }
                          className="GalleryLightbox__item__video"
                        >
                          <source src={item.video.url} type={item.video.type} />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>

                    {items.length > 1 && (
                      <div className="GalleryLightbox__controls">
                        {currentItemIndex > 0 && (
                          <div className="GalleryLightbox__control GalleryLightbox__control--prev">
                            <button
                              type="button"
                              onClick={this.handlePrevClick}
                              onKeyPress={e =>
                                e.key === 'Enter' && this.handlePrevClick()
                              }
                              className="GalleryLightbox__control__button"
                            >
                              <PrevIcon />
                            </button>
                          </div>
                        )}
                        {currentItemIndex < items.length - 1 && (
                          <div className="GalleryLightbox__control GalleryLightbox__control--next">
                            <button
                              type="button"
                              onClick={this.handleNextClick}
                              onKeyPress={e =>
                                e.key === 'Enter' && this.handleNextClick()
                              }
                              className="GalleryLightbox__control__button"
                            >
                              <NextIcon />
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="GalleryLightbox__caption">
                    {item.caption && (
                      <div className="GalleryLightbox__caption__description">
                        {item.caption}
                      </div>
                    )}
                    {item.credit && (
                      <div className="GalleryLightbox__caption__credit">
                        {item.credit}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
    );
  }
}

export default GalleryLightbox;
