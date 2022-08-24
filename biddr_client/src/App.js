import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <div className="App">
      {/* <p>App.js Page</p> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WelcomePage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
