import React from "react";
import ThemeButton from "./ThemeButton";
import "./ThemeButtonHolder.css";

const ThemeButtonHolder = ({ changeTheme, lightTheme, darkTheme }) => {
  return (
    <div className="ButtonHolder">
      <ThemeButton changeTheme={changeTheme} theme={lightTheme} />
      <ThemeButton changeTheme={changeTheme} theme={darkTheme} />
    </div>
  );
};

export default ThemeButtonHolder;
