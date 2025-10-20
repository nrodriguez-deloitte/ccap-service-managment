import { IOutageProps } from "@/src/types/global.types";

export interface IOutageCardProps extends IOutageProps {
  onCardClick?: (incidentId: string) => void;
}
