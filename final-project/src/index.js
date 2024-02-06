import {StrictMode} from 'react';
import ReactDOM from "react-dom/client";

import App from './App';
import React from 'react';
import {BrowserRouter as Router, Route, Routes, NavLink, Redirect, Switch, BrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Service from './components/Service';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>

    <Routes>
     <Route path="/login" element={<Login />} />
     <Route path="/home" element={<Main />} />
     <Route path="/service" element={<Service />} />
  </Routes>
  </Router>
);
