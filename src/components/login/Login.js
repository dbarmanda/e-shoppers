import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

//firebase Google authentication
import {auth} from "./firebase"
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth"

function Login() {

  const login = (e)=> {
    //always in form to prevent refresh (single page rakhna hai bhai)
    e.preventDefault();

    //login Logic
  };
  
  const loginGoogle = (e)=> {
    e.preventDefault();

    //loginFirebase Google Logic
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res)=> {
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  const register = (e)=> {
    e.preventDefault();
    //register logic
  }
  return (
    <>
  
    <div className="login_logo">
      <Link to="/" >
      <img
        className="login_logoImg"
        src="https://creativedok.com/content/uploads/2017/05/ESHOPPER.jpg"
        alt=""
      />
      </Link>
      </div>
      <div className="login">
        <div className="login_container">
          <h1>Sign In</h1>
          <form action="">
            <h5>E-mail</h5>
            <input type="email" />
            <h5>Password</h5>
            <input type="password" />

            <button type="submit" className="login_signInBtn" onClick={login}>Sign In</button>
          </form>

          <button className="login_google" onClick={loginGoogle}>Login with Google</button>
          <p>
            By continuing, you agree to Eshoppers's Conditions of Use and
            Privacy Notice. Happy e-shopping 🔥
          </p>
          <h5>Become a E-shopper Today:</h5>
          <button onClick={register} className="login_registerBtn">Create your E-shoppers Account</button>
        </div>
      </div>
    </>
  );
}

export default Login;
