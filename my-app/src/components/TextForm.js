import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("button clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    console.log("button clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1> {/* heading prop app bata taaneko */}
        <div className="mb-3">
          <textarea
            value={text}
            className="form-control"
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter text here"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          convert to Lowercase
        </button>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words , {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
      </div>
      <h1>Preview</h1>
      <p>{text}</p>
    </>
  );
}
