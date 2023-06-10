import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import UserProvider from './context/UserProvider';
import CommentProvider from './context/CommentProvider';
import './css/styles.css';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <CommentProvider>
        <App />
      </CommentProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
