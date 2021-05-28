import React from "react";
import { ToggleButton } from "./Toggle.styles";
import { FaSun, FaMoon } from "react-icons/fa";

const Toggle = ({ theme, setTheme }) => {
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ToggleButton onClick={changeTheme}>
      {theme === "dark" ? (
        <FaSun size={30} />
      ) : (
        <FaMoon color='yellow' size={30} />
      )}
    </ToggleButton>
  );
};

export default Toggle;
