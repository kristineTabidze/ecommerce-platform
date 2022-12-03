import React, { useState } from "react";
import TabList from "../../../atoms/RadioGroup";
import { ITabProps } from "../../../atoms/RadioGroup/RadioGroup";

const FootControler: React.FC = () => {
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
    <TabList
      value={currentValue}
      onChange={(val) => setCurrentValue(val as number)}
      options={tabList}
    />
  );
};

export default FootControler;
