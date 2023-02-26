import Footer from '@/components/Footer';
import HeaderPanel from '@/components/Header/HeaderContent';
import MainNavbar from '@/components/Navbar';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={
      <Meta title="loophealth - Editorial Policy" 
      description="loophealth - Editorial Policy" />}>
      <MainNavbar />
      <HeaderPanel title="Kebijakan Editorial"/>
      <div className="mx-auto flex flex-col py-20 lg:px-24 md:px-16 sm:px-8 px-8 mb-40 font-light text-sm md:text-md xl:text-xl lg:text-lg">
        
          Tim Loop Health menyaring konten sesuai kebutuhan pengguna, berdasarkan informasi dan perkembangan terkini di dunia medis, terutama perihal diabetes tipe-2. Layanan konsultasi di Loop Health bertujuan membantu pengguna untuk mengelola kondisi diabetes tipe-2 dan kondisi kesehatan secara keseluruhan.<br/><br/>

          Untuk tujuan tersebut, tim Loop Health mengolah informasi menjadi konten yang mudah dipahami oleh masyarakat pada umumnya, tanpa mengurangi esensi penting dari informasi tersebut.<br/><br/>

          <span className="font-bold mb-4">Kualitas Layanan dan Konten</span>
          Konten serta informasi dalam sesi konsultasi yang dihadirkan oleh Loop Health telah melalui proses penyuntingan, dari segi fakta dan bahasa, termasuk tinjauan dari ahli gizi Loop Health.<br/><br/>

          <span className="font-bold mb-4">Objektivitas</span>
          Loop Health menyajikan konten dengan referensi tepercaya di dunia medis, untuk menjaga kredibilitas serta objektivitas.<br/><br/>

          <span className="font-bold mb-4">Prinsip</span>
          Loop Health memegang prinsip-prinsip jurnalisme dalam menyajikan setiap konten yang diterbitkan. Termasuk di dalamnya adalah menggunakan referensi-referensi yang kredibel di dunia medis.<br/>
      </div>
      <Footer />
  </Main>
);

export default About;
