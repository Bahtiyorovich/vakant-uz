
import { regions, vakantInfo } from "../../constants/data";
import { TbCategory } from "react-icons/tb";
import { SimplePagination } from "./pagination";
import Vakant from "./vakant";

const AllVakants = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-4 h-[80vh] p-4">
      <div className="grid col-span-4 row-span-6 overflow-auto gap-4">
        
       {vakantInfo.map(vakant => (
          <Vakant item={vakant} key={vakant.title}/>
       ))}

        <SimplePagination/>

      </div>
      <div className="bg-white shadow-lg rounded-lg col-span-2 row-span-2  p-4">
        <h2 className="font-semibold flex items-center justify-between text-slate-600">Categories <TbCategory /></h2>
        <form className="flex flex-wrap gap-2 py-4">
          <select className="border border-slate-200 rounded-md p-2 outline-indigo-500">
            <option value="" selected>Viloyatlar</option>
          {
            regions.map((item) => (
                <option value={`${item}`} key={item}>{item}</option>
                ))
              }
          </select>
          
        </form>
      </div>
    </div>
  )
}

export default AllVakants;