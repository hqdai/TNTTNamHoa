import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './AppReducer';
import rootSaga from './AppSaga';

// const sagaMiddleware = createSagaMiddleware();
// const AppStore = createStore(rootReducers, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(rootSaga);

// export default AppStore;

export default function configureStore() {
  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  // Saga middleware
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware));
  const store = createStore(rootReducers, compose(...enhancers));
  sagaMiddleware.run(rootSaga);
  return store;
}
