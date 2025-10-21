import Resolver from "@forge/resolver";
import fetch from "node-fetch";

const resolver = new Resolver();

resolver.define("getOutageData", async (req) => {
  try {
    const response = await fetch("https://mock.httpstatus.io/200");
    if (!response.ok) throw new Error("Failed to fetch outage data");
    // const data = await response.json();
    // return data;
    // For now, return a dummy constant or message
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

export const handler = resolver.getDefinitions();
