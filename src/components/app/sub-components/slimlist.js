import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import PlusIcon from 'material-ui/svg-icons/content/add';

import style from './slimlist.styl';

class Slimlist extends Component {
  render() {
    return (
      <div className={ style.slimlist }>
        <FloatingActionButton
          onClick={ this.props.onCreateNotebookClick }
          mini={ true }
          className={ style.item }
        >
          <PlusIcon />
        </FloatingActionButton>
        { this.props.notebooks.map(function (notebook) {
          return (
            <FloatingActionButton
              key={ notebook.id }
              mini={ true }
              secondary={ true }
              className={ style.item }
            >
              <span className={ style.letter }>
                { notebook.name[0].toUpperCase() }
              </span>
            </FloatingActionButton>
          );
        })}
      </div>
    );
  }
}

export default Slimlist;
