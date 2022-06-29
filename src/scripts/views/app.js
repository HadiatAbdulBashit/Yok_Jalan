/* eslint-disable no-multi-assign */
/* eslint-disable no-use-before-define */
import routes from '../routes/routes';
import UrlParser from '../routes/url-parse';

class App {
  constructor({
    navbarToggle, navbarMarkup, jumbotron, content,
  }) {
    this._navbarToggle = navbarToggle;
    this._navbarMarkup = navbarMarkup;
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
  }
}

export default App;
