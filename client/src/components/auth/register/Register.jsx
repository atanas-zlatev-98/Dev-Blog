import React, { useEffect, useState } from "react";
import "./Register.style.scss";
import { NavLink, useNavigate } from "react-router";
import {useDispatch, useSelector} from 'react-redux'
import {useRegisterMutation} from '../../../redux/slices/userApiSlice';
import {toast} from 'react-toastify';
import { setCredentials } from "../../../redux/slices/authSlice";

const initialValues = {
  username:'',
  email:'',
  password:'',
  rePassword:'',
  profilePictureUrl:''
}


const Register = () => {
  const [formValues,setFormValues] = useState(initialValues);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const {userInfo} = useSelector((state)=>state.auth);
  const [register] = useRegisterMutation();

  const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    useEffect(()=>{
      if(userInfo){
        navigate('/');
      }
    },[navigate,userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();

        if(!formValues.username){
          return toast.error('Username is required!')
        }
        
        if(!formValues.email){
          return toast.error('Email field is required!')
        }

        if(!formValues.password || !formValues.rePassword){
          return toast.error('Password fields are required!')
        }
        
        if(formValues.password !== formValues.rePassword){
          return toast.error('Passwords do not match!')
        }

        if(!formValues.profilePictureUrl){
          return toast.error('Profile Picture URL is required!')
        }


        try {
          const {username,email,password,profilePictureUrl} = formValues;
          const response = await register({username,email,password,profilePictureUrl}).unwrap();
          dispatch(setCredentials({...response}));
          navigate('/');
        }catch(err){
          toast.error(err.message);
        }

    }
   
  return (
    <div className="main-register">
      <div className="form-container">
        <h1>Register.</h1>
        <form className="register-form" onSubmit={submitHandler}>
          <div className="form-group">
            <input type="text" placeholder="Username" name="username" value={formValues.username} onChange={changeHandler}></input>
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" name="email" value={formValues.email} onChange={changeHandler}></input>
          </div>
          <div className="form-group-password">
            <input type="password" placeholder="Password" name="password" value={formValues.password} onChange={changeHandler}></input>
            <input type="password" placeholder="Repeat Password" name="rePassword" value={formValues.rePassword} onChange={changeHandler}></input>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Profile Picture URL" name="profilePictureUrl" value={formValues.profilePictureUrl} onChange={changeHandler}/> {/* TODO add from computer */}
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
