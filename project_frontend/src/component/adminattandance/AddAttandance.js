import { useEffect, useState ,useRef} from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import studentService from "../../services/studentservice";
import attandanceService from "../../services/attandanceservice"
import  swal from 'sweetalert';
import {Redirect} from "react-router-dom";
import ReactToPrint from 'react-to-print';

const AddAttandance = () => {
const [student, setStudent] = useState([]);
const[sid,setSid]=useState('');
const[date,setDate]=useState('');
const[status,setStatus]=useState('');
const[session,setSession]=useState('');
const[attandance,SetAttandance]=useState([]);

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
  const init1 = () => {
    attandanceService.getAll(`${date}`)
      .then(response => {
        console.log('Printing attandance data data', response.data);
        SetAttandance(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  const handleDelete = (id) => {
  console.log('Printing data', id);
  //if(window.confirm('are you sure want to delete'))
  attandanceService.remove(id)
    .then(response => {
      console.log('student deleted successfully', response.data);
      init();
      if(date){
        init1();}
        
    })
    .catch(error => {
      console.log('Something went wrong', error);
    })
}


  
  useEffect(() => {
  setSession("2021-2022") ;
  init();
  if(date){
    init1();}
    
  },[]);

  

    
    const saveResult = (s) => {
        s.preventDefault();
    const attandance = {sid,date,status,session};
        
    
        attandanceService.create(attandance)
            .then(response => {
                console.log("student attandance added successfully", response.data);
                
                if(date){
                  init1();}
                  
                setStatus("");
                setSid("");
                swal({
                    title: "Attandance added Succesfull",
                    text: "You clicked the button!",
                    icon: "success",
                  });
                
            })
            .catch(error => {
                console.log('something went wroing', error);
                if(date){
                  init1();}
                swal({
                    title: "Already add or date/student anot selected",
                    text: "You clicked the button!",
                    icon: "warning",
                  });
            })
          }


          
        
        


        const componentRef = useRef();

        let mystyle={
            minHeight:"90vh"
        }
        

        if(!localStorage.getItem("userinfo")){
          alert("please login first")
          return( <Redirect to="/"/> )
      }
      
    return(
      <div>
        <div align="right">
    <ReactToPrint
        trigger={() => <button >Print this out!</button>}
        content={() => componentRef.current}
      />
      </div>
      
      
        <div className="container" style={mystyle}>
          <h3 align="center">Student Attandance

          </h3>
          Date : <input 
                        type="date" 
                        id="date"
                        value={date}
                        onChange={(s) =>(setDate(s.target.value))}
                      />
                      <button type="submit"onClick={(s) =>init1()} className="btn btn-primary" >load attandance</button>
            <br/><br/>
            <table className="table table-bordered table-striped">
             <tbody align="left">
               <tr>
               <td colSpan="3">
                Student Id :{'  '}  {sid}</td>
               </tr>
               <tr>
                 <td colSpan="3">
                   Status :{'  '} {status}</td>
              </tr>
              <tr>
                <td colSpan="2">
                <div align="center"> 
                  
                    <button type="submit"onClick={(s) =>saveResult(s)} className="btn btn-primary" >confirm</button>{' '}
                    <Link to='/admin/view'>
                    <button type="button" className="btn btn-primary" style={{ marginLeft: '.5rem' }}>back</button>
                     </Link>
                </div>
                </td> 
                <td><div align="center">{attandance.length}/{student.length}</div>
                
                </td>
              </tr>
             </tbody>

            </table>
           
              
            <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>sid</th>
              <th>class</th>
              <th>name</th>
              <th>Status</th>
              <th>Action</th>
              
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
             <button type="submit"onClick={(s) =>( setSid(student.sid),setStatus("P"))} className="btn btn-success" >P</button>{'    '} 
             <button type="submit"onClick={(s) =>( setSid(student.sid),setStatus("A"))} className="btn btn-danger" >A</button>
              </td>
              <td><Link to={`/admin/attandance/${student.sid}`} className="btn btn-primary">View Attandance</Link>{' '}
              <Link to={`/admin/attandancereport/${student.sid}`} className="btn btn-info">ViewReport</Link></td> 
              </tr>
            ))
          }


          </tbody>

        </table>
        <br/>
       <div ref={componentRef}>
        <table className="table table-bordered table-striped">
        <thead className="thead-dark">
            <tr>
              <th>Student Id</th>
              <th>Name</th>
              <th>Class</th>
              <th>Date</th>
              <th>Status</th>
              <th>Academic year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            attandance.map(item=> (
              <tr key={item.aid}>
                <td>{item.sid}</td>
                <td>{item.name}</td>
                <td>{item.classes}</td>
                <td>{new Date(item.date).toLocaleDateString()}</td>
                <td>{item.status}</td>
                <td>{item.session}</td>
             <td>
             <button className="btn btn-danger ml-2" onClick={() => {
                    if(window.confirm('are you sure want to delete'))
                    handleDelete(item.aid);
                    swal({
                      title: "Attandance detail deleted Succesfull",
                      text: "You clicked the button!",
                      icon: "success",
                    });

                  }}>Delete</button>
                 
                </td>

              </tr>
            ))}
          </tbody>
        </table>
            
          
        </div>
        </div>
        </div>
       
    )
}

export default AddAttandance;