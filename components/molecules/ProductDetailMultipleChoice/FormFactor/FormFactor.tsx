import React, { useState } from "react";
import TabList from "../../../atoms/RadioGroup";
import { ITabProps } from "../../../atoms/RadioGroup/RadioGroup";

const FormFactor: React.FC = () => {
  const [currentValue, setCurrentValue] = useState("head");

  const tabList: ITabProps[] = [
    {
      value: "head",
      title: "Profiler Head",
      description:
        "Compact amplifier head, perfect for a speaker cabinet or desk.",
    },
    {
      value: "back",
      title: "Profiler Back",
      description: "3U rackmount version of the classic profiling amplifier.",
    },
  ];

  return (
    <div className="my-12">
      <h1 className="text-gray-900 font-medium text-lg mb-2">Form Factor</h1>
      <TabList
        value={currentValue}
        onChange={(val) => setCurrentValue(val as string)}
        options={tabList}
        className="grid grid-cols-2 gap-4"
      />
    </div>
  );
};

export default FormFactor;
