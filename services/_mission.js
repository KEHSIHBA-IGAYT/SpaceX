import axios from "axios";
import config from "../config/config.json";

const APP_URL = config.SERVER_BASE_URL,
  APP_API_VERSON = config.SERVER_API_VER,
  getMissionDetails = async (query) => {
    const headers = [];
    headers["Content-Type"] = "application/json";
    const options = {
        method: "GET",
        headers,
        url: `${APP_URL}/${APP_API_VERSON}/launches?limit=100${query}`,
      },
      response = await axios(options);

    return handleResponse(response);
  },
  handleResponse = (response) => {
    const { data } = response;

    if (response.status === 404) {
      // Window.location.reload(true);
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  };

export default getMissionDetails;
