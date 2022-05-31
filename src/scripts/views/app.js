import routes from '../routes/routes';
import UrlParser from '../routes/url-parse';

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
  }
}

export default App;
