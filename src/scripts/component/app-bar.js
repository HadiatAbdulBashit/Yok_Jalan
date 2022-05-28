class AppBar extends HTMLElement {
    connectedCallback() {
        this._render();
    }

    _render() {
        this.innerHTML = `
        <style>
          .bg-navbar {
            background-color: #00C2FF;
            border-radius: 0px 0px 20px 20px;
          }
        </style>
        <nav class="navbar navbar-expand-lg navbar-dark bg-navbar p-3">
          <div class="container-fluid">
            <a class="navbar-brand fs-3" href="#">
                Yok Jalan
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Beranda</a>
                <a class="nav-link active" href="#">Jelajah</a>
                <a class="nav-link active" href="#">Favorit</a>
                <a class="nav-link active" href="#">Tentang Kami</a>
              </div>
            </div>
          </div>
        </nav>
        `
    }
}

customElements.define('app-bar', AppBar);