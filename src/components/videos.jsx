import React, { useEffect, useRef, useState } from "react";
import t1 from "../assets/Images/download.jpeg";
import t2 from "../assets/Images/images (1).jpeg";
import t3 from "../assets/Images/images (2).jpeg";
import t4 from "../assets/Images/images (3).jpeg";
import t5 from "../assets/Images/images (4).jpeg";
import t6 from "../assets/Images/images (5).jpeg";
import t7 from "../assets/Images/images (6).jpeg";
import t8 from "../assets/Images/images (7).jpeg";
import t9 from "../assets/Images/images (8).jpeg";
import t10 from "../assets/Images/images.jpeg";
function Videos() {
  const videos = [
    {
      title: " Learn JavaScript Basics in 10 Minutes | Beginner Friendly ",
      channel: "CodeMaster",
      views: "12k",
      thumbnails: t1,
      color: "bg-blue-900",
      icon: "CM",
    },
    {
      title: " How to Cook Perfect Pasta | Easy Recipe ",
      channel: "FoodieHub",
      views: "89k",
      thumbnails: t2,
      color: "bg-indigo-700",
      icon: "FH",
    },
    {
      title: " Top 10 Smartphone Under 20K | Honest Review ",
      channel: "TechReviewz",
      views: "55k",
      thumbnails: t3,
      color: "bg-green-700",
      icon: "TR",
    },
    {
      title: " 10 Minute Full Body Workout | No Equipment ",
      channel: "FitLife",
      views: "32k",
      thumbnails: t4,
      color: "bg-blue-700",
      icon: "FL",
    },
    {
      title: " Explore Maldives in 4K | Travel Vlog ",
      channel: "Wanderlust",
      views: "76k",
      color: "bg-gray-800",
      thumbnails: t5,
      icon: "WL",
    },
    {
      title: " React Crash Course | Build a Project ",
      channel: "DevJourney",
      views: "21k",
      thumbnails: t6,
      color: "bg-red-500",
      icon: "DJ",
    },
    {
      title: " Funny Cat Compilation | Try Not to Laugh ",
      channel: "PetWorld",
      views: "1.2M",
      thumbnails: t7,
      color: "bg-indigo-400",
      icon: "PW",
    },
    {
      title: " How to Save Money Fast | Financial Tips ",
      channel: "MoneyMatters",
      views: "44k",
      thumbnails: t8,
      color: "bg-blue-500",
      icon: "MM",
    },
    {
      title: " Football Highlights | Best Goals 2025 ",
      channel: "SportsTime",
      views: "210k",
      thumbnails: t9,
      color: "bg-gray-700",
      icon: "ST",
    },
    {
      title: " Relaxing Lofi Beats to Study/Work ",
      channel: "ChillVibes",
      views: "980k",
      thumbnails: t10,
      color: "bg-indigo-700",
      icon: "CV",
    },
  ];

  const categories = [
    "All",
    "Android",
    "Science fiction",
    "Gaming",
    "React routers",
    "Trailers",
    "Masala films",
    "Visual Studio Code",
    "iPhones",
    "Roasts",
    "Thrillers",
    "Mixes",
    "Skills",
    "Dramedy",
    "Electronic components",
    "Television comedy",
    "Action-adventure games",
    "Animated films",
    "Recently uploaded",
    "Watched",
    "New to you",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200, // adjust scroll amount
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    console.log(videos);
  }, []);
  return (
    <div className="w-full bg-black overflow-hidden h-full">
      <div className="relative flex items-center">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 bg-black/50 hover:bg-gray-400 text-white w-10 h-10 rounded-full px-2 py-1 hover:bg-black"
        >
          {"<"}
        </button>

        {/* Categories List */}
        <div
          ref={scrollRef}
          className="flex gap-3 pb-3 mb-4 overflow-x-auto scrollbar-hide scroll-smooth mx-6"
        >
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm ${
                selectedCategory === cat
                  ? "bg-white text-black"
                  : "bg-[#272727] text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 hover:bg-gray-400 w-10 h-10 bg-black/50 text-white rounded-full px-2 py-1 hover:bg-black"
        >
          {">"}
        </button>
      </div>

      <div className=" w-full h-auto flex flex-wrap">
        {videos.map((item) => (
          <div className=" cursor-pointer w-full sm:w-1/2  lg:w-1/3 px-2 mb-4">
            <div className="w-full ">
                <img className="w-full rounded-2xl hover:rounded-none transition" src={item.thumbnails} alt="" />
            </div>
            <div className="w-full mt-3 gap-3 flex">
                <div className={`${item.color} flex items-center justify-center text-2xl font-bold w-15 h-15 text-white rounded-full`}>
                    {item.icon}
                </div>
                <div>
                    <h1 className="text-white font-bold text-lg"> {item.title} </h1>
                    <p className="text-gray-600 hover:text-white">{item.views} {" "}Views </p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
