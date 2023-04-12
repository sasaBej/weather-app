import React from "react";
import { Button, HStack, Input, Stack } from "@chakra-ui/react";
const Search = ({ onSearch, onChange, search }) => {
  return (
    <Stack spacing={3} display={"flex"} flexWrap={"nowrap"}>
      <HStack>
        <Input
          placeholder="Search"
          size="lg"
          width="auto"
          value={search}
          onChange={onChange}
        />
        <Button onClick={() => onSearch()}>Search</Button>
      </HStack>
    </Stack>
  );
};

export default Search;
