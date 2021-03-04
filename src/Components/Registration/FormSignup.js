/* eslint-disable react/prop-types */   
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
// import validate from "./ValidateInfo";
import validate from "../Registration/ValidateInfo";
import useForm from "./useForm";
// import useForm from "../Registration/useForm";
// import { Link } from "react-router-dom";
import "./Form.css";
  

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (  
    <div className="align-head">
    <div className="company-logo">
     <img className="logo" height="50px" width="130px" src={logo} alt="logo" />
        {/* <img src="https://lun-eu-assets.s3.eu-central-003.backblazeb2.com/yVSgi0i320Wg55K6Ag81bw/ii2o9yLRv0mYUPNIWPgaQg/Canary%20FX_Logo.png" width='270' alt="" /> */}
    </div>
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="forms" noValidate>
      <div className="">
        <h1 className="register"> Register </h1>
        <p>Get your account set up in a few minutes </p>
        <br />
        <div className="form-inputs">
          <label className="title">First Name</label>
          <input
            className="form-input"
            type="text"
            name="Organization Name"
            placeholder="First Name"
            value={values.organizationname}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label cla ssName="title">Last Name</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Last Name"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label className="title">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="mail@email.com"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
       
        <div className="form-inputs">
          <label className="title">Phone Number</label>
          <input
            className="form-input"
            type="tel"
            name="contact"
            placeholder="070*****"
            value={values.contact}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label className="title">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="********"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="title">Re-type Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="********"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
      
        <span className="form-input-login">
            {/* <input className="checkbox" type="checkbox" id="remember-me" /> */}
             I agree to the <a className="conditions" href="/">Terms and conditions </a>
        </span>
        <br />
        <br />
        <Link to="/login">
          <button className="form-input-btn" type="submit">
            Register
          </button> 
          </Link>
          </div>    
        
      </form>
    </div>
    </div>
  );
};  

export default FormSignup;


