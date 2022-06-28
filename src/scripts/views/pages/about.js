import '../../component/app-dev-team';
import '../../component/app-aboutus';

const About = {
  async render() {
    return `
      <app-aboutus></app-aboutus>
      <app-dev-team></app-dev-team>
      <hr>
      <div class='text-center'>
        <p id='atribution'>Website ini menggunakan ilustrasi dan gambar dari www.freepik.com, imagekit, wikimedia, idntimes, anekatempatwisata, indonesiakaya, tempo.co, phinemo, getlost, kompas, ilmugeografi, gregmaud, klikkoran, hariansigalang, tripcetera, dirgantaracarrental, koran-jakarta, scmedia, asianews, pikiran-rakyat.</p>
      </div>
      <hr>
    `;
  },

  async afterRender() {
    console.log('Ini halaman Tentang Kami');
  },
};

export default About;
