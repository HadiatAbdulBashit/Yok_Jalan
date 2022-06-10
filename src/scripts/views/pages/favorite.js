import FavoriteDestinationIdb from '../../data/favorite-destination-idb';
import { createItemTemplate, noData } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div id='items' class='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0'></div>
    `;
  },

  async afterRender() {
    const destinations = await FavoriteDestinationIdb.getAllDestination();
    const destinationContainer = document.querySelector('#items');
    console.log(destinations);
    if (destinations[0]) {
      destinations.forEach((item) => {
        console.log(item);
        destinationContainer.innerHTML += createItemTemplate(item);
      });
    } else {
      destinationContainer.innerHTML += noData();
    }
  },
};

export default Favorite;
