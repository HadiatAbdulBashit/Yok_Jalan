const Favorite = {
    async render() {
      return `
          <h2 class="">Ini Halaman Favorit</h2>
          `;
    },
  
    async afterRender() {
      console('Ini halaman Favorit');
    },
  };
  
export default Favorite;