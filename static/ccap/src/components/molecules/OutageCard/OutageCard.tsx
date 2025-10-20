import { Badge } from "../../ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card";
import {
  formatCreationTime,
  getSeverityVariant,
  toTitleCase,
} from "../../../lib/utils";

import { IOutageCardProps } from "./IOutageCard.types";
import "./OutageCard.styles.scss";

/** Primary UI component for user interaction */
export const OutageCard = (outage: IOutageCardProps) => {
  const {
    title,
    severity,
    stage,
    identifiedAt,
    totalAffected,
    incidentId,
    onCardClick,
  } = outage;

  const handleClick = () => {
    if (onCardClick && incidentId) {
      onCardClick(incidentId);
    }
  };

  return (
    <li>
      <Card
        className="outage-item"
        onClick={handleClick}
        tabIndex={0}
        role="button"
        aria-label={`View details for incident ${incidentId}`}>
        <CardHeader className="outage-item__header">
          <h3>{title}</h3>

          {severity && (
            <Badge className={`rounded-full ${getSeverityVariant(severity)}`}>
              {toTitleCase(severity)}
            </Badge>
          )}
        </CardHeader>

        <CardContent className="outage-item__content">
          <p>{identifiedAt ? formatCreationTime(identifiedAt) : "Resolved"}</p>
        </CardContent>

        <CardFooter className="outage-item__footer">
          <Badge className="bg-gray-100 text-gray-900 rounded-full">
            {toTitleCase(stage)}
          </Badge>

          <p>{totalAffected.toLocaleString("en-GB")} affected</p>
        </CardFooter>
      </Card>
    </li>
  );
};

export default OutageCard;
