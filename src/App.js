import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";



import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';


export default function App () {
    return (
      <div>
      <Navbar/>
     <News pageSize={6}/>
      </div>
    )
  }




//creat spinner gif online ::    Ajaxload.info