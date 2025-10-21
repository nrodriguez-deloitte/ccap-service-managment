import { useEffect, useState } from "react";
import { Map } from "../components/organisms/Map";
import { IOutageDataProps } from "../types/global.types";
import { DUMMY_CONSTANTS } from "../lib/constants";

/**
 * MapPage displays the main map with outage data.
 * @param outageData - Data to pass to the Map component.
 */
const MapPage: React.FC = () => {
  const [outageData, setOutageData] = useState<IOutageDataProps>(
    {} as IOutageDataProps
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOutageData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://mock.httpstatus.io/200");
      if (!res.ok) throw new Error("Failed to fetch users");
      // const data = await res.json();

      setOutageData(DUMMY_CONSTANTS);
    } catch (err) {
      // Type guard to safely access error message
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOutageData();
  }, []);

  return (
    <div className="landing__content">
      <Map id="main-map" loading={loading} outageData={outageData} />
    </div>
  );
};

export default MapPage;
