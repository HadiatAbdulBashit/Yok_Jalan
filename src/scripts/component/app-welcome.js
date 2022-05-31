class AppWelcome extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
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
  
              <section id="welcome">
              <div class="container">
                <div class="row welcome-wrapper mt-4 justify-content-between">
                  <div class="col-sm-7 pe-3 d-flex flex-column justify-content-center">
                    <h1 class='title'>Cari Tau Destinasi Wisata Favoritmu di sini! </h1>
                    <p class='subtitle'>Indonesia memiliki banyak sekali destinasi wisata yang wajib dikunjungi. Kami akan mempromosikan destinasi wisata Indonesia yang indah dan menarik melalui website ini.</p>
                  </div>
                  <div class="col-sm-5">
                    <img class='img-fluid welcome-img' src="../../images/vector/Welcomeimage.jpg" alt="Gambar welcome" />
                  </div>
                </div>
              </div>
            </section>
            `;
  }
}

customElements.define("app-welcome", AppWelcome);
