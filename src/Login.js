import React,{useState} from 'react';
import "./Login.css";
import { Link , useHistory } from "react-router-dom";
import {auth} from "./firebase.js"; 

function Login() {

  const history = useHistory();
  const [email,setEmail] = useState('');
  const [password,setPassword] =  useState('');

  const signIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
         history.push('/')
      })
      .catch(error => alert(error.message));
  }

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //successfully creates a new user with the email and password
        if(auth)
        {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png"
          alt="amazon logo"
        />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)} //assigning email to the field
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)} // assigning password to password field
          />

          <button className="login_signInButton" onClick={signIn} type="submit">Sign in</button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login_registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;