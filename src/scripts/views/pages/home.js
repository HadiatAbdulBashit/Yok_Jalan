/* eslint-disable no-plusplus */
import { createItemTemplate } from '../templates/template-creator';
import data from '../../../../DATA.json';

const Home = {
  render() {
    return `
      <h2 class="">Ini Halaman Beranda</h2>
      <div id='items' class='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-0'></div>
      `;
  },

  afterRender() {
    const restaurantContainer = document.querySelector('#items');
    for (let index = 0; index < 6; ++index) {
      const item = data.destinations[index];
      restaurantContainer.innerHTML += createItemTemplate(item);
    }
  },
};

export default Home;
