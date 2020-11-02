import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import { __PROD__ } from './contstants';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

if (!__PROD__) {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}
