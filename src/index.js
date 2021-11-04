import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AnimatedCursor from "react-animated-cursor"

import Home from './pages/Home/Home';
import ListCreations from './pages/ListCreations/ListCreations';
import Header from './components/Header/Header'

import {
  BrowserRouter as Router,
  Route,  
  Switch
} from "react-router-dom"



ReactDOM.render(
  <React.StrictMode>
    <Router>
    <AnimatedCursor
    color='86,136,199'
    innerSize={10}
    />
    <Header />
      <Switch>
        
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/creations'>
          <ListCreations />
        </Route>
         
        
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
