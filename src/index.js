import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.sass';

ReactDOM.render(
  React.createElement(React.StrictMode, null, React.createElement(App, null)),
  document.getElementById('root')
);
