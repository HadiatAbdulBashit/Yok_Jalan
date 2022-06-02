import '../../component/app-dev-team';

const About = {
  async render() {
    return `
          <h2 class="">Ini Halaman Tentang Kami</h2>
          <app-dev-team></app-dev-team>
          `;
  },

  async afterRender() {
    console.log('Ini halaman Tentang Kami');
  },
};

export default About;
