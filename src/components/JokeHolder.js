import React from "react";
import Joke from "./Joke";
import "./JokeHolder.css";

const JokeHolder = ({ jokeTitle, joke }) => {
  return (
    <div className="Jokes">
      <label>{jokeTitle}</label>
      <Joke joke={joke} />
    </div>
  );
};

export default JokeHolder;
