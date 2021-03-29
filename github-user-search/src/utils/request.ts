import axios, { Method } from 'axios';

type RequestParams = {
  method?: Method;
  url: string;
  data?: object | string;
  params?: object;
  headers?: object;
}

const BASE_URL = "https://api.github.com/users";

export const makeRequest = ({ method = 'GET', url, data, params, headers }: RequestParams) => {
  return axios({
    method,
    url: `${BASE_URL}${url}`,
    data,
    params,
    headers
  });
}