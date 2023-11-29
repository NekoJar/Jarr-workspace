import React from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "./context/DarkModeContext";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className={
        isDarkMode
          ? "text-neutral-300 hover:text-red-200 transition-colors block"
          : "text-neutral-700 hover:text-red-600 transition-colors block"
      }
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </button>
  );
};

export default DarkModeToggle;
