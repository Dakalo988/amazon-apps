import axios from "axios";

const instace = axios.create({
  baseURL: " https://clone-add08.web.app", //The API (Cloud Function URL)
});

export default instace;
