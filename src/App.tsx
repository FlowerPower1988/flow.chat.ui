import * as React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { MainWindowConnected } from './containers/MainWindow'
import { Store } from 'redux';
import { IAppState } from './redux/state/IAppState'

interface IAppComponentProps {
  store: Store<IAppState>;
}

interface IAppComponentState {
  error: Error;
  errorInfo: React.ErrorInfo;
}

class App extends React.Component<IAppComponentProps,IAppComponentState> {
  public render() {

    return (
      <Provider store={this.props.store}>
        <MainWindowConnected />
      </Provider >
    );
  }
}

export default App;
