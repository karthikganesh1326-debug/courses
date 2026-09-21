import { useEffect, useState } from 'react'

const usefetch = ()=>{
    
    const [courselist, setcourselist] = useState([])

      const [loading, setloading] = useState(true)

    const [error, seterror] = useState(null)

    const controller = new AbortController();

    const signal = controller.signal


useEffect(  ()=>{ 
    setTimeout(() => {
        fetch('http://localhost:3000/courselist',{signal})
    .then((Response)=>{
        if(!Response.ok){
            throw Error('could not fetch the data from server')
        } 
    return Response.json()}
    )
    .then(
        (data)=>{   
            console.log(data)
            setcourselist(data)
            setloading(false)
        }   
    )
    .catch((error)=>{
        console.log(error.message)
        seterror(error)
        setloading(false)
    })     
    }, 200); 

        return (()=>{
        console.log("cleaning-up")
        controller.abort();
    })

},[])


return [courselist ,setcourselist, loading , error];
}

export default usefetch

//npx json-server --watch data/tempdata.json --port 3000 --static ./data
