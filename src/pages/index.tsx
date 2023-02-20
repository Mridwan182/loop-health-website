import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import MainNavbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Service from '@/components/Service';
import Journey from '@/components/Journey';
import StartNow from '@/components/StartNow';
import Footer from '@/components/Footer';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
       <MainNavbar />
      <Hero />  
      <Service/> 
      <Journey /> 
      <StartNow />
      <Footer/>
    </Main>
  );
};

export default Index;
