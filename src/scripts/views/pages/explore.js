import { createItemTemplate } from '../templates/template-creator';
import data from '../../../../DATA.json';

const Explore = {
  render() {
    return `
      <h2 class="">Ini Halaman Explore</h2>
      <div id='items' class='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-0'></div>
    `;
  },

  afterRender() {
    const restaurantContainer = document.querySelector('#items');
    data.destinations.forEach((item) => {
      restaurantContainer.innerHTML += createItemTemplate(item);
    });
  },
};

export default Explore;
