import React from 'react'
import { Link } from "react-router-dom";
const home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className='navbar-brand' to='/'>EHRM</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className='nav-link' to='/dashboard'>Dashboard</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link' to='/list'>Record List</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Doctor
          </a>
          <ul className="dropdown-menu">
            <li>
            <Link className='dropdown-item' to='/'>View Profile</Link>
            </li>
            <li>
                <Link className='dropdown-item' to='/edit_doctor'>Update Profile</Link>
            </li>
            <li>
                <Link className='dropdown-item' to='/make_appointment'>Make Appointment </Link>
            </li>
            <li>
                <Link className='dropdown-item' to='/edit_appointment'>Update Appointment</Link>
                
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Patient
          </a>
          <ul className="dropdown-menu">
            <li>
                <Link className='dropdown-item' to='/'>View Profile</Link>
            </li>
            <li>
                <Link className='dropdown-item' to='/edit_patient'>Update Profile</Link>
            </li>
            <li>
                <Link className='dropdown-item' to='/approve_doctor'>Allow Access</Link>
                
            </li>
            <li>
            <Link className='dropdown-item' to='/revoke_doctor'>Revoke Access</Link>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Register
          </a>
          <ul className="dropdown-menu">
            <li>
                <Link className='dropdown-item' to='/register_patient'>Patient</Link>
                
            </li>
            <li>
                <Link className='dropdown-item' to='/register_doctor'>Doctor</Link>
               
            </li>
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
    </>
  )
}

export default home