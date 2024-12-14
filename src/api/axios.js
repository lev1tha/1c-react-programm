import axios from "axios";

// Base URL with default Axios configuration
const $apiRequest = axios.create({
  baseURL: "https://osh-photo.com/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default $apiRequest;
