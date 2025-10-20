import { Map } from "../components/organisms/Map";
import { IOutageDataProps } from "../types/global.types";

type MapPageProps = {
  outageData: IOutageDataProps;
};

/**
 * MapPage displays the main map with outage data.
 * @param outageData - Data to pass to the Map component.
 */
const MapPage: React.FC<MapPageProps> = ({ outageData }: MapPageProps) => {
  return (
    <div className="landing__content">
      <Map id="main-map" outageData={outageData} />
    </div>
  );
};

export default MapPage;
