import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import resultService from "../../services/resultservice";
import studentService from "../../services/studentservice";
import { MDBInput } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import  swal from 'sweetalert';
import {Redirect} from "react-router-dom"


const AddResult = () => {
    const [resultlist, setResultList] = useState([]);
   const[classes,setClasses]=useState('');
    const[subject,setSubject]=useState('');
    const[sid, setSid] = useState('');

    const[examid,setExamid]=useState('');
    const[session, setSession] = useState('');
    const[status,setStatus]=useState('');
    const[marks, setMarks] = useState('');
    
    const history = useHistory();
    const {id} = useParams();

    
    const saveResult = (s) => {setSid(id)
        s.preventDefault();
        
        const result = {sid,classes,subject,examid,marks,status,session};
        
    
             resultService.create(result)
            .then(response => {
                swal({
                    title: "Result added Succesfull",
                    text: "You clicked the button!",
                    icon: "success",
                  });
                  init();
                console.log("student added successfully", response.data);
                
            })
            .catch(error => {
                swal({
                    title: "duplicate or invalid detail",
                    text: "You clicked the button!",
                    icon: "error",
                  });
                console.log('something went wroing', error);
            })
        }

        const init = () => {
            resultService.get(id)
              .then(response => {
                console.log('Printing result data', response.data);
                setResultList(response.data);
              })
              .catch(error => {
                console.log('Something went wrong', error);
              }) 
          }
          const handleDelete = (id) => {
            console.log('Printing data', id);
            if(window.confirm('are you sure want to delete'))
            resultService.remove(id)
              .then(response => {
                console.log('student deleted successfully', response.data);
                init();
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
            setSid(id);
           
          }, []);
         
          const addclasses = () => {
            studentService.getclassesbysid(id).then((response) => {
              setClasses(response.data);
            });  
          };
    useEffect(() => {
      addclasses() ;
    }
    , [])
    if(!localStorage.getItem("userinfo")){
      alert("please login first")
      return( <Redirect to="/"/> )
  }
  
    return(
        <div className="container" style={mystyle} >
            <br/><br/>
          
               
           
            
            <form>
                <table border="2" className="table table-bordered table-striped">
                    <thead><tr><td colSpan="3"><h2 align="center">Add Marks</h2></td></tr></thead>
                    <tbody>
                        
                        

            <tr><td>Student Id :
            <input  disabled
                        type="text" 
                        id="sid"
                        value={sid}
                       // onChange={(s) => setSid(s.target.value)}
                         />
            </td>
            
             <td>Class :
                   <input disabled
                        type="text" 
                        id="classes"
                        value={classes}
                        //onChange={(s) => setClasses(s.target.value)}
                      
                    />
             </td>
             </tr>
                <tr>
                <td>Subject :
                <select
                  value={subject}
                  onChange={(s) => { setSubject(s.target.value);}}>
                <option>Select subject</option>
                <option value="Maths" >Maths</option>
               <option value="Science" >Science</option>
               <option value="Hindi" >Hindi</option>
               <option value="English" >English</option>
               <option value="Social Science" >Social Science</option>
               <option value="Sanskrit" >Sanskrit</option>
               </select>  
                  </td>
                  
                
                   
                   <td> Exam name:
                    <select
                        value={examid}
                        onChange={(s) => { setExamid(s.target.value);}}>
                      <option>Select subject</option>
                      <option value="Theory" >Theory</option>
                     <option value="Practical" >Practical</option>
                     </select>  
                    
                    </td>
                    </tr>
                    <tr><td>
                    Status :
                    <select
                    
                      value={status}
                    onChange={(s) => { setStatus(s.target.value);}}
                     >
                  <option>Select</option>
                  <option value="passed" >Passed</option>
                 <option value="failed" >Failed</option>
                 </select>  
                </td>
                
                 
                
                
                    <td>
                    Marks :
                    <input
                        type="text"
                        
                        id="marks"
                        value={marks}
                        onChange={(s) => setMarks(s.target.value)}
                        placeholder="Enter Marks"
                    />
                    </td>
                    </tr>
                   

                    <tr><td colSpan="3">Academic year:
                    <select
                
                      value={session}
                    onChange={(s) => { setSession(s.target.value);}}>
                   <option>select status</option>
                    <option value="2021-2022">2021-2022</option>
                 <option value="2022-2023">2022-2023</option>
                 <option value="2023-2024">2023-2024</option>
                 </select>  
                </td>
                    
                    </tr>
            <tr><td colSpan="3">
                <div align="center">
                    <button type="submit"onClick={(s) =>( saveResult(s))} className="btn btn-primary" >Save</button>  
                    <Link to={`/admin/view`}>
                    <button type="button" className="btn btn-primary" style={{ marginLeft: '.5rem' }}>back</button>
                    </Link>
                    </div>
                    </td>
                </tr>
                </tbody>
                </table>

            </form>
            <br/>


            <h2 align="center">Result</h2>
      <hr/>
      <div>
        
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>sid</th>
              <th>class</th>
              <th>subject</th>
              <th>marks</th>
              <th>Exam Name</th>
              <th>Status</th>
              <th>Academic Year</th>
              <th>Actions</th>
               </tr>
          </thead>
          <tbody>
          {
            resultlist.map( resultlist => (
              <tr key={resultlist.sid+resultlist.subject+resultlist.examid+resultlist.session}>
                <td>{ resultlist.sid}</td>
                <td>{ resultlist.classes}</td>
                <td>{ resultlist.subject}</td>
                <td>{ resultlist.marks} </td>
                <td>{resultlist.examid}</td>
                <td>{ resultlist.status}</td>
                <td>{ resultlist.session}</td>
                <td>
                  <Link className="btn btn-info" to={`/admin/resultedit/${resultlist.rid}/${ resultlist.sid}/`}>Update</Link>
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(resultlist.rid);
                    
                  }}>Delete</button>
              
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        
        </div>
        </div>
       
    )
}

export default AddResult;