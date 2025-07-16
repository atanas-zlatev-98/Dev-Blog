import React from "react";
import "./Login.style.scss";
import { NavLink } from "react-router";

const Login = () => {
  return (
    <div className="main-login">
      <div className="form-container">
        <h1>Login.</h1>
        <form className="login-form">
          <div className="form-group">
            <input type="text" placeholder="Email"></input>
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password"></input>
          </div>

          <div className="btn-container">
            <button type="submit">Login</button>
          </div>
        </form>
        <p>Don't have an account? Register <NavLink to='/auth/register'>#here</NavLink></p>
      </div>
    </div>
  );
};

export default Login;
