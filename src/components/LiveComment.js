import React from "react";
import USER_ICON from "../assets/user_image.png";

export const LiveComment = ({ name, message }) => {
  return (
    <div className="flex mt-3">
      <img className="rounded-full w-[7%]" src={USER_ICON} />
      <span className="px-2">
        <b>{name}</b>: {message}
      </span>
    </div>
  );
};
