/* eslint-disable react/jsx-no-bind */
import PropTypes from 'prop-types';
import React from 'react';
import './CompareRoomsMatrix.scss'; // build-ignore-line

import { window } from '../../utils/browser';
import ResponsiveDiv from '../ResponsiveDiv.component';
import Button from '../Button/Button.component';
import Table from '../Table/Table.component';

const CompareRoomsMatrixHeader = ({ row }) => {
  const { type = 'default', title, subtitle } = row;
  return (
    <div
      className={`CompareRoomsMatrixHeader CompareRoomsMatrixHeader--${type}`}
    >
      <div className="CompareRoomsMatrixHeader__title">{title}</div>
      {subtitle && (
        <div className="CompareRoomsMatrixHeader__subtitle">{subtitle}</div>
      )}
    </div>
  );
};

const CompareRoomsMatrixAddRoomCard = ({ onRoomAddClick }) => (
  <div className="CompareRoomsMatrixAddRoomCard">
    <div className="CompareRoomsMatrixAddRoomCard__inner">
      <button
        type="button"
        className="CompareRoomsMatrixAddRoomCard__button"
        onClick={onRoomAddClick}
        onKeyPress={e =>
          e.key === 'enter' && onRoomAddClick && onRoomAddClick()
        }
      >
        <div className="CompareRoomsMatrixAddRoomCard__button__icon">+</div>
        <div className="CompareRoomsMatrixAddRoomCard__button__label">
          Add a Room to Compare
        </div>
      </button>
    </div>
  </div>
);

const CompareRoomsMatrixRoomCard = ({ cellData, onRoomRemoveClick }) => {
  const { title, image, detailsUrl, bookingUrl, bookingDisabled } = cellData;
  return (
    <div className="CompareRoomsMatrixRoomCard">
      <div className="CompareRoomsMatrixRoomCard__image">
        <img
          src={image.url}
          alt={image.alt || title}
          role={image.alt ? undefined : 'presentation'}
        />
        <div className="CompareRoomsMatrixRoomCard__image__overlay">
          <Button
            as="a"
            variant="secondary"
            inverted
            href={detailsUrl}
            label="View Details"
          />
        </div>
      </div>
      <div className="CompareRoomsMatrixRoomCard__title">{title}</div>
      <div className="CompareRoomsMatrixRoomCard__actions">
        <div className="CompareRoomsMatrixRoomCard__action">
          <Button
            as="a"
            variant="primary"
            href={bookingUrl}
            disabled={bookingDisabled}
            label="Book room"
            fluid
          />
        </div>
        <div className="CompareRoomsMatrixRoomCard__action">
          <Button
            variant="tertiary"
            onClick={onRoomRemoveClick}
            label="Remove"
            iconRight="Close"
            fluid
          />
        </div>
      </div>
    </div>
  );
};

const CompareRoomsMatrixPrice = ({ cellData }) => {
  const { price, subtitle, error } = cellData;
  return (
    <div className="CompareRoomsMatrixPrice">
      {price && <div className="CompareRoomsMatrixPrice__price">{price}</div>}
      {subtitle && (
        <div className="CompareRoomsMatrixPrice__subtitle">{subtitle}</div>
      )}
      {error && <div className="CompareRoomsMatrixPrice__error">{error}</div>}
    </div>
  );
};

const CompareRoomsMatrixCell = ({
  row,
  cellData,
  onRoomAddClick,
  onRoomRemoveClick,
}) => {
  if (row.type === 'room' && !cellData) {
    return <CompareRoomsMatrixAddRoomCard onRoomAddClick={onRoomAddClick} />;
  }

  if (row.type === 'room') {
    return (
      <div className="CompareRoomsMatrixCell CompareRoomsMatrixCell--room">
        <CompareRoomsMatrixRoomCard
          cellData={cellData}
          onRoomRemoveClick={onRoomRemoveClick}
        />
      </div>
    );
  }

  if (row.type === 'price') {
    return (
      <div className="CompareRoomsMatrixCell CompareRoomsMatrixCell--price">
        <CompareRoomsMatrixPrice cellData={cellData} />
      </div>
    );
  }

  let content;
  if (cellData === null) {
    content = null;
  } else if (typeof cellData === 'boolean') {
    content = cellData ? (
      <span className="CompareRoomsMatrixCell__check">✓</span>
    ) : null;
  } else if (typeof cellData === 'string') {
    content = cellData;
  } else {
    throw new TypeError(
      `Invalid room's cell data: ${JSON.stringify(cellData)}`,
    );
  }

  return (
    <div className="CompareRoomsMatrixCell CompareRoomsMatrixCell--default">
      {content}
    </div>
  );
};

/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/44990623/Compare+Rooms+Matrix+WIP)
 */
class CompareRoomsMatrix extends React.PureComponent {
  static displayName = 'CompareRoomsMatrix';

