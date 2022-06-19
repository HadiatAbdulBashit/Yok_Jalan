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
            <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active nav__item" aria-current="page" href="#/home">Beranda</a>
                <a class="nav-link active nav__item" href="#/explore">Jelajah</a>
                <a class="nav-link active nav__item" href="#/favorite">Favorit</a>
                <a class="nav-link active nav__item" href="#/about">Tentang Kami</a>
              </div>
            </div>
          </div>
        </nav>
        `;
  }
}

customElements.define('app-bar', AppBar);
