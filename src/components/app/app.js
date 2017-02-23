import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './sub-components/header';
import Slimlist from './sub-components/slimlist';
import CreateNotebookDialog from './sub-components/create-notebook-dialog';

import style from './app-style.styl';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className={ style.app }>
          <CreateNotebookDialog
            isVisible={ this.props.newNotebookModalVisible }
            onClose={ () => this.props.toggleNewNotebookModal(false) }
            onCreate={ this.props.createNotebook }
            isLoading={ this.props.isCreatingNotebook }
          />
          <Header />
          <Slimlist
            notebooks={ this.props.notebooks }
            onCreateNotebookClick={ () => {
              this.props.toggleNewNotebookModal(true);
            } }
            onSelectNotebookClick={ this.props.selectActiveNotebook }
          />
          <div className={ style.viewport }>
            { this.props.children }
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  newNotebookModalVisible: PropTypes.bool.isRequired,
  toggleNewNotebookModal: PropTypes.func.isRequired,
  selectActiveNotebook: PropTypes.func.isRequired,
  createNotebook: PropTypes.func.isRequired,
  isCreatingNotebook: PropTypes.bool.isRequired,
  notebooks: PropTypes.array.isRequired
};

export default App;
