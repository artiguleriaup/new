import React, { useState } from 'react'
import {useNavigate} from 'react-router'

const url = 'http://localhost:5000';

const SignUp = () => {
  //creating credential state
  const [credentials , setCredentials] = useState({name: '', email: '', password: '', cpassword: ''})
  const navigate = useNavigate();
  //HandleSubmit
  const handleSubmit = async(e) => {
    e.preventDefault();
    //destructing
    const {name , email , password} = credentials;
    //Api call for creating an user
    const response = await fetch(`${url}/api/auth/createuser`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({name, email, password})
    })
    const json = await response.json();
    console.log(json);

    if(json.success){
      //save token to localStorage
      localStorage.setItem('token', json.authToken);
      navigate('/');
      console.log("Account created successfully");
    }
    else{
      console.log("Invalid credentials");
    }
  }
  //OnChange
  const onChange = (e) =>{
    setCredentials({...credentials, [e.target.name] : e.target.value});

  }
  return (
    <div className='container mt-2'>
    <h2>Create an account to use Gallery app</h2>
  <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control"   onChange={onChange} id="name" name="name" aria-describedby="nameHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control"  onChange={onChange} id="email" name="email" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" name="password"  onChange={onChange} className="form-control" id="password" minLength={5} required />
  </div>
  <div className="mb-3">
    <label htmlFor="cPassword" className="form-label">Confirm Password</label>
    <input type="password" name="cPassword"  onChange={onChange} className="form-control" id="cPassword" minLength={5} required />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  )
}

export default SignUp
