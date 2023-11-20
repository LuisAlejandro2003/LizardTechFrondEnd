// index.js (o tu archivo principal)
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import Router from './assets/router/Router.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
   
      <Router />
 
  </React.StrictMode>

);
