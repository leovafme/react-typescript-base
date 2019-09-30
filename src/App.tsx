import React from 'react';
import { connect } from 'react-redux';

import { AppState } from './store';
import { SystemState } from './store/system/types';

import logo from './logo.svg';
import './App.css';

interface AppProps {
  system: SystemState;
}

class App extends React.Component<AppProps> {
  render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
            {this.props.system.userName}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): AppProps => ({
  system: state.system
});

export default connect(mapStateToProps)(App);
