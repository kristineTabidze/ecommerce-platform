import React from "react";
import Typography from "../../primitives/Typography";
import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-3 px-5 rounded-md cursor-pointer bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring ring-[#9FA6B273]"
    >
      <Typography.H2 className="text-white">{text}</Typography.H2>
    </button>
  );
};

export default Button;
