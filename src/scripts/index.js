import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import './component/app-bar';
import './component/app-footer';
<<<<<<< HEAD
import './component/app-search';
=======
import './component/app-category-bar';
import './component/app-category';
>>>>>>> 4a2a69a220327b63dab0c250532da8ec0f46cf24
import App from './views/app';

const app = new App({
  jumbotron: document.querySelector('#jumbotron'),
  content: document.querySelector('#mainContent'),
  searchElement: document.querySelector('app-search'),
  searchListElement: document.querySelector('search-list'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
