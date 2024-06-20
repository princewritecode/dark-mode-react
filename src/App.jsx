import React from "react";
import Navbar from "../src/component/Navbar";
import Main from "../src/component/Main";
export default function App()
{

  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode()
  {
    setDarkMode((prevMode) => { return !prevMode; });
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}