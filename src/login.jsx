import { useState } from "react"

import { Link,useNavigate } from "react-router-dom";
import Course from "./Course";
import Courselist from "./Courselist";

function Login() {

const [psw1 , setpsw1] = useState("");
const [psw2 , setpsw2] = useState("");

const navbtn = useNavigate();

const[match , setmatch] = useState(false)



function getpass1(event){
    setpsw1(event.target.value)
    console.log(psw1)
   
}

function getpass2(event){
    setpsw2(event.target.value)
  

    if(psw1===event.target.value){
       
        setmatch(true)
    }
    else{
        
        setmatch(false)
    }
    
}

function submitbtn(event){

    event.preventDefault();

    if( psw1 && psw2 &&psw1===psw2 )
     navbtn( '/courses')

    else if(psw1 != psw2){
        alert("invalid password check it ")
    }
    
    
}



return(
    <>

         <form className="container">
            <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"/>
                   
            </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={psw1} onChange={getpass1} className="form-control" id="exampleInputPassword1"/>
                </div>

                 <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Re-enter-Password</label>
                    <input type="password" value={psw2} onChange={getpass2} className="form-control" id="exampleInputPassword1"/>
                </div>

              {psw2 && <p >{match ? "Password matches" : "Password does not match"}</p>}
             
              

                <div className="mb-3 htmlform-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" onClick={submitbtn} className="btn btn-primary">Submit</button>

              
</form>

</>
)}

export default Login
