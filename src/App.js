import React, { useEffect } from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";



function App() {


 

  return (
    <div className="app">

      <Router>

        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />

          </Route>
          <Route path="/">
            <Header />
            <Home />

          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
