import React from "react";
import AutoFocusTextInput from "./components/AutoFocusTextInput";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <label className="App-label">Should you pass ?</label>
        <AutoFocusTextInput />
      </header>
    </div>
  );
}

export default App;
