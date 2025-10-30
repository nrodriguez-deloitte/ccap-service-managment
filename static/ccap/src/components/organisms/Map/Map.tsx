import { useState } from "react";

import "./Map.styles.scss";
import { IMapProps } from "./Map.types";
import { GoogleMap } from "../../molecules/GoogleMap";
import OutageDetailPanel from "../../molecules/OutageDetailPanel";
import { OutageStats } from "../../molecules/OutageStats";
import { OutageTabs } from "../OutageTabs";
import { formatCreationTime } from "../../../lib/utils";
import { Card } from "../../ui/card";

export const Map = ({ id, loading = true, outageData }: IMapProps) => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [incidentId, setIncidentId] = useState("");

  return (
    <div id={id} className="map w-full">
      <Card className="map__card">
        {/* <div className="map__header">
          <div className="map__text">
            <h2>Active ACMA Outages</h2>

            {loading ? (
              <div className="animate-pulse h-5 w-full rounded-full bg-gray-200" />
            ) : (
              <p>
                Last updated at {formatCreationTime(outageData.LAST_UPDATED)}
              </p>
            )}
          </div>

          <OutageStats
            id="outage-stat"
            loading={loading}
            outageData={outageData}
          />
        </div> */}

        <Card className="map__map p-0 overflow-hidden">
          <GoogleMap center={{ lat: -25.7326, lng: 134.4895 }} zoom={4} />
        </Card>

        <OutageTabs
          id="outage-tabs"
          loading={loading}
          outageData={outageData}
          onCardClick={(incidentId) => {
            setPanelOpen(true);
            setIncidentId(incidentId);
          }}
        />

        <OutageDetailPanel
          incidentId={incidentId}
          open={panelOpen}
          loading={loading}
          outageData={outageData}
          onClose={() => setPanelOpen(false)}
        />
      </Card>
    </div>
  );
};

export default Map;
