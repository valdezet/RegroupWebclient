import getBackendAxiosInstance from './axiosApiFactory';
import { getUserId } from '@/services/user-id-service';
import InviteInfo from '@/data/responses/invite-info';
import InviteInfoRequest from '@/data/requests/invite-info-request';

export default async function getInviteInfo(inviteId: string) {
  const userId = getUserId();
  const requestArgs: InviteInfoRequest = {
    inviteId: inviteId,
    userId: userId
  };
  const response = await  getBackendAxiosInstance()
    .get<InviteInfo>("/api/Invite", {
      params: requestArgs
    });

  return response.data;
}