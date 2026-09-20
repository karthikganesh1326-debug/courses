import { useParams } from "react-router-dom"
import Course from "./Course"
import { useState } from "react";


function Details(){

let {id} = useParams();

const [post , setpost] = useState([null]);



 fetch('http://localhost:3000/courselist/'+id)
    .then((Response)=>{
        if(!Response.ok){
            throw Error('could not fetch the data from server')
        } 
    return Response.json()}
    )
    .then(
        (data)=>{   
           setpost(data)
        }   
    )
    .catch((error)=>{
        console.log(error.message)
        seterror(error)
        
    })  


    return(
        <p>
         {post.name}
        </p>
    )
}

export default Details