import { GoogleMap as ReactGoogleMap, useLoadScript } from "@react-google-maps/api";

import "./GoogleMap.styles.scss";
import { IGoogleMapProps } from "./IGoogleMap.types";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const options = {
  mapTypeControl: false,
  fullscreenControl: false,
  streetViewControl: false,
};

export const GoogleMap = ({ center, zoom = 12 }: IGoogleMapProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "", // Use your env setup
  });

  if (!isLoaded) {
    return null;
  }

  return (
    <ReactGoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      options={options}
    />
  );
};

export default GoogleMap;
