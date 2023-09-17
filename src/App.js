import { useState } from "react";
import "./App.css";
import React from "react";
const messages = [
  "Code and Decode 🧑‍💻",
  "I Love JavaScript ❤️",
  "React is awesome 🥳",
];

function App() {
  //let step = 1;
  return (
    <>
      <Steps />
    </>
  );
}
function Steps() {
  const [step, Setstep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function previousHandler() {
    if (step > 1) {
      Setstep((s) => s - 1);
    }
  }
  function hideOpenHandler() {
    setIsOpen(!isOpen);
    // isOpen(false);
  }
  // setIsOpen(false);
  function nextHandler() {
    if (step < 3) {
      Setstep((s) => s + 1);
    }
  }
  return (
    <>
      <button className="close" onClick={hideOpenHandler}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={previousHandler}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={nextHandler}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
