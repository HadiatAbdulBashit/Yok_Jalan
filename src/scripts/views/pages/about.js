import '../../component/app-dev-team';
import '../../component/app-aboutus';

const About = {
  async render() {
    return `
      <app-aboutus></app-aboutus>
      <app-dev-team></app-dev-team>
      <hr>
      <div class='text-center' data-aos="fade-up" data-aos-offset="-900">
        <p id='atribution'>Website ini menggunakan ilustrasi dan gambar dari www.freepik.com, imagekit, wikimedia, idntimes, anekatempatwisata, indonesiakaya, tempo.co, phinemo, getlost, kompas, ilmugeografi, gregmaud, klikkoran, hariansigalang, tripcetera, dirgantaracarrental, koran-jakarta, scmedia, asianews, pikiran-rakyat.</p>
      </div>
      <hr>
    `;
  },

  async afterRender() {},
};

export default About;
