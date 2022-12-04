import React from "react";
import { formatKey } from "./utils";

const List: React.FC<{
  listOptions: Record<string, string | number>;
  title: string;
}> = ({ listOptions, title }) => {
  return (
    <div className="bg-white text-gray-900 text-grey-900 font-medium">
      <h3 className="py-5 border-b border-gray-200 flex items-center justify-between text-lg">
        {title}
      </h3>
      {Object.keys(listOptions).map((key) => (
        <dl
          className="py-5 border-b text-sm  border-gray-200 flex items-center justify-between"
          key={key}
        >
          <dt>{formatKey(key)}</dt>
          <dd>{listOptions[key]}</dd>
        </dl>
      ))}
    </div>
  );
};

export default List;
