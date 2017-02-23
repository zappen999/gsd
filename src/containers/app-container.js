import { connect } from 'react-redux';
import { actions as appActions } from 'ducks/app/duck';
import { actions as notebookActions } from 'ducks/notebook/duck';

import App from '../components/app/app';

const mapStateToProps = ({ app, notebook }) => ({
  newNotebookModalVisible: app.newNotebookModalVisible,
  notebooks: notebook.notebooks,
  isCreatingNotebook: notebook.isCreatingNotebook
});

const mapDispatchToProps = dispatch => ({
  toggleNewNotebookModal(visible) {
    dispatch(appActions.toggleNewNotebookModal(visible));
  },
  selectActiveNotebook(notebookId) {
    dispatch(notebookActions.selectActiveNotebook(notebookId));
  },
  createNotebook(name) {
    dispatch(notebookActions.createNotebook(name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

