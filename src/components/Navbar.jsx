import React from "react";
import menu from '../assets/Icons/menu.png'
import yt from '../assets/Icons/yt.png'
import search from '../assets/Icons/search.png'
import mic from '../assets/Icons/mic.png'
import userIcon from '../assets/Icons/userIcon.jpg'
import bell from '../assets/Icons/bell.png'

function Navbar() {
  return (
    <div className=" flex w-full bg-black  h-16 ">
      <div className=" items-center pl-[13px] flex h-full w-[25%]">
        <div className="h-10 w-10 rounded-full flex hover:bg-gray-500 justify-center items-center">
          <img className="h-[17px] cursor-pointer " src={menu} alt="" />
        </div>
        <div className="pl-[20px] flex items-center cursor-pointer gap-2">
            <img className="h-[40px]" src={yt} alt="" />
            <h1 className="material-symbols-outlined font-semibold text-white text-3xl">YouTube</h1>
        </div>
      </div>

      <div className=" flex justify-center  items-center gap-3 h-full w-[50%]">
        <div className=" h-10 w-[60%] border-solid bg-[#272727] border-[1px] border-[#272727] rounded-full flex">
            <input placeholder="Search" className="w-[90%] bg-black    text-white pl-6 placeholder:text-gray-500  rounded-bl-full rounded-tl-full outline-none  focus:ring-1 focus:ring-blue-700 " type="text" />
            <button className="flex cursor-pointer items-center justify-center pl-[2%]">
                <img className="h-6" src={search} alt="" />
            </button>
        </div>
        <div className="h-10 hover:cursor-pointer w-10 bg-[#272727] flex justify-center items-center rounded-full ">
            <img className="h-7" src={mic} alt="" />
        </div>
      </div>
      <div className=" h-100% w-[25%] flex items-center pr-3 justify-end gap-3 ">
        <div className="bg-[#272727] flex hover:bg-[#202020]  justify-evenly  rounded-full cursor-pointer items-center h-10 w-30">
          
          <h1 className=" text-white font-thin mb-3 text-5xl">+</h1>
          <h1 className="text-xl mb-1 font-semibold text-white">create</h1>
        </div>
        <div className="h-10 w-10 hover:bg-[#272727] flex justify-center items-center cursor-pointer rounded-full"><img className="h-7" src={bell} alt="" /></div>
        <img className="rounded-full cursor-pointer h-10" src={userIcon} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
