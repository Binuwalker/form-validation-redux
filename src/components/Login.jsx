import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Login.css';
import { login } from '../actions/loginAction';

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch()

  const { emailErrorMsg, passwordErrorMsg } = useSelector(state => state.loginState);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({email, password}))
  }


  return (
    <div className='login'>
      <div className='container'>
        <div className='login-form-container'>
          <div className='login-dummy'></div>
          <form className='login-form' onSubmit={submitHandler}>
            <div className='container'>
              <div className='login-heading'>LOGIN</div>
              <label className='login-emailLabel'>Email:</label>
              <input className='login-emailInput' name='email' placeholder='Please enter the email' value={email} onChange={e => setEmail(e.target.value)} />
              <div>{emailErrorMsg}</div>
              <label className='login-passwordLabel'>Password:</label>
              <input className='login-passwordInput' name='password' placeholder='Please enter the password' value={password} onChange={e => setPassword(e.target.value)} />
              <div>{passwordErrorMsg}</div>
              <button className='login-btn'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;