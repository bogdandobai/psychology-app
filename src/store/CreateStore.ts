import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers';
import * as Types from './state';

export default () => {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore<Types.RootState, Types.RootAction, any, any>(
    appReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );
  return { store };
};
