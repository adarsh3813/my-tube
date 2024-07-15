import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isSideBarActive = useSelector((store) => store.app.isSidebarMenuOpen);
  const list = ["Music", "Sports", "Gaming", "Movies"];

  if (!isSideBarActive) {
    return null;
  }

  return (
    <div className="p-4 col-span-1 shadow-md">
      <ul>
        <li className="hover:font-semibold cursor-pointer">
          <Link to="/">🏠 Home</Link>
        </li>
        <li className="hover:font-semibold cursor-pointer">🔥 Shorts</li>
        <li className="hover:font-semibold cursor-pointer">▶️ Videos</li>
        <li className="hover:font-semibold cursor-pointer">🔴 Live</li>
      </ul>
      <h1 className="font-bold mt-5">Subscription</h1>
      <ul>
        {list.map((item) => {
          return (
            <li key={item} className="hover:font-semibold cursor-pointer">
              {item}
            </li>
          );
        })}
      </ul>
      <h1 className="font-bold mt-5">Watch later</h1>
      <ul>
        {list.map((item) => {
          return (
            <li key={item} className="hover:font-semibold cursor-pointer">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
