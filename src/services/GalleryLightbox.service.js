/* eslint-disable react/no-access-state-in-setstate */
import { document } from '../utils/browser';

export default new class GalleryLightboxService {
  previouslyFocusedEl = undefined;

  onStateChangeListeners = [];

  constructor() {
    this.init();
  }

  init() {
    this.state = {
      open: false,
      items: [],
      currentItemIndex: 0,
    };
  }

  destroy() {
    if (this.state.open) {
      this.close();
    }
  }

  /**
   * @param items Each item has following format:
   *   ```
   *   {
   *     imageUrl?: string,
   *     imageAlt?: string,
   *     video?: {
   *       url: string,
   *       type: string,
   *       autoPlay?: boolean,
   *     },
   *     caption?: string,
   *     credit?: string,
   *   }
   *   ```
   */
  open({ items, currentItemIndex = 0 }) {
    this.previouslyFocusedEl = document.activeElement;

    document.body.classList.toggle('hasGalleryLightboxOpen', true);
    document.addEventListener('keydown', this.handleDocumentKeyDown);

    this.setState({
      open: true,
      items,
      currentItemIndex,
    });
  }

  close() {
    document.body.classList.toggle('hasGalleryLightboxOpen', false);
    document.removeEventListener('keydown', this.handleDocumentKeyDown);

    this.setState({
      ...this.state,
      open: false,
    });

    // When the modal is destroyed, return focus to the element that originally had it before
    // the modal was opened.
    if (this.previouslyFocusedEl) {
      this.previouslyFocusedEl.focus();
      delete this.previouslyFocusedEl;
    }
  }

  handleDocumentKeyDown = event => {
    const { open, items, currentItemIndex } = this.state;

    if (event.key === 'Escape' && open) {
      this.close();
    }

    if (
      event.key === 'ArrowLeft' &&
      open &&
      items.length > 1 &&
      currentItemIndex > 0
    ) {
      this.goToPreviousItem();
    }

    if (
      event.key === 'ArrowRight' &&
      open &&
      items.length > 1 &&
      currentItemIndex < items.length - 1
    ) {
      this.goToNextItem();
    }
  };

  goToPreviousItem() {
    this.setState({
      ...this.state,

      // Before paginating, let's turn off auto play on all videos
      items: this.state.items.map(item => ({
        ...item,
        video: item.video
          ? {
              ...item.video,
              autoPlay: false,
            }
          : item.video,
      })),

      currentItemIndex:
        (this.state.currentItemIndex - 1 + this.state.items.length) %
        this.state.items.length,
    });
  }

  goToNextItem() {
    this.setState({
      ...this.state,

      // Before paginating, let's turn off auto play on all videos
      items: this.state.items.map(item => ({
        ...item,
        video: item.video
          ? {
              ...item.video,
              autoPlay: false,
            }
          : item.video,
      })),

      currentItemIndex:
        (this.state.currentItemIndex + 1 + this.state.items.length) %
        this.state.items.length,
    });
  }

  setState(nextState) {
    const prevState = this.state;
    this.state = nextState;
    this.onStateChangeListeners.forEach(fn => {
      fn(nextState, prevState);
    });
  }

  onStateChange(fn) {
    this.onStateChangeListeners.push(fn);
    return () => {
      this.onStateChangeListeners = this.onStateChangeListeners.filter(
        x => x !== fn,
      );
    };
  }
}();
