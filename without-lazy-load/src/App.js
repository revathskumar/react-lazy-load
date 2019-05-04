import React from "react";
// import { Switch, Route } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import PieChart from "./PieChart";

const Home = () => {
  return <div>Home</div>;
};
const Chart = () => {
  return <PieChart />;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chart">Chart</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/">
            <Route path="/" exact component={Home} />
            <Route path="/chart" component={Chart} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
