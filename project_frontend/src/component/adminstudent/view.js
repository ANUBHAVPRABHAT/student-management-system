import { useEffect, useState,useRef } from 'react';
import { Link, useHistory,useParams } from 'react-router-dom';
import studentService from '../../services/studentservice';
import {Redirect} from "react-router-dom";
import ReactToPrint from 'react-to-print';
const StudentView = () => {

  const [student, setStudent] = useState('');
  const {sid} = useParams();
  const componentRef = useRef();
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
    init();
  
  }, []);

 

  if(!localStorage.getItem("userinfo")){
    alert("please login first")
    return( <Redirect to="/"/> )
}
return ( 
  
<div className="container">
  <br/>
  <div align="right">
    <ReactToPrint
        trigger={() => <button >Print this out!</button>}
        content={() => componentRef.current}
      />
      </div>
      <div ref={componentRef}>
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

 <div align="center">
                      
                      <Link to='/admin/view'>
                      <button type="button" className="btn btn-primary" style={{ marginLeft: '.5rem' }}>back</button>
                      </Link>
                  </div>
 
    
</div>
 
 
              
              

);
}

export default StudentView;
