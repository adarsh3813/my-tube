import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isSideBarActive = useSelector((store) => store.app.isSidebarMenuOpen);

  if (!isSideBarActive) {
    return null;
  }

  return (
    <div className="p-4 col-span-1 shadow-md">
      <ul>
        <li>
          <Link to="/">🏠 Home</Link>
        </li>
        <li>🔥 Shorts</li>
        <li>▶️ Videos</li>
        <li>🔴 Live</li>
      </ul>
      <h1 className="font-bold mt-5">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold mt-5">Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
