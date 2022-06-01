import { createItemTemplate } from '../templates/template-creator';
import data from '../../../../DATA.json';
import '../../component/app-search';

const Explore = {
  render() {
    return `
    <app-search></app-search>
      <div id='items' class='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-0'></div>
    `;
  },

  afterRender() {
    const destinationContainer = document.querySelector('#items');
    data.destinations.forEach((item) => {
      destinationContainer.innerHTML += createItemTemplate(item);
    });
  },
};

export default Explore;
