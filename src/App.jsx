
import './App.css'
import Navbar from './Navbar.jsx';
import Course from './Course.jsx';
import Courselist from './Courselist.jsx';
import Footer from './Footer.jsx';
import Login from './login'
import Details from './details.jsx'
import Count from './counter.jsx'
import {createBrowserRouter , RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([

  {
    path : '/',
    element : <Login/>
  },
  {
    path : '/courses',
    element : < Courselist/>
  },
  {
    path : '/counter',
    element : <Count/>
  },
  {
    path : '/details/:id',
    element : <Details/>
  }

])


const sample = "cheap and best";

function App() {
  return (
    <>
        <RouterProvider router={router}/>


    </>
  );
}

export default App

