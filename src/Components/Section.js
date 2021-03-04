import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
// import Password from "./dashboard/AdminSideNave/Password"




export class Section extends Component {
  render() {
    return (
      <section>
        {/* <Route path="/" component={ForgotPwd} exact /> */}
        <Route path="/login" component={Login} exact /> 
      </section>
    );
  }
}

export default Section;








