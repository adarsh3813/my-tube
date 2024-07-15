import React from "react";

const Button = ({ name }) => {
  return (
    <div className="px-3 py-1 m-2 bg-gray-200 rounded-lg  cursor-pointer hover:bg-gray-300">
      {name}
    </div>
  );
};

export default Button;
