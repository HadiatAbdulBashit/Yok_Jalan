class AppCategory extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <div class="nav nav-pills align-items-center">
            Kategori:
            <button type="button" id="caregory-all" class="btn btn-outline-primary px-4 m-2" data-aos="zoom-in" data-aos-offset="-500">Semua</button>
            <button type="button" id="caregory-museum" class="btn btn-outline-primary px-4 m-2" data-aos="zoom-in" data-aos-offset="-500">Museum</button>
            <button type="button" id="caregory-pantai" class="btn btn-outline-primary px-4 m-2" data-aos="zoom-in" data-aos-offset="-500">Pantai</button>
            <button type="button" id="caregory-gunung" class="btn btn-outline-primary px-4 m-2" data-aos="zoom-in" data-aos-offset="-500">Gunung</button>
            <button type="button" id="caregory-sejarah" class="btn btn-outline-primary px-4 m-2" data-aos="zoom-in" data-aos-offset="-500">Tempat Bersejarah</button>
        </div>
    `;
  }
}

customElements.define('app-category-bar', AppCategory);
