import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import style from './header.styl';

class Header extends Component {
  render() {
    return (
      <div className={ style.header }>
        <Link to='/note'>
          { 'Note' }
        </Link>
        {'Logged in as Johan'}
      </div>
    );
  }
}

export default Header;
