import axios, { AxiosInstance } from "axios";

export default function getBackendAxiosInstance(): AxiosInstance {
  const instance : AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
  });

  return instance;
    
}