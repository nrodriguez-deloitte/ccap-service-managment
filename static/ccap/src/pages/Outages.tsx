import React, { useState } from "react";
import { useFetchOutageData } from "../lib/hooks";
import { Card, CardContent } from "../components/ui/card";
import OutageDetailPanel from "../components/molecules/OutageDetailPanel";
import TableOutages from "../components/molecules/TableOutages";

const Outages: React.FC = () => {
  const { data: outageData, loading, error } = useFetchOutageData();

  const [panelOpen, setPanelOpen] = useState(false);
  const [incidentId, setIncidentId] = useState("");

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
            outageData={outageData}
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
