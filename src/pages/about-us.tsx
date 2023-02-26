import Footer from '@/components/Footer';
import HeaderPanel from '@/components/Header/HeaderContent';
import JourneyAbout from '@/components/JourneyAbout';
import MainNavbar from '@/components/Navbar';
import Vision from '@/components/Vision';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="Loophealth - About" 
        description="About Loophealth" />}>
      <MainNavbar />
        
        
          <JourneyAbout/>
          <Footer />
     
     
  </Main>
);

export default About;
