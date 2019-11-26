import React from "react";

const ThemeButton = ({ changeTheme, theme }) => {
  return (
    <button className={theme} onClick={changeTheme}>
      {theme}
    </button>
  );
};

export default ThemeButton;
