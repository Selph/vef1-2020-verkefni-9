import { format } from 'date-fns';
import { append, appendClass, appendClassButton } from './utils';
import { createMarkers } from './map';

const URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';
const ul = document.querySelector('.earthquakes');
const loading = document.querySelector('.loading');
let i = 0;

// eslint-disable-next-line import/prefer-default-export
export async function fetchEarthquakes() {
  fetch(`${URL}`)
    .then((res) => res.json())
    .then((data) => {
      const earthquakes = data.features;
      // eslint-disable-next-line array-callback-return
      return earthquakes.map((eq) => {
        // Html elementin
        const li = document.createElement('li');
        const div = document.createElement('div');
        const div2 = document.createElement('div');
        const h2 = document.createElement('h2');
        const dl = document.createElement('dl');
        const dt = document.createElement('dt');
        const dt2 = document.createElement('dt');
        const dt3 = document.createElement('dt');
        const dd = document.createElement('dd');
        const dd2 = document.createElement('dd');
        const dd3 = document.createElement('dd');
        const button = document.createElement('button');
        const a = document.createElement('a');
        append(ul, li);
        append(li, div);
        append(div, h2);
        append(div, dl);
        append(dl, dt);
        append(dl, dd);
        append(dl, dt2);
        append(dl, dd2);
        append(dl, dt3);
        append(dl, dd3);
        appendClass(div, div2);
        appendClassButton(div2, button, i);

        // Titill
        const title = document.createTextNode(eq.properties.title);
        append(h2, title);

        // Tími
        const timiTitill = document.createTextNode('Tími');
        const timi = document.createTextNode(format(eq.properties.time, 'dd.MM.yyyy  kk:mm:ss'));
        append(dt, timiTitill);
        append(dd, timi);

        // Styrkur
        const styrkurTitill = document.createTextNode('Styrkur');
        const styrkur = document.createTextNode(`${eq.properties.mag} á richter`);
        append(dt2, styrkurTitill);
        append(dd2, styrkur);

        // Nánar
        const nanarTitill = document.createTextNode('Nánar');
        const nanar = document.createTextNode(`${eq.properties.url}`);
        append(dt3, nanarTitill);
        append(dd3, nanar);

        // Takki
        const takkatexti = document.createTextNode('Sjá á korti');
        append(button, takkatexti);

        // Hlekkur
        const hlekkurTexti = document.createTextNode('Skoða Nánar');
        const hlekkurTextiPopup = 'Skoða nánar';
        append(div2, a);
        append(a, hlekkurTexti);
        a.href = eq.properties.url;

        // Markers
        const latlong = eq.geometry.coordinates;
        const titlePopup = eq.properties.title;
        const timiPopup = format(eq.properties.time, 'dd.MM.yyyy  kk:mm:ss');
        const hlekkur = eq.properties.url;
        const buttonQuery = document.querySelector(`.earthquake${i}`);
        createMarkers(latlong, titlePopup, timiPopup, hlekkur, hlekkurTextiPopup, buttonQuery);

        // Slökkva á loading element
        loading.style.display = 'none';

        // Hækka gildi á button klösum til að ítra event listenerum á hvern takka
        i = parseInt(i, 10) + 1;
      });
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
}
