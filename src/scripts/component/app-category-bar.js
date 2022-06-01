class AppCategory extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <div class="d-flex py-2">
            <ul class="nav nav-pills ps-1">
                <li class="nav-item p-1"><a href="/#/explore/all" class="nav-link bg-secondary text-white">Semua</a></li>
                <li class="nav-item p-1"><a href="/#/explore/museum" class="nav-link bg-secondary text-white">Museum</a></li>
                <li class="nav-item p-1"><a href="/#/explore/pantai" class="nav-link bg-secondary text-white">Pantai</a></li>
                <li class="nav-item p-1"><a href="/#/explore/gunung" class="nav-link bg-secondary text-white">Gunung</a></li>
                <li class="nav-item p-1"><a href="/#/explore/sejarah" class="nav-link bg-secondary text-white">Tempat Bersejarah</a></li>
            </ul>
        </div>
    `;
  }
}

customElements.define('app-category-bar', AppCategory);
