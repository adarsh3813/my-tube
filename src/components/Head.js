import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebarMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate, createSearchParams } from "react-router-dom";
import NOTIFICATION_ICON from "../assets/notification-bell.png";

const Head = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search);
  const [suggestions, setSuggestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    if (searchCache[searchQuery]) {
      setSuggestions(searchCache[searchQuery]);
    } else {
      const t = setTimeout(() => getSuggestion(), 300);

      return () => {
        clearTimeout(t);
      };
    }
  }, [searchQuery]);

  const handleSuggestionClick = (suggestion) => {
    navigate({
      pathname: "results",
      search: createSearchParams({
        search_query: [suggestion],
      }).toString(),
    });
    setShowSuggestion(false);
    setSearchQuery(suggestion);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleSidebarMenu());
  };

  const getSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
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
      <div className="col-span-10 flex flex-col justify-center">
        <div className="text-center flex">
          <input
            className="w-7/12 py-2 px-4 border border-gray-500 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            // onBlur={() => setShowSuggestion(false)}
            placeholder="Try music..."
          />
          <button className="py-2 px-4 bg-gray-800 text-white rounded-r-full">
            Search
          </button>
        </div>
        {showSuggestion && (
          <div className="absolute top-[8.8%] w-[38.5rem] bg-white border border-gray-300 rounded-lg shadow-lg">
            <ul>
              {suggestions.map((suggestion) => {
                return (
                  <li
                    onClick={() => handleSuggestionClick(suggestion)}
                    key={suggestion}
                    className="hover:bg-gray-300 font-semibold cursor-pointer py-2 px-3"
                  >
                    🔍 {suggestion}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center justify-evenly">
        <div className="w-10">
          <img src={NOTIFICATION_ICON} />
        </div>
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
