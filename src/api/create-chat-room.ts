import { getUserId } from "@/services/user-id-service";
import getBackendAxiosInstance from "./axiosApiFactory";
import CreateChatRoomResponse from "@/data/responses/create-chat-room";


export default async function createChatRoom(name:string) {
  const userId = getUserId();
  return (await getBackendAxiosInstance().post<CreateChatRoomResponse>("/api/ChatRoom", {
    name: name,
    userId: userId
  })).data;
}