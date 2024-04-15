import axios from "axios";

const instace = axios.create({
  baseURL: " ", //The API (Cloud Function URL)
});

export default instace;
