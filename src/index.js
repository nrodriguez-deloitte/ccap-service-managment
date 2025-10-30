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
  // Get assignable users for project 'NO'
  const usersRes = await api
    .asUser()
    .requestJira(route`/rest/api/3/user/assignable/search?project=NO`);
  const usersRaw = await usersRes.json();

  // Get global permissions
  const permsRes = await api
    .asUser()
    .requestJira(route`/rest/api/3/permissions`);
  const permissionsRaw = await permsRes.json();

  // Map users to display name and permissions
  const users = usersRaw.map((user) => ({
    name: user.displayName,
    accountId: user.accountId,
    permissions: permissionsRaw.permissions, // Permissions are global, not per user
  }));

  return { users };
});

resolver.define("getJiraIssues", async (req) => {
  // Use a broad JQL for debugging and log the full response
  // Update JQL and fields to get workItem (summary), priority, and Incident ID (Short text custom field)
  const bodyData = JSON.stringify({
    jql: "project IS NOT EMPTY AND status != Done ORDER BY created DESC",
    fields: [
      "key",
      "summary",
      "priority",
      "status",
      "created",
      "updated",
      "customfield_10108", // * IncidentIDShortText
      "customfield_10078", // * RegionImpactedShortText
      "customfield_10190", // * LocationShortText
      "customfield_10070", // * ServicesImpactedNumber
      // "*all",
    ],
  });

  const response = await api
    .asUser()
    .requestJira(route`/rest/api/3/search/jql`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: bodyData,
    });

  const data = await response.json();

  // Map issues to expose required fields
  const issues = (data.issues || []).map((issue) => ({
    key: issue.key,
    title: issue.fields.summary,
    description: issue.fields.summary,
    type: issue.fields.priority?.name,
    status: issue.fields.status.name,
    identifiedAt: issue.fields.created,
    lastUpdate: issue.fields.updated,
    incidentId: issue.fields.customfield_10108,
    region: issue.fields.customfield_10078,
    location: issue.fields.customfield_10190,
    totalAffected: issue.fields.customfield_10070,
  }));

  return { issues, raw: data };
});

export const handler = resolver.getDefinitions();
