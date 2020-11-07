import { init } from './lib/map';
import { fetchEarthquakes } from './lib/earthquakes';

document.addEventListener('DOMContentLoaded', async () => {
  // Vírarnir hjá mér eru „undir húddinu“
  init();
  fetchEarthquakes();
});
