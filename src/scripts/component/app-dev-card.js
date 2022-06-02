class AppDevCard extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
          <style>
            .bg-footer {
              background-color: #00C2FF;
            }
          </style>
          <section>
            <h2>Tim Kami</h2>
          </section>
        `;
  }
}

customElements.define('app-dev-card', AppDevCard);
