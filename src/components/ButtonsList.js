import React from "react";
import Button from "./Button";

const buttonList = [
  "Videos",
  "Movies",
  "Data Structures",
  "Spring Boot",
  "Music",
  "Games",
  "Live",
  "Football",
  "Stocks",
  "Nifty 50",
  "Market",
  "Olympics",
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
