class AppJumbotron extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
          <style>
            .jumbotron {
              background: linear-gradient(180deg, #7392E1 17.59%, rgba(115, 146, 225, 0.38) 100%)
            }
  
            img {
              max-width: 400px;
            }
  
            .jumbotron__title {
              color: #fff;
              font-size: 36px;
            }
            
            .jumbotron__tagline {
                color: #fff;
                font-size: 20px;
            }
          </style>
  
          <div class="jumbotron">
          <div class="row d-flex justify-content-evenly pt-5">
              <div class="col-m-4 col-sm-4">
                  <img src="../../images/vector/tourists.png" alt="gambar">
              </div>
              <div class="col-m-8 col-sm-6">
                  <h2 class="jumbotron__title">Nikmati Keindahan Wisata Nusantara</h2>
                  <p class="jumbotron__tagline">Jelajahi setiap tempat wisata lokal yang ada</p>
              </div>
          </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,192L60,186.7C120,181,240,171,360,192C480,213,600,267,720,250.7C840,235,960,149,1080,138.7C1200,128,1320,192,1380,224L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
          </div>
        `;
  }
}

customElements.define('app-jumbotron', AppJumbotron);
