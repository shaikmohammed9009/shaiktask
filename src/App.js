import React from "react";
import "./App.css";
import {  Route,Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import MyForLoan from "./ForLoan";
import Offer from  "./Offer"
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ForLoan" component={MyForLoan} />
        <Route exact path="/offer" component={Offer} />
      </Switch>
    </>
  );
};

export default App;
