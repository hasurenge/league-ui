import React from "react";
import { Button } from "@chakra-ui/react";
import { IconType } from "react-icons/lib/cjs";

interface IconButtonProps {
  icon: React.ReactElement<IconType>;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon }) => {
  return (
    <Button
      leftIcon={icon}
      iconSpacing={0}
      h="100%"
      w="4rem"
      borderRadius={0}
    />
  );
};
