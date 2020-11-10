// eslint-disable-next-line import/no-unresolved
import L from 'leaflet';

let map;

function bindMarker(coordinates, titill, timi, hlekkur, hlekkurTexti) {
  const marker = L.marker(coordinates).addTo(map);
  marker.bindPopup(`
    <b>${titill}</b>
    <br>
    <br>
    ${timi}
    <br>
    <br>
    <a href="${hlekkur}">${hlekkurTexti}</a>
  `);
}

function bindPopup(coordinates, titill, timi, hlekkur, hlekkurTexti, button) {
  const popup = L.popup({});
  popup.setLatLng(coordinates);
  popup.setContent(`
    <b>${titill}</b>
    <br>
    <br>
    ${timi}
    <br>
    <br>
    <a href="${hlekkur}">${hlekkurTexti}</a>
  `);
  button.addEventListener('click', () => {
    popup.openOn(map);
  });
}

export function createMarkers(coordinates, titill, timi, hlekkur, hlekkurTexti, button) {
  const fylki = [coordinates[1], coordinates[0]];
  bindMarker(fylki, titill, timi, hlekkur, hlekkurTexti);
  bindPopup(fylki, titill, timi, hlekkur, hlekkurTexti, button);
}

export function init() {
  map = L.map(document.querySelector('.map')).setView([0.0, 0.0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
  }).addTo(map);
}
