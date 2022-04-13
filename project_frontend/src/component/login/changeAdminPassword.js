import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import adminService from '../../services/adminservice';
import  swal from 'sweetalert';
import {Redirect} from "react-router-dom";
import  '../style.css';

const AdminPassword = () => {
 const[password,setPassword]=useState('');
 const username =(localStorage.getItem('userinfo'));
 const history = useHistory();
 const validateUser = () =>{
  if(password.length <= 3){
      alert("invalid password min 4 charecter")
  }
  else{
      const data = {
          "password":password
      }
      adminService.updatepassword(username,data).then((response)=>{
          console.log(data)
          const result = response.data
          console.log(result)
          swal({
                  title: "Admin password change Succesfull",
                  text: "You clicked the button!",
                  icon: "success",
                });           
                 history.push('/admin/view')
              
              })
              .catch(error=>{
                  console.log(error)
                  swal({
                    title: "invalid password min 4 charecter",
                    text: "You clicked the button!",
                    icon: "warning",
                  });
              })
      
      }
  
  }
  if(!localStorage.getItem("userinfo")){
    alert("please login first")
    return( <Redirect to="/"/> )
  }

return (
<div className="app">
<div className="login-form">
  <div className="title">
<div className="form"  align="center">
      
      
      
      <div className="mb-3">
          <label htmlFor="" className="u_password">Enter new password </label>
          <input onChange={(event) =>{
              setPassword(event.target.value)
          }}
           type="password" className="form-control" placeholder="Enter password" />
      </div>

      <div className="mb-3" align="center">
          <button className="btn btn-primary " id="si" onClick={validateUser} >save</button>
          <Link to='/admin/view'>
          <button type="button" className="btn btn-primary" style={{ marginLeft: '.5rem' }}>back</button>
          </Link>
        

          

            
           </div>
</div></div></div>   </div>
)
}
export default AdminPassword;
