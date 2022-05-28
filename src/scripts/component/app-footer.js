class AppFooter extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <footer>
          <p>Copyright © 2022 - Yok Jalan</p>
        </footer>
      `;
  }
}

customElements.define('app-footer', AppFooter);
