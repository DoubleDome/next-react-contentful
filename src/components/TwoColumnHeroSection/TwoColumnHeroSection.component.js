import PropTypes from 'prop-types';
import React from 'react';
import './TwoColumnHeroSection.scss'; // build-ignore-line

import PlayIcon from '../../shared/Icons/Play';
import Button from '../Button/Button.component';
import Section from '../Section/Section.component';
import CustomContent from '../CustomContent/CustomContent.component';
import OverviewSidebar, {
  OverviewSidebarSectionPropTypes,
} from '../OverviewSidebar/OverviewSidebar.component';
import GalleryLightboxService from '../../services/GalleryLightbox.service';

/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/15925770/Header+Two+Column+Section)
 */
class TwoColumnHeroSection extends React.PureComponent {
  static displayName = 'TwoColumnHeroSection';

  static propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }).isRequired,
    video: PropTypes.shape({
      url: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
    subtitle: PropTypes.string,
    contentHTML: PropTypes.string,
    /** List of actions to be shown under the main content. */
    actions: PropTypes.arrayOf(
      PropTypes.shape({
        variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
          .isRequired,
        url: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }),
    ),
    /** `OverviewSidebar` component `sections` prop. */
    sidebarSections: PropTypes.arrayOf(
      PropTypes.exact(OverviewSidebarSectionPropTypes),
    ),
  };

  static defaultProps = {
    video: undefined,
    subtitle: undefined,
    contentHTML: undefined,
    actions: [],
    sidebarSections: [],
  };

  playVideo() {
    const { image, video } = this.props;
    GalleryLightboxService.open({
      items: [
        {
          image,
          video: {
            ...video,
            autoPlay: true,
          },
        },
      ],
    });
  }

  render() {
    const {
      title,
      image,
      video,
      subtitle,
      contentHTML,
      actions,
      sidebarSections,
    } = this.props;
    return (
      <Section title={title}>
        <div className="TwoColumnHeroSection">
          <div className="TwoColumnHeroSection__bg">
            <img
              src={image.url}
              alt={image.alt}
              className="TwoColumnHeroSection__bg__image"
            />
            {video && (
              <div
                className="TwoColumnHeroSection__bg__overlay"
                aria-label="Play Video"
                tabIndex="0"
                role="button"
                onClick={() => this.playVideo()}
                onKeyPress={e => e.key === 'Enter' && this.playVideo()}
              >
                <PlayIcon className="TwoColumnHeroSection__bg__overlay__play" />
              </div>
            )}
          </div>

          <div className="TwoColumnHeroSection__main">
            <div className="TwoColumnHeroSection__content">
              {subtitle && (
                <h3 className="TwoColumnHeroSection__subtitle">{subtitle}</h3>
              )}

              {contentHTML && (
                <div className="TwoColumnHeroSection__description">
                  <CustomContent innerHTML={contentHTML} />
                </div>
              )}

              {actions.length > 0 && (
                <div className="TwoColumnHeroSection__actions">
                  {actions.map((button, index) => (
                    <div key={index} className="TwoColumnHeroSection__button">
                      <Button
                        as="a"
                        variant={button.variant}
                        fluid
                        href={button.url}
                        label={button.label}
                        size="medium-padded"
                        iconRight={
                          button.variant === 'tertiary' ? 'Right' : undefined
                        }
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {sidebarSections.length > 0 && (
              <div className="TwoColumnHeroSection__sidebar">
                <OverviewSidebar sections={sidebarSections} />
              </div>
            )}
          </div>
        </div>
      </Section>
    );
  }
}

export default TwoColumnHeroSection;
