// eslint-disable-next-line import/no-unresolved
import L from 'leaflet';

let map;
export function createMarkers(coordinates, titill, timi, hlekkur, hlekkurTexti, button) {
  const fylki = [];
  for (let i = 1; i >= 0; i -= 1) {
    const stadsetning = coordinates[i];
    fylki.push(stadsetning);
  }
  const marker = L.marker(fylki).addTo(map);
  marker.bindPopup(`
    <b>${titill}</b>
    <br>
    <br>
    ${timi}
    <br>
    <br>
    <a href="${hlekkur}">${hlekkurTexti}</a>
  `);
  const popup = L.popup({});
  popup.setLatLng(fylki);
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

export function init() {
  map = L.map(document.querySelector('.map')).setView([0.0, 0.0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
  }).addTo(map);
}
