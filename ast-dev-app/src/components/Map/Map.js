import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./Map.css";

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <GMap />;
}

function GMap() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Map;
