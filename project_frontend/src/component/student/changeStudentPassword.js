import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import studentService from '../../services/studentservice';
import  swal from 'sweetalert';
import {Redirect} from "react-router-dom";
import  '../style.css';

const StudentPassword = () => {
 const[password,setPassword]=useState('');
 const sid =(localStorage.getItem('sid'));
 const history = useHistory();
 const saveStudent = (s) => {
  s.preventDefault();

const student={password}
if(sid){
studentService.updatepassword(sid,student)
.then(response => {
    console.log('Student data updated successfully', response.data);
    swal({
        title: "password change Succesfull",
        text: "You clicked the button!",
        icon: "success",
      });
      history.push("/student");
})
.catch(error => {
    console.log('Something went wrong', error);
    swal({
        title: "invalid password min 4 charecter",
        text: "You clicked the button!",
        icon: "warning",
      });

})} }
if(!localStorage.getItem("sid")){
  alert("please login first")
  return( <Redirect to="/"/> )
}
return(
  <div className="app">
  <div className="login-form">
    <div className="title">
  Enter new password  <input
                        type="text"
                        className="form-control col-4"
                        id="password"
                        value={password}
                        onChange={(s) =>(setPassword(s.target.value))}
                        placeholder="Enter new password"
                        />
                        <button type="submit"onClick={(s) => saveStudent(s)} className="btn btn-primary" >Save</button>  
</div>
</div>
</div>


)}
export default StudentPassword;
