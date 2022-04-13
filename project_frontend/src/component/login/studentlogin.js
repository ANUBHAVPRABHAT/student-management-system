import axios from "axios"
import { useState } from "react"
import { Link , useHistory } from "react-router-dom"
import  '../style.css';
import {Redirect} from "react-router-dom";
import  swal from 'sweetalert';



const Signin = () =>{
    
    const [sid , setSid] = useState('')
    const [password , setPassword] = useState('')

    const history = useHistory()
    

 

    const validateUser = () =>{
        if(sid.length === 0){
            alert("enter your Student Id")
        }
        else if(password.length === 0){
            alert("enter your password")
        }
        else{
            const data = {
                "sid":sid,
                "password":password
            }
            axios.post("http://localhost:8080/api/student/login", data).then((response)=>{
                console.log(data)
                const result = response.data
                console.log(result)
                if(result.token === '123456'){
                               
                    swal({
                        title: "Student "+result.name+" LoginSuccesfull",
                        text: "You clicked the button!",
                        icon: "success",
                      });   
                        localStorage.setItem("sid",result.sid)
                        history.push('/student')

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
            <h1  align="center" >STUDENT LOGIN</h1>
            
            <div className="m">
                <label htmlFor=""className="username">Username</label>
                <input onChange={(event) =>{
                    setSid(event.target.value)
                }}
                 type="text" className="form-control" placeholder="Enter student id" />
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