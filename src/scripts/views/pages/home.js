/* eslint-disable no-plusplus */
import { createItemTemplate } from '../templates/template-creator';
import data from '../../../../DATA.json';
import '../../component/app-jumbotron';

const Home = {
  render() {
    return `
    <style>
    h1.title {
      font-size: 2rem;
      color: #00A3FF;
    }
    p.subtitle {
      font-size: 1.2rem;
      color: #042B41;
    }
    </style>

    <app-jumbotron></app-jumbotron>
    
    <h2 class="">Ini Halaman Beranda</h2>
    
    <section id="welcome">
      <div class="container">
        <div class="row welcome-wrapper mt-4 justify-content-between">
          <div class="col-sm-7 pe-3 d-flex flex-column justify-content-center">
            <h1 class='title'>Cari Tau Destinasi Wisata Favoritmu di sini! </h1>
            <p class='subtitle'>Indonesia memiliki banyak sekali destinasi wisata yang wajib dikunjungi. Kami akan mempromosikan destinasi wisata Indonesia yang indah dan menarik melalui website ini.</p>
          </div>
          <div class="col-sm-5">
            <img class='img-fluid welcome-img' src="./Welcomeimage.jpg" alt="Gambar welcome" />
          </div>
        </div>
      </div>
    </section>
    
    <div id='items' class='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-0'></div>
    `;
  },

  afterRender() {
    const restaurantContainer = document.querySelector('#items');
    for (let index = 0; index < 6; ++index) {
      const item = data.destinations[index];
      restaurantContainer.innerHTML += createItemTemplate(item);
    }
  },
};

export default Home;
