import React, { useEffect, useState } from "react";
import { addMessage, clearChat } from "../utils/liveChatSlice";
import { GenerateRandomName, GetRandomComment } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { LiveComment } from "./LiveComment";

const LiveComments = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const liveMessages = useSelector((store) => store.liveChat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: GenerateRandomName(),
          message: GetRandomComment(),
        })
      );
    }, 2000);

    return () => {
      dispatch(clearChat());
      clearInterval(i);
    };
  }, []);

  return (
    <div className="border border-gray-300 rounded-md h-[500px] bg-slate-100 w-full">
      <div className="flex justify-between">
        <h1>Live Chat</h1>
        <div>
          <span className="cursor-pointer">⚙️</span>
          <span className="ml-2 cursor-pointer">❌</span>
        </div>
      </div>
      <div className="h-[420px] flex flex-col-reverse overflow-y-scroll">
        {liveMessages.map((message, index) => (
          <LiveComment
            key={index}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>
      <form
        className="my-2 mx-2 pt-2 border-t border-gray-400 flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Adarsh",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-80 py-1 px-2 border border-gray-400 rounded-l-full"
          type="text"
          placeholder="Start Chatting..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <span className="bg-black text-white rounded-r-full p-1 cursor-pointer">
          +😌
        </span>
        <button className="ml-2 py-1 px-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveComments;
