
import { Route, Routes } from "react-router-dom"
import {AllVakants, Categories, Settings} from "../"
import { useTheme } from "../../helpers/dark-mode"

const Main = () => {

  const { darkMode } = useTheme();

  return (
    <div className={darkMode 
      ? "p-8 bg-gray-100 overflow-y-auto h-[90vh]" 
      : "p-8 bg-blue-gray-700 overflow-y-auto h-[90vh]"}>
      <Routes>
        <Route path="/" element={<AllVakants/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </div>
  )
}

export default Main