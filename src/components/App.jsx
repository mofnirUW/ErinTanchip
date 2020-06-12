import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home.jsx";
import Interests from "./Interests.jsx";
import Projects from "./Projects.jsx";

export default function App() {
  return (
    <div>
    
    <Router>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
       <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
           <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
           <a class="nav-link" href="/interests">Interests</a>
          </li>
          <li class="nav-item">
           <a class="nav-link" href="/projects">Projects</a>
          </li>
        </ul>
      </div>
    </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/interests">
          <Interests />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  </Router>

  </div>
  );
}

