import React from "react";
import ComponentsContainer from "./components/ComponentsContainer";
import ThemeButtonHolder from "./components/ThemeButtonHolder";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "white"
    };
  }

  changeTheme = button => {
    const newTheme = button.target.textContent;
    const theme = newTheme === "light" ? "white" : "black";
    this.setState({ theme: theme });
  };

  render() {
    return (
      <div className="App" style={{ background: this.state.theme }}>
        <ThemeButtonHolder
          changeTheme={this.changeTheme}
          lightTheme={"light"}
          darkTheme={"dark"}
        />
        <ComponentsContainer theme={this.state.theme} />
      </div>
    );
  }
}

export default App;
