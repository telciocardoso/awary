import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes, NavLink, Redirect, Switch, BrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';


ReactDOM.render(   
  <Router>
    <Header />
    <Main />
    <Routes>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Main} />
  </Routes>
  <Footer/>
  </Router>,
  document.getElementById('root')
);