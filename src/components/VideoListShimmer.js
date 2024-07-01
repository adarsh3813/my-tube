import React from "react";

const VideoListShimmer = () => {
  const cards = [];
  for (let i = 0; i < 30; i++) {
    cards.push(
      <div key={i} className="w-80 h-72 p-2 m-2 bg-gray-200 rounded-lg"></div>
    );
  }

  return <div className="flex flex-wrap">{cards}</div>;
};

export default VideoListShimmer;
