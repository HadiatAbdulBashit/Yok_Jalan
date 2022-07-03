/* eslint-disable no-param-reassign */
class AppBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg bg__navbar p-3">
        <div class="container-fluid">
          <a class="navbar-brand fs-3 nav__title" href="#">
            <img src="./Logo.png" alt="Yok Jalan" height="60">
            Yok Jalan
          </a>
          <div class="d-flex align-items-center">
            <div id="toggle" class="me-2">
              <i class="indicator"></i>
            </div>
            <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active nav__item px-2" aria-current="page" href="#/home">Beranda</a>
              <a class="nav-link active nav__item px-2" href="#/explore">Jelajah</a>
              <a class="nav-link active nav__item px-2" href="#/favorite">Favorit</a>
              <a class="nav-link active nav__item px-2" href="#/about">Tentang Kami</a>
            </div>
          </div>
        </div>
      </nav>
      `;

    const toggle = document.querySelector('#toggle');
    const navs = document.querySelectorAll('.nav-link');

    toggle.onclick = () => {
      toggle.classList.toggle('active');
      document.querySelector('#mainContent').classList.toggle('dark');
      document.querySelector('path').classList.toggle('dark');
      document.querySelector('html').classList.toggle('dark');
      document.querySelector('body').classList.toggle('dark');
    };

    navs.forEach((nav) => {
      nav.onclick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      };
    });
  }
}

customElements.define('app-bar', AppBar);
