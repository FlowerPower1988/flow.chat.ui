import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { storeFactory } from './utils/factories/storeFactory';
import registerServiceWorker from './registerServiceWorker';

const store = storeFactory();
ReactDOM.render(
  <App store = {store} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

import './index.css';
// export * from './containers/index';
// export * from './types/store-state/index';
// export * from './reducers/index';