import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css"
import App from './App';
import { StateProvider } from "./StateProvider"

ReactDOM.render(
    <StateProvider initialState={} reducer={}>
      <App />
    </StateProvider>,
  document.getElementById('root')
);