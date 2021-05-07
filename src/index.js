import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import App from './components/App';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById('root')
);
