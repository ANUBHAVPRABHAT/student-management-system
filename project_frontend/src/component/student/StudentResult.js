import { useEffect, useState ,useRef} from 'react';
import { Link, useHistory ,useParams} from 'react-router-dom';
import resultService from '../../services/resultservice';
import studentService from '../../services/studentservice';
import ReactToPrint from 'react-to-print';
import {Redirect} from "react-router-dom"

const ResultStudent = () => {

  const [result, setResult] = useState([]);
  const[student,setStudent]=useState('');
  const sid =(localStorage.getItem('sid'));
  const[session,setSession]=useState('');
  
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
  const init1 = () => {
    resultService.examget(sid)
      .then(response => {
        console.log('Printing result data', response.data);
        setResult(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }
  const init2 = () => {
    resultService.session(sid)
      .then(response => {
        console.log('Printing result data', response.data);
        setSession(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }



  useEffect(() => {
  const fetch=  (async ()=>{
    init1();
    init();
    init2();
    })
    fetch();
  }, []);
  const total  = result.reduce(function(_this, val) {
    return _this + val.marks
}, 0);


  const componentRef = useRef();

  const markobtain  = result.reduce(function(_this, val) {
    return _this + val.marks
}, 0);

const totalmark  = result.reduce(function(_this, val) {
  return _this + val.max_mark
}, 0);
const percentage=(markobtain*100)/totalmark;
const roundoffp = percentage.toFixed(2);
 if(!localStorage.getItem("sid")){
  alert("please login first")
  return( <Redirect to="/"/> )
}
  return (
    <div className="container">
    <div align="right">
    <ReactToPrint
        trigger={() => <button >Print this out!</button>}
        content={() => componentRef.current}
      />
      </div>
      <div  ref={componentRef}>
      <div align="center">
      <h2 >Result</h2>
      </div>
      
    <table className="table table-bordered table-striped">
          <thead className="thead-dark" align="left">
            <tr><td colSpan="6"><b>Student Id :</b>{' '}{student.sid} </td></tr>
            <tr><td colSpan="6"><b>Name : </b>{' '}{student.name} </td></tr>
            <tr><td colSpan="6"><b>Class :</b>{' '}{student.classes}</td></tr>
            <tr><td colSpan="6"><b>Session :</b>{' '}{session}</td></tr>
            <tr>
            <th>subject</th>
             <th>Exam Name</th>
             <th>Mark Obtain</th>
             <th>Maximum Mark</th>
             <th>Status</th>
             </tr>
          </thead>
          

          <tbody>
          {
            result.map( result => (
              <tr key={result.sid+result.subject+result.examid+result.session}>
                <td>{ result.subject}</td>
                <td>{result.examid}</td>
                <td>{ result.marks} </td>
                <td>{ result.max_mark} </td>
                <td>{ result.status}</td>
                </tr>
              
            ))

          }
          <tr>
            <td colSpan="5">
              <div align='center'>
                <table border="1"> 
            <tbody>
         <tr>
         <td colSpan="5"><pre>Total marks obtained : {markobtain}   Percentage ={roundoffp}</pre></td>
            
          </tr>
          
         </tbody>
       </table>
       </div>
       </td>
          </tr>
            </tbody>
          
          </table>
      </div>
      <Link className="btn btn-primary mb-2" to={`/student`}>back</Link>{' '}
      <Link to="/"onClick={logout} className="btn btn-primary mb-2">logout</Link>
      <br/>
    </div>
  );
}

export default ResultStudent;
