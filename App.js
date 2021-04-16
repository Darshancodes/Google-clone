import React from 'react';
import './App.css';
import Home from "./pages/home";
import { BrowserRouter as router, Switch, Route } from
"react-router"

function App() {
  return (
    //BEM
    <div className="App">
      <Router>
        <Switch >
        <Route path="/search">
          <h1>This is The SearchPage</h1>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
</Router>
    </div>
  );
}

export default App;
