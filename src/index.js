import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider from './Provider.js'

ReactDOM.render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
