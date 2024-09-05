import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ location }) => {
  const [mapCenter, setMapCenter] = useState([0, 0]);

  useEffect(() => {
    if (location) {
      const coordinates = location.split(',').map(Number);
      setMapCenter(coordinates);
    }
  }, [location]);

  return (
    <MapContainer center={mapCenter} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {location && (
        <Marker position={mapCenter}>
          <Popup>
            <span>Project Location: {location}</span>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;