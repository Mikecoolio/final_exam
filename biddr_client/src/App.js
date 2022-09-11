import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Navbar from './components/Navbar';
import { User } from './requests';
import AuctionIndexPage from './components/AuctionIndexPage'
import AuctionShowPage from './components/AuctionShowPage';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';

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
          <Route exact path="/auctions"><AuctionIndexPage /></Route>
          <Route exact path="/auctions/:id" render={(routeProps) => <AuctionShowPage {...routeProps} />} ></Route>
          <Route exact path="/sign-in"  
          render={(routeProps) => <SignInPage {...routeProps} onSignIn={getCurrentUser}/>}></Route>
          <Route exact path="/sign-up" render={(routeProps) => <SignUpPage {...routeProps} onSignUp={getCurrentUser} />} ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
