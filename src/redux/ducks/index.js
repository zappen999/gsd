import { combineReducers } from 'redux';

import { reducer as app } from './app/duck';
import { reducer as notebook } from './notebook/duck';

export default combineReducers({
  app,
  notebook
});
