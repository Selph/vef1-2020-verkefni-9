// eslint-disable-next-line import/no-unresolved
import { init } from './lib/map';
// eslint-disable-next-line import/no-unresolved
import { fetchEarthquakes } from './lib/earthquakes';

document.addEventListener('DOMContentLoaded', async () => {
  // Hér er allt „vírað“ saman
  init();
  fetchEarthquakes();
});
