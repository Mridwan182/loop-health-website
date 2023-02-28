import Footer from '@/components/Footer';
import HeaderPanel from '@/components/Header/HeaderContent';
import JourneyAbout from '@/components/JourneyAbout';
import MainNavbar from '@/components/Navbar';
import Vision from '@/components/Vision';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="Loop Health - About" 
        description="Loop adalah aplikasi manajemen diabetes yang dirancang oleh sekelompok individu yang terinspirasi untuk mengatasi kurangnya akses ke tutorial harian sederhana bagi orang yang hidup dengan diabetes. Platform kami yang mudah digunakan memberikan akses ke sumber daya, pelatihan personal, dan real-time feedback dari para ahli kesehatan untuk memudahkan pengelolaan diabetes" />}>
      <MainNavbar />
        
        
          <JourneyAbout/>
          <Footer />
     
     
  </Main>
);

export default About;
