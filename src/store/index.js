import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import persistReducers from './persistReducers';
import createStore from './createStore';
import rootReducers from './models/rootReducers';
import rootSagas from './models/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducers), middlewares);
const persistor = persistStore(store);
sagaMiddleware.run(rootSagas);

export { store, persistor };
