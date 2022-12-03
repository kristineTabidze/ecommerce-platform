import React, { useState } from "react";
import TabList from "../../../atoms/RadioGroup";
import { ITabProps } from "../../../atoms/RadioGroup/RadioGroup";

const PowerChoice: React.FC = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const tabList: ITabProps[] = [
    {
      value: 0,
      title: "None",
    },
    {
      value: 449,
      title: "Profiler Remote Foot Controller",
    },
  ];

  return (
    <TabList
      value={currentValue}
      onChange={(val) => setCurrentValue(val as number)}
      options={tabList}
    />
  );
};

export default PowerChoice;
