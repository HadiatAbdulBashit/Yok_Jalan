import UrlParser from '../../routes/url-parse';
import { createItemTemplate } from '../templates/template-creator';
import data from '../../../../DATA.json';

const Explore = {
  render() {
    return `
      <app-category-bar></app-category-bar>
      <div id='items' class='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-0'></div>
    `;
  },

  afterRender() {
    const destinationContainer = document.querySelector('#items');
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    if (url.id === 'all') {
      data.destinations.forEach((item) => {
        destinationContainer.innerHTML += createItemTemplate(item);
      });
    } else if (url.id === 'museum') {
      function filterByID(item) {
        if (item.kategori === 'Museum') {
          return true;
        }
      }

      const arrByID = data.destinations.filter(filterByID);
      for (let index = 0; index < arrByID.length; index++) {
        const item = arrByID[index];
        destinationContainer.innerHTML += createItemTemplate(item);
      }
    } else if (url.id === 'gunung') {
      function filterByID(item) {
        if (item.kategori === 'Gunung') {
          return true;
        }
      }

      const arrByID = data.destinations.filter(filterByID);
      for (let index = 0; index < arrByID.length; index++) {
        const item = arrByID[index];
        destinationContainer.innerHTML += createItemTemplate(item);
      }
    } else if (url.id === 'pantai') {
      function filterByID(item) {
        if (item.kategori === 'Pantai') {
          return true;
        }
      }

      const arrByID = data.destinations.filter(filterByID);
      for (let index = 0; index < arrByID.length; index++) {
        const item = arrByID[index];
        destinationContainer.innerHTML += createItemTemplate(item);
      }
    } else if (url.id === 'sejarah') {
      function filterByID(item) {
        if (item.kategori === 'Tempat Bersejarah') {
          return true;
        }
      }

      const arrByID = data.destinations.filter(filterByID);
      for (let index = 0; index < arrByID.length; index++) {
        const item = arrByID[index];
        destinationContainer.innerHTML += createItemTemplate(item);
      }
    }
  },
};

export default Explore;
