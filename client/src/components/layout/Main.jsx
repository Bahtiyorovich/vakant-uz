
import { Route, Routes } from "react-router-dom"
import {AllVakants, Categories, Footer, Settings} from "../"
import { useTheme } from "../../helpers/dark-mode"

const Main = () => {

  const { darkMode } = useTheme();

  return (
    <div id="style-4" className={darkMode 
      ? "p-8 bg-gray-100 overflow-y-auto h-[90vh] gap-4" 
      : "p-8 bg-slate-900 overflow-y-auto h-[90vh] gap-4"}>
      <Routes>
        <Route path="/" element={<AllVakants/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default Main