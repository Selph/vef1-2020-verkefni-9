const URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

// eslint-disable-next-line import/prefer-default-export
export async function fetchEarthquakes() {
  return fetch(`${URL}`);
}
