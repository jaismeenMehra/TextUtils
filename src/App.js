import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react';



function App() {

  const [mode, setMode] =useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(()=>{
        setAlert(null);
      },2000);
  }


  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ="rgb(135,135,135)";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled successfully.","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ="white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled successfully.","success");

    }
  }

  return (
    <>
      {/* props */}
      <Navbar title="TextUtils" about="About Us"   mode ={mode}   toggleMode={toggleMode} />
      {/* <Navbar/> */}
      <Alert alert={alert}/>

        <div className="container">
          <TextForm heading="Enter your text below" mode={mode}  showAlert = {showAlert} />
          <About mode={mode}/>
        </div>

    </>
  );
}
export default App;
