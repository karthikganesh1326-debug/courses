import js from './assets/jss.webp'
import gj from './assets/gojo.webp'
import { useEffect, useState } from 'react';
import {  useNavigate } from "react-router-dom";






function Course({name, price, image=js,id,deletecourse}) {

const courseclick = useNavigate(); 
    let data = "React-javascript";


let [enroll , setenroll] = useState(false) 

 let [aply , aplydic] = useState(false)
  let [prices , setprice] = useState(price)


  useEffect(()=>{
    console.log("course page" )
  },[])


    function enrollbtn(){   
        let result= confirm("are you intrested to buy this course")
         setenroll(result);
        
    }

    function discbtn(){
        
        let result = confirm("are you sure")
        if(result){
        setprice(price-67)
        aplydic(true)
        }
    }


    function cancel(){
        confirm("are you sure about that no refunds thoo")
            setenroll(false)
        
    }
    
   
    return(

      

        name && <div className="box1" onClick={()=>{courseclick('/details/'+id)}}>
         <img src={image} alt="" />
        <h2>{name}</h2>
        <p>{prices}</p>
       {!enroll && <button onClick={()=>enrollbtn()}>Enroll</button>}

       {!aply&& !enroll&&< button onClick={()=>discbtn()}>apply discount</button>}

        <p>{enroll ? (
            <>purchased
            <button onClick={()=>cancel()}>cancel</button>
            </>) : "avilable" }</p>
        <button onClick={()=>deletecourse(id)}>delete</button>    
        </div>
     
    )
}







export default Course