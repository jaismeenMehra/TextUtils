import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!","success");
  };
  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!","success");
  };
  

  const handleNarrate = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }


  const handleClear=()=>{
    setText("");
    props.showAlert("Text has been cleared!","warning");
  }

  const handleCopy =()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!","success");
  }


  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed!","success");

  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  // text = "new text"; wrong way to update text
  // setText("new text");


  const getWordCount = () => {
    if (!text.trim()) {
      return 0; 
    }
    return text.trim().split(/\s+/).length;
  };

  return (
    <>
      <div className="container">
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control text-${props.mode==='light'? 'dark': 'light'} bg-${props.mode}`}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          />
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>
          Convert to lower case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleNarrate}>
          Narrate
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-2">
        <hr />
        <h3>Text Summary</h3>
        <p>{getWordCount()} words and {text.length} characters.</p>
        <p>{(0.003* text.split(" ").length)} Minutes Read</p>
        <hr />
        <h3>Preview</h3>
        <p>{text}</p>
        <hr />
      </div>
    </>
  );
}
