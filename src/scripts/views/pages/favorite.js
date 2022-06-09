import FavoriteDestinationIdb from '../../data/favorite-destination-idb';
import { createItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div id='items' class='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-0'></div>
    `;
  },

  async afterRender() {
    const destinations = await FavoriteDestinationIdb.getAllDestination();
    const destinationContainer = document.querySelector('#items');
    destinations.forEach((item) => {
      destinationContainer.innerHTML += createItemTemplate(item);
    });
  },
};

export default Favorite;
