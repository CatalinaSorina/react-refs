import React from "react";
import Joke from "./Joke";

const JokeHolder = ({ jokeSubject, joke }) => {
  return (
    <>
      <label>{jokeSubject}</label>
      <Joke joke={joke} />
    </>
  );
};

export default JokeHolder;
