export interface OutageTimelineEvent {
  status: string;
  time: string;
  stage: string;
  severity: string;
  consumers?: number;
  affected?: number;
  commsCompliance?: Array<{
    channel: string;
    time: string;
    complete: boolean;
  }>;
}

export interface IOutageProps {
  incidentId: string;
  communicationId: string;
  compliance: boolean;
  status: string;
  type: string;
  severity: string;
  stage: string;
  region: string;
  identifiedAt: string;
  lastUpdate: string;
  title: string;
  description: string;
  causeOfOutage: string;
  totalAffected: number;
  outageTimeline: Array<OutageTimelineEvent>;
}

export interface ICommsRecordProps {
  customerId: string;
  incidentId: string;
  channel: string;
  sentAt: string;
  region: string;
  status: string;
}

export interface IOutageDataProps {
  LAST_UPDATED: string;
  ACMA_OUTAGES: number;
  ONGOING_ACMA_OUTAGES: number;
  UNPLANNED_OUTAGES: number;
  OUTAGES: Array<IOutageProps>;
  COMMS_RECORDS: Array<ICommsRecordProps>;
}
