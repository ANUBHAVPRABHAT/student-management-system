import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import studentService from "../../services/studentservice";
import { MDBInput } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import  swal from 'sweetalert';
import {Redirect} from "react-router-dom";


const AddStudent = () => {
    const[classes, setClasses] = useState('');
    const[name, setName] = useState('');
    const[addmissiondate,setAddmissionDate]=useState('');
    const[father_name,setFatherName]=useState('');
    const[gender, setGender] = useState('');
    const[dob, setDob] = useState('');
    const[emailid,setEmail]=useState('');
    const[mobile_no,setMobileNo]=useState('');
    const[address, setAddress] = useState('');
    const[pincode, setPincode] = useState('');
    const[status,setStatus]=useState('');
    const[password,setPassword]=useState('');
    const history = useHistory();
    
    const {sid} = useParams();

    const saveStudent = (s) => {
        s.preventDefault();
        
        const student = {classes,name,addmissiondate,father_name,gender,dob,emailid,mobile_no,address,password,status,pincode,sid};
        if (sid) {
            //update
            studentService.update(student)
                .then(response => {
                    console.log('Student data updated successfully', response.data);
                    swal({
                        title: "Student detail updated Succesfull",
                        text: "You clicked the button!",
                        icon: "success",
                      });
                    history.push('/admin/view');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                    swal({
                        title: "Enter valid student detail",
                        text: "You clicked the button!",
                        icon: "warning",
                      });
                
                }) 
        } else {
            //create
            studentService.create(student)
            .then(response => {
                console.log("student added successfully", response.data);
                swal({
                    title: "Student added Succesfull",
                    text: "You clicked the button!",
                    icon: "success",
                  });
                history.push("/admin/view");
            })
            .catch(error => {
                console.log('something went wroing', error);
                swal({
                    title: "Enter valid student detail",
                    text: "You clicked the button!",
                    icon: "warning",
                  });
            })
        }
    }

    useEffect(() => {
        if (sid) {
            studentService.get(sid)
                .then(student => {
                    setClasses(student.data.classes);
                    setName(student.data.name);
                    setAddmissionDate(student.data.addmissiondate);
                    setFatherName(student.data.father_name);
                    setGender(student.data.gender);
                    setDob(student.data.dob);
                    setMobileNo(student.data.mobile_no);
                    setEmail(student.data.emailid);
                    setAddress(student.data.address);
                    setPincode(student.data.pincode);
                    setPassword(student.data.password);
                    setStatus(student.data.status);
                   
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
        <div  >
            <h2 align="center">Admission Form</h2>
            
            <form>
            <table border="1" className="table table-bordered table-striped">
    <tbody>
   <tr>
     <td>
       Name :
     </td>
     <td colSpan="3">
     <input 
                        type="text" 
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(s) => setName(s.target.value)}
                        placeholder="Enter Name"
                    />
       </td>
   </tr>
   <tr>
    <td>Class : </td>
    <td> <input  
                        type="text" 
                        className="form-control col-4"
                        id="classes"
                        value={classes}
                        onChange={(s) => setClasses(s.target.value)}
                        placeholder="Enter Class"
                    /></td>
    <td>
      Admission Date :
    </td>
    <td> <input 
                        type="date" 
                        className="form-control col-4"
                        id="admissiondate"
                        value={addmissiondate}
                        onChange={(s) => setAddmissionDate(s.target.value)}
                        placeholder="Enter Admission Date"
                    /></td>
   </tr>
   <tr>
    <td>Gender : </td>
    <td> <select
                     className="form-control col-4"
                      value={gender}
                    onChange={(s) => { setGender(s.target.value);}}
                     >
                  <option >Select Gender</option>
                  <option value="male" >Male</option>
                 <option value="female" >Female</option>
                 </select> </td>
    <td>
       Date of Birth :
    </td>
    <td> <input 
                        type="date" 
                        className="form-control col-4"
                        id="dob"
                        value={dob}
                        onChange={(s) => setDob(s.target.value)}
                        placeholder="dob"
                    /></td>
   </tr>
   <tr>
    <td>Father Name : </td>
    <td> <input 
                        type="text" 
                        className="form-control col-4"
                        id="fathername"
                        value={father_name}
                        onChange={(s) => setFatherName(s.target.value)}
                        placeholder="Enter Fathername"
                    /></td>
    <td>
      Mobile No :
    </td>
    <td><input
                        type="text"
                        className="form-control col-4"
                        id="mobile"
                        value={mobile_no}
                        onChange={(s) => setMobileNo(s.target.value)}
                        placeholder="Enter Mobile No"
                    /></td>
   </tr>
   <tr>
     <td>Email : </td>
     <td colSpan="3"><input
                        type="text"
                        className="form-control col-4"
                        id="emailid"
                        value={emailid}
                        onChange={(s) => setEmail(s.target.value)}
                        placeholder="Enter Email"
                    /></td>
   </tr>

   <tr>
     <td>Address : </td>
     <td colSpan="3"> <textarea
                        className="form-control col-4"
                        id="address"
                        rows="2"
                        value={address}
                        onChange={(s) => setAddress(s.target.value)}
                        placeholder="Enter Location"
                    /></td>
   </tr>
   <tr>
     <td>pincode : </td>
     <td colSpan="3"><input
                        type="text"
                        className="form-control col-4"
                        id="pincode"
                        value={pincode}
                        onChange={(s) => setPincode(s.target.value)}
                        placeholder="Enter Pincode"
                    /></td>
   </tr>
   <tr>
     <td>password : </td>
     <td colSpan="3"><input
                        type="text"
                        className="form-control col-4"
                        id="password"
                        value={password}
                        onChange={(s) =>(setStatus("active"), setPassword(s.target.value))}
                        placeholder="Enter password"
                    /></td>
   </tr>



  </tbody>
 
 </table>
            
           
                  

                
                <div align="center">
                    <button type="submit"onClick={(s) => saveStudent(s)} className="btn btn-primary" >Save</button>  
                    <Link to='/admin/view'>
                    <button type="button" className="btn btn-primary" style={{ marginLeft: '.5rem' }}>back</button>
                    </Link>
                </div>
            </form>
            <br/>
            
        </div>
       
    )
}

export default AddStudent;
