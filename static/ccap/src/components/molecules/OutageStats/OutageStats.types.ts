import { IOutageDataProps } from "@/src/types/global.types";

export interface IOutageStatProps {
  id?: string;
  className?: string;
  loading: boolean;
  outageData: IOutageDataProps;
}
