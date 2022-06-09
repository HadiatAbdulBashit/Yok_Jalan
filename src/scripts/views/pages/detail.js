import UrlParser from '../../routes/url-parse';
import { createDetailTemplate } from '../templates/template-creator';
import data from '../../../../DATA.json';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  render() {
    return `
      <div id='detail' class='gx-0 mx-4'></div>
      <div id="likeButtonContainer"></div>
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
    const destination = arrByID[0];

    const destinationContainer = document.querySelector('#detail');
    destinationContainer.innerHTML += createDetailTemplate(destination);

    LikeButtonInitiator.init({
      FavoriteButtonContainer: document.querySelector('#likeButtonContainer'),
      destination,
    });
  },
};

export default Detail;
