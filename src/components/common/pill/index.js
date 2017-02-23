import React, { Component, PropTypes } from 'react';

import style from './index.styl';

class Pill extends Component {
  render() {
    return (
      <div className={ style.pill }>
        <p className={ style.text }>{ this.props.text }</p>
      </div>
    );
  }
}

Pill.propTypes = {
  text: PropTypes.string
};

export default Pill;
