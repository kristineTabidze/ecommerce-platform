import React, { useState } from "react";
import TabList from "../../../atoms/RadioGroup";
import { ITabProps } from "../../../atoms/RadioGroup/RadioGroup";

const PowerChoice: React.FC = () => {
  const [currentValue, setCurrentValue] = useState(0);

  const tabList: ITabProps[] = [
    {
      value: 0,
      title: "None",
      description: "Use in the studio or with your own power amp.",
    },
    {
      value: 449,
      title: "Powered",
      description: "Built-in 600W solid state power amp",
    },
  ];

  return (
    <div className="my-12">
      <h1 className="text-gray-900 font-medium text-lg mb-2">Power Amp</h1>
      <TabList
        value={currentValue}
        onChange={(val) => setCurrentValue(val as number)}
        options={tabList}
        className="grid gap-4"
      />
    </div>
  );
};

export default PowerChoice;
