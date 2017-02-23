// Action types
const TOGGLE_NEW_NOTEBOOK_MODAL = 'TOGGLE_NEW_NOTEBOOK_MODAL';

const initialState = {
  newNotebookModalVisible: false
};

// Reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NEW_NOTEBOOK_MODAL:
       return {
         ...state,
         newNotebookModalVisible: action.newNotebookModalVisible
      };

    default:
      return state;
    }
}

// Action creators
export function toggleNewNotebookModal(visible) {
  return {
    type: TOGGLE_NEW_NOTEBOOK_MODAL,
    newNotebookModalVisible: visible
  };
}

// Export all actionCreators
export const actions = {
  toggleNewNotebookModal
};
