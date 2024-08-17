import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const isSidebarOpen = useSelector((store) => store.app.isSidebarMenuOpen);
  return (
    <div
      className={
        "my-2 mx-2 rounded-lg shadow-lg h-[370px] hover:border hover:border-gray-200 duration-75 " +
        (isSidebarOpen ? "w-96" : "w-[330px]")
      }
    >
      <img className="w-full" alt="thumbnail" src={thumbnails.medium.url} />
      <ul className="px-2">
        <li className="font-semibold font-sans py-2">{title}</li>
        <li className="">📻 {channelTitle}</li>
        <li className="font-light">👁️ {statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
