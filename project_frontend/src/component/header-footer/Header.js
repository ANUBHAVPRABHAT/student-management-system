import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'


export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className='home__header__account'>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
              <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>  
               <li className = "nav-item">
                 <Link className = "nav-link"to = "/fee" > Fee Struture </Link> 
                </li>
                
                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Login
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/loginstudent">Student Login</a></li>
                                    <li><a className="dropdown-item" href="/loginadmin">Admin Login</a></li>
                                    
                                </ul>
                            </li>
                          
              <li className = "nav-item" >
            <Link className = "nav-link"to = "/contact" > Contact Us </Link> 
            </li>
            
        </ul>
        </div>
        </div>
        </div>
      
        
      </nav>
    )
}
Header.defaultProps = {
  title: "Your Title Here",

}

Header.propTypes = {
  title: PropTypes.string,
  
}