import React, { useEffect, useState } from "react";
import "./Login.style.scss";
import { NavLink, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../../redux/slices/userApiSlice";
import { setCredentials } from "../../../redux/slices/authSlice";
import { toast } from "react-toastify";

const initialValues = {
  email:'',
  password:'',
}

const Login = () => {

  const [formValues,setFormValues] = useState(initialValues);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const {userInfo} = useSelector((state)=>state.auth);

  useEffect(()=>{
    if(userInfo){
      navigate('/')
    }
  },[navigate,userInfo])

  const changeHandler = (e) =>{
   setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
  }

  const submitHandler = async(e)=>{
    e.preventDefault();

    try{
      const response = await login(formValues).unwrap();
      dispatch(setCredentials({...response}))
      navigate('/');
    }catch(err){
      toast.error(err?.data.message || err.message);
    }
  }

  return (
    <div className="main-login">
      <div className="form-container">
        <h1>Login.</h1>
        <form className="login-form" onSubmit={submitHandler}>
          <div className="form-group">
            <input type="email" placeholder="Email" name="email" value={formValues.email} onChange={changeHandler}></input>
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" name="password" value={formValues.password} onChange={changeHandler}></input>
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
