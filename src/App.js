import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Alert from './component/Alert';

function App() {
  const[mode,setMode]=useState("light");
  const[notmode,setNotmode]=useState("dark");
  const[alert,setAlert]=useState(null);

  const showAlert=(type,message)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
      
    },1500);
    
  }
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      setNotmode("light");
      document.body.style.backgroundColor='#0B3B5A';
     showAlert("success","Dark mode has been enabled");
     document.title="Text-Utils:Dark Mode"
    }
    else{
      setMode("light");
      setNotmode("dark");
      document.body.style.backgroundColor='white';
      showAlert("success","Light mode has been enabled");
      document.title="Text-Utils:Light Mode"




    }
  }

  return (
    <>
      <BrowserRouter>
    <Navbar mode={mode} notmode={notmode} toggleMode={toggleMode}/>
    <Alert alert={alert}></Alert>
    <div className="container">
   
      <Routes>
      <Route path="/about" element={<About mode={mode} notmode={notmode}/>} />
        
        <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} notmode={notmode}  heading="Enter your text here"  />} />
      </Routes>
  
    </div>
    </BrowserRouter>
    
    
   
    
   
    
    </>
   
  );
}

export default App;
