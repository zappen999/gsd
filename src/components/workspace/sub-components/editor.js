import React, { Component, PropTypes } from 'react';
import marked from 'marked';

import style from './editor.styl';

class Editor extends Component {
  render() {
    return (
      <div className={ style.editor }>
        <div className={ style.noteinput }>
          <textarea
            onChange={ this.props.onChange }
            className={ style.input }
          ></textarea>
        </div>
        <div
          className={ style.notepreview }
          dangerouslySetInnerHTML={{ __html: marked(this.props.worknote.content) }}>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  onChange: PropTypes.func,
  worknote: PropTypes.shape()
};

export default Editor;
