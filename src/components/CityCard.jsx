import React from "react";
import {
  Box,
  Text,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Image,
  Heading,
  SimpleGrid,
  Divider,
  Spacer,
} from "@chakra-ui/react";
const CityCard = ({ weather: { location, current } }) => {
  return (
    <Card mt={"50px"}>
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            {location && current ? (
              <>
                <Image
                  src={current.condition.icon}
                  boxSize="50px"
                  alt="Outside weather"
                />
                <Box>
                  <Heading size="sm">
                    {`${location.name}, ${location.region}`}{" "}
                  </Heading>
                  <Text>{`Temperature: ${current.temp_c}°C`}</Text>
                </Box>
              </>
            ) : null}
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <SimpleGrid columns={2} gap={10}>
          <Box>
            {location && current ? (
              <>
                {/* it can be a separate component */}
                <Text p={3}>{`${current.condition.text}`}</Text>
                <Divider orientation="horizontal" width={"50%"} />
                <Text p={3}>{`Max UV Index:  ${current.uv}`}</Text>
                <Divider orientation="horizontal" width={"50%"} />
                <Text p={3}>{`Wind:  ${current.wind_kph} km/h`}</Text>
              </>
            ) : null}
          </Box>
          <Box>
            {location && current ? (
              <>
                {/* it can be a separate component */}
                <Text
                  p={3}
                >{`Temperature feels like: ${current.feelslike_c} °C`}</Text>
                <Divider orientation="horizontal" width={"50%"} />
                <Text p={3}>{`Wind Gusts:  ${current.gust_kph} km/h`}</Text>
                <Divider orientation="horizontal" width={"50%"} />
                <Text p={3}>{`Humidity:  ${current.humidity} %`}</Text>
              </>
            ) : null}
          </Box>
        </SimpleGrid>
      </CardBody>
    </Card>
  );
};
export default CityCard;
