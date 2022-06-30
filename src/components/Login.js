import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const url = 'http://localhost:5000';

const Login = () => {

  const [credentials, setCredentials] = useState({email:"", password:""});
  const navigate = useNavigate();

  const handleSubmit = async(e) =>{
      e.preventDefault();
      //api call
      const {email, password} = credentials;
      const response = await fetch(`${url}/api/auth/login`,{
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify({email, password})
      })
      const json = await response.json();
      console.log(json);
      if(json.success){
        //save the token and redirect
        localStorage.setItem('token', json.authToken);
        navigate("/");
        console.log("login successfully");
      }
      else{
        console.log("Invalid details");
      }
  }





  const onChange = (e) =>{
    setCredentials({...credentials, [e.target.name]: e.target.value});
  }






  return (
    <div className='mt-3'>
      <h2>Login to continue to Gallery app</h2>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" name="password" value={credentials.password} onChange={onChange} className="form-control" id="password" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login
