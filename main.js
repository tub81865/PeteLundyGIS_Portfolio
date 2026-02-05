console.log("main.js loaded");
const map = L.map('map').setView([39.9526, -75.1652], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([39.9526, -75.1652])
  .addTo(map)
  .bindPopup('Center City Philadelphia');
map.on('click', function (e) {
  L.marker(e.latlng)
    .addTo(map)
    .bindPopup(
      `Latitude: ${e.latlng.lat.toFixed(4)}<br>
       Longitude: ${e.latlng.lng.toFixed(4)}`
    )
    .openPopup();
});
