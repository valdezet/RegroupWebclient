import newUserIdFromApi from "@/api/newUserId";

const sessionKeyName = "user_id";

export function getUserId(): string | null {
  return sessionStorage.getItem(sessionKeyName);
}

function storeUserId(userId: string): void {
  sessionStorage.setItem(sessionKeyName, userId);
}

/**
 * 
 * @returns if getting new user id is successful
 */
export async function newUserId() : Promise<boolean> {
  try {

    const id = (await newUserIdFromApi());
    storeUserId(id);
    return true;
  } catch {
    return false;
  }
}

