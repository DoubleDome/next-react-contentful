import React from 'react';
import PropTypes from 'prop-types';
import './RoomOverviewCardRowSection.scss'; // build-ignore-line

import RoomOverviewCard from '../RoomOverviewCard/RoomOverviewCard.component';
import HorizontalItemsScroll from '../HorizontalItemsScroll/HorizontalItemsScroll.component';
import Section from '../Section/Section.component';
import ResponsiveDiv from '../ResponsiveDiv.component';

/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/44892321/Room+Overview+Card+Row)
 */
class RoomOverviewCardRowSection extends React.PureComponent {
  static displayName = 'RoomOverviewCardRowSection';

  static propTypes = {
    title: PropTypes.string,
    readMoreButton: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
    rooms: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.shape({
          url: PropTypes.string.isRequired,
          alt: PropTypes.string,
        }).isRequired,
        title: PropTypes.string.isRequired,
        keyValues: PropTypes.arrayOf(PropTypes.string),
        description: PropTypes.string,
        primaryAction: PropTypes.shape({
          label: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }),
        secondaryAction: PropTypes.shape({
          label: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }),
        tertiaryAction: PropTypes.shape({
          label: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }),
      }),
    ),
  };

  static defaultProps = {
    title: undefined,
    readMoreButton: undefined,
    rooms: [],
  };

  render() {
    const { title, readMoreButton, rooms } = this.props;

    return (
      <Section
        className="RoomOverviewCardRowSection"
        title={title}
        readMoreButton={readMoreButton}
      >
        {rooms.length === 1 ? (
          <ResponsiveDiv screen="min-lg">
            {matches => (
              <div className="RoomOverviewCardRowSection__single-row-container">
                <RoomOverviewCard
                  room={rooms[0]}
                  variant={matches ? 'full-row' : 'default'}
                />
              </div>
            )}
          </ResponsiveDiv>
        ) : (
          <HorizontalItemsScroll>
            {rooms.map((room, index) => (
              <div className="RoomOverviewCardRowSection__item" key={index}>
                <RoomOverviewCard room={room} />
              </div>
            ))}
          </HorizontalItemsScroll>
        )}
      </Section>
    );
  }
}

export default RoomOverviewCardRowSection;
