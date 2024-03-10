import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { IoSunny } from "react-icons/io5";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for dark mode preference
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    // Update dark mode state in local storage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    // Apply dark mode to HTML element
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleDarkMode = () => {
    // Toggle dark mode state
    setDarkMode(!darkMode);
  };

  return (
    <div
      onClick={handleDarkMode}
      className="dark:hover:bg-veryDarkBlue hover:text-veryDarkBlue flex cursor-pointer items-center gap-1 rounded-md p-2 transition hover:bg-slate-100 dark:hover:text-white"
    >
      {darkMode ? (
        <>
          <IoSunny size={25} />
          <p className="font-semibold">Light mode</p>
        </>
      ) : (
        <>
          <MdDarkMode size={25} />
          <p className="font-semibold">Dark mode</p>
        </>
      )}
    </div>
  );
};

export default DarkModeToggle;
