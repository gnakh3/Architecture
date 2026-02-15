"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

type LocationTypes = {
  id: number;
  position: [number, number];
  name: string;
};

const icon = L.icon({
  iconUrl: "/location.svg",
  iconSize: [30, 40],
});

const FitBounds = ({ positions }: { positions: [number, number][] }) => {
  const map = useMap();

  useEffect(() => {
    if (!positions.length) return;

    const bounds = L.latLngBounds(positions);

    setTimeout(() => {
      map.flyToBounds(bounds, {
        padding: [60, 60],
        duration: 2, 
      });
    }, 300);
  }, [map, positions]);

  return null;
};

const Map = () => {
  const locations: Array<LocationTypes> = [
    { id: 1, position: [36.1666, -86.7836], name: "Main Office" },
    { id: 2, position: [30.2672, -97.7431], name: "Office II" },
  ];

  const positions = locations.map((loc) => loc.position);

  return (
    <div className="w-full h-140 max-sm:h-91.75 z-10 overflow-hidden rounded-xl">
      <MapContainer
        center={[35, -90]}
        zoom={4}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        {locations.map((loc) => (
          <Marker key={loc.id} position={loc.position} icon={icon}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}

        <FitBounds positions={positions} />
      </MapContainer>
    </div>
  );
};

export default Map;
