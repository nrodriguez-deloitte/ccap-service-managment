import { IOutageDataProps } from "@/src/types/global.types";

export interface IMapProps {
  id: string;
  loading: boolean;
  outageData: IOutageDataProps;
}
