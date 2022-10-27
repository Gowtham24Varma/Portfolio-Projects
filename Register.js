import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'

const Register = () => {
  const navigate=useNavigate()

  const [pen,pencil]=useState({
    firstname:'',
    lastname:'',
    emailid:'',
    phno:'',
    password:'',
    conformpassword:''
  })
  const {firstname,lastname,emailid,phno,password,conformpassword}=pen

  const handler2=e=>{
    pencil({...pen,[e.target.name]:[e.target.value]})
  }
  
  const submithandler2=e=>{
    e.preventDefault()
    console.log(pen);
  }

  return (
    <div className='register-main'>
      <div className='register-edit'>
        <h1 className='register-h1'>Register</h1>
      <center>
      <from onSubmit={submithandler2}>
        
          <input type='text' placeholder='First name' name='firstname' value={firstname} onChange={handler2} className='register-txt1'/><br/><br></br>
          <input type='text' placeholder='Last name' name='lastname' value={lastname} onChange={handler2} className='register-txt1'/><br/><br></br>
          <input type='email' placeholder='Email Id' name='emailid' value={emailid} onChange={handler2} className='register-txt1'/><br/><br></br>
          <input type='number' placeholder='Phone number' name='phno' value={phno} onChange={handler2} className='register-txt1'/><br/><br></br>
          <input type='password' placeholder='Password' name='password' value={password} onChange={handler2} className='register-txt1'/><br/><br></br>
          <input type='password' placeholder='Conform password' name='conformpassword' value={conformpassword} onChange={handler2} className='register-txt1'/><br/><br></br>
          <button className='submit2' onClick={()=>navigate('/Home')}>Submit</button>


        
      </from>
      </center>
      </div>
    </div>
  );
}

export default Register;
