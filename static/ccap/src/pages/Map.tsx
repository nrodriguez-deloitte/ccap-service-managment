import { useEffect, useState } from "react";
import { Map } from "../components/organisms/Map";

import { useFetchOutageData } from "../lib/hooks";
import { invoke } from "@forge/bridge";
import { IOutageProps } from "../types/global.types";

/**
 * MapPage displays the main map with outage data.
 * @param outageData - Data to pass to the Map component.
 */
const MapPage: React.FC = () => {
  // const { data: outageData, loading, error } = useFetchOutageData();

  // outageData holds the array of outage issues fetched from Jira
  const [outageData, setOutageData] = useState<IOutageProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch Jira issues using Forge bridge
    invoke("getJiraIssues", {})
      .then((result: any) => {
        // Set outageData to the array of issues, or an empty array if none
        setOutageData(result?.issues || []);
        setLoading(false);
      })
      .catch((err: any) => {
        setError(err?.message || "Failed to fetch issues");
        setLoading(false);
      });
  }, []);

  return (
    <div className="landing__content">
      {/* Pass outageDataProps to Map to satisfy IMapProps */}
      <Map
        id="main-map"
        loading={loading}
        outageData={{
          OUTAGES: outageData,
        }}
      />
    </div>
  );
};

export default MapPage;
