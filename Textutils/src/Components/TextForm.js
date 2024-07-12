import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, settext] = useState("");

  const handleUpClick = () => {
    console.log("hii iam there " + Text);
    let newText = Text.toUpperCase();
    settext(newText);
  };
  const handleCopy = () => {
    console.log("hii iam there " + Text);
    let newtext = document.getElementById("myBox");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);

  };
  const handleClearClick = () => {
    // console.log("hii iam there " + Text);
    let newText = "";
    settext(newText);
  };
  const handleOnchange = (event) => {
    console.log("heheheh");
    settext(event.target.value);
  };


  return (
    <>
      <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnchange}
            id="myBox"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          copy text
        </button>
        <div className="container">
          <h1>Your text summarry</h1>
          <p>{Text.split(" ").length} words and {Text.length} Characater </p>
        </div>
      </div>
    </>
  );
}
