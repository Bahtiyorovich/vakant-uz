import { Logo, User } from "../../assets";
import { IoPower } from "react-icons/io5";
import { useState } from "react";
import menuItems from "./../../constants/data";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Sidebar = ({ menuActive, darkMode }) => {
  const [userAccount, setUserAccount] = useState(true);

  return (
    <div className={menuActive ? "w-16 duration-300" : "w-[270px] duration-300"}>
      <div
        className={
          darkMode
            ? "h-screen border-r border-slate-100"
            : "h-screen border-r border-slate-600"
        }
      >
        {menuActive ? (
          <div className="flex items-center justify-center gap-4 w-16 h-20">
            <img src={Logo} alt="" className="w-10 h-10 rounded-full" />
          </div>
        ) : (
          <div className="flex items-center justify-center gap-4 w-full h-20">
            <img src={Logo} alt="" className="w-12 h-12 rounded-full" />
            <h1
              className={
                darkMode
                  ? "font-bold text-2xl text-slate-600"
                  : "font-bold text-2xl text-white"
              }
            >
              Vakant.uz
            </h1>
          </div>
        )}

        <div
          className={
            menuActive ? "w-16 h-[75%] pl-2 py-12" : "w-full h-[75%] pl-6 py-12"
          }
        >
          {menuItems.map((item) => (
            <div
              key={item.title}
              className={
                darkMode
                  ? "flex items-center gap-4 text-2xl text-slate-600 hover:bg-slate-100 cursor-pointer p-2"
                  : "flex items-center gap-4 text-2xl text-slate-400 hover:bg-slate-700 cursor-pointer p-2"
              }
            >
              {<item.icon />}
              <p className={menuActive ? "hidden" : "text-[16px]"}>
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {menuActive ? (
          <div className="flex items-center justify-around ml-[3px] bg-sky-900 rounded h-[60px] w-14">
            <p className="text-2xl text-sky-400 cursor-pointer hover:text-sky-200">
              <IoPower />
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-around ml-[20px] bg-sky-900 rounded h-[60px] w-[220px]">
            <div className="rounded-full w-10 h-10 bg-sky-400 flex items-center justify-center">
              {userAccount ? (
                <img
                  src={User}
                  alt=""
                  className="rounded-full object-cover w-full h-full"
                />
              ) : (
                <h2 className="font-semibold text-xl text-white">UN</h2>
              )}
            </div>
            <div className="leading-5">
              <h4 className="text-white">Username</h4>
              <p className="text-slate-100 text-[14px] cursor-pointer hover:underline">
                @user_2025
              </p>
            </div>
            <p className="text-2xl text-sky-400 cursor-pointer hover:text-sky-200">
              <IoPower />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
