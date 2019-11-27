import React from "react";
import AutoFocusTextInput from "./AutoFocusTextInput";
import JokeHolder from "./JokeHolder";
import ErrorMessage from "./ErrorMessage";
import axios from "axios";
import { PacmanLoader } from "react-spinners";
import "./Container.css";

class ComponentsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Should you pass ?",
      jokeTitle: "",
      joke: null,
      fetching: false,
      errorMessage: ""
    };
    this.jokeHolder = React.createRef();
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
            joke: res.data.attachments[0].text,
            fetching: false,
            errorMessage: ""
          });

          //=======GIVE NEW JOKE COLOR======\\
          let jokeHolderComponent = this.jokeHolder.current;
          if (jokeHolderComponent) {
            let newColor = this.getRandomColor();
            console.log(jokeHolderComponent.style.color);
            jokeHolderComponent.style.color =
              jokeHolderComponent.style.color === newColor
                ? this.getRandomColor()
                : newColor;
          }
          //==================================//
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

  getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  render() {
    return (
      <div className="Container">
        <label className="Container-label">{this.state.status}</label>

        {this.state.status === "Should you pass ?" && (
          <AutoFocusTextInput handleInput={this.handleInput} />
        )}

        {this.state.fetching && (
          <>
            <br></br>
            <PacmanLoader color={"#09d3ac"} />
            <br></br>
          </>
        )}

        {this.state.status === "YOU PASSED" && (
          <>
            <JokeHolder
              jokeTitle={this.state.jokeTitle}
              joke={this.state.joke}
              ref={this.jokeHolder}
            />
            <button className="Container-button" onClick={this.handleInput}>
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

export default ComponentsContainer;
