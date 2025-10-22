import Resolver from "@forge/resolver";
import api, { route } from "@forge/api";
import { DUMMY_CONSTANTS } from "../static/ccap/src/lib/constants";

const resolver = new Resolver();

resolver.define("getOutageData", async (req) => {
  try {
    const response = await fetch("https://mock.httpstatus.io/200");
    if (!response.ok) throw new Error("Failed to fetch outage data");
    // For now, return a dummy constant or message
    return { success: true, data: DUMMY_CONSTANTS };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

resolver.define("getJiraUsersAndPermissions", async () => {
  // Get all users (paginated)
  const usersRes = await api
    .asUser()
    .requestJira(route`/rest/api/3/users/search`);
  const users = await usersRes.json();

  // Get global permissions
  const permsRes = await api
    .asUser()
    .requestJira(route`/rest/api/3/permissions`);
  const permissions = await permsRes.json();

  return { users, permissions };
});

export const handler = resolver.getDefinitions();
