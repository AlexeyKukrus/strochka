import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './shared/lib/reportWebVitals';

import { App } from './app';
import './app/styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(console.log);
