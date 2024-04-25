import Vakant from "./vakant";
import { useTheme } from "../../helpers/dark-mode";

const AllVakants = () => {
  const {filteredData, searchStr} = useTheme();
  return (
    <div id="style-4" className="grid grid-rows-6 gap-4 h-[90vh] overflow-auto">
      <div className="row-span-6 grid grid-cols-2  gap-4 px-1">
        
       {filteredData.map(vakant => (
          <Vakant item={vakant} str={searchStr} key={vakant.title}/>
       ))}

      </div>
     
    </div>
  )
}

export default AllVakants;