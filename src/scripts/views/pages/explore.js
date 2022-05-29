const Explore = {
    async render() {
      return `
          <h2 class="">Ini Halaman Jelajah</h2>
          `;
    },
  
    async afterRender() {
      console('Ini halaman Jelajah');
    },
  };
  
export default Explore;