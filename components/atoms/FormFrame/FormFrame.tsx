import { Tab } from "@headlessui/react";
import classNames from "classnames";
import React from "react";
import { IFormFrame } from "./types";

const FormFrame: React.FC<IFormFrame> = ({
  isSelected,
  onClick,
  value,
  children,
}) => {
  return (
    <Tab
      onClick={() => onClick(value)}
      className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
    >
        <span
          className={classNames(
            isSelected ? "ring-indigo-500" : "ring-transparent",
            "pointer-events-none rounded-md ring-2 ring-offset-2"
          )}
          aria-hidden="true"
        >
          {children}
        </span>
    </Tab>
  );
};

export default FormFrame;
