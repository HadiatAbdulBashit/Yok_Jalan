class AppFooter extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <footer class="text-center text-white p-3 bg-footer shadow">
          <p class="m-2">Copyright © 2022 <span class="fw-bold">Yok Jalan</span></p>
        </footer>
      `;
  }
}

customElements.define('app-footer', AppFooter);
