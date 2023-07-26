import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  // text = "new text"; wrong way to update text
  // setText("new text");

  return (
    <>
      <div className="container">
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          />
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick}>
          Convert to lower case
        </button>
      </div>
      <div className="container my-3">
        <hr />
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>{(0.003* text.split(" ").length)} Minutes Read</p>
        <hr />
        <h3>Preview</h3>
        <p>{text}</p>
        <hr />
      </div>
    </>
  );
}
