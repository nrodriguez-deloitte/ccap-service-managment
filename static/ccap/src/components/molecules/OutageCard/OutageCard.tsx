import { Badge } from "../../ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card";
import {
  formatCreationTime,
  getTypeVariant,
  toTitleCase,
} from "../../../lib/utils";

import { IOutageCardProps } from "./IOutageCard.types";
import "./OutageCard.styles.scss";

/** Primary UI component for user interaction */
export const OutageCard = (outage: IOutageCardProps) => {
  const {
    title,
    type,
    status,
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

          {type && (
            <Badge className={`rounded-full ${getTypeVariant(type)}`}>
              {toTitleCase(type)}
            </Badge>
          )}
        </CardHeader>

        <CardContent className="outage-item__content">
          <p>{identifiedAt ? formatCreationTime(identifiedAt) : "Resolved"}</p>
        </CardContent>

        <CardFooter className="outage-item__footer">
          <Badge className="bg-gray-100 text-gray-900 rounded-full">
            {toTitleCase(status)}
          </Badge>

          <p>{totalAffected.toLocaleString("en-GB")} affected</p>
        </CardFooter>
      </Card>
    </li>
  );
};

export default OutageCard;
