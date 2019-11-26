import React from "react";
import AutoFocusTextInput from "./components/AutoFocusTextInput";
import JokeHolder from "./components/JokeHolder";
import ErrorMessage from "./components/ErrorMessage";
import axios from "axios";
import { PacmanLoader } from "react-spinners";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Should you pass ?",
      joke: null,
      jokeSubject: "",
      fetching: false,
      errorMessage: ""
    };
  }

  handleInput = e => {
    if (e.key === "Enter") {
      e.target.value = "";
      this.setState({ fetching: true });

      axios
        .get("https://icanhazdadjoke.com/slack")
        .then(res => {
          this.setState({
            status: "PASSED",
            joke: res.data.attachments[0].text,
            jokeSubject: "Hear this:",
            fetching: false,
            errorMessage: ""
          });
        })
        .catch(error => this.setState({ errorMessage: error.message }));
    }
  };

  render() {
    return (
      <div className="App">
        <>
          <label className="App-label">{this.state.status}</label>

          {this.state.status === "Should you pass ?" && (
            <AutoFocusTextInput handleInput={this.handleInput} />
          )}

          {this.state.fetching && <PacmanLoader color={"#09d3ac"} />}

          {this.state.status === "PASSED" && (
            <>
              <JokeHolder
                jokeSubject={this.state.jokeSubject}
                joke={this.state.joke}
              />
              <button onClick={this.handleInput}>one more joke</button>
            </>
          )}

          {this.state.errorMessage !== "" && (
            <ErrorMessage message={this.state.errorMessage} />
          )}
        </>
      </div>
    );
  }
}

export default App;
