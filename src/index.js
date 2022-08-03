import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Router, Route } from "react-router-dom";

import App from './App';


ReactDOM.render(
<React.StrictMode>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js">
    </script>
</head>
  <BrowserRouter>
    
    <App />
    
  </BrowserRouter>
</React.StrictMode>,
  document.getElementById('root')
);

