import React from "react";
import { IconType } from "react-icons/lib/cjs";
import { Button } from "@chakra-ui/react";

interface ControlIconProps {
  icon: React.ReactElement<IconType>;
}

export const ControlIcon: React.FC<ControlIconProps> = ({ icon }) => {
  return (
    <Button
      leftIcon={icon}
      iconSpacing={0}
      bgColor="transparent"
      h="100%"
      w={8}
      _hover={{ bgColor: "transparent" }}
      _active={{ bgColor: "transparent" }}
    />
  );
};