  static propTypes = {
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        variant: PropTypes.oneOf(['default', 'room', 'price']),
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
      }).isRequired,
    ).isRequired,

    rooms: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.bool.isRequired,
          PropTypes.shape({
            title: PropTypes.string.isRequired,
            image: PropTypes.shape({
              url: PropTypes.string.isRequired,
              alt: PropTypes.string,
            }).isRequired,
            detailsUrl: PropTypes.string,
            bookingUrl: PropTypes.string,
            bookingDisabled: PropTypes.boolean,
          }).isRequired,
          PropTypes.shape({
            price: PropTypes.string,
            subtitle: PropTypes.string,
            error: PropTypes.string,
          }).isRequired,
        ]),
      ).isRequired,
    ),

    onRoomAddClick: PropTypes.func,
    onRoomRemoveClick: PropTypes.func,
  };

  static defaultProps = {
    rooms: [],
    onRoomAddClick: undefined,
    onRoomRemoveClick: undefined,
  };

  mobileMatrixRef = React.createRef();

  componentDidMount() {
    this.resetRowHeights();
    window.addEventListener('resize', this.handleWindowOnResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowOnResize);
  }

  handleWindowOnResize = () => {
    this.resetRowHeights();
  };

  resetRowHeights() {
    if (!this.mobileMatrixRef.current) {
      return;
    }

    const fixedRowContents = document.querySelectorAll(
      '.CompareRoomsMatrixList--fixed .CompareRoomsMatrixList__row__content',
    );
    const rowContentHeights = Array.prototype.map.call(
      fixedRowContents,
      rowContent => rowContent.offsetHeight,
    );
    const scrolledCols = document.querySelectorAll(
      '.CompareRoomsMatrixList--scrolled .CompareRoomsMatrixList__col',
    );
    Array.prototype.forEach.call(scrolledCols, col => {
      const rowContents = col.querySelectorAll(
        '.CompareRoomsMatrixList__row__content',
      );
      Array.prototype.forEach.call(rowContents, (rowContent, i) => {
        rowContent.style.height = `${rowContentHeights[i]}px`;
      });
    });
  }

  render() {
    const { rows, rooms, onRoomAddClick, onRoomRemoveClick } = this.props;
    const totalRoomsCount = 3;
    const roomsWithNulls = [...Array(totalRoomsCount).keys()].map(
      i => rooms[i] || null,
    );

    return (
      <ResponsiveDiv screen="min-md">
        {minMd =>
          minMd ? (
            <div className="CompareRoomsMatrix CompareRoomsMatrix--desktop">
              <Table>
                {rows.map((row, rowI) => (
                  <Table.Row key={rowI}>
                    <Table.HeaderCell width="25%">
                      <CompareRoomsMatrixHeader row={row} />
                    </Table.HeaderCell>
                    {roomsWithNulls.map((room, roomI) => (
                      <Table.Cell key={roomI} width="25%">
                        {room || row.type === 'room' ? (
                          <CompareRoomsMatrixCell
                            row={row}
                            cellData={room && room[rowI]}
                            onRoomAddClick={onRoomAddClick}
                            onRoomRemoveClick={
                              onRoomRemoveClick && onRoomRemoveClick.bind(roomI)
                            }
                          />
                        ) : null}
                      </Table.Cell>
                    ))}
                  </Table.Row>
                ))}
              </Table>
            </div>
          ) : (
            <div
              className="CompareRoomsMatrix CompareRoomsMatrix--mobile"
              ref={this.mobileMatrixRef}
            >
              <div className="CompareRoomsMatrixList CompareRoomsMatrixList--fixed">
                {rows.map((row, rowI) => (
                  <div key={rowI} className="CompareRoomsMatrixList__row">
                    <div className="CompareRoomsMatrixList__row__header">
                      <div className="CompareRoomsMatrixList__row__header__inner">
                        {row.title}
                      </div>
                    </div>
                    <div className="CompareRoomsMatrixList__row__content">
                      <div className="CompareRoomsMatrixList__cols">
                        <div className="CompareRoomsMatrixList__cols__inner">
                          {roomsWithNulls.map((room, roomI) => (
                            <div
                              key={roomI}
                              className="CompareRoomsMatrixList__col"
                            >
                              {room || row.type === 'room' ? (
                                <CompareRoomsMatrixCell
                                  row={row}
                                  cellData={room && room[rowI]}
                                  onRoomAddClick={onRoomAddClick}
                                  onRoomRemoveClick={
                                    onRoomRemoveClick &&
                                    onRoomRemoveClick.bind(roomI)
                                  }
                                />
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="CompareRoomsMatrixList CompareRoomsMatrixList--scrolled">
                <div className="CompareRoomsMatrixList__cols">
                  <div className="CompareRoomsMatrixList__cols__inner">
                    {roomsWithNulls.map((room, roomI) => (
                      <div key={roomI} className="CompareRoomsMatrixList__col">
                        {rows.map((row, rowI) => (
                          <div
                            key={rowI}
                            className="CompareRoomsMatrixList__row"
                          >
                            <div className="CompareRoomsMatrixList__row__header">
                              &nbsp;
                            </div>
                            <div className="CompareRoomsMatrixList__row__content">
                              {room || row.type === 'room' ? (
                                <CompareRoomsMatrixCell
                                  row={row}
                                  cellData={room && room[rowI]}
                                  onRoomAddClick={onRoomAddClick}
                                  onRoomRemoveClick={
                                    onRoomRemoveClick &&
                                    onRoomRemoveClick.bind(roomI)
                                  }
                                />
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </ResponsiveDiv>
    );
  }
}

export default CompareRoomsMatrix;
