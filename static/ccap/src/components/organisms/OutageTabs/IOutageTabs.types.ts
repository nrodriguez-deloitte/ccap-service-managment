import { IOutageDataProps } from "@/src/types/global.types";

export interface IOutageTabsProps {
  id: string;
  outageData: IOutageDataProps;
  onCardClick?: (arg: string) => void;
}
