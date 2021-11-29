import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import MyProvider from './Context/MyProvider';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
