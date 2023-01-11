import axios from "axios";
import { AxiosRequestConfig } from "axios";
type Params = {
  [key: string]: unknown;
};

export const baseUrl = process.env.NEXT_PUBLIC_BASE_SSSDMATE_BACK_URL;

export const api = {
  get: <T>(url: string, params?: Params) =>
    axios.get<T>(baseUrl + url, { params: { ...params } }),
  post: <T, R = unknown, E = unknown>(url: string, data?: R, headers?: E) =>
    axios.post<T>(baseUrl + url, data || {}, { ...headers }),
  put: <T, R = unknown>(url: string, data?: R) =>
    axios.put<T>(baseUrl + url, data || {}),
  delete: <T>(url: string) => axios.delete<T>(baseUrl + url),
};

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  async function(error) {
    //TODO error handling
    if (error.response.status === 500) {
      return error.resopnse;
    }
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(function(config: AxiosRequestConfig) {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
