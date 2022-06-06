class AppDevTeam extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
          <style>
            .devCard {
                border: 3px solid #7392E1;
                border-radius: 20px;
            }
            
            .photos-img{
                width: 100px;
                height: 100px;
                object-fit: cover;
                background: rgba(106, 180, 222, 0.67);
            }
            
            .name {
                display: inline;
                width: max-content;
                border-bottom: 3px solid #288CC5;
            }
            
            .media{
                gap: 8px;
            }
            
            .media a{
                border: 3px solid #00A3FF;
                font-size: 27px;
            }
            
            .media a:hover {
                background-color: #00A3FF;
                color: #FFFFFF;
            }

            .media i {
                padding: 12px;
            }
          </style>
          <section id="devTeam">
             <div class="row pt-5 pb-3 mb-3 mt-5 text-center border-bottom">
                 <div class="col">
                     <h2>Tim Kami</h2>
                 </div>
             </div>
             <div class="row d-flex justify-content-evenly">
                 <div class="col-md-5 col-10 m-3 text-center">
                     <div class="devCard mb-5 p-3">
                         <div class="d-flex p-2 justify-content-center">
                             <img src="./images/team/Putri.png" class="rounded-circle photos-img" alt="Putri Nur Aini Mahfudz">
                         </div>
                         <h3 class="name">Putri Nur Aini Mahfudz</h3>
                         <p class="mt-3">Halo, saya merupakan seorang mahasiswa semester 6 di Universitas Duta Bangsa Surakarta</p>
                         <div class="d-flex flex-row justify-content-evenly align-items-center pt-3 my-4 media">
                             <a href="https://github.com/putrinamahfudz" class="rounded-circle">
                                 <i class="fa-brands fa-github"></i>
                             </a>
                             <a href="https://www.instagram.com/putputri19/" class="rounded-circle">
                                  <i class="fa-brands fa-instagram"></i>
                             </a>
                             <a href="https://www.linkedin.com/in/putrinamahfudz/" class="rounded-circle">
                                 <i class="fa-brands fa-linkedin"></i>
                             </a>
                         </div>
                     </div>
                 </div>
                 <div class="col-md-5 col-10 m-3 text-center">
                     <div class="devCard mb-5 p-3">
                         <div class="d-flex p-2 justify-content-center">
                             <img src="./images/team/Febby.png" class="rounded-circle photos-img" alt="Febby Putri Marshanda">
                         </div>
                         <h3 class="name">Febby Putri Marshanda</h3>
                         <p class="mt-3">Halo, saya merupakan seorang mahasiswa semester 6 di Sekolah Tinggi Teknik Pati (STTP)</p>
                         <div class="d-flex flex-row justify-content-evenly align-items-center pt-3 my-4 media">
                             <a href="https://github.com/febbyputri" class="rounded-circle">
                                 <i class="fa-brands fa-github"></i>
                             </a>
                             <a href="https://www.instagram.com/febbyputry_/" class="rounded-circle">
                                 <i class="fa-brands fa-instagram"></i>
                             </a>
                             <a href="https://www.linkedin.com/in/febby-marshanda-5b3b3a1b1/" class="rounded-circle">
                                 <i class="fa-brands fa-linkedin"></i>
                             </a>
                         </div>
                     </div>
                 </div>
             </div>
             <div class="row d-flex justify-content-evenly">
                 <div class="col-md-5 col-10 m-3 text-center">
                     <div class="devCard mb-5 p-3">
                         <div class="d-flex p-2 justify-content-center">
                             <img src="./images/team/Hadiat.png" class="rounded-circle photos-img" alt="Hadiat Abdul Bashit">
                         </div>
                         <h3 class="name">Hadiat Abdul Bashit</h3>
                         <p class="mt-3">Halo, saya merupakan seorang mahasiswa semester 6 di Politeknik Piksi Ganesha Bandung</p>
                         <div class="d-flex flex-row justify-content-evenly align-items-center pt-3 my-4 media">
                             <a href="https://github.com/HadiatAbdulBashit" class="rounded-circle">
                                 <i class="fa-brands fa-github"></i>
                             </a>
                             <a href="https://www.instagram.com/" class="rounded-circle">
                                  <i class="fa-brands fa-instagram"></i>
                             </a>
                             <a href="https://www.linkedin.com/in/hadiat-abdul-bashit-77b03b225/" class="rounded-circle">
                                 <i class="fa-brands fa-linkedin"></i>
                             </a>
                         </div>
                     </div>
                 </div>
                 <div class="col-md-5 col-10 m-3 text-center">
                     <div class="devCard mb-5 p-3">
                         <div class="d-flex p-2 justify-content-center">
                             <img src="./images/team/Mushlih.png" class="rounded-circle photos-img" alt="Mushlih Nur Islam">
                         </div>
                         <h3 class="name">Mushlih Nur Islam</h3>
                         <p class="mt-3">Halo, saya merupakan seorang mahasiswa semester 6 di Universitas Telkom</p>
                         <div class="d-flex flex-row justify-content-evenly align-items-center pt-3 my-4 media">
                             <a href="https://github.com/MushlihNur" class="rounded-circle">
                                 <i class="fa-brands fa-github"></i>
                             </a>
                             <a href="https://www.instagram.com/mushlih.nuris/" class="rounded-circle">
                                  <i class="fa-brands fa-instagram"></i>
                             </a>
                             <a href="https://www.linkedin.com/in/mushlihNurIslam" class="rounded-circle">
                                 <i class="fa-brands fa-linkedin"></i>
                             </a>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
        `;
  }
}

customElements.define('app-dev-team', AppDevTeam);
