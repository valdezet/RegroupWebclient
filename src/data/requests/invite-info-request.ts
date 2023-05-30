/**
 * @param UserId the invite ID given by another user.
 */
type InviteInfoRequest = {
    inviteId: string,
    userId: string | null
}

export default InviteInfoRequest;