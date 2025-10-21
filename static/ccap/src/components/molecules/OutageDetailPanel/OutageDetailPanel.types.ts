import { IOutageDataProps } from "@/src/types/global.types";

export interface OutageDetailPanelProps {
  children?: React.ReactNode;
  incidentId?: string;
  loading: boolean;
  outageData?: IOutageDataProps;
  open?: boolean;
  onClose?: () => void;
}
