import axios from "axios";
import { URL_BASE } from "../utils/constant";

const initialize = () => {
  const instance = axios.create({ baseURL: URL_BASE });

  HttpService.instance = instance;
};

const get = url => HttpService.instance.get(url).then(({ data }) => data);
const put = (url, data) =>
  HttpService.instance.put(url, data).then(({ data }) => data);
const post = (url, data) =>
  HttpService.instance.post(url, data).then(({ data }) => data);

const HttpService = {
  get,
  put,
  post,
  initialize
};

export default HttpService;
