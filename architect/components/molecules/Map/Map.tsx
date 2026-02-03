"use client"
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet"

type LocationTypes = {
  id: number; 
  position: [number, number]; 
  name: string
}

const icon = L.icon({
  iconUrl: "/location.svg",
  iconSize: [30, 40]
});

const FitBounds = ({ positions }: { positions: [number, number][] }) => {
  const map = useMap();
  map.fitBounds(L.latLngBounds(positions));
  return null;
};

const Map = () => {
  const locations: Array<LocationTypes> = [
    { id: 1, position: [36.1666, -86.7836], name: "Main Office" },
    { id: 2, position: [30.2672, -97.7431], name: "Office II" }
  ];

  const positions = locations.map(loc => loc.position);

  return (
    <MapContainer zoom={5} className='w-full h-140 max-sm:h-91.75 max-sm:-mx-8 max-sm:w-[calc(100%+64px)] mt-20'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      
      {locations.map(loc => (
        <Marker key={loc.id} position={loc.position} icon={icon}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}

      <FitBounds positions={positions} />
    </MapContainer>
  );
}

export default Map;