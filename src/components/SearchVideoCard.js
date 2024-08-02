import React from "react";
import channelLogo from "../assets/Sony_Channel_Logo.png";
import { useNavigate } from "react-router-dom";

export const SearchVideoCard = ({ videoItem }) => {
  const navigate = useNavigate();
  const getRandomViews = () => {
    return Math.floor(Math.random() * 100 + 3);
  };
  const getRandomTime = () => {
    return Math.floor(Math.random() * 5 + 1);
  };
  const handleVideoClick = (id) => {
    navigate("/watch?v=" + id);
  };

  return (
    <div key={videoItem?.id.videoId} className="flex mb-2">
      <div className="min-w-[39%] cursor-pointer">
        <img
          className="rounded-lg"
          src={videoItem?.snippet?.thumbnails?.high.url}
          onClick={() => handleVideoClick(videoItem?.id.videoId)}
        />
      </div>
      <div className="pr-5 pl-3 cursor-pointer">
        <h1
          onClick={() => handleVideoClick(videoItem?.id.videoId)}
          className="font-semibold font-sans text-xl"
        >
          {videoItem?.snippet.title}
        </h1>
        <p className="text-sm text-gray-700">
          {getRandomViews()}M views - {getRandomTime()} weeks ago
        </p>
        <div className="flex items-center mt-4 text-gray-700">
          <img className="w-7 rounded-full" src={channelLogo} />
          <p className="ml-2 text-sm font-thin hover:text-black">
            {videoItem?.snippet.channelTitle}
            <span className="text-xs bg-gray-400 rounded-full ml-1">✔️</span>
          </p>
        </div>
        <p className="mt-3 text-sm text-gray-700">
          {videoItem?.snippet.description}
        </p>
        <div className="flex text-sm mt-2">
          <p className="px-2 rounded-sm bg-gray-300">4K</p>
          <p className="px-2 ml-1 rounded-sm bg-gray-300">CC</p>
        </div>
      </div>
    </div>
  );
};
