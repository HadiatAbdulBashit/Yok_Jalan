class AppAboutUs extends HTMLElement {
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
                
                <section id='welcome'>
                <div class='container'>
                <div class='row justify-content-evenly mb-5 pb-5'>
                  <div class='col-sm-7 pe-3 d-flex flex-column justify-content-center text-center'>
                    <h1 class='title'>Tentang Yok Jalan</h1>
                    <p class='subtitle'>Yok Jalan merupakan sebuah platform berbasis website yang menyediakan berbagai informasi mengenai destinasi wisata di Indonesia. Tujuan dari dibuatnya website ini adalah untuk membantu mempromosikan destinasi wisata yang ada di Indonesia. Website ini merupakan tugas akhir capstone project grup CPSG-20.</p>
                  </div>
                  <div class='col-lg-3 d-flex justify-content-center'>
                    <img class='img-fluid welcome-img' src='../../images/vector/yokjalan.png' alt='Gambar Yok Jalan' />
                  </div>
                </div>
                </div>
                </section>             
              `;
  }
}

customElements.define('app-aboutus', AppAboutUs);
