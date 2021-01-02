import * as React from "react";
import { Flex } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

export const App = () => (
  <Flex w="100vw" direction="row" overflow="hidden">
    <Navbar
      notifications={[
        { head: "Test head!", body: "This is a test body." },
        { head: "Test head!", body: "This is a test body." }
      ]}
    />
    <Sidebar username="Faker" />
  </Flex>
);
