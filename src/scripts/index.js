import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import './component/app-bar';
import './component/app-footer';
import App from './views/app';

console.log('Yok Jalan!');

const app = new App({
  jumbotron: document.querySelector('#jumbotron'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
