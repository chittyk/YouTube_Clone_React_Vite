import React from "react";
import home from "../assets/Icons/home.png";
import shorts from "../assets/Icons/short.png";
import user from "../assets/Icons/user.png";
import sub from "../assets/Icons/subscription.png";



function Sidebar() {
    const sideOptions = [
  {
    icon: home,
    text: "Home",
  },
  {
    icon: shorts,
    text: "Shorts",
  },
  {
    icon: sub,
    text: "Subcriptions",
  },
  {
    icon: user,
    text: "You",
  },
];
  return (
    <div className="w-15 h-screen bg-black py-5">
      {sideOptions.map((item,index) => (
        <div key={index} className="flex hover:bg-gray-600 py-3 transition rounded-xl flex-col items-center mb-6 cursor-pointer">
          <img src={item.icon} alt={item.text} className="w-6 h-6 mb-1" />
          <h6 className="text-xs text-white font-medium">{item.text}</h6>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
