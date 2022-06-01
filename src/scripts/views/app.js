/* eslint-disable no-multi-assign */
/* eslint-disable no-use-before-define */
import routes from '../routes/routes';
import UrlParser from '../routes/url-parse';
import DataSource from '../data/data-source';
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

    const searchElement = document.querySelector('app-search');
    const destinationContainer = document.querySelector('#items');

    const renderResult = results => {
      for (let index = 0; index < results.length; index++) {
        const item = results[index];
        destinationContainer.innerHTML += createItemTemplate(item);
      }
    };

    const onButtonSearchClicked = async () => {
      try {
        const result = await DataSource.search(searchElement.value);
        destinationContainer.innerHTML = '';
        renderResult(result);
      } catch (message) {
        console.log(message);
      }
    };

    searchElement.clickEvent = onButtonSearchClicked;
  }
}

export default App;
