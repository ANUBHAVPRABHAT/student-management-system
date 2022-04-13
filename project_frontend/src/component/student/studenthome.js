import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import studentService from '../../services/studentservice';
//import resultService from '../services/resultservice';
import  swal from 'sweetalert';
import {Redirect} from "react-router-dom"
const StudentHome = () => {
//const studentid=this.state;
  const [student, setStudent] = useState([]);
  //const [sid, setSid] = useState([]);
  const sid =(localStorage.getItem('sid'));
  const init = () => {
    studentService.getView(sid)
      .then(response => {
        console.log('Printing student data', response.data);
        setStudent(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }



  useEffect(() => {
 // const sid =(localStorage.getItem('sid'));
 // if (sid) {
   //setSid(sid);}
   init();
  
}, []);
  const logout =()=>{
    localStorage.removeItem("sid");
  }
  
  let mystyle={
    minHeight:"90vh"
}
//setSid(localStorage.getItem("studentid"))
  



useEffect(() => {
  
  }, []);

 
  if(!localStorage.getItem("sid")){
    alert("please login first")
    return( <Redirect to="/"/> )
}

  return (
    <div className="container" style={mystyle} >
   
      
      <div>
        
   <div>
  <h3 align="center">Student Details</h3>
  <table border="1" className="table table-bordered table-striped">
    <tbody>
  <tr>
    <td> Student Id: </td>
    <td>{student.sid}</td>
    <td>
      Status:
    </td>
    <td>{student.status}</td>
   </tr>
   <tr>
     <td>
       Name :
     </td>
     <td colSpan="3">
       {student.name}
       </td>
   </tr>
   <tr>
    <td>Class : </td>
    <td>{student.classes}</td>
    <td>
      Admission Date :
    </td>
    <td>{new Date(student.addmissiondate ).toLocaleDateString()}</td>
   </tr>
   <tr>
    <td>Gender : </td>
    <td>{student.gender}</td>
    <td>
       Date of Birth :
    </td>
    <td>{new Date(student.dob ).toLocaleDateString()}</td>
   </tr>
   <tr>
    <td>Father Name : </td>
    <td>{student.father_name}</td>
    <td>
      Mobile No :
    </td>
    <td>{student.mobile_no}</td>
   </tr>
   <tr>
     <td>Email : </td>
     <td colSpan="3">{student.emailid}</td>
   </tr>

   <tr>
     <td>Address : </td>
     <td colSpan="3">{student.address}</td>
   </tr>
   <tr>
     <td>pincode : </td>
     <td colSpan="3">{student.pincode}</td>
   </tr>



  </tbody>
 
 </table>
 </div>
      </div>
      <div align="center">
      <Link className="btn btn-primary mb-2" to={`/student`}>back</Link>{' '}
      <Link to="/"onClick={logout} className="btn btn-primary mb-2">logout</Link>
      <br/>
      </div>
    </div>
  );
}

export default StudentHome;
