import React from 'react';
import { Link, withRouter } from "react-router-dom";
import './login.css';
import logo from "../../assets/logo.png";


class Login extends React.Component{
    state={
        email:'',
        pwd:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target   
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.isLogin(true)
        this.props.history.push('/')
    }

    render(){   
        return(
            <div className='align-head'>   
            <div className="company-logo">  
            <img className="logo" height="50px" width="130px" src={logo} alt="logo" />
            </div>      
<body className="align">
                <div className="login">
                <header className="login__header">
                <h2 >Login</h2>

                <form className="login__form" onSubmit = {this.handleSubmit}>

                <div>
                <label htmlfor="email">Email</label>
                <input  className="input-head" type='email' id="email" name='email' placeholder='mail@mail.com' required onChange={this.handleChange}/>
                </div>

                <div>
                <label htmlfor="password">password</label>
                 <input  className="input-head" type='password' id="password"  name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                </div>
                
                <div>
                  <input className="button" type="submit"  onSubmit={this.handleSubmit} value="Login" />
                
                </div>
                </form>

                <Link to="/Forgotpwd">
                    <div className="content">
                <div className="pass-link">
                <a href="/">Forgot password?</a></div>
                </div>
                 </Link>
                 <br />
                 <Link  to="/Signup">
                    <div className="signup-link">
                    Don't have an account? <a className="register" style={{color:'#20b8eb'}} href=" #">Register here</a></div>
                    </Link>
    </header>
                </div>
                </body>

            </div>

        )
    }
}
    
export default withRouter(Login);
