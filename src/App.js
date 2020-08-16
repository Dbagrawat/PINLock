import React, { useState } from "react";
import "./App.css";
import Keypad from "./components/keyPad";
import Passcode from "./components/passcode";
import { properties } from "./properties";

function App() {
  const [unlock, setUnlcok] = useState(false);
  const [errorCount, setErrorCount] = useState([]);
  const [passcode, setPasscode] = useState([]);
  const [minDigit, setMinDigit] = useState(false);

  const handleClear = () => {
    setUnlcok(0);
    setPasscode([]);
    setErrorCount([]);
    setMinDigit(false);
  };

  const handleUnlock = () => {
    let pass = passcode.join("");
    if (passcode.length === "" || passcode.length < 4) {
      setMinDigit(true);
    } else {
      if (pass === properties.correctCombination) {
        setUnlcok(true);
        setPasscode([]);
      } else {
        setPasscode([]);
        setErrorCount((prevCount) => prevCount + 1);
      }
    }
  };

  document.onkeypress = function (e) {
    e = e || window.event;
    var charCode = e.charCode || e.keyCode,
      character = String.fromCharCode(charCode);
    setPasscode([...passcode, character]);
    if (charCode === 13) handleUnlock();
  };

  const handleKeypad = (e) => {
    let keyPadValue = e.target.innerHTML;
    if (keyPadValue === properties.clear) {
      handleClear();
    } else if (keyPadValue === properties.unlock) {
      handleUnlock();
    } else {
      setPasscode([...passcode, keyPadValue]);
    }
  };

  return (
    <div className="pinlock-wrapper">
      <h2>{unlock ? properties.unlocked : properties.locked}</h2>
      <Passcode passcode={passcode.join("")} errorCount={errorCount.length} />
      <h4>{minDigit ? "Please enter 4 digit number" : ""}</h4>
      <div>
        {unlock || errorCount.length === 3 ? (
          ""
        ) : (
          <Keypad handleKeypad={handleKeypad} />
        )}
      </div>
    </div>
  );
}

export default App;
