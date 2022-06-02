import '../../component/app-dev-card';

const About = {
  async render() {
    return `
          <h2 class="">Ini Halaman Tentang Kami</h2>
          <app-dev-card></app-dev-card>
          `;
  },

  async afterRender() {
    console.log('Ini halaman Tentang Kami');
  },
};

export default About;
