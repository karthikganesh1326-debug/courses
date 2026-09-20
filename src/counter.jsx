
import { useEffect, useState,useRef } from 'react';



function Counter(){

let [count , setcount] = useState(0);

let refcount = useRef(0)

function buy(){
    //setcount(++count)
    refcount.current++
}

useEffect(()=>{
    console.log(refcount.current)
},[count])


    return(
        <>
            <h1>{refcount.current}</h1>
          
            <button onClick={buy}>buy courses</button>
            <button onClick={()=>{setcount(refcount.current)}} >update</button>
        
        
        </>
    )

}

export default Counter