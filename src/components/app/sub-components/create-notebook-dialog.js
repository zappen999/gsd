import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';

class CreateNotebookDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notebookName: ''
    };
  }

  render() {
    const actions = [
      <FlatButton
        label={ 'Create' }
        onClick={ () => this.props.onCreate(this.state.notebookName) }
        primary
      />,
      <FlatButton
        label={ 'Cancel' }
        onClick={ this.props.onClose }
        primary={ false }
      />
    ];

    return (
      <Dialog
        title={ 'Create new notebook' }
        actions={ actions }
        modal={ false }
        open={ this.props.isVisible }
        onRequestClose={ this.props.onClose }
      >
        <TextField
          onChange={ (e, val) => this.setState({notebookName: val})}
          floatingLabelText={ 'Name of the notebook' }
        />
        { this.props.isLoading &&
          <CircularProgress />
        }
      </Dialog>
    );
  }
}

CreateNotebookDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default CreateNotebookDialog;
