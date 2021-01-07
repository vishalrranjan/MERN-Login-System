import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Register from './component/Register';
import Login from './component/Login';
import Welcome from './component/Welcome';

function App() {
  return (
    <Router>
      <Route path="/" exact component={ Register } />
      <Route path="/login" component={ Login } />
      <Route path="/welcome" component={ Welcome } />
    </Router>
  );
}

export default App;
