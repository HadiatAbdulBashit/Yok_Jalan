const Home = {
    async render() {
      return `
          <h2 class="">Ini Halaman Home</h2>
          `;
    },
  
    async afterRender() {
      console.log('Ini halaman home');
    },
  };
  
export default Home;