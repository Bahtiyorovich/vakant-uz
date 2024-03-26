import { Logo, User } from "../../assets"
import { IoHomeOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { RiListSettingsLine } from "react-icons/ri";
import { IoPower } from "react-icons/io5";
import { useState } from "react";

const Sidebar = () => {

  const [userAccount, setUserAccount] = useState(true);

  return (
    <div className="w-[270px] h-screen border-r border-slate-700">
      <div className="flex items-center justify-center gap-4 w-full h-20">
        <img src={Logo} alt="" className="w-12 h-12 rounded-full"/>
        <h1 className="text-white font-bold text-2xl">Vakant.uz</h1>
      </div>

      <div className="w-full h-[75%] pl-6 py-12">
        <div className="flex items-center gap-4 text-2xl text-slate-400 hover:bg-slate-700 cursor-pointer p-2">
          <IoHomeOutline /> 
          <p className="text-[16px]">Home</p>
        </div>
        <div className="flex items-center gap-4 text-2xl text-slate-400 hover:bg-slate-700 cursor-pointer p-2">
          <TbCategory /> 
          <p className="text-[16px]">Categories</p>
        </div>
        <div className="flex items-center gap-4 text-2xl text-slate-400 hover:bg-slate-700 cursor-pointer p-2">
          <RiListSettingsLine />
          <p className="text-[16px]">Settings</p>
        </div>
      </div>

      <div className="flex items-center justify-around ml-[20px] bg-slate-700 rounded h-[60px] w-[220px]">
        <div className="rounded-full w-10 h-10 bg-sky-400 flex items-center justify-center">
          {userAccount 
            ? <img src={User} alt="" className="rounded-full object-cover w-full h-full"/>
            : <h2 className="font-semibold text-xl text-white">UN</h2> 
          }
        </div>
        <div className="leading-5">
          <h4 className="text-white">Username</h4>
          <p className="text-sky-400 text-[14px] cursor-pointer hover:underline">@user_2025</p>
        </div>
        <p className="text-2xl text-sky-400 cursor-pointer hover:text-sky-200"><IoPower /></p>
      </div>
    </div>
  )
}

export default Sidebar