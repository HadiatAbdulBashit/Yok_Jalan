class AppSearch extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
      <div id="search-container" class="search-container" data-aos="fade-down" data-aos-offset="-500">
        <input placeholder="Cari Wisata Disini" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Cari</button>
      </div>
    `;

    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('app-search', AppSearch);
