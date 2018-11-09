import React from 'react';
import GalleryLightbox from '../GalleryLightbox/GalleryLightbox.component';
import GalleryLightboxService from '../../services/GalleryLightbox.service';

// eslint-disable-next-line react/prefer-stateless-function
class BrandTheme extends React.PureComponent {
  componentDidMount() {
    GalleryLightboxService.init();
  }

  componentWillUnmount() {
    GalleryLightboxService.destroy();
  }

  render() {
    return (
      <React.Fragment>
        <GalleryLightbox />
      </React.Fragment>
    );
  }
}

export default BrandTheme;
