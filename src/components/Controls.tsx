import React from "react";
import { Flex } from "@chakra-ui/react";
import { FiHelpCircle, FiMinimize2, FiSettings, FiX } from "react-icons/fi";
import { ControlIcon } from "./ControlIcon";

export const Controls: React.FC<{}> = () => {
  return (
    <Flex mb="auto" ml="auto" h={8}>
      <ControlIcon icon={<FiHelpCircle />} />
      <ControlIcon icon={<FiMinimize2 />} />
      <ControlIcon icon={<FiSettings />} />
      <ControlIcon icon={<FiX />} />
    </Flex>
  );
};
