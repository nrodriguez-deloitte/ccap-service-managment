import { IOutageDataProps } from "@/src/types/global.types";

export interface OutageDetailPanelProps {
  children?: React.ReactNode;
  incidentId?: string;
  outageData?: IOutageDataProps;
  open?: boolean;
  onClose?: () => void;
}
