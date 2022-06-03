class AppCategory extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <div class="d-flex py-2">
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" id="caregory-all" class="btn btn-outline-primary btn-lg px-4 me-sm-3">Semua</button>
            <button type="button" id="caregory-museum" class="btn btn-outline-primary btn-lg px-4 me-sm-3">Museum</button>
            <button type="button" id="caregory-pantai" class="btn btn-outline-primary btn-lg px-4 me-sm-3">Pantai</button>
            <button type="button" id="caregory-gunung" class="btn btn-outline-primary btn-lg px-4 me-sm-3">Gunung</button>
            <button type="button" id="caregory-sejarah" class="btn btn-outline-primary btn-lg px-4 me-sm-3">Tempat Bersejarah</button>
          </div>
        </div>
    `;
  }
}

customElements.define('app-category-bar', AppCategory);
