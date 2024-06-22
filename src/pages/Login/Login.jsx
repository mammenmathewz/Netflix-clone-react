import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { logIn,signUp } from '../../fireBase'
import netflix_Spinner from '../../assets/netflix_spinner.gif'


function Login() {
const [signState,setSignState] = useState('Sign In')
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [loding,setLoding] = useState(false)
const user_auth=async(event)=>{
  event.preventDefault();
  setLoding(true)
  if(signState==="Sign In"){
    await logIn(email,password)
  }else{
    await signUp(name,email,password)
  }
  setLoding(false)

}

  return (
    loding ? <div className="login-spinner">
      <img src={netflix_Spinner}></img>
    </div> : 
    <div className='login'>
      <img src={logo} className='login-logo'></img>
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState==='Sign Up' ? <input type="text" placeholder='Your name' value={name} onChange={(e)=>{setName(e.target.value)}}/>:<></>}
         
          <input type="email" placeholder='Email'  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <button onClick={user_auth} type='submit'>{signState}</button>
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