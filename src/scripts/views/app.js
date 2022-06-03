/* eslint-disable no-multi-assign */
/* eslint-disable no-use-before-define */
import routes from '../routes/routes';
import UrlParser from '../routes/url-parse';
import DataSourceSearch from '../data/data-source-search';
import DataSourceCategory from '../data/data-seurce-category';
import { createItemTemplate } from './templates/template-creator';

class App {
  constructor({ jumbotron, content }) {
    this._jumbotron = jumbotron;
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    if (url !== '/' && url !== '/home') {
      this._jumbotron.hidden = true;
    } else {
      this._jumbotron.hidden = false;
    }

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });

    const destinationContainer = document.querySelector('#items');

    const renderResult = results => {
      for (let index = 0; index < results.length; index++) {
        const item = results[index];
        destinationContainer.innerHTML += createItemTemplate(item);
      }
    };

    const searchElement = document.querySelector('app-search');

    const onButtonSearchClicked = async () => {
      try {
        const result = await DataSourceSearch.show(searchElement.value);
        destinationContainer.innerHTML = '';
        renderResult(result);
      } catch (message) {
        console.log(message);
      }
    };
    searchElement.clickEvent = onButtonSearchClicked;

    const onCaregoryAllClicked = async () => {
      try {
        const result = await DataSourceCategory.show('');
        destinationContainer.innerHTML = '';
        renderResult(result);
      } catch (message) {
        console.log(message);
      }
    };
    document.querySelector('#caregory-all').addEventListener('click', onCaregoryAllClicked);

    const onCaregoryMuseumClicked = async () => {
      try {
        const result = await DataSourceCategory.show('museum');
        destinationContainer.innerHTML = '';
        renderResult(result);
      } catch (message) {
        console.log(message);
      }
    };
    document.querySelector('#caregory-museum').addEventListener('click', onCaregoryMuseumClicked);

    const onCaregoryPantaiClicked = async () => {
      try {
        const result = await DataSourceCategory.show('pantai');
        destinationContainer.innerHTML = '';
        renderResult(result);
      } catch (message) {
        console.log(message);
      }
    };
    document.querySelector('#caregory-pantai').addEventListener('click', onCaregoryPantaiClicked);

    const onCaregoryGunungClicked = async () => {
      try {
        const result = await DataSourceCategory.show('gunung');
        destinationContainer.innerHTML = '';
        renderResult(result);
      } catch (message) {
        console.log(message);
      }
    };
    document.querySelector('#caregory-gunung').addEventListener('click', onCaregoryGunungClicked);

    const onCaregorySejarahClicked = async () => {
      try {
        const result = await DataSourceCategory.show('sejarah');
        destinationContainer.innerHTML = '';
        renderResult(result);
      } catch (message) {
        console.log(message);
      }
    };
    document.querySelector('#caregory-sejarah').addEventListener('click', onCaregorySejarahClicked);
  }
}

export default App;
