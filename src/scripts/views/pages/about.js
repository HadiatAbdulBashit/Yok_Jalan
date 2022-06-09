import '../../component/app-dev-team';
import '../../component/app-aboutus';

const About = {
  async render() {
    return `
          <app-aboutus></app-aboutus>
          <app-dev-team></app-dev-team>
          `;
  },

  async afterRender() {
    console.log('Ini halaman Tentang Kami');
  },
};

export default About;
