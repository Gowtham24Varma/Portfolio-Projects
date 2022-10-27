import React, { useState } from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { BsFillUnlockFill } from "react-icons/bs";
import './App.css'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate=useNavigate()
  const [house,apartment]=useState({
    email:'',
    password:''
  })
  const {email,password}=house;

  const handler=e=>{
    apartment({...house,[e.target.name]:[e.target.value]})
  }

  const submithandler1=e=>{
    e.preventDefault()
    console.log(house);
  }
  return (
    <div className='login-fullblock'>
      <form onSubmit={submithandler1}>
      <center>
      <div className='login-center'>
        <h1>Login</h1>
      <AiOutlineUser/> <input type='email' placeholder='Email' name='email' value={email} onChange={handler}/><br/><br/>
        <BsFillUnlockFill/>  <input type='password'  placeholder='password'  name='password' value={password} onChange={handler}/><br/><br/>
        <button type='submit' className='button1' onClick={()=>navigate('/Home')}>Login</button><br/><br/>
        <h3 onClick={()=>navigate('/Register')} className='login-h3'>Register here</h3>
      </div>
      </center>
      </form>
    </div>
  );
}

export default Login;
 