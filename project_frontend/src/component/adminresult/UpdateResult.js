import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import resultService from "../../services/resultservice";
import { MDBInput } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import {Redirect} from "react-router-dom";


const   UpdateResult = () => {
    
    const[classes,setClasses]=useState('');
    const[subject,setSubject]=useState('');
    const[sid, setSid] = useState('');
    const[examid,setExamid]=useState('');
    const[session, setSession] = useState('');
    const[status,setStatus]=useState('');
    const[marks, setMarks] = useState('');
    
    const history = useHistory();
    const {rid} = useParams();


    const saveResult = (s) => {
        s.preventDefault();
        
        const result = {sid,classes,subject,examid,marks,rid,status,session};
        if (rid) {
            //update
            resultService.update(result)
                .then(response => {
                    console.log('Result data updated successfully', response.data);
                    history.push(`/admin/resultadd/${sid}`);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } 
        
    }
    
    useEffect(() => {
        if (rid) {
            resultService.getByID(rid)
                .then(result => {
                    setClasses(result.data.classes);
                    setStatus(result.data.status);
                    setSubject(result.data.subject);
                    setExamid(result.data.examid);
                    setSid(result.data.sid);
                    setMarks(result.data.marks);
                    setSession(result.data.session);
                   
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    if(!localStorage.getItem("userinfo")){
        alert("please login first")
        return( <Redirect to="/"/> )
    }
    return(
        <div className="container" >
            <h2 align="center">update marks</h2>
            
            <form>
            <div className="form-check-label">
                  Student Id : <input disabled
                        type="text" 
                        className="form-control col-4"
                        id="sid"
                        value={sid}
                        onChange={(s) => setSid(s.target.value)}
                        placeholder="Enter Student ID"
                        
                    />
                    <br/>
                    </div>
            
            <div className="form-check-label">
                Class :
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="classes"
                        value={classes}
                        onChange={(s) => setClasses(s.target.value)}
                        placeholder="Enter Class"
                    />
                    <br/>
                    </div>
                    <div className="form-check-label">
                Subject :
                    <input disabled
                        type="text" 
                        className="form-control col-4"
                        id="subject"
                        value={subject}
                        onChange={(s) => setSubject(s.target.value)}
                        placeholder="Enter Class"
                    />
                    <br/>
                    </div>
                    <div className="form-check-label">
                    Exam id:
                    <input disabled
                        type="text"
                        className="form-control col-4"
                        id="examid"
                        value={examid}
                        onChange={(s) => setExamid(s.target.value)}
                        placeholder="Enter ExamId"
                    />
                    <br/>
                    </div>
                <div className="form-check-label">
                    Status :
                    <select
                     className="form-control col-4"
                      value={status}
                    onChange={(s) => { setStatus(s.target.value);}}
                     >
                  <option>Select</option>
                  <option value="passed" >Passed</option>
                 <option value="failed" >Failed</option>
                 </select>  
                <br/>
                </div>
                 
                
                
                    <div className="form-check-label">
                    Marks
                    <input
                        type="text"
                        className="form-control col-4"
                        id="marks"
                        value={marks}
                        onChange={(s) => setMarks(s.target.value)}
                        placeholder="Enter Marks"
                    />
                    </div>
                   

                    <div className="form-check-label">
                     Academic year:
                    <select disabled
                     className="form-control col-4"
                      value={session}
                    onChange={(s) => { setSession(s.target.value);}}>
                   <option>select status</option>
                    <option value="2021-2022">2021-2022</option>
                 <option value="2022-2023">2022-2023</option>
                 <option value="2023-2024">2023-2024</option>
                 </select>  
                <br/>
                </div>
                    
                <div align="center">
                    <button type="submit"onClick={(s) => saveResult(s)} className="btn btn-primary" >Save</button>  
                    <Link to={`/admin/resultadd/${sid}`}>
                    <button type="button" className="btn btn-primary" style={{ marginLeft: '.5rem' }}>back</button>
                    </Link>
                </div>
            </form>
            <br/>
            
        </div>
       
    )
}

export default UpdateResult;