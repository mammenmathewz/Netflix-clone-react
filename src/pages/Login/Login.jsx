import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

function Login() {
const [signState,setSignState] = useState('Sign In')

  return (
    <div className='login'>
      <img src={logo} className='login-logo'></img>
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState==='Sign Up' ? <input type="text" placeholder='Your name'/>:<></>}
         
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <button>{signState}</button>
          <div className='form-help'>
          <div className="remember">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
         {signState==='Sign Up'? <p>Already have account?<span onClick={()=>setSignState('Sign In')}>Sign in now</span></p>
         : <p>New to Netflix?<span onClick={()=>setSignState('Sign Up')}>Sign up now</span></p>}

        </div>
      </div>
    </div>
  )
}

export default Login