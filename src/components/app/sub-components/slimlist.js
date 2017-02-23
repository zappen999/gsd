import React, { Component, PropTypes } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import PlusIcon from 'material-ui/svg-icons/content/add';

import style from './slimlist.styl';

class Slimlist extends Component {
  render() {
    return (
      <div className={ style.slimlist }>
        <FloatingActionButton
          onClick={ this.props.onCreateNotebookClick }
          className={ style.item }
          mini
        >
          <PlusIcon />
        </FloatingActionButton>
        { this.props.notebooks.map(notebook => (
            <FloatingActionButton
              onClick={ () => this.props.onSelectNotebookClick(notebook.id) }
              key={ notebook.id }
              mini={ true }
              secondary={ true }
              className={ style.item }
            >
              <span className={ style.letter }>
                { notebook.name[0].toUpperCase() }
              </span>
            </FloatingActionButton>
          )
        ) }
      </div>
    );
  }
}

Slimlist.propTypes = {
  onCreateNotebookClick: PropTypes.func.isRequired,
  onSelectNotebookClick: PropTypes.func.isRequired,
  notebooks: PropTypes.array
};

export default Slimlist;
