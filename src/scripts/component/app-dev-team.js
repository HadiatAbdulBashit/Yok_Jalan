class AppDevTeam extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
          <style>
            .devTeam {
                max-width: 1000px;
                flex-wrap: wrap;
            }

            .devTeam .devTitle {
                min-width: 100%;
                border-bottom: 1px solid rgba(0, 0, 0, 0.3);
            }

            .devTeam .devCard {
                flex-wrap: wrap;
                margin: 100px 0;
            }

            .devTeam .devCard:nth-child(odd) {
                flex-direction: row;
            }

            .devTeam .devCard:nth-child(even) {
                flex-direction: row-reverse;
                text-align: right;
            }

            .devCard .imgBx {
                left: 25px;
                width: 480px;
                height: 400px;
                z-index: 1;
            }

            .devCard:nth-child(even) .imgBx {
                left: -25px;
            }

            .imgBx img {
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .devCard .profileBx {
                right: 25px;
                width: 480px;
                height: 400px;
                background: #7392E1;
                padding: 20px 40px 20px 100px;
            }

            .devCard:nth-child(even) .profileBx {
                right: -25px;
                padding: 20px 100px 20px 40px;
            }

            .devCard .profileBx:before {
                content: '';
                position: absolute;
                top: -50px;
                bottom: -50px;
                left: 0;
                right: 0;
                background: #7392E1;
                z-index: -1;
                border-radius: 10px;
            }

            .profileBx h3 {
                color: #FFF;
            }

            .profileBx p {
                margin-top: 10px;
                color: #FFF;
            }

            .profileBx .media {
                margin-top: 5px;
                padding: 0;
            }

            .media li {
                list-style: none;
                margin: 4px;
            }

            .media li a {
                width: 50px;
                height: 50px;
                font-size: 1.5em;
                color: #FFF;
                text-decoration: none;
                border: 2px solid rgba(255, 255, 255, 0.5);
                transition: .5s;
            }

            .media li a:hover {
                background-color: #FFF;
                color: #7392E1;
            }

            @media screen and (max-width: 1000px) {
                .devTeam .devCard {
                    flex-direction: column;
                    max-width: 300px;
                    margin: 25px;
                }
            
                .devTeam .devCard .imgBx {
                    width: 80%;
                    height: 250px;
                    left: 0;
                }
            
                .devTeam .devCard .profileBx {
                    width: 100%;
                    height: auto;
                    right: 0;
                    padding: 30px;
                    text-align: center;
                    border-radius: 10px;
                }
            
                .devTeam .devCard .profileBx:before {
                    border-radius: 10px;
                    bottom: 0;
                }
            
                .profileBx p,
                .profileBx .media {
                    font-size: 13px;
                }
            }
          </style>
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
