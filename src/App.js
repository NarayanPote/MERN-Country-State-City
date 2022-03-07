import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import "./App.css";


import Dependent from "./Dependent";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route component={Dependent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
