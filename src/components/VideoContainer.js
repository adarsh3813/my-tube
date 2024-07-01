import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_LIST_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import VideoListShimmer from "./VideoListShimmer";

const VideoContainer = () => {
  const [popularVideoList, setPopularVideoList] = useState(null);

  useEffect(() => {
    getPopularVideos();
  }, []);

  const getPopularVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_LIST_API_URL);
    const json = await data.json();
    setPopularVideoList(json.items);
  };

  return popularVideoList == null ? (
    <VideoListShimmer />
  ) : (
    <div className="flex flex-wrap">
      {popularVideoList.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
