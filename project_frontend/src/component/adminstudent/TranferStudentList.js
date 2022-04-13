import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import studentService from '../../services/studentservice';
import resultService from '../../services/resultservice';
import attandanceService from '../../services/attandanceservice';
import  swal from 'sweetalert';
import {Redirect} from "react-router-dom";

const TranferStudentList = () => {

  const [student, setStudent] = useState([]);

  const init = () => {
    studentService.getInactive()
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
    studentService.remove(id)
      .then(response => {
        console.log('student deleted successfully', response.data);
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
    <div style={mystyle} >
      <div align="right">
                      
                      <Link to='/admin/view'>
                      <button type="button" className="btn btn-primary" style={{ marginLeft: '.5rem' }}>back</button>
                      </Link>
                  </div>
      <h2 align="center">List of Transfer Students</h2>
      <hr/>
      <div>
      <div className="container">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
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
                  <Link className="btn btn-success" to={`/admin/result/${student.sid}`}>Result</Link>
                  <Link className="btn btn-primary" to={`/admin/views/${student.sid}`}>view</Link>
                  <Link className="btn btn-info" to={`/admin/attandancereport/${student.sid}`}>Attandance Summary</Link>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
    </div>
  );
}

export default TranferStudentList;
