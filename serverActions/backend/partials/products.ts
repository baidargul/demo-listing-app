import axios from "axios";
import { SERVER_RESPONSE } from "../SERVER";

const apiPath = `/api/product`;

async function get(name: string) {
  const response: SERVER_RESPONSE = await axios.get(
    `${apiPath}/${name}/?name=${name}`
  );
  return response.data;
}

async function list() {
  const response: SERVER_RESPONSE = await axios.get(apiPath);
  return response.data;
}

export const Product = {
  get,
  list,
};
