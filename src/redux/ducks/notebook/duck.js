// Action types
const TOGGLE_NEW_NOTEBOOK_MODAL = 'TOGGLE_NEW_NOTEBOOK_MODAL';
const SELECT_ACTIVE_NOTEBOOK = 'SELECT_ACTIVE_NOTEBOOK';
const CREATING_NOTEBOOK = 'CREATING_NOTEBOOK';
const CREATED_NOTEBOOK = 'CREATED_NOTEBOOK';

const initialState = {
  newNotebookModalVisible: false,
  notebooks: [
    { name: 'Action pending', id: 1 },
    { name: 'Boom', id: 2 },
    { name: 'Done', id: 3 }
  ],
  activeNotebook: undefined,
  newNotebookModalVisible: false,
  isCreatingNotebook: false
};

// Reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NEW_NOTEBOOK_MODAL:
       return {
         ...state,
         newNotebookModalVisible: action.newNotebookModalVisible
      };

    case SELECT_ACTIVE_NOTEBOOK:
      return {
        ...state,
        activeNotebook: state.notebooks.find(
          notebook => notebook.id === action.notebookId
        )
      };

    case CREATING_NOTEBOOK:
      return {
        ...state,
        isCreatingNotebook: true
      };

    case CREATED_NOTEBOOK:
      return {
        ...state,
        newNotebookModalVisible: false ,// TODO: DOESNT WORK
        isCreatingNotebook: false,
        notebooks: [...state.notebooks, action.notebook]
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

export function selectActiveNotebook(notebookId) {
  return {
    type: SELECT_ACTIVE_NOTEBOOK,
    notebookId
  };
}

export function createNotebook(name) {
  return dispatch => {
    dispatch({
      type: CREATING_NOTEBOOK
    });

    // Perform API request here
    setTimeout(() => {
      dispatch({
        type: CREATED_NOTEBOOK,
        notebook: {
          id: name,
          name
        }
      });
    }, 1000);
  };
}

// Export all actionCreators
export const actions = {
  toggleNewNotebookModal,
  selectActiveNotebook,
  createNotebook
};
