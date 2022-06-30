class AppWelcome extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
            <section id="welcome">
                <div class="row justify-content-evenly mb-5 pb-5">
                  <div class="col-lg-6 pe-3 d-flex flex-column justify-content-center text-center" data-aos="fade-down" data-aos-offset="90">
                    <h2 class='title'>Cari Tau Destinasi Wisata Favoritmu di sini! </h2>
                    <p class='subtitle'>Indonesia memiliki banyak sekali destinasi wisata yang wajib dikunjungi. Kami akan mempromosikan destinasi wisata Indonesia yang indah dan menarik melalui website ini.</p>
                  </div>
                  <div class="col-lg-5" data-aos="fade-up" data-aos-offset="90">
                    <picture>
                      <source media="(max-width: 600px)" srcset="./images/vector/Welcomeimage-small.png">
                      <img class='img-fluid welcome-img' src="../../images/vector/Welcomeimage.png" alt="Gambar welcome" />
                    </picture>
                  </div>
                </div>
            </section>
            `;
  }
}

customElements.define('app-welcome', AppWelcome);
