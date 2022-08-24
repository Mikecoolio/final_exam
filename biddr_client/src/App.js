import './App.css';
import React, { useState, useEffect, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Navbar from './components/Navbar';
import { User } from './requests';


function App() {
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    getCurrentUser();
  }, [])

  const getCurrentUser = () => {
    return User.current().then(user => {

      if (user?.id){
        setUser(user)
      }
    })
  }

  const onSignOut = () => { setUser( null )}

  return (
    <div className="App">
      {/* <p>App.js Page</p> */}
      <BrowserRouter>
        <Navbar currentUser={user} onSignOut={onSignOut}/>
        <Switch>
          <Route exact path="/" component={WelcomePage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
