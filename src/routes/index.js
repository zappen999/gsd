import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Workspace from 'containers/workspace-container';
import App from 'containers/app-container';

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ Workspace } />
    <Route path='/note' component={ Workspace } />
  </Route>
);
