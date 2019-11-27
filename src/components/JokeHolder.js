import React from "react";
import "./JokeHolder.css";

const JokeHolder = React.forwardRef(({ jokeTitle, joke }, ref) => {
  return (
    <div className="Jokes" ref={ref}>
      <label>{jokeTitle}</label>
      <p>{joke}</p>
    </div>
  );
});

export default JokeHolder;
