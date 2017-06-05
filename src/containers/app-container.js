import { connect } from 'react-redux';
import { actions as appActions } from 'ducks/app/duck';
import { actions as notebookActions } from 'ducks/notebook/duck';

import App from '../components/app/app';

const mapStateToProps = ({ app, notebook }) => ({
  newNotebookModalVisible: notebook.newNotebookModalVisible,
  notebooks: notebook.notebooks,
  isCreatingNotebook: notebook.isCreatingNotebook
});

const mapDispatchToProps = dispatch => ({
  toggleNewNotebookModal(visible) {
    dispatch(notebookActions.toggleNewNotebookModal(visible));
  },
  selectActiveNotebook(notebookId) {
    dispatch(notebookActions.selectActiveNotebook(notebookId));
  },
  createNotebook(name) {
    dispatch(notebookActions.createNotebook(name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

