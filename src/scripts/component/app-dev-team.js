class AppDevTeam extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
          <section id="devTeam" class="devTeam d-flex justify-content-center align-items-center position-relative">
              <div class="devTitle d-flex justify-content-center align-items-center position-relative pt-5 pb-3 mb-3 mt-5 text-center">
                <h2>Tim Kami</h2>
              </div>  
              <div class="devCard d-flex justify-content-center align-items-center position-relative">
                <div class="imgBx position-relative">
                  <img src="./images/team/Putri.png" alt="Putri Nur Aini Mahfudz" class="position-absolute">
                </div>
                <div class="profileBx d-flex justify-content-center align-items-center position-relative">
                  <div class="profile">
                    <h3>Putri Nur Aini Mahfudz</h3>
                    <p>Halo, saya merupakan seorang mahasiswa semester 6 di Universitas Duta Bangsa Surakarta</p>
                    <ul class="media d-flex justify-content-evenly align-items-center position-relative">
                      <li><a href="https://github.com/putrinamahfudz" class="d-flex justify-content-evenly align-items-center rounded-circle"><i class="fa-brands fa-github"></i></a></li>
                      <li><a href="https://www.instagram.com/putputri19/" class="d-flex justify-content-evenly align-items-center rounded-circle"><i class="fa-brands fa-instagram"></i></a></li>
                      <li><a href="https://www.linkedin.com/in/putrinamahfudz/" class="d-flex justify-content-evenly align-items-center rounded-circle"><i class="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="devCard d-flex justify-content-center align-items-center position-relative">
                <div class="imgBx position-relative">
                  <img src="./images/team/Febby.png" alt="Febby Putri Marshanda" class="position-absolute">
                </div>
                <div class="profileBx d-flex justify-content-center align-items-center position-relative">
                  <div class="profile">
                    <h3>Febby Putri Marshanda</h3>
                    <p>Halo, saya merupakan seorang mahasiswa semester 6 di Sekolah Tinggi Teknik Pati (STTP)</p>
                    <ul class="media d-flex justify-content-evenly align-items-center position-relative">
                      <li><a href="https://github.com/febbyputri" class="d-flex justify-content-evenly align-items-center rounded-circle"><i class="fa-brands fa-github"></i></a></li>
                      <li><a href="https://www.instagram.com/febbyputry_/" class="d-flex justify-content-evenly align-items-center rounded-circle"><i class="fa-brands fa-instagram"></i></a></li>
                      <li><a href="https://www.linkedin.com/in/febby-marshanda-5b3b3a1b1/" class="d-flex justify-content-evenly align-items-center rounded-circle"><i class="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="devCard d-flex justify-content-center align-items-center position-relative">
                <div class="imgBx position-relative">
                  <img src="./images/team/Hadiat.png" alt="Hadiat Abdul Bashit" class="position-absolute">
                </div>
                <div class="profileBx d-flex justify-content-center align-items-center position-relative">
                  <div class="profile">
                    <h3>Hadiat Abdul Bashit</h3>
                    <p>Halo, saya merupakan seorang mahasiswa semester 6 di Politeknik Piksi Ganesha Bandung</p>
                    <ul class="media d-flex justify-content-evenly align-items-center position-relative">
                      <li><a href="https://github.com/HadiatAbdulBashit" class="d-flex justify-content-evenly align-items-center rounded-circle"><i class="fa-brands fa-github"></i></a></li>
                      <li><a href="https://www.instagram.com/" class="d-flex justify-content-evenly align-items-center rounded-circle"><i class="fa-brands fa-instagram"></i></a></li>
                      <li><a href="https://www.linkedin.com/in/hadiat-abdul-bashit-77b03b225/" class="d-flex justify-content-evenly align-items-center rounded-circle"><i class="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="devCard d-flex justify-content-center align-items-center position-relative">
                <div class="imgBx position-relative">
                  <img src="./images/team/Mushlih.png" alt="Mushlih Nur Islam" class="position-absolute">
                </div>
                <div class="profileBx d-flex justify-content-center align-items-center position-relative">
                  <div class="profile">
                    <h3>Mushlih Nur Islam</h3>
                    <p>Halo, saya merupakan seorang mahasiswa semester 6 di Universitas Telkom</p>
                    <ul class="media d-flex justify-content-evenly align-items-center position-relative">
                      <li><a href="https://github.com/MushlihNur" class="d-flex justify-content-evenly align-items-center rounded-circle"><i class="fa-brands fa-github"></i></a></li>
                      <li><a href="https://www.instagram.com/mushlih.nuris/" class="d-flex justify-content-evenly align-items-center rounded-circle"><i class="fa-brands fa-instagram"></i></a></li>
                      <li><a href="https://www.linkedin.com/in/mushlihnurislam" class="d-flex justify-content-evenly align-items-center rounded-circle"><i class="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
          </section>
        `;
  }
}

customElements.define('app-dev-team', AppDevTeam);
