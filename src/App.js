import React from 'react';
import {Switch,Route, Redirect} from 'react-router-dom'
import Login from './Pages/Login/Login';
import Forgotpwd from './Components/Forgotpwd/Forgotpwd';
// import Resetpwd from "./Pages/Resetpwd"
import Section from './Components/Section'
import Signup from "./Pages/Signup";  
import Home from './Pages/Home/Home';   
import NoMatch from './Pages/404Page/404Page';

class App extends React.Component{
  state={
    isLog:false
  }  

  handleLogin = (isLog) => this.setState({isLog})
  render(){
    const {isLog} = this.state;
    return(
      <div>
        <Switch>
        
            <Route path='/login' render={() => <Login isLogin={this.handleLogin}/>}/>
            <Route exact path='/' render={() => !isLog ? (<Redirect to="/login"/>):(<Home handleLogged={this.handleLogin}/>) }/>
          
          {/* <Route path='/resetpwd' component={Resetpwd} /> */}
          <Route path='/signup' component={Signup} />
          <Route path='/forgotpwd' component={Forgotpwd} />
          <Route path='/section' component={Section} />
           <Route path='/home' component={Home} />
           <Route path='/login' component={Login} />
          {/* <Route path='/registration' component={Registration} /> */}
          {/* <Route path='/signup' component={Signup} /> */}
        <Route path='*' component={NoMatch}/>
        
        </Switch>
      </div>
    )
  }
}

export default App;