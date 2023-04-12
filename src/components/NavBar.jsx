import { HStack, Image, Text, Box } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/react.svg";

const NavBar = ({ weather: { location, current } }) => {
  return (
    <Box justifyContent={"space-between"} padding={"10px"}>
      <HStack>
        <Image src={logo} boxSize="60px" alt="Logo" />
        {location && current ? (
          <>
            <div>{` ${location.name}, ${location.region} ${current.temp_c}°C`}</div>{" "}
            <Image
              src={current.condition.icon}
              boxSize="50px"
              alt="Outside weather"
            />
          </>
        ) : null}
      </HStack>
    </Box>
  );
};

export default NavBar;
