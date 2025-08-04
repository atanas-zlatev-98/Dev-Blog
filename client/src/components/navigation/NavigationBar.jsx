import React, { useState } from "react";
import "./NavigationBar.style.scss";
import { NavLink, useNavigate} from "react-router";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../../redux/slices/userApiSlice";
import {logout} from '../../redux/slices/authSlice';

const NavigationBar = () => {

  const {userInfo} = useSelector((state)=> state.auth);
  const [activeAuthUser,setActiveAuthUser] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutUser] = useLogoutMutation();

  const logoutHandler = async() =>{
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate('/')
    }catch(err){
      throw new Error('Logout failed');
    }
  }

  const setActive = () =>{
    setActiveAuthUser(prev => !prev)
  }

  return (
    <nav className="navbar">
      <div className="nav-header">
        <div className="logo-search">
          <NavLink to="/">
            <div className="logo">DevBlog</div>
          </NavLink>
          <div className="search">
            <form className="search-form">
              <input
                type="text"
                placeholder="Search..."
                className="search-field"
              ></input>
              <button type="submit"><IoSearchSharp /></button>
            </form>
          </div>
        </div>
        {!userInfo ? ( <div className="auth">
          <NavLink className="nav-login-btn" to="/auth/login">
            Login
          </NavLink>
          <NavLink className="nav-register-btn" to="/auth/register">
            Create Account
          </NavLink>
        </div>) : (
          <div className="auth-logged" onClick={setActive}>
            <img src={userInfo.profilePictureUrl} alt='profile picture'></img>
              <div className={`drop-down ${activeAuthUser ? 'active' : ''} `}>
                <ul>
                  <li><NavLink to='/profile'>Profile</NavLink></li>
                  <li><NavLink to='/posts/create-post'>Create-Post</NavLink></li>
                  <li>My Posts</li>
                  <li>My Drafts</li>
                  <li>Saved Posts</li>
                  <li onClick={logoutHandler}>Logout</li>
                </ul>
              </div>
          </div>
        )}
       
      </div>
    </nav>
  );
};

export default NavigationBar;
