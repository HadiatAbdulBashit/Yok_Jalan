import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/main.css';
import '../styles/responsive.css';
import './component/app-bar';
import './component/app-footer';
import './component/app-search';
import './component/app-category-bar';
import './component/app-category';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  navbarToggle: document.querySelector('.navbar-toggler-icon'),
  navbarMarkup: document.querySelector('#navbarNavAltMarkup'),
  jumbotron: document.querySelector('#jumbotron'),
  content: document.querySelector('#mainContent'),
  searchElement: document.querySelector('app-search'),
  searchListElement: document.querySelector('search-list'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
  if (app._navbarMarkup.classList.contains('show')) {
    app._navbarToggle.click();
  }
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

AOS.init({
  duration: 800,
});
