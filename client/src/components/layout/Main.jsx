
import { Route, Routes } from "react-router-dom"
import {AllVakants, Categories, Settings} from "../"

const Main = () => {
  return (
    <div className="p-8 bg-slate-100 overflow-y-auto h-[90vh]">
      <Routes>
        <Route path="/" element={<AllVakants/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </div>
  )
}

export default Main