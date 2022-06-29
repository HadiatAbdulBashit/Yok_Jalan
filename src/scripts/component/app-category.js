class AppCategory extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <div class="row row-cols-1 row-cols-sm-2 g-3 pt-5">
            <div class="col" data-aos="fade-down-right">
                <div class="card shadow-sm m-2">
                    <a href="/#/explore">
                        <img class="bd-placeholder-img item-image" width="100%" height="200" src="https://ik.imagekit.io/tvlk/blog/2020/01/wisata-edukasi-di-Indonesia-10-Wikipedia.jpg?tr=dpr-1,w-675" alt="Museum">
                    </a>
                </div>
            </div>
            <div class="col" data-aos="fade-down-left">
                <div class="card shadow-sm m-2">
                    <a href="/#/explore">
                        <img class="bd-placeholder-img item-image" width="100%" height="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pandawa_Beach%2C_Kuta_Selatan_-_Bali.jpg/1024px-Pandawa_Beach%2C_Kuta_Selatan_-_Bali.jpg" alt="Pantai">
                    </a>
                </div>
            </div>
            <div class="col" data-aos="fade-up-right">
                <div class="card shadow-sm m-2">
                    <a href="/#/explore">
                        <img class="bd-placeholder-img item-image" width="100%" height="200" src="https://statik.tempo.co/data/2019/05/21/id_843378/843378_720.jpg" alt="Gunung">
                    </a>
                </div>
            </div>
            <div class="col" data-aos="fade-up-left">
                <div class="card shadow-sm m-2">
                    <a href="/#/explore">
                        <img class="bd-placeholder-img item-image" width="100%" height="200" src="https://dirgantaracarrental.com/wp-content/uploads/2020/10/gedung-sate1.jpg" alt="Tempat Bersejarah">
                    </a>
                </div>
            </div>
        </div>
      `;
  }
}

customElements.define('app-category', AppCategory);
