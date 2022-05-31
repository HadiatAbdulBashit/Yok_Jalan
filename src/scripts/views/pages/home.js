import { createItemTemplate } from '../templates/template-creator';
import data from '../../../../DATA.json';
import '../../component/app-jumbotron';
import '../../component/app-welcome';

const Home = {
  render() {
    return `
    <app-jumbotron></app-jumbotron>
    <app-welcome></app-welcome>
    <h2 class='pt-5 ps-2'>Rekomendasi</h2>
    <div id='items' class='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-0'></div>
    `;
  },

  afterRender() {
    const destinationContainer = document.querySelector('#items');
    for (let index = 0; index < 6; ++index) {
      const random = Math.floor(Math.random() * data.destinations.length);
      const item = data.destinations[random];
      destinationContainer.innerHTML += createItemTemplate(item);
    }
  },
};

export default Home;
