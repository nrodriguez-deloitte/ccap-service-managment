import { IOutageDataProps } from "@/src/types/global.types";

export interface TableOutagesProps {
  children?: React.ReactNode;
  loading: boolean;
  outageData: IOutageDataProps;
  onRowClick?: (arg: string) => void;
}
