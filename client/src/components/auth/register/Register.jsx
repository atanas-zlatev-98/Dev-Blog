import React from "react";
import "./Register.style.scss";
import { NavLink } from "react-router";
const Register = () => {
  return (
    <div className="main-register">
      <div className="form-container">
        <h1>Register.</h1>
        <form className="register-form">
          <div className="form-group-name">
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Username"></input>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Email"></input>
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password"></input>
          </div>
          <div className="form-group">
            <input type="password" placeholder="Repeat Password"></input>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Profile Picture URL"></input> {/* TODO add from computer */}
          </div>
          <div className="form-group-terms">
           <input type="checkbox" id="terms"/>
           <label> I Agree the <NavLink to='/terms'>Terms & Conditions</NavLink></label>
          </div>
          <div className="btn-container">
            <button type="submit">Register</button>
          </div>
        </form>
        <p>
          Already a registered? Login <NavLink to="/auth/login">#here</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
