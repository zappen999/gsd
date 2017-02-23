import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import Header from './sub-components/header';
import Slimlist from './sub-components/slimlist';

import style from './app-style.styl';

class App extends Component {
  getProps() {
    return {
      notebooks: [
        { name: 'Action pending', id: 1 },
        { name: 'Cabinet', id: 2 },
        { name: 'Done', id: 3 },
      ]
    };
  }

  getNewNotebookModal() {
    const actions = [
      <FlatButton
        label={ 'Cancel' }
        primary={ true }
        onClick={ () => this.props.toggleNewNotebookModal(false) }
      />
    ];

    return (
      <Dialog
        title={ 'Create new notebook' }
        actions={ actions }
        modal={ false }
        open={ this.props.newNotebookModalVisible }
        onRequestClose={ () => this.props.toggleNewNotebookModal(false) }
      >
        Enter the name of the new notebook
      </Dialog>
    );
  }

  render() {
    const props = this.getProps();

    return (
      <MuiThemeProvider>
        <div className={ style.app }>
          { this.getNewNotebookModal() }
          <Header />
          <Slimlist
            notebooks={ props.notebooks }
            onCreateNotebookClick={ () => {
              this.props.toggleNewNotebookModal(true);
            }}
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
  children: PropTypes.element
};

export default App;
