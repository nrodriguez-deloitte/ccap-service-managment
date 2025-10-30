import React, { useEffect, useState } from "react";
import { useFetchOutageData } from "../lib/hooks";
import { Card, CardContent } from "../components/ui/card";
import OutageDetailPanel from "../components/molecules/OutageDetailPanel";
import TableOutages from "../components/molecules/TableOutages";
import { IOutageProps } from "../types/global.types";
import { invoke } from "@forge/bridge";

const Outages: React.FC = () => {
  // const { data: outageData, loading, error } = useFetchOutageData();

  // outageData holds the array of outage issues fetched from Jira
  const [outageData, setOutageData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [incidentId, setIncidentId] = useState("");

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
      <h2>All Outages</h2>

      <p>
        Filter, find and extract notification records sent to customers during
        an outage
      </p>

      <Card className="records-card">
        <CardContent className="records-card__content">
          <TableOutages
            outageData={{
              OUTAGES: outageData,
            }}
            loading={loading}
            onRowClick={(arg) => {
              setPanelOpen(true);
              setIncidentId(arg);
            }}
          />

          <OutageDetailPanel
            incidentId={incidentId}
            loading={loading}
            open={panelOpen}
            onClose={() => setPanelOpen(false)}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Outages;
