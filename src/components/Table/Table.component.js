/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import './Table.scss'; // build-ignore-line

class HeaderCell extends React.PureComponent {
  static displayName = 'Table.HeaderCell';

  static propTypes = {
    width: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    width: undefined,
    children: undefined,
  };

  render() {
    const { width, children } = this.props;
    return (
      <th className="Table__cell Table__cell--header" width={width}>
        <div className="Table__cell__inner">
          <div className="Table__cell__inner__inner">{children}</div>
        </div>
      </th>
    );
  }
}

class Cell extends React.PureComponent {
  static displayName = 'Table.Cell';

  static propTypes = {
    width: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    width: undefined,
    children: undefined,
  };

  render() {
    const { width, children } = this.props;
    return (
      <td className="Table__cell" width={width}>
        <div className="Table__cell__inner">
          <div className="Table__cell__inner__inner">{children}</div>
        </div>
      </td>
    );
  }
}

class Row extends React.PureComponent {
  static displayName = 'Table.Row';

  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  };

  render() {
    const { children } = this.props;
    return <tr className="Table__row">{children}</tr>;
  }
}

class Header extends React.PureComponent {
  static displayName = 'Table.Header';

  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  };

  render() {
    const { children } = this.props;
    return <thead className="Table__header">{children}</thead>;
  }
}

class Body extends React.PureComponent {
  static displayName = 'Table.Body';

  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  };

  render() {
    const { children } = this.props;
    return <tbody className="Table__body">{children}</tbody>;
  }
}

class Footer extends React.PureComponent {
  static displayName = 'Table.Footer';

  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  };

  render() {
    const { children } = this.props;
    return <tfoot className="Table__footer">{children}</tfoot>;
  }
}

class Table extends React.PureComponent {
  static displayName = 'Table';

  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  };

  render() {
    const { children } = this.props;
    return <table className="Table">{children}</table>;
  }
}

Table.Row = Row;
Table.Header = Header;
Table.Body = Body;
Table.Footer = Footer;
Table.HeaderCell = HeaderCell;
Table.Cell = Cell;

export default Table;
