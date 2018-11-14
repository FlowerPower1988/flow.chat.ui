import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import * as reducers   from '../../redux/reducers/index';
import { consoleLogger } from '../middlewares/consoleLogger';
import { IAppState } from '../../redux/state/IAppState';

export const storeFactory = () => {
  const devTools = ((window as any).devToolsExtension)
    ? ((window as any).devToolsExtension)
    : () => /* tslint:disable:no-empty */{};

  const createStoreWithMiddleware = compose(
    applyMiddleware(consoleLogger)
  )(createStore);

  return (createStoreWithMiddleware as any)(combineReducers<IAppState>(reducers), devTools());
};
