class HeroInner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h1 class="hero_title">Bbokari</h1>
      <p class="hero_tagline">Restaurant No 1 di dalam hatimu</p>
      `;
  }
}

customElements.define('hero-inner', HeroInner);
