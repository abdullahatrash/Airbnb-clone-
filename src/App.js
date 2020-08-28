import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header.js";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import MediaQuery from "react-responsive";

function App() {
  return (
    <div className="App">
      <Router>
        <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
          <Header />
          <Switch>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </MediaQuery>
      </Router>
    </div>
  );
}

export default App;
