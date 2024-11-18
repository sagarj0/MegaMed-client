import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { Store } from "redux";
// import { changeAccessToken } from "@/module/auth/service/repo/reducer";
import { config } from "../config";

class AxiosHelper {
  private store: Store;
  private axiosInstance: AxiosInstance;

  constructor(store: Store) {
    this.store = store;
    this.axiosInstance = axios.create({ baseURL: config.apiUrl });
    this.initializeInterceptors();
  }

  private readonly initializeInterceptors = () => {
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const accessToken = this.store.getState().AuthRepo.accessToken;
        config.headers.Authorization = `Bearer ${accessToken}`;
        return config;
      },
      (error) => Promise.reject(error),
    );

    // this.axiosInstance.interceptors.response.use(
    //   (response: AxiosResponse) => response,
    //   (error) => {
    //     const originalRequest = error.config;
    //     if (error.response && error.response.status === 401 && !originalRequest._retry) {
    //       originalRequest._retry = true;
    //       if (error.response.data.message === "Invalid authorization token!") {
    //         this.store.dispatch(changeAccessToken(""));
    //         window.location.href = "/auth/login";
    //       }
    //     }
    //     return Promise.reject(error);
    //   },
    // );
  };

  get = (url: string, params?: any) => this.axiosInstance.get(url, { params });
  post = (url: string, data: any) => this.axiosInstance.post(url, data);
  put = (url: string, data: any) => this.axiosInstance.put(url, data);
  patch = (url: string, data: any) => this.axiosInstance.patch(url, data);
  delete = (url: string, params: any) => this.axiosInstance.delete(url, { params });
}

export { AxiosHelper };
