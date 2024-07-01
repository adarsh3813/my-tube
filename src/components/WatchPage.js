import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_DETAILS_URL } from "../utils/constants";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  const getVideoDetails = async () => {
    const data = await fetch(VIDEO_DETAILS_URL(searchParams.get("v")));
    const json = await data.json();
    console.log(json);
    setVideoInfo(json.items[0]);
  };

  const handleDescription = () => {
    setShowDescription(!showDescription);
  };

  useEffect(() => {
    dispatch(closeSidebar());
    getVideoDetails();
  }, []);

  return (
    <div className="py-4 px-12 col-span-7 grid grid-flow-col grid-cols-4">
      <div className="col-span-3">
        <div className="">
          <iframe
            className="shadow-2xl"
            width="950"
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
          {videoInfo && (
            <div className="">
              <h1 className="font-bold text-xl my-3">
                {videoInfo.snippet.title}
              </h1>
              <div className="flex justify-between">
                <h2 className="my-2 font-semibold text-lg">
                  {videoInfo.snippet.channelTitle}
                </h2>
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
              <div className="bg-gray-300 p-3 mt-2 rounded-lg shadow-lg">
                <h1 className="font-semibold mb-2">
                  Description{" "}
                  <span className="cursor-pointer" onClick={handleDescription}>
                    🔽
                  </span>
                </h1>
                {showDescription && videoInfo.snippet.description}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
