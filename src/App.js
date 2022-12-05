import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import PageHome from "./pages/pageHome";
//import "./App.css";
import PageLogin from "./pages/pageLogin";
import AppTopBar from "./pages/pageAppTopBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={PageHome} />
          <Route path="/*" component={PageLogin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
