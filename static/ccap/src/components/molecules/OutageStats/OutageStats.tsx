import { Card } from "../../ui/card";

import "./OutageStats.styles.scss";
import { IOutageStatProps } from "./OutageStats.types";

/** Primary UI component for user interaction */
export const OutageStats = ({
  id,
  className,
  loading = true,
  outageData,
}: IOutageStatProps) => {
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
            <span>
              {outageData && typeof outageData.ACMA_OUTAGES === "number"
                ? outageData.ACMA_OUTAGES.toLocaleString("en-GB")
                : "0"}
            </span>
          )}
          Services impacted current ACMA Outages
        </Card>
      </li>

      <li>
        <Card className="outage-stats__card">
          {loading ? (
            <div className="animate-pulse h-6 w-full mb-2 rounded-full bg-gray-200" />
          ) : (
            <span>
              {outageData && typeof outageData.UNPLANNED_OUTAGES === "number"
                ? outageData.UNPLANNED_OUTAGES.toLocaleString("en-GB")
                : "0"}
            </span>
          )}
          Current unplanned outages
        </Card>
      </li>
    </ul>
  );
};

export default OutageStats;
