import { createStore, compose, applyMiddleware } from 'redux';
import rootDuck from '../ducks';
import thunk from 'redux-thunk';

export default function configureStore() {
  let enhancerSettings;

  if (typeof window !== 'undefined') {
    enhancerSettings = window.devToolsExtension ? window.devToolsExtension() : f => f
  }

  let store = createStore(
    rootDuck,
    compose(enhancerSettings),
    applyMiddleware(thunk)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for ducks
    module.hot.accept(() => {
      const nextRootDuck = rootDuck;

      store.replaceReducer(nextRootDuck);
    });
  }

  return store;
}
