import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { IconDisplay } from "./IconDisplay";
import { Controls } from "./Controls";

interface SidebarProps {
  username: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ username }) => {
  return (
    <Flex direction="column" h="100vh" w="20vw">
      <Flex
        h="6rem"
        borderBottom="solid"
        borderBottomWidth="2px"
        borderColor="darkPurple"
      >
        <IconDisplay url="https://ddragon.leagueoflegends.com/cdn/10.25.1/img/profileicon/589.png" />
        <Flex direction="column">
          <Controls />
          <Text>{username}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
