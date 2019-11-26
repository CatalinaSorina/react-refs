import React from "react";
import AutoFocusTextInput from "./components/AutoFocusTextInput";
import "./App.css";

function App() {
  const handleInputChange = e => {
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <label className="App-label">Should you pass ?</label>
        <AutoFocusTextInput handleInputChange={handleInputChange} />
      </header>
    </div>
  );
}

export default App;
