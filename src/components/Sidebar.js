import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LIVE_ICON from "../assets/live_icon.jpg";

const Sidebar = () => {
  const isSideBarActive = useSelector((store) => store.app.isSidebarMenuOpen);
  const subscribeList = [
    { text: "Music", icon: "🎵" },
    { text: "Sports", icon: "⚽" },
    { text: "Gaming", icon: "🎮" },
    { text: "Movies", icon: "🍿" },
  ];
  const exploreList = [
    { text: "Trending", icon: "🐦‍🔥" },
    { text: "Shopping", icon: "🛍️" },
    { text: "PLaylist", icon: "⏯️" },
    { text: "Liked Videos", icon: "💓" },
    { text: "Watch later", icon: "⌚" },
  ];

  if (!isSideBarActive) {
    return null;
  }

  return (
    <div className="py-4 px-2 col-span-1 shadow-md">
      <ul>
        <li className="hover:font-semibold hover:bg-gray-100 rounded-lg cursor-pointer py-2 px-1 my-1">
          <Link to="/">🏠 Home</Link>
        </li>
        <li className="hover:font-semibold hover:bg-gray-100 rounded-lg cursor-pointer py-2 px-1 my-1">
          🔥 Shorts
        </li>
        <li className="hover:font-semibold hover:bg-gray-100 rounded-lg cursor-pointer py-2 px-1 my-1">
          ▶️ Videos
        </li>
        <li className="hover:font-semibold hover:bg-gray-100 rounded-lg cursor-pointer py-2 px-1 my-1">
          🔴 Live
        </li>
      </ul>
      <h1 className="font-semibold font-mono mt-5 mb-2">Subscription</h1>
      <ul>
        {subscribeList.map((item, index) => {
          return (
            <li
              key={index}
              className="flex justify-between cursor-pointer py-2 px-1 hover:bg-gray-200 rounded-lg"
            >
              <p>{item.icon}</p>
              <p className="font-light tracking-wider">{item.text}</p>
              <p>
                <img className="w-6" src={LIVE_ICON} />
              </p>
            </li>
          );
        })}
      </ul>
      <h1 className="font-semibold font-mono mt-5 mb-2">Explore</h1>
      <ul>
        {exploreList.map((item, index) => {
          return (
            <li
              key={index}
              className="cursor-pointer hover:bg-gray-200 rounded-lg px-1 py-2"
            >
              <span className="mr-4">{item.icon}</span>
              <span className="tracking-wider">{item.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
