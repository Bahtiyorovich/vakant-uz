import { useContext, useState } from "react";
import { Main, Navbar, Sidebar, } from "./components"
import { ThemeContext } from "./helpers/dark-mode";

const App = () => {

  const { darkMode } = useContext(ThemeContext)
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuActive = () => {
    setMenuActive(menuActive => !menuActive)
  }

  return (
    <div className={darkMode ? "flex w-full h-screen bg-white ": "flex w-full h-screen bg-slate-800"}>
        <Sidebar menuActive={menuActive} darkMode={darkMode}/>
      <div className="h-screen w-full">
        <Navbar menuActive={menuActive} handleMenuActive={handleMenuActive}/>
        <div className="main"></div>
      </div>
    </div>
  )
}

export default App