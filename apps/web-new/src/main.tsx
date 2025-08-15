import './assets/styles/index.css';   // 放在最顶部
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/assets/styles/index.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

