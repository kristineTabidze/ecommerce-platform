import React from "react";
import classNames from "classnames";

const Frame: React.FC<{
  children: React.ReactNode;
  selected: boolean;
  name: string;
}> = ({ children, selected, name }) => {
  return (
    <>
      <span className="sr-only"> {name} </span>
      <span className="absolute inset-0 overflow-hidden rounded-md">
        {children}
      </span>
      <span
        className={classNames(
          selected ? "ring-indigo-500" : "ring-transparent",
          "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
        )}
        aria-hidden="true"
      />
    </>
  );
};

export default Frame;
