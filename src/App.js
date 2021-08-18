import React from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import { Lyrics } from './components/tracks/Lyrics';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ContextController } from './Context';

function App() {
  return (
    <ContextController>
      <Router>
        <>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </>
      </Router>
    </ContextController>
  );
}

export default App;
