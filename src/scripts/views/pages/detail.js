import UrlParser from '../../routes/url-parse';
import { createDetailTemplate } from '../templates/template-creator';
import data from '../../../../DATA.json';

const Detail = {
  render() {
    return `
      <div id='detail' class='gx-0 mx-4'></div>
    `;
  },

  afterRender() {
    function filterByID(item) {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      if (item.id === url.id) {
        return true;
      }
    }

    const arrByID = data.destinations.filter(filterByID);

    const destinationContainer = document.querySelector('#detail');
    destinationContainer.innerHTML += createDetailTemplate(arrByID[0]);
  },
};

export default Detail;
