import axios, { AxiosInstance } from "axios";

export default function getBackendAxiosInstance(): AxiosInstance {
  const instance : AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  });
  instance.defaults.headers.post["Content-Type"] = "Application/json";
  instance.defaults.headers.common["Accept"] = "Application/json";

  return instance;
    
}