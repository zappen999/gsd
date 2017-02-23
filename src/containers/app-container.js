import { connect } from 'react-redux';
import { actions } from 'ducks/app/duck';

import App from '../components/app/app';

const mapStateToProps = ({ app }) => ({
  newNotebookModalVisible: app.newNotebookModalVisible
});

const mapDispatchToProps = dispatch => ({
  toggleNewNotebookModal(visible) {
    dispatch(actions.toggleNewNotebookModal(visible));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


