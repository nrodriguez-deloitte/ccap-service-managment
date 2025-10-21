import { IOutageDataProps } from "@/src/types/global.types";

export interface IOutageTabsProps {
  id: string;
  loading: boolean;
  outageData: IOutageDataProps;
  onCardClick?: (arg: string) => void;
}
