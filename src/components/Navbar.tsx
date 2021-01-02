import React from "react";

import { Flex, Button, Box } from "@chakra-ui/react";
import {
  FiArrowRight,
  FiUser,
  FiBriefcase,
  FiAward,
  FiDollarSign
} from "react-icons/fi";

import { Notifications, Notification } from "./Notifications";
import { IconButton } from "./IconButton";

interface NavbarProps {
  notifications: Notification[];
}

export const Navbar: React.FC<NavbarProps> = ({ notifications }) => {
  return (
    <Flex
      height="6rem"
      width="80vw"
      borderBottom="solid"
      borderBottomWidth="2px"
      borderColor="darkPurple"
    >
      <Flex mr="auto" ml={0} direction="row" width="50%">
        <Box mt="auto" mr={4} mb="auto" ml={2}>
          <Button leftIcon={<FiArrowRight />} width="10rem">
            Play
          </Button>
          <Notifications notifications={notifications} />
        </Box>
        <Button h="100%" bg="transparent">
          Home
        </Button>
        <Button h="100%" bg="transparent">
          TFT
        </Button>
        <Button h="100%" bg="transparent">
          Clash
        </Button>
      </Flex>

      <Flex ml="auto">
        <IconButton icon={<FiUser />} />
        <IconButton icon={<FiBriefcase />} />
        <IconButton icon={<FiAward />} />
        <IconButton icon={<FiDollarSign />} />
      </Flex>
    </Flex>
  );
};
