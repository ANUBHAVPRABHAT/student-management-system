import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import studentService from '../../services/studentservice';
import resultService from '../../services/resultservice';
import attandanceService from '../../services/attandanceservice';
import  swal from 'sweetalert';
import {Redirect} from "react-router-dom";
const StudentList = () => {

  const [student, setStudent] = useState([]);
  const logout =()=>{
    localStorage.removeItem("userinfo");
  }
  const init = () => {
    studentService.getAll()
      .then(response => {
        console.log('Printing student data', response.data);
        setStudent(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }
  let mystyle={
    minHeight:"90vh"
}

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
   // if(window.confirm('are you sure want to delete'))
    studentService.remove(id)
      .then(response => {
        console.log('student deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  const updatestatus = (id) => {
    console.log('Printing id', id);
    if(window.confirm('are you sure want to update status="inactive"'))
    studentService.updatestatus(id)
      .then(response => {
        console.log('student status change to inactive successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }
  const handleDelete1 = (id) => {
    console.log('Printing data', id);
    //if(window.confirm('are you sure want to delete'))
    resultService.removesid(id)
      .then(response => {
        console.log('student deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }
  const handleDelete2 = (id) => {
    console.log('Printing data', id);
    //if(window.confirm('are you sure want to delete'))
    attandanceService.removesid(id)
      .then(response => {
        console.log('student deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }
  if(!localStorage.getItem("userinfo")){
    alert("please login first")
    return( <Redirect to="/"/> )
}


  return (
    <div className="container" style={mystyle} >
      <h2 align="center">List of Students</h2>
      <hr/>
      <div>
        <Link to="/admin/add" className="btn btn-primary mb-2">Add Student</Link>{' '}
        <Link to="/admin/viewtransfer" className="btn btn-info mb-2">View transfer Student </Link>{' '}
        <Link to="/admin/addattandance" className="btn btn-primary mb-2">Student Attandance</Link>{' '}
        <Link to="/admin/changepassword" className="btn btn-info mb-2">Change Password</Link>{' '}
        <Link to="/"onClick={logout} className="btn btn-primary mb-2">logout</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark" >
            <tr>
              <th>sid</th>
              <th>class</th>
              <th>name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            student.map(student => (
              <tr key={student.sid}>
                <td>{student.sid}</td>
                <td>{student.classes}</td>
                <td>{student.name}</td>
              <td>
                  <Link className="btn btn-info" to={`/admin/edit/${student.sid}`}>Update</Link>{' '}
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    if(window.confirm('are you sure want to delete'))
                    {
                    handleDelete(student.sid);
                    handleDelete1(student.sid);
                    handleDelete2(student.sid);
                    swal({
                      title: "Student detail deleted Succesfull",
                      text: "You clicked the button!",
                      icon: "success",
                    });
                  }
                  }}>Delete</button>{' '}
                  <Link className="btn btn-success" to={`/admin/result/${student.sid}`}>Result</Link>{' '}
                  <Link className="btn btn-info" to={`/admin/views/${student.sid}`}>View</Link>{' '}
                  <Link to={`/admin/resultadd/${student.sid}`} className="btn btn-primary">Add Marks</Link>
                  <button className="btn btn-danger ml-2" onClick={() => {
                    updatestatus(student.sid);
                    }}>transfer</button>
                </td>

              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default StudentList;
