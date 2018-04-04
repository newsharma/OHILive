import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
