import React from 'react';
import Feeds from '../../Components/Feeds/Feeds';
import Suggestions from '../../Components/Suggestions/Suggestion';
// import profile from "../../Pages/Profile/Profile";
// import Forgotpwd from '../../Components/Forgotpwd/Forgotpwd'
// import Form  from '../../Components/Registration/Form'
import './newhome.css';
const NewHome =() =>{
    return(
        <div className='div-newhome'>
            <Feeds/>
            <Suggestions/>
             {/* <Profile /> */}
             {/* <Form /> */}
        </div>
    )
}

export default NewHome;