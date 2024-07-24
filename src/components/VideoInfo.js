import React, { useState } from "react";
import channelLogo from "../assets/Sony_Channel_Logo.png";

const VideoInfo = ({ videoInfo }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="w-full">
      <h1 className="font-bold text-xl my-3">{videoInfo.snippet.title}</h1>

      <div className="flex justify-between">
        <div className="flex justify-center items-center">
          <img
            className="w-10 h-10 mr-3 rounded-full border border-gray-700"
            src={channelLogo}
          />
          <div>
            <h2 className="font-semibold text-lg">
              {videoInfo.snippet.channelTitle}
            </h2>
            <h2 className="text-sm font-light">12.6M subscribers</h2>
          </div>
        </div>
        <div>
          <button className="py-2 px-6 mx-2 bg-gray-700 text-white rounded-full">
            Join
          </button>
          <button className="py-2 px-6 mx-2 bg-red-800 text-white rounded-full">
            Subscribe 🔔
          </button>
          <button className="py-2 px-4 bg-gray-700 text-white rounded-l-full">
            👍{videoInfo.statistics.likeCount}
          </button>
          <button className="py-2 px-4 ml-[1px] bg-gray-700 text-white rounded-r-full">
            👎
          </button>
        </div>
      </div>
      <div className="bg-gray-200 p-3 mt-2 rounded-lg shadow-lg w-full">
        <h1 className="font-semibold mb-2">
          {videoInfo.statistics.viewCount} views
        </h1>
        {!showDescription && (
          <span className="cursor-pointer" onClick={handleDescription}>
            Show more...
          </span>
        )}
        <div>
          {showDescription && videoInfo.snippet.description}
          {showDescription && (
            <p
              onClick={handleDescription}
              className="cursor-pointer font-semibold"
            >
              Show less
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
