import React from "react";
import Button from "./Button";

const buttonList = [
  "Videos",
  "Movies",
  "Music",
  "Games",
  "Live",
  "Football",
  "Stocks",
  "Nifty",
  "Market",
];

const ButtonsList = () => {
  return (
    <div className="flex">
      <Button key={"all"} name={"All"} />
      {buttonList.map((item) => {
        return <Button key={item} name={item} />;
      })}
    </div>
  );
};

export default ButtonsList;
