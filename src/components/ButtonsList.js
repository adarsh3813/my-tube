import React from "react";
import Button from "./Button";

const buttonList = ["Videos", "Movies", "Music", "Games", "Live", "Football"];

const ButtonsList = () => {
  return (
    <div className="flex">
      {buttonList.map((item) => {
        return <Button key={item} name={item} />;
      })}
    </div>
  );
};

export default ButtonsList;
