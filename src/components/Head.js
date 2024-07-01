import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebarMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleSidebarMenu());
  };

  return (
    <div className="grid grid-flow-col py-2 px-3 shadow-lg">
      <div className="flex col-span-1 items-center">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <a href="/">
          <img
            className="h-14 mx-2"
            alt="nav-logo"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </a>
      </div>
      <div className="col-span-10 text-center flex items-center">
        <input
          className="w-7/12 py-2 px-4 border border-gray-500 rounded-l-full"
          type="text"
          placeholder="Try music..."
        />
        <button className="py-2 px-4 bg-gray-800 text-white rounded-r-full">
          Search
        </button>
      </div>
      <div className="flex items-center">
        <img
          className="h-9"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
