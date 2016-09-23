//run webpack in terminal with webpack -w

import React from 'react';
import ReactDOM from 'react-dom';
var Router = require('react-router') .Router;
var routes = require('./config/routes');


ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);
