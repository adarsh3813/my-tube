import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 my-2 mx-2 w-72 shadow-lg hover:scale-105 duration-75">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-semibold font-sans py-2">{title}</li>
        <li className="font-light">📻 {channelTitle}</li>
        <li className="font-light">👁️ {statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
