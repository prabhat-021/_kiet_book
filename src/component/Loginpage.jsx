import React from 'react';
import "./loginpage.css";
const Loginpage = () => {
  return (
    <div className='body1'>
      <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form className="login-form">
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <button>login</button>
          <button className='btn1'>SIGN UP</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Loginpage;
