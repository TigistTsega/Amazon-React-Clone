/** @format */

import axios from "axios";

const instance = axios.create({

  // THE API (cloud function) URL

  baseURL: "http://us-central1-react-clone-29c2e.cloudfunctions.net/api",

  // baseURL: "http://localhost:5002/react-clone-29c2e/us-central1/api", //local
});

export default instance;
