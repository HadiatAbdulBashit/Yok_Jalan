const About = {
    async render() {
      return `
          <h2 class="">Ini Halaman Tentang Kami</h2>
          `;
    },
  
    async afterRender() {
      console('Ini halaman Tentang Kami');
    },
  };
  
export default About;