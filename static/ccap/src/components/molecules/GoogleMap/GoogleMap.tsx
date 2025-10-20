import { GoogleMap, useLoadScript } from "@react-google-maps/api";

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

export const GoogleMapComponent = ({ center, zoom = 12 }: IGoogleMapProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyApQnVLVEBTGCGgkgGPtMkEynv5y6n5aLI",
  });

  if (!isLoaded) {
    return null;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      options={options}
    />
  );
};

export default GoogleMapComponent;
