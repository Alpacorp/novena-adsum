import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Container from './Containers/Container';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);