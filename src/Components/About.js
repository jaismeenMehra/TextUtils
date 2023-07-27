import React,{useState} from "react";

export default function About() {

  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const [innerStyle, setInnerStyle] = useState();

  const [btnText,setBtnText] = useState("Enable dark mode");


  const toggleStyle =()=>{
    if(myStyle.color ==='black'){
      setMyStyle({
        color: '#FFFFFF',
        backgroundColor: '#121212',
      })

      setInnerStyle({
        color: 'white',
        backgroundColor: 'rgb(127, 127, 127)'
      })



      setBtnText("Enable light mode");
    }

    else{
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      })

      setInnerStyle({
        color: 'black',
        backgroundColor: 'white'
      })

      setBtnText("Enable dark mode");
    }
  }

  return (
    
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item"  style={innerStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={innerStyle}
              >
              Contact Us
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            >
            <div className="accordion-body">
              Contact Us through form mentioned in the website itself or drop us a mail on textUtils123@gmail.com.
              For further more details you can connect with us Social Media Platforms.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={innerStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={innerStyle}
              >
              Available Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            >
            <div className="accordion-body">
              TextUtils is providing different feature to analyze and optimize text. Try our features such as :
              text to voice, Lower Case to Upper Case and many maore.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={innerStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={innerStyle}
              >
              Subscribe to our Blogs
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            >
            <div className="accordion-body">
              Subscribe to our blogs website to stay updated with latest technologies and to explore more about different tech stacks. We also provide study material  in an organized way for proper placement preparation.
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary my-3"  onClick={toggleStyle}>{btnText}</button>
    </div>
    
  );
}
