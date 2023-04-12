import axios from "axios";

export default axios.create({
  baseURL: "http://api.weatherapi.com/v1",
  params: {
    key: "10d18304ce664a3f93b173102230604",
  },
});
