import axios from "axios";
import { API_URL } from "../Utils/constants";

export const Api = axios.create({
  baseURL: API_URL,
});
