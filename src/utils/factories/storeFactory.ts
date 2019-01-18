import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as reducers   from '../../redux/reducers/index';
import * as epics   from '../../redux/epics/index';
// import { consoleLogger } from '../middlewares/consoleLogger';
import { IAppState } from '../../redux/state/IAppState';
import { createEpicMiddleware,combineEpics } from 'redux-observable';

const epicMiddleware = createEpicMiddleware();
export const storeFactory = () => {
  // const devTools = ((window as any).devToolsExtension)
  //   ? ((window as any).devToolsExtension)
  //   : () => /* tslint:disable:no-empty */{};

  // const epicMiddleware = createEpicMiddleware();

  // const createStoreWithMiddleware = compose(
  //   applyMiddleware(consoleLogger,epicMiddleware)
  // )(createStore);

  // epicMiddleware.run(combineEpics(epics.getContacts));
  // return (createStoreWithMiddleware as any)(combineReducers<IAppState>(reducers), devTools());

  const store = createStore(
    combineReducers<IAppState>(reducers),
    applyMiddleware(epicMiddleware)
  );

  epicMiddleware.run(combineEpics(epics.getContacts,epics.getToken));

  return store;
};
