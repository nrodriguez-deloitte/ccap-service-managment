import { useDataOutage } from "@/app/contexts/DataContext";
import { Card } from "@/components/ui/card";

import "./OutageStats.styles.scss";
import { IOutageStatProps } from "./OutageStats.types";

/** Primary UI component for user interaction */
export const OutageStats = (props: IOutageStatProps) => {
  const { id, className } = props;
  const { outageData, loading } = useDataOutage();

  return (
    <ul id={id} className={`outage-stats ${className}`}>
      <li>
        <Card className="outage-stats__card">
          {loading ? (
            <div className="animate-pulse h-6 w-full mb-2 rounded-full bg-gray-200" />
          ) : (
            <span className="--red">15</span>
          )}
          Ongoing ACMA outages
        </Card>
      </li>

      <li>
        <Card className="outage-stats__card">
          {loading ? (
            <div className="animate-pulse h-6 w-full mb-2 rounded-full bg-gray-200" />
          ) : (
            <span>{outageData.ACMA_OUTAGES.toLocaleString("en-GB")}</span>
          )}
          Services impacted current ACMA Outages
        </Card>
      </li>

      <li>
        <Card className="outage-stats__card">
          {loading ? (
            <div className="animate-pulse h-6 w-full mb-2 rounded-full bg-gray-200" />
          ) : (
            <span>{outageData.UNPLANNED_OUTAGES.toLocaleString("en-GB")}</span>
          )}
          Current unplanned outages
        </Card>
      </li>
    </ul>
  );
};

export default OutageStats;
