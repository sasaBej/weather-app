import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import CityCard from "./components/CityCard";
import Search from "./components/Search";

function App() {
  const [weather, setWeather] = useState([]);
  const [latLong, setLatLong] = useState("Cluj");
  const [search, setSearch] = useState("");

  const onChange = (event) => {
    setSearch(event.target.value);
  };
  //never do this
  const onSearch = () => {
    axios.get(urlCurrent2).then((res) => {
      setWeather(res.data);
    });
    setSearch((prev) => "");
  };

  let urlCurrent = `http://api.weatherapi.com/v1/current.json?key=10d18304ce664a3f93b173102230604&q=${latLong}&aqi=no`;
  let urlCurrent2 = `http://api.weatherapi.com/v1/current.json?key=10d18304ce664a3f93b173102230604&q=${search}&aqi=no`;
  // let urlSearch = `https://api.weatherapi.com/v1/search.json?key=10d18304ce664a3f93b173102230604&q=${search}`;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      //can be use watchPosition or getCurrentPosition
      let myPosition = `${position.coords.latitude},${position.coords.longitude}`;
      setLatLong(myPosition);
    });

    axios.get(urlCurrent).then((res) => {
      setWeather(res.data);
    });
  }, [urlCurrent]);

  return (
    <Grid maxW="1000px" m="0 auto" p="0 10px" templateAreas={`"header" "main"`}>
      <GridItem area="header">
        <HStack justifyContent={"space-between"}>
          <NavBar weather={weather} />
          <Search onSearch={onSearch} onChange={onChange} search={search} />
        </HStack>
      </GridItem>
      <GridItem minHeight={`calc(100vh - 80px)`} area="main">
        <CityCard weather={weather} />
      </GridItem>
    </Grid>
  );
}

export default App;
