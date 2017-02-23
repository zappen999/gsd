// Action types
const SELECT_ACTIVE_NOTEBOOK = 'SELECT_ACTIVE_NOTEBOOK';
const CREATING_NOTEBOOK = 'CREATING_NOTEBOOK';
const CREATED_NOTEBOOK = 'CREATED_NOTEBOOK';

const initialState = {
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
        isCreatingNotebook: false,
        notebooks: [...state.notebooks, action.notebook],
        newNotebookModalVisible: false // TODO: DOESNT WORK
      };

    default:
      return state;
  }
}

// Action creators
export function selectActiveNotebook(notebookId) {
  return {
    type: SELECT_ACTIVE_NOTEBOOK,
    notebookId
  };
}

export function isCreatingNotebook() {
  return {
    type: CREATING_NOTEBOOK
  };
}

export function createNotebook(name) {
  return dispatch => {
    dispatch(isCreatingNotebook());

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
  selectActiveNotebook,
  createNotebook
};
