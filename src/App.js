import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react';



function App() {

  const [mode, setMode] =useState('light');

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ="rgb(135,135,135)";
      document.body.style.color = "white";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ="white";
      document.body.style.color = "black";
    }
  }

  return (
    <>
      {/* props */}
      <Navbar title="TextUtils" about="About Us"   mode ={mode}   toggleMode={toggleMode} />
      {/* <Navbar/> */}
      <div className="bg">
        <div className="container">
          <TextForm heading="Enter your text below" mode={mode} />
          <About mode={mode}/>
        </div>
      </div>
    </>
  );
}
export default App;
