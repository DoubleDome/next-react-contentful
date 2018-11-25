import React, { Component } from 'react';
import './Nav.scss'; // build-ignore-line

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <iframe className="static-nav" src="/static/nav/nav.html" />;
  }
}

export default Nav;
