import React, {useEffect} from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Payment from "./Payment.js";
import {BrowserRouter as Router, Switch , Route} from "react-router-dom"; 
/*In react-router-dom v6, "Switch" is replaced by routes "Routes"*/
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements}  from "@stripe/react-stripe-js";


const promise = loadStripe(
  "pk_test_51LrCieSASRUnYKgyTxtZrSOYhkfZUsLsTzJvxWUOcmePO56Dy9wyz0owqNnfwqr0yEjzveegsZAYM1Nu7mywyXEG00HEhrXpxh"
);

function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() => {
  // will run only when app component loads
  auth.onAuthStateChanged(authUser =>{
    console.log('THE USER IS >>>',authUser);
    if(authUser)
    {
       // user was logged in
       dispatch({
        type : 'SET_USER',
        user : authUser
       })
    }
    else{
      // user is not logged out
      dispatch({
        type: 'SET_USER',
        user: null,
      });
    }

  })
  },[])


  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment /> 
            </Elements>
          </Route>
          <Route path="/">
            {/* "/" -> Default route must at the bottom*/}
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
