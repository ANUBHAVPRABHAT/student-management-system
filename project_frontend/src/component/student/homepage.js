import React from "react";
import style from "../style.css"
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import studentService from '../../services/studentservice';
import {Redirect} from "react-router-dom";


export function Homepage() {
  const [student, setStudent] = useState([]);
  const sid =(localStorage.getItem('sid'));
  
  const logout =()=>{
    localStorage.removeItem("sid");
  }
  
  const init = () => {
    studentService.getdetail(sid)
      .then(response => {
        console.log('Printing student data', response.data);
        setStudent(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }
  useEffect(() => {
      init();
     
   }, []);
  let mystyle={
    minHeight:"90vh"
}
if(!localStorage.getItem("sid")){
  alert("please login first")
  return( <Redirect to="/"/> )
}
  return (
      <div style={mystyle}>
      <div align="right"> 
      <Link to="/"onClick={logout} className="btn btn-light mb-2">logout</Link>
      </div>
        <h1 align="center" style={{ color: 'Dark' }}>Welcome  {student.name} </h1>
        <div className="tab1">
        <div className="d-grid gap-2">
          <br/>
  <Button variant="primary" size="lg">
  <h2><a className="ul" href="/student/view" align="center">Student Details</a></h2>
  </Button>
  <br/>
  <Button variant="info" size="lg">
  <h2><a className="ul" href="/student/attandance" align="center"> Attendance</a></h2>
  </Button>
  <br/>
  <Button variant="success" size="lg">
  <h2><a className="ul" href="/student/result" align="center"> Result</a></h2>
  </Button>
  <br/>
  <Button variant="warning" size="lg">
  <h2><a className="ul" href="/student/changepassword" align="center"> Change Password</a></h2>
  </Button>
  <br/>
  
 
  </div>
</div>
</div>
  )}

