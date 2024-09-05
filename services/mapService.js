import L from "leaflet";
import "leaflet/dist/leaflet.css";

const mapService = {
  createMap: (mapContainer, location, zoom = 10) => {
    const coordinates = location.split(",").map(Number);
    return new L.Map(mapContainer, {
      center: coordinates,
      zoom: zoom,
      scrollWheelZoom: false,
    });
  },

  addTileLayer: (map) => {
    return L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    ).addTo(map);
  },

  addMarker: (map, location) => {
    const coordinates = location.split(",").map(Number);
    const marker = L.marker(coordinates).addTo(map);
    marker.bindPopup("Project Location: " + location).openPopup();
    return marker;
  },
};

export default mapService;