import { useEffect, useState } from "react";
import NetflixSeries from "./components/NetflixSeries"

function App() {

  const [theme, setTheme] = useState("light-theme")

  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme('light-theme') : setTheme('dark-theme');
   }

  useEffect(() =>{
    document.body.className = theme;
  },[theme]);


  return (
    <>
    <h1>Top Netflix Series Cards</h1>
    <button className="btn" onClick={() => toggleTheme()}>
      {theme === "dark-theme" ? "Light Mode" : "Dark Mode"}
    </button>
    <NetflixSeries/>
    </>
  )

}

export default App;