import React from "react";
import "./NavigationBar.style.scss";
import { NavLink } from "react-router";
import { IoSearchSharp } from "react-icons/io5";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-header">
        <div className="logo-search">
          <NavLink to="/">
            <div className="logo">DevBlog</div>
          </NavLink>
          <div className="search">
            <form className="search-form">
              <button><IoSearchSharp /></button>
              <input
                type="text"
                placeholder="Search..."
                className="search-field"
              ></input>
            </form>
          </div>
        </div>
        <div className="auth">
          <NavLink className="nav-login-btn" to="/auth/login">
            Login
          </NavLink>
          <NavLink className="nav-register-btn" to="/auth/register">
            Create Account
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
