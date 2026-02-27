import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Set --app-height to actual visible viewport height (fixes iOS/Android toolbar issues)
const setAppHeight = () => {
  document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
};
window.addEventListener('resize', setAppHeight);
setAppHeight();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
