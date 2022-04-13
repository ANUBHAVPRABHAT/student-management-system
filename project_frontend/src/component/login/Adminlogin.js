import axios from "axios"
import { useState } from "react"
import { Link , useHistory } from "react-router-dom"
import  '../style.css';
import  swal from 'sweetalert';
import {Redirect} from "react-router-dom"



const Signin = () =>{
    
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const history = useHistory()
    

 

    const validateUser = () =>{
        if(username.length === 0){
            alert("enter your username")
        }
        else if(password.length === 0){
            alert("enter your password")
        }
        else{
            const data = {
                "username":username,
                "password":password
            }
            axios.post("http://localhost:8080/api/admins/login", data).then((response)=>{
                console.log(data)
                const result = response.data
                console.log(result)
                if(result.token=== '123456'){
                    swal({
                        title: "Admin loginSuccesfull",
                        text: "You clicked the button!",
                        icon: "success",
                      });           
                        
                        localStorage.setItem("userinfo", result.username )
                        history.push('/admin/view')
                    }
                    })
                    .catch(error=>{
                        console.log(error)
                        swal({
                          title: "invalid username or password",
                          text: "You clicked the button!",
                          icon: "warning",
                        });
                    })
            
            }
        
        }

        if(localStorage.getItem("sid")){
            return( <Redirect to="/student"/> )
            }
        
        else if(localStorage.getItem("userinfo")){
            return( <Redirect to="/admin/view"/> )
            }
            
    return (
      <div className="app">
      <div className="login-form">
        <div className="title">
      <div className="form"  align="center">
            <h1  align="center" >ADMIN LOGIN</h1>
            
            <div className="m">
                <label htmlFor=""className="username">Username</label>
                <input onChange={(event) =>{
                    setUsername(event.target.value)
                }}
                 type="text" className="form-control" placeholder="Enter username" />
            </div>
            <div className="mb-3">
                <label htmlFor="" className="u_password">Password</label>
                <input onChange={(event) =>{
                    setPassword(event.target.value)
                }}
                 type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="mb-3" align="center">
                <button className="btn btn-primary " id="si" onClick={validateUser} >sign in</button>

                

                  
                 </div>
     </div></div></div>   </div>
    )
}


export default Signin 