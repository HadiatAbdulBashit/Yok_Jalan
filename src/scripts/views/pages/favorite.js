import FavoriteDestinationIdb from '../../data/favorite-destination-idb';
import { createItemTemplate, noData } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div id='items' class='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0 justify-content-evenly'></div>
      <div id='nodata'></div>
    `;
  },

  async afterRender() {
    const destinations = await FavoriteDestinationIdb.getAllDestination();
    const destinationContainer = document.querySelector('#items');
    const noDataContainer = document.querySelector('#nodata');

    if (destinations[0]) {
      destinations.forEach((item) => {
        destinationContainer.innerHTML += createItemTemplate(item);
      });
    } else {
      noDataContainer.innerHTML = `<div class='text-center fs-1 mt-3'>Anda belum menambahkan destinasi yang di favoritkan !</div>${noData()}`;
    }
  },
};

export default Favorite;
