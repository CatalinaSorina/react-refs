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
      jokeTitle: "",
      joke: null,
      fetching: false,
      errorMessage: ""
    };
  }

  handleInput = e => {
    if (e.key === "Enter" || !e.key) {
      e.key ? (e.target.value = "") : console.log("clicked");
      this.setState({ fetching: true, errorMessage: "" });

      axios
        .get("https://icanhazdadjoke.com/slack")
        .then(res => {
          this.setState({
            status: "YOU PASSED",
            jokeTitle: "Read this:",
            joke: `   ${res.data.attachments[0].text}`,
            fetching: false,
            errorMessage: ""
          });
        })
        .catch(error =>
          this.setState({
            status: "ERROR",
            fetching: false,
            errorMessage: error.message
          })
        );
    }
  };

  render() {
    return (
      <div className="App">
        <label className="App-label">{this.state.status}</label>

        {this.state.status === "Should you pass ?" && (
          <AutoFocusTextInput handleInput={this.handleInput} />
        )}

        {this.state.fetching && <PacmanLoader color={"#09d3ac"} />}

        {this.state.status === "YOU PASSED" && (
          <>
            <JokeHolder
              jokeTitle={this.state.jokeTitle}
              joke={this.state.joke}
            />
            <button className="App-button" onClick={this.handleInput}>
              one more joke
            </button>
          </>
        )}

        {this.state.errorMessage !== "" && (
          <ErrorMessage message={this.state.errorMessage} />
        )}
      </div>
    );
  }
}

export default App;
