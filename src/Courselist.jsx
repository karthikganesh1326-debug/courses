import gjj from '/data/assets/loaderr.gif'
import Course from './Course'
import usefetch from './usefetch'
import {  Link,useNavigate } from "react-router-dom";


function Courselist(){

const [courselist ,setcourselist, loading , error]  = usefetch()


if(loading){
    return<>
   < img src={gjj} alt="" />
  
    </>
}




 if(error){
     return<>
     
     <h1>"{error.message}"</h1></>
  
 }

courselist.sort((x,y)=>  x.price - y.price)


function deletebyid(id){
   const coursefilter=courselist.filter((crs)=> crs.id !=id)
    setcourselist(coursefilter)
}

const courses = courselist.map((crs)=>
      <Course  
        key={crs.id}
        id={crs.id}
    name={crs.name }
      price={crs.price}
      image={crs.image}
      deletecourse={deletebyid}
      
    />
)


    return(
<>
{courses}
{ <Link className="btn btn-danger" to='/'>log-out</Link>}
{ <Link className="btn btn-danger" to='/counter'>buy</Link>}
</>
    )
}

export default Courselist

