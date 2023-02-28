import Footer from '@/components/Footer';
import HeaderPanel from '@/components/Header/HeaderContent';
import MainNavbar from '@/components/Navbar';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta 
    title="Loop Health - Disclaimer" 
  description="Loop Health - Disclaimer"/>}>
      <MainNavbar />
      <HeaderPanel title="Disclaimer"/>
      <div className="mx-auto flex flex-col py-20 lg:px-24 md:px-16 sm:px-8 px-8 font-light text-sm md:text-md xl:text-xl lg:text-lg">
          Platform ini dimiliki dan dikelola oleh PT Loop Health Indonesia Anda bisa merujuk kepada isi di dalamnya untuk kebutuhan Anda dan mengunduhnya, hanya untuk kepentingan pribadi. Anda tidak diperkenankan untuk memodifikasi dan membagikannya untuk tujuan komersial. 
          Termasuk di dalamnya adalah ikon, logo, foto, maupun ilustrasi, tanpa izin tertulis dari PT Loop Health Indonesia. <br/><br/><br/>

          Platform Loop Health menghubungkan Anda sebagai pengguna dengan ahli gizi yang memiliki Surat Tanda Registrasi. Ahli gizi akan memberikan layanan konsultasi dan rekomendasi, tanpa saran maupun tindakan medis di luar keahliannya. 
          Dengan demikian, Anda diharapkan juga tidak mengharapkan maupun meminta saran maupun tindakan medis. Untuk dipahami, setiap artikel dari Loop Health bukanlah pengganti konsultasi dengan para ahli. <br/><br/><br/>

          Platform Loop Health tidak memberikan diagnosis medis maupun rekomendasi obat dan perawatan untuk Anda. Rekomendasi dari ahli gizi melalui konsultasi bertujuan untuk memberikan informasi, bukan pengganti diagnosis, 
          rekomendasi medis, maupun tindakan medis apa pun. Anda berhak mencari rekomendasi di luar yang diberikan ahli gizi melalui layanan konsultasi Loop Health. Meski demikian, 
          Anda diharapkan mempertimbangkan setiap informasi dari ahli gizi Loop Health. <br/><br/><br/>

          Informasi yang diberikan oleh ahli gizi Loop Health dapat berbeda-beda untuk setiap pengguna. Program yang dirancang dan dihadirkan melalui platform Loop Health untuk pengguna juga akan memberikan efektivitas yang berbeda, tergantung kondisi pengguna. <br/><br/><br/>

          PT Loop Health Indonesia tidak memiliki tanggung jawab atas kerugian yang ditimbulkan akibat penggunaan platform ini. Dengan memakai platform ini, Anda telah menyetujui Syarat dan Ketentuan yang berlaku. Platform ini mungkin akan mengalami pengembangan dan 
          penyempurnaan di kemudian hari, dengan memasukkan isi dari sumber lain, dan PT Loop Health Indonesia tidak bertanggung jawab atas isi dari sumber lain tersebut. <br/><br/><br/>

          Syarat dan Ketentuan dari platform ini dapat direvisi tanpa pemberitahuan terhadap pengguna. Revisi tersebut semata-mata bertujuan untuk meningkatkan pengalaman Anda dalam menggunakan platform ini. Namun, perubahan tersebut tetap mengikat Anda sebagai pengguna. Dengan demikian, Anda diharapkan membaca Syarat dan Ketentuan secara berkala.
      </div>
      <Footer />
  </Main>
);

export default About;
