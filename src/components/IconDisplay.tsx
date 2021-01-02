import React from "react";
import { Box, Image, CircularProgress, Text, Flex } from "@chakra-ui/react";

interface IconDisplayProps {
  url: string;
}

export const IconDisplay: React.FC<IconDisplayProps> = ({ url }) => {
  return (
    <Box ml={2} mt={2} position="relative">
      <Image
        src={url}
        borderRadius="full"
        position="absolute"
        mt={2}
        ml={2}
        boxSize="60px"
      />
      <Flex direction="column" align="center">
        <CircularProgress size="75px" value={65} />
        <Text position="absolute" bottom="5%" fontSize="20px" textColor="red">
          100
        </Text>
      </Flex>
    </Box>
  );
};
