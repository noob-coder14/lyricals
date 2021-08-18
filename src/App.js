import React from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProviderComp } from './Context';

function App() {
  return (
    <ProviderComp>
      <Router>
        <>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </>
      </Router>
    </ProviderComp>
  );
}

export default App;
