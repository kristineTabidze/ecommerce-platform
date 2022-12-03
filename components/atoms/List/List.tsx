import React from "react";

const List: React.FC<{
  listOptions: Record<string, string | number>;
  title: string;
}> = ({ listOptions, title }) => {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          {Object.keys(listOptions).map((key) => (
            <div
              className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              key={key}
            >
              <dt className="text-sm font-medium text-gray-500">{key}</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {listOptions[key]}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default List;
