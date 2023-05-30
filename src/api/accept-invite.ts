import { getUserId } from "@/services/user-id-service";
import getBackendAxiosInstance from "./axiosApiFactory";

type acceptArguments = {
    username: string,
    inviteId: string,
}

/**
 * 
 * @returns string the ID of the chat room.
 */
export default async function acceptInvite(args: acceptArguments) {
  return (await getBackendAxiosInstance().post<string>(`/api/Invite/${args.inviteId}/accept`, JSON.stringify({
    username: args.username, 
    userId: getUserId()
  }))).data;
}