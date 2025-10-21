import React from "react";

import { Badge } from "../../ui/badge";
import {
  formatCreationTime,
  getSeverityVariant,
  isoToDateTime,
  toTitleCase,
} from "../../../lib/utils";

import "./OutageDetailPanel.styles.scss";
import { OutageDetailPanelProps } from "./OutageDetailPanel.types";
import {
  LucideCircleCheck,
  LucideExternalLink,
  LucideMails,
  LucideMapPin,
} from "lucide-react";

const OutageDetailPanel: React.FC<OutageDetailPanelProps> = ({
  incidentId = "",
  loading = true,
  outageData,
  open = false,
  onClose,
}) => {
  if (loading) {
    return null;
  }

  const _incidentId = incidentId;

  const incidentData = outageData?.OUTAGES.find(
    (outage) => outage.incidentId === _incidentId
  );

  if (!incidentData) {
    return null;
  }

  return (
    <>
      <div
        className={`outageDetailPanel-overlay${
          open ? " outageDetailPanel-overlay--visible" : ""
        }`}
        aria-hidden="true"
        style={{ pointerEvents: open ? "auto" : "none" }}
        onClick={open ? onClose : undefined}
      />

      <aside
        className={`outageDetailPanel${
          open ? " outageDetailPanel--open" : " outageDetailPanel--closed"
        }`}
        aria-label="Outage details"
        tabIndex={open ? 0 : -1}>
        <button
          className="outageDetailPanel__close"
          aria-label="Close details panel"
          onClick={onClose}>
          <span className="outageDetailPanel__closeIcon" aria-hidden="true" />
        </button>

        <header className="outageDetailPanel__header">
          <h2 className="outageDetailPanel__title">Outage {_incidentId}</h2>
          <span className="outageDetailPanel__updated" aria-live="polite">
            Last updated {isoToDateTime(incidentData?.lastUpdate)}
          </span>
        </header>

        <div className="outageDetailPanel__actions">
          <a
            className="outageDetailPanel__link outageDetailPanel__link--primary"
            aria-label="View communication records"
            href={`/records?incidentId=${incidentData?.incidentId}`}>
            <LucideMails height={16} width={16} aria-hidden="true" />
            <span className="outageDetailPanel__linkText">
              View comms records
            </span>
          </a>

          <a
            className="outageDetailPanel__link outageDetailPanel__link--secondary"
            aria-label="Open in Jira"
            href={`https://www.atlassian.com/software/jira`}>
            <LucideExternalLink height={16} width={16} aria-hidden="true" />
            <span className="outageDetailPanel__linkText">Open in Jira</span>
          </a>
        </div>

        <section
          className="outageDetailPanel__card"
          aria-label="Outage summary">
          <div className="outageDetailPanel__cardContent">
            <div className="outageDetailPanel__cardHeader">
              <h3 className="outageDetailPanel__cardTitle">
                {incidentData.title}
              </h3>

              <div className="outageDetailPanel__badges">
                {incidentData.severity && (
                  <Badge
                    className={`rounded-full ${getSeverityVariant(
                      incidentData.severity
                    )}`}>
                    {toTitleCase(incidentData.severity)}
                  </Badge>
                )}

                {incidentData.stage && (
                  <Badge className="bg-gray-100 text-gray-900 rounded-full">
                    {toTitleCase(incidentData.stage)}
                  </Badge>
                )}

                <span className="outageDetailPanel__badge outageDetailPanel__badge--location">
                  <LucideMapPin width={12} height={12} aria-hidden="true" />
                  {incidentData.region}
                </span>
              </div>
            </div>

            <div className="outageDetailPanel__cardMeta">
              <span className="outageDetailPanel__metaId">{_incidentId}</span>
              <span className="outageDetailPanel__metaAffected">
                {incidentData.totalAffected.toLocaleString("en-GB")} services
                affected
              </span>
            </div>

            {incidentData.description && (
              <div className="outageDetailPanel__cardDesc">
                <p>{incidentData.description}</p>
              </div>
            )}
          </div>
        </section>

        <section
          className="outageDetailPanel__timeline"
          aria-label="Outage timeline">
          <div className="outageDetailPanel__timelineHeader">
            <h3 className="outageDetailPanel__timelineTitle">
              Outage timeline
            </h3>
            <span className="outageDetailPanel__timelineUpdated">
              {formatCreationTime(incidentData.outageTimeline[0].time)}
            </span>
          </div>

          <ol className="outageDetailPanel__timelineList">
            {incidentData.outageTimeline.map((item, idx) => (
              <li key={idx} className="outageDetailPanel__timelineItem">
                <LucideCircleCheck height={24} width={24} aria-hidden="true" />

                <div className="outageDetailPanel__timelineContent">
                  <div className="outageDetailPanel__timelineRow">
                    <span className="outageDetailPanel__timelineLabel">
                      {item.status}
                    </span>

                    {item.severity && (
                      <Badge
                        className={`rounded-full ${getSeverityVariant(
                          item.severity
                        )}`}>
                        {toTitleCase(item.severity)}
                      </Badge>
                    )}
                  </div>

                  {item.time && (
                    <div className="outageDetailPanel__timelineMeta">
                      <span className="outageDetailPanel__timelineDate">
                        {isoToDateTime(item.time)}
                      </span>
                    </div>
                  )}

                  <div className="outageDetailPanel__timelineMeta">
                    {item.stage && (
                      <Badge className="bg-gray-100 text-gray-900 rounded-full">
                        {toTitleCase(item.stage)}
                      </Badge>
                    )}

                    {typeof item.consumers === "number" && (
                      <span className="outageDetailPanel__timelineAffected">
                        {item.consumers.toLocaleString("en-GB")} consumers
                      </span>
                    )}

                    {typeof item.affected === "number" && (
                      <span className="outageDetailPanel__timelineAffected">
                        {item.affected.toLocaleString("en-GB")} affected
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </aside>
    </>
  );
};

export default OutageDetailPanel;
