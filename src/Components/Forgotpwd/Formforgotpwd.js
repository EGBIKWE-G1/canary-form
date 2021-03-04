import React, { useState } from "react";
// import "./Form.css";
// import FormSignup from "./FormSignup";
import Forgotpwd from './Forgotpwd'
// import FormSignup from "../Registration/FormSignup";
// import FormSuccess from "./FormSuccess";
// import FormSuccess from "../Registration/FormSuccess";



const Formforgotpwd = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        {/* <span className="close-btn">×</span>
        <div className="form-content-left">
          <img
            className="form-img"
            src="https://cdn.pixabay.com/photo/2017/02/25/23/52/connections-2099068_960_720.png"
            alt="community"
          />
        </div> */}
        
          {/* <Formforgotpwd submitForm={submitForm} /> */}
          <Formforgotpwd  />
        
          {/* <FormSuccess /> */}
        
      </div>
    </>
  );
};

export default Formforgotpwd;
