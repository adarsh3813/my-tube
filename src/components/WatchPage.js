import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_DETAILS_URL } from "../utils/constants";
import VideoInfo from "./VideoInfo";
import CommentContainer from "./CommentContainer";
import LiveCommentContainer from "./LiveCommentContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState(null);

  const getVideoDetails = async () => {
    const data = await fetch(VIDEO_DETAILS_URL(searchParams.get("v")));
    const json = await data.json();
    setVideoInfo(json.items[0]);
  };

  useEffect(() => {
    dispatch(closeSidebar());
    getVideoDetails();
  }, []);

  return (
    <div className="py-4 px-8 col-span-8">
      <div className="flex">
        <div className="w-fit">
          <iframe
            className="shadow-2xl"
            width="900"
            height="500"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?si=Rxnry-11k3DOzGIR"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="ml-2 w-full">
          <LiveCommentContainer />
        </div>
      </div>
      <div className="w-[900px]">
        {videoInfo && <VideoInfo videoInfo={videoInfo} />}
        <CommentContainer commentCount={videoInfo?.statistics.commentCount} />
      </div>
    </div>
  );
};

export default WatchPage;
