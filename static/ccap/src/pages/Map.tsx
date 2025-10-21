import { Map } from "../components/organisms/Map";

import { useFetchOutageData } from "../lib/hooks";

/**
 * MapPage displays the main map with outage data.
 * @param outageData - Data to pass to the Map component.
 */
const MapPage: React.FC = () => {
  const { data: outageData, loading, error } = useFetchOutageData();

  return (
    <div className="landing__content">
      <Map id="main-map" loading={loading} outageData={outageData} />
    </div>
  );
};

export default MapPage;
