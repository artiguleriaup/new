import React from 'react'
import {Link, useNavigate} from "react-router-dom"

const Navbar = () => {
  let navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Gallery App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Photos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addphoto">Add Photos</Link>
        </li>
        </ul> 
        { !localStorage.getItem('token') ? <form className='d-flex '>
            <Link className='btn btn-primary mx-1 me-2 ' to="/login" role="button">Login</Link>
            <Link className='btn btn-primary mx-1 ' to="/signup" role="button">SignUp</Link>
            </form>: <button onClick={handlelogout} className='btn btn-primary' >Logout</button>}
        
    </div>
    </div>
   </nav>
  </>
  )
}

export default Navbar
