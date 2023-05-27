import getBackendAxiosInstance from "./axiosApiFactory";

type userId = string;

export default async function newUserId(): Promise<userId> {
  return (await getBackendAxiosInstance().get('/api/NewUserId')).data;
}