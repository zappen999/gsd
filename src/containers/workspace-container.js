import { connect } from 'react-redux';
import { actions as notebookActions } from 'ducks/notebook/duck';

import Workspace from '../components/workspace';

const mapStateToProps = ({ notebook }) => ({
  notebooks: notebook.notebooks,
  activeNotebook: notebook.activeNotebook
});

const mapDispatchToProps = dispatch => ({
  // selectActiveNotebook(notebookId) {
  //   dispatch(notebookActions.selectActiveNotebook(notebookId));
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(Workspace);

